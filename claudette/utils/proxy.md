# proxy

## Purpose
@aws-sdk/credential-provider-node and @smithy/node-http-handler are imported

## Imports
- **Stdlib**: axios, dns, http, https-proxy-agent, lodash-es/memoize.js, undici
- **Internal**: ./caCerts.js, ./debug.js, ./envUtils.js

## Items

### disableKeepAlive
**Type**: Function

### _resetKeepAliveForTesting
**Type**: Function

### getAddressFamily
**Type**: Function

### getProxyUrl
**Type**: Function

### getNoProxy
**Type**: Function

### shouldBypassProxy
**Type**: Function

### createHttpsProxyAgent
**Type**: Function

### createAxiosInstance
**Type**: Function

### getWebSocketProxyAgent
**Type**: Function

### getWebSocketProxyUrl
**Type**: Function

### getProxyFetchOptions
**Type**: Function

### configureGlobalAgents
**Type**: Function

### getAWSClientProxyConfig
**Type**: Function

### clearProxyCache
**Type**: Function

### EnvLike
**Type**: Type alias

## Exports
- disableKeepAlive
- _resetKeepAliveForTesting
- getAddressFamily
- getProxyUrl
- getNoProxy
- shouldBypassProxy
- createAxiosInstance
- getProxyAgent
- getWebSocketProxyAgent
- getWebSocketProxyUrl
- getProxyFetchOptions
- configureGlobalAgents
- getAWSClientProxyConfig
- clearProxyCache

## Source
`proxy.ts`