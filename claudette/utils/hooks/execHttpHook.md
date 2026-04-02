# execHttpHook

## Purpose
Executes HTTP hooks by POSTing JSON input to a configured URL. Includes security features: URL allowlist enforcement, SSRF guard, sandbox proxy routing, env var interpolation with allowlist, and CRLF injection prevention.

## Imports
- **External**: `axios`
- **Internal**: `src/entrypoints/agentSdkTypes` (HookEvent), `../combinedAbortSignal`, `../debug`, `../errors`, `../proxy`, `../settings/settings`, `../settings/types`, `./ssrfGuard`

## Logic
1. **URL allowlist** — checks hook URL against `allowedHttpHookUrls` policy patterns (wildcard `*` matching). Blocks if policy is set and no pattern matches.
2. **Header interpolation** — header values support `$VAR` and `${VAR}` env var syntax. Only vars in the hook's `allowedEnvVars` (intersected with policy `httpHookAllowedEnvVars`) are resolved; others become empty string. Values are sanitized to strip CR/LF/NUL bytes (CRLF injection prevention).
3. **Proxy routing** — when sandboxing is enabled, routes through the sandbox network proxy (which enforces domain allowlist). Also detects env-var proxies (HTTP_PROXY/HTTPS_PROXY) and skips the SSRF guard in that case.
4. **SSRF guard** — uses `ssrfGuardedLookup` to validate resolved IPs, blocking private/link-local ranges (but allowing loopback). Skipped when any proxy is in use.
5. **Request** — POSTs JSON input with Content-Type header, combined abort signal (parent + timeout), `validateStatus: () => true` (all statuses are valid responses), and `maxRedirects: 0`.
6. **Response** — returns `{ ok, statusCode, body, error?, aborted? }`. Timeout defaults to 10 minutes.

## Exports
- `execHttpHook` — async function that executes an `HttpHook` by POSTing to its URL with security checks. Returns `{ ok: boolean, statusCode?: number, body: string, error?: string, aborted?: boolean }`.
