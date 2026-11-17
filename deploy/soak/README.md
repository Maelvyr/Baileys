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
