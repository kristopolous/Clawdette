# managedEnvConstants

## Purpose
Defines which environment variables are managed by the inference provider host (and must not be overridden by user settings) and which settings are safe to apply before the trust dialog vs. dangerous (could redirect traffic or execute code).

## Imports
- (none)

## Logic
1. **Provider-managed env vars** — `PROVIDER_MANAGED_ENV_VARS` is a Set of env var names that control inference routing (provider selection, endpoints, regions, auth, model defaults). When `CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST` is set in spawn env, these are stripped from settings-sourced env so user settings can't override host routing.
2. **Prefix matching** — `PROVIDER_MANAGED_ENV_PREFIXES` handles per-model Vertex region overrides (`VERTEX_REGION_CLAUDE_*`) via prefix match to avoid drift on each model release.
3. **Dangerous shell settings** — `DANGEROUS_SHELL_SETTINGS` lists settings that can execute arbitrary shell code (apiKeyHelper, awsAuthRefresh, etc.).
4. **Safe env vars** — `SAFE_ENV_VARS` is the source-of-truth Set of env vars safe to apply before trust dialog. Anything NOT in this list is dangerous and triggers a security dialog when set via remote managed settings. Dangerous categories include: redirect to attacker-controlled server (base URLs, proxies, OTEL endpoints), trust attacker-controlled server (TLS settings), and switch to attacker-controlled project (API keys, tokens).

## Exports
- `isProviderManagedEnvVar(key)` — Returns true if the env var is provider-managed (exact match or prefix match). Case-insensitive.
- `DANGEROUS_SHELL_SETTINGS` — Readonly array: ['apiKeyHelper', 'awsAuthRefresh', 'awsCredentialExport', 'gcpAuthRefresh', 'otelHeadersHelper', 'statusLine']
- `SAFE_ENV_VARS` — Set of ~80 env var names safe to apply before trust dialog. Includes model config, AWS region/profile, bash timeouts, telemetry flags, OTEL headers/protocol, and Vertex region constants.

## Source
`managedEnvConstants`
