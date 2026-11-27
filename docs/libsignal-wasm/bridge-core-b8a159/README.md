# Bridge WASM contra core b8a159

Actualización del bridge de PR #2067 para el core actual de
`oxidezap/whatsapp-rust`.

```text
Core:  b8a159749573570668af02c55ecffc2493e59aad
Base:  WhiskeySockets/Baileys PR #2067, head 3a788d3d
Build: npx wasm-pack build --target web --out-dir pkg --no-pack --no-opt
```

El parche `source.patch` contiene los cambios de API necesarios:

- `core::curve` → `core`;
- nuevos errores de `CurveError`;
- `KeyPair::new` en lugar de `from_public_and_private`;
- `SignedPreKeyRecord::new` con `Result`;
- eliminación del cache de verificación que el core nuevo ya no expone.

El `Cargo.lock` actualizado se guarda junto al parche para reproducir el build.
El artefacto generado está en `vendor/whatsapp-rust-bridge/pkg/` y sus hashes
en `vendor/whatsapp-rust-bridge/SHA256SUMS`.
