#!/bin/sh
set -eu

log_dir=/var/log/baileys-soak
evidence_dir="$log_dir/evidence"
mkdir -p "$evidence_dir"

journalctl -t baileys-wasm-soak -f -o cat | while IFS= read -r line; do
	case "$line" in
		*'"closeCode":1006'*)
			ts=$(date -u +%Y%m%dT%H%M%SZ)
			out="$evidence_dir/$ts"
			mkdir -p "$out"
			cp "$log_dir"/capture.pcap* "$out"/ 2>/dev/null || true
			journalctl -t baileys-wasm-soak -n 500 --no-pager -o cat >"$out/soak.log"
			printf '%s\n' "$line" >"$out/close.json"
			/opt/baileys-wasm/deploy/soak/analyze-capture.sh "$out" >>"$out/analysis.log" 2>&1 || true
			printf 'captured %s\n' "$out"
			;;
	esac
done
