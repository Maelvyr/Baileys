# Soak en Docker

## Imagen

```bash
cd /opt/baileys-wasm
docker build -f docker/soak/Dockerfile -t baileys-wasm-soak:local .
```

## Servicios

```bash
install -m 644 deploy/soak/baileys-wasm-soak.service /etc/systemd/system/
install -m 644 deploy/soak/baileys-soak-capture.service /etc/systemd/system/
systemctl daemon-reload
systemctl start baileys-soak-capture
systemctl start baileys-wasm-soak
```

La captura usa `-s 80`: solo cabeceras IP/TCP y el encabezado TLS, sin payload
de aplicación. Los archivos rotan en `/var/log/baileys-soak/capture.pcap*`.

El contenedor usa la red del host, monta el auth de prueba y escribe logs al
journal con el tag `baileys-wasm-soak`:

```bash
journalctl -t baileys-wasm-soak -n 80 --no-pager -o cat
```

## Captura automatica de un 1006

`baileys-1006-watch.service` escucha el journal y, cuando aparece un close
1006, copia los pcap y las ultimas 500 lineas a
`/var/log/baileys-soak/evidence/<timestamp>/`.

```bash
install -m 644 deploy/soak/baileys-1006-watch.service /etc/systemd/system/
systemctl daemon-reload
systemctl enable --now baileys-1006-watch
```

El watcher ejecuta `analyze-capture.sh` sobre la evidencia copiada. El resumen
queda en `network/summary.txt` y los FIN/RST en
`network/tcp-close-flags.txt`, siempre sin payload.

Ademas, `network/flows.tsv` resume cada flujo con paquetes, duracion y banderas SYN/FIN/RST.
