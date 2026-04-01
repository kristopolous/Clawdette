# utils/proxy

## Purpose
Provides proxy configuration utilities for HTTP/HTTPS requests.

## Imports
- **Stdlib**: `dns`, `http`
- **External**: `axios`, `https-proxy-agent`, `lodash-es/memoize`, `undici`
- **Internal**: caCerts, debug, envUtils, mtls

## Logic
1. `keepAliveDisabled` - flag to disable fetch keep-alive after stale-pool ECONNRESET
2. `disableKeepAlive` - disables keep-alive for process lifetime
3. `_resetKeepAliveForTesting` - resets keep-alive for testing
4. `getAddressFamily` - converts dns.LookupOptions.family to numeric (0|4|6)
5. Handles: 0, 4, 6, 'IPv4', 'IPv6', undefined
6. `getProxyUrl` - gets active proxy URL from env vars
7. Prefers lowercase: https_proxy > HTTPS_PROXY > http_proxy > HTTP_PROXY
8. `getNoProxy` - gets NO_PROXY env var value
9. `shouldBypassProxy` - checks if URL should bypass proxy based on NO_PROXY
10. Supports exact hostname matches, domain suffixes, IP addresses, CIDR notation
11. `getProxyAgent` - creates proxy agent for requests
12. `getAWSClientProxyConfig` - gets proxy config for AWS client
13. `configureGlobalAgents` - configures global proxy agents
14. `getProxyFetchOptions` - gets fetch options with proxy
15. `getCACertificates` - gets CA certificates
16. `getMTLSAgent`, `getMTLSConfig`, `getTLSFetchOptions` - mTLS functions
17. `TLSConfig` - TLS configuration type

## Exports
- `disableKeepAlive` - disables keep-alive
- `_resetKeepAliveForTesting` - resets for testing
- `getAddressFamily` - gets address family
- `getProxyUrl` - gets proxy URL
- `getNoProxy` - gets NO_PROXY
- `shouldBypassProxy` - checks bypass
- `getProxyAgent` - creates proxy agent
- `getAWSClientProxyConfig` - gets AWS proxy config
- `configureGlobalAgents` - configures global agents
- `getProxyFetchOptions` - gets fetch options
- (Proxy configuration functions)
