# mtls

## Purpose
Note: NODE_EXTRA_CA_CERTS is automatically handled by Node.js at runtime

## Imports
- **Stdlib**: https, https, lodash-es/memoize.js, tls, undici
- **Internal**: ./caCerts.js, ./debug.js, ./fsOperations

## Items

### getWebSocketTLSOptions
**Type**: Function

### getTLSFetchOptions
**Type**: Function

### clearMTLSCache
**Type**: Function

### configureGlobalMTLS
**Type**: Function

### MTLSConfig
**Type**: Type alias

### TLSConfig
**Type**: Type alias

## Exports
- MTLSConfig
- TLSConfig
- getMTLSConfig
- getMTLSAgent
- getWebSocketTLSOptions
- getTLSFetchOptions
- clearMTLSCache
- configureGlobalMTLS

## Source
`mtls.ts`