# utils/envUtils

## Purpose
Provides environment variable utilities and path helpers.

## Imports
- **Stdlib**: `os`, `path`
- **External**: `lodash-es/memoize`
- **Internal**: protectedNamespace (conditional)

## Logic
1. `getClaudeConfigHomeDir` - gets Claude config home directory
2. Memoized with CLAUDE_CONFIG_DIR as key
3. Defaults to ~/.claude, normalizes to NFC
4. `getTeamsDir` - gets teams subdirectory path
5. `hasNodeOption` - checks if NODE_OPTIONS contains specific flag
6. Splits on whitespace for exact match (avoids false positives)
7. `isEnvTruthy` - checks if env var is truthy
8. Truthy values: '1', 'true', 'yes', 'on' (case-insensitive)
9. `isEnvDefinedFalsy` - checks if env var is defined as falsy
10. Falsy values: '0', 'false', 'no', 'off' (case-insensitive)
11. `isBareMode` - checks for --bare / CLAUDE_CODE_SIMPLE mode
12. Skips hooks, LSP, plugin sync, skill dir-walk, attribution, background prefetches, ALL keychain/credential reads
13. Auth strictly from ANTHROPIC_API_KEY env or apiKeyHelper
14. Explicit CLI flags (--plugin-dir, --add-dir, --mcp-config) still honored
15. Checks argv directly (before main sets CLAUDE_CODE_SIMPLE=1 from --bare)
16. `parseEnvVars` - parses KEY=VALUE array to object
17. Throws Error for invalid format (should be KEY=value)
18. `getAWSRegion` - gets AWS region with fallback
19. Returns AWS_REGION || AWS_DEFAULT_REGION || 'us-east-1'
20. Matches Anthropic Bedrock SDK's region behavior
21. `getDefaultVertexRegion` - gets default Vertex AI region
22. Returns CLOUD_ML_REGION || 'us-east5'
23. `shouldMaintainProjectWorkingDir` - checks if bash should maintain project working directory
24. Checks CLAUDE_BASH_MAINTAIN_PROJECT_WORKING_DIR env var
25. `isRunningOnHomespace` - checks if running on Homespace (ant-internal cloud)
26. Checks USER_TYPE === 'ant' && COO_RUNNING_ON_HOMESPACE
27. `isInProtectedNamespace` - checks if running in protected COO namespace/cluster
28. Conservative: over-reports protected usage
29. Unprotected: homespace, namespaces on open allowlist, no k8s/COO signals
30. Uses checkProtectedNamespace fromprotectedNamespace (ant-only, DCE'd in external builds)
31. `VERTEX_REGION_OVERRIDES` - model prefix → env var for Vertex region overrides
32. Order matters: specific prefixes before less specific (claude-opus-4-1 before claude-opus-4)
33. `getVertexRegionForModel` - gets Vertex AI region for specific model
34. Different models may be available in different regions

## Exports
- `getClaudeConfigHomeDir` - gets config home directory
- `getTeamsDir` - gets teams directory
- `hasNodeOption` - checks NODE_OPTIONS flag
- `isEnvTruthy` - checks truthy env var
- `isEnvDefinedFalsy` - checks defined falsy env var
- `isBareMode` - checks bare mode
- `parseEnvVars` - parses env vars
- `getAWSRegion` - gets AWS region
- `getDefaultVertexRegion` - gets default Vertex region
- `shouldMaintainProjectWorkingDir` - checks maintain working dir
- `isRunningOnHomespace` - checks if running on Homespace
- `isInProtectedNamespace` - checks protected namespace
- `VERTEX_REGION_OVERRIDES` - Vertex region overrides
- `getVertexRegionForModel` - gets Vertex region for model
