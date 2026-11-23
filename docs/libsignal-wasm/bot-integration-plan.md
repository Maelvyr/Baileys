# Integración futura de Bot-2.0 (no aplicar todavía)

Esta nota deja exacto el cambio mínimo que necesitará Bot-2.0 cuando se
autorice el rollout. **No se toca el código del Bot en esta rama.**

## Paquete

```text
@synapse-ve/baileys@7.0.0-rc14.wasm.1
dist-tag: wasm (pendiente de publicar)
```

## Dependencia del Bot

```diff
-"@whiskeysockets/baileys": "npm:@synapse-ve/baileys@7.0.0-rc14.sync.30",
+"@whiskeysockets/baileys": "npm:@synapse-ve/baileys@7.0.0-rc14.wasm.1",
```

## Carga del bridge

El paquete incluye `vendor/whatsapp-rust-bridge`. En Node 24:

```ts
import { readFileSync } from 'node:fs'
import * as bridge from '@synapse-ve/baileys/vendor/whatsapp-rust-bridge/pkg/whatsapp_rust_bridge.js'

bridge.initSync({
  module: readFileSync(
    'node_modules/@synapse-ve/baileys/vendor/whatsapp-rust-bridge/pkg/whatsapp_rust_bridge_bg.wasm'
  )
})
```

## Selección de backend

Mantener legacy como default y WASM solo con flag:

```ts
const useWasm = process.env.BAILEYS_BACKEND === 'wasm'

const sock = makeWASocket({
  auth: state,
  // ...
  ...(useWasm
    ? { makeSignalRepository: makeWasmSignalRepositoryFactory(bridge) }
    : {})
})
```

## Rollback

```text
BAILEYS_BACKEND=legacy
```

Las sesiones escritas por WASM se proyectan al formato legacy; el rollback vivo
se validó en el VPS con el auth existente.

## Puertas antes de tocar el Bot

1. Soak de 72 h con el core actual.
2. Comparación 1006/503 contra la campaña anterior.
3. Pruebas de media, retry, LID/PN y multi-dispositivo.
4. Paquete experimental instalado desde tarball.
5. Autorización explícita para staging/canary.
