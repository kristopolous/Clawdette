# init

## Purpose
Main initialization module that bootstraps Claudette, configuring telemetry, network settings, OAuth, and remote managed settings.

## Imports
- **Stdlib**: `fs`, `path`, `child_process`, `util`
- **External**: `lodash-es/memoize`, `@opentelemetry/api`
- **Internal**: 
  - `./bootstrap/state` - session state and counters
  - `./services/lsp/manager` - LSP server management
  - `./services/oauth/client` - OAuth account info
  - `./services/policyLimits/index` - policy limits
  - `./services/remoteManagedSettings/index` - remote managed settings
  - `./utils/apiPreconnect` - Anthropic API preconnection
  - `./utils/caCertsConfig` - CA certificates
  - `./utils/cleanupRegistry` - cleanup handlers
  - `./utils/config` - configuration system
  - `./utils/debug` - debug logging
  - `./utils/detectRepository` - GitHub repository detection
  - `./utils/gracefulShutdown` - graceful shutdown
  - `./utils/managedEnv` - environment variables
  - `./utils/mtls` - mTLS configuration
  - `./utils/proxy` - HTTP proxy
  - `../utils/telemetry/*` - telemetry and tracing
  - `./utils/windowsPaths` - Windows shell setup

## Logic
1. **Configuration Initialization**: Enable configs and apply safe environment variables before trust dialog
2. **CA Certificates**: Apply NODE_EXTRA_CA_CERTS fromsettingson before any TLS connections
3. **Graceful Shutdown**: Set up cleanup handlers for process exit
4. **Event Logging**: Initialize 1P event logging and GrowthBook refresh handling
5. **OAuth**: Populate OAuth account info for VSCode extension login
6. **JetBrains Detection**: Initialize IDE detection asynchronously
7. **Remote Settings**: Initialize remote managed settings and policy limits loading promises
8. **Network Configuration**: Configure global mTLS, HTTP agents, and API preconnection
9. **Upstream Proxy**: For CCR mode, start local CONNECT relay with credential injection
10. **Scratchpad**: Create scratchpad directory if enabled
11. **Telemetry**: Deferred initialization via `initializeTelemetryAfterTrust()` after user trust is granted

## Exports
- `init` - memoized async function that runs all initialization steps
- `initializeTelemetryAfterTrust` - initializes OpenTelemetry telemetry after trust dialog acceptance
