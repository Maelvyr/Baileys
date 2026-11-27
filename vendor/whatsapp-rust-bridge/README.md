# Bridge WASM vendorizado

Artefacto de Fase 1 para validar el adaptador sin depender de una compilacion
Rust en cada job de CI.

- Fuente: `WhiskeySockets/Baileys` PR #2067, head `3a788d3d6dae1016e925ce95c2650f19c1208ebb`
- Paquete: `packages/whatsapp-rust-bridge`
- Core: `oxidezap/whatsapp-rust@b8a159749573570668af02c55ecffc2493e59aad` (main, 23/11/2026)
- Build: `npx wasm-pack build --target web --out-dir pkg --no-pack --no-opt`
- Rust: nightly-2026-01-30, wasm32-unknown-unknown
- Parche de adaptación: `docs/libsignal-wasm/bridge-core-b8a159/source.patch`

No se publica ni se usa como dependencia de produccion hasta que el adaptador
este integrado y probado. Es un artefacto de investigacion de la rama
`feat/libsignal-wasm`.
