# utils/mtls

## Purpose
Manages mutual TLS (mTLS) configuration for HTTPS, WebSocket, and fetch connections using client certificates, keys, and CA certificates loaded from environment variables.

## Imports
- **Stdlib**: `https`, `tls`
- **External**: `lodash-es/memoize.js`, `undici`
- **Internal**: `./caCerts.js`, `./debug.js`, `./fsOperations.js`

## Logic
1. `MTLSConfig` type: `{ cert?, key?, passphrase? }` — client certificate configuration
2. `TLSConfig` type: extends `MTLSConfig` with optional `ca` field for CA certificates
3. `getMTLSConfig()` — memoized; reads from env vars: `CLAUDE_CODE_CLIENT_CERT`, `CLAUDE_CODE_CLIENT_KEY`, `CLAUDE_CODE_CLIENT_KEY_PASSPHRASE`; reads cert/key files from disk via `getFsImplementation().readFileSync`; returns `undefined` if no env vars set
4. `getMTLSAgent()` — memoized; creates an `https.Agent` with mTLS + CA cert options and `keepAlive: true`; returns `undefined` if neither mTLS nor CA certs configured
5. `getWebSocketTLSOptions()` — returns `tls.ConnectionOptions` for WebSocket connections combining mTLS config and CA certs
6. `getTLSFetchOptions()` — returns TLS config for undici fetch; on Bun, returns `{ tls: tlsConfig }`; on Node, creates a lazy-loaded undici `Agent` with TLS connect options and `pipelining: 1`
7. `clearMTLSCache()` — clears the memoization caches for `getMTLSConfig` and `getMTLSAgent`
8. `configureGlobalMTLS()` — logs when `NODE_EXTRA_CA_CERTS` is detected (Node.js handles this automatically)

## Exports
- `MTLSConfig` — type for client cert/key/passphrase config
- `TLSConfig` — type extending MTLSConfig with CA certs
- `getMTLSConfig()` — memoized; loads mTLS config from env vars
- `getMTLSAgent()` — memoized; creates HTTPS agent with mTLS + CA certs
- `getWebSocketTLSOptions()` — returns TLS options for WebSocket connections
- `getTLSFetchOptions()` — returns TLS config for undici fetch (Bun vs Node)
- `clearMTLSCache()` — clears memoization caches
- `configureGlobalMTLS()` — logs NODE_EXTRA_CA_CERTS detection
