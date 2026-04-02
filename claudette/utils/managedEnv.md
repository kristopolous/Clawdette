# managedEnv

## Purpose
Applies environment variables from settings to process.env with security filtering. Captures CCD spawn-env snapshot to prevent settings from overriding host-operational vars. Two-phase apply: safe vars before trust dialog, all vars after trust established.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: ../services/remoteManagedSettings/syncCache (isRemoteManagedSettingsEligible), ./caCerts (clearCACertsCache), ./config (getGlobalConfig), ./envUtils (isEnvTruthy), ./managedEnvConstants (isProviderManagedEnvVar, SAFE_ENV_VARS), ./mtls (clearMTLSCache), ./proxy (clearProxyCache, configureGlobalAgents), ./settings/constants (isSettingSourceEnabled), ./settings/settings (getSettings_DEPRECATED, getSettingsForSource)

## Logic
1. **SSH tunnel var stripping** — `withoutSSHTunnelVars` removes ANTHROPIC_UNIX_SOCKET and related auth placeholders when `claude ssh` remote mode is active, preventing settings from clobbering forwarded socket auth.
2. **Host-managed provider var stripping** — `withoutHostManagedProviderVars` removes provider-selection/model-default vars when `CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST` is set, preventing user settings from redirecting requests away from host-configured provider.
3. **CCD spawn-env snapshot** — `ccdSpawnEnvKeys` captures env keys present at first call (once). `withoutCcdSpawnEnvKeys` prevents settings from overriding these (e.g., OTEL_LOGS_EXPORTER=console would corrupt stdio JSON-RPC transport).
4. **Filter composition** — `filterSettingsEnv` composes all three strip filters: SSH tunnel → host-managed → CCD spawn-env.
5. **Safe apply (pre-trust)** — `applySafeConfigEnvironmentVariables` captures spawn-env snapshot, applies global config and trusted sources (userSettings, flagSettings, policySettings) through filterSettingsEnv, computes remote-managed-settings eligibility, then applies only SAFE_ENV_VARS from the fully-merged settings (including project-scoped sources).
6. **Full apply (post-trust)** — `applyConfigEnvironmentVariables` applies ALL env vars from global config and merged settings through filterSettingsEnv, then clears CA/MTLS/proxy caches and reconfigures global agents to pick up new env.

## Exports
- `applySafeConfigEnvironmentVariables()` — Applies env vars from trusted sources before trust dialog. Captures CCD spawn-env keys on first call. Applies ALL vars from trusted sources (user/flag/policy settings) but only SAFE_ENV_VARS from project-scoped sources. Computes remote-managed-settings eligibility between non-policy and policy env application.
- `applyConfigEnvironmentVariables()` — Applies ALL env vars from settings after trust is established. Clears CA/MTLS/proxy caches and reconfigures global agents. May apply dangerous vars like LD_PRELOAD, PATH, etc.

## Source
`managedEnv`
