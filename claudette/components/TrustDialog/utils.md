# components/TrustDialog/utils

## Purpose
Provides utilities for trust dialog source detection.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: permissions PermissionRule, settings settings/types, BashTool toolName, managedEnvConstants, permissions permissionsLoader

## Logic
1. `hasHooks` - checks if settings has hooks enabled
2. Returns false if settings null or disableAllHooks
3. Returns true if statusLine or fileSuggestion set
4. Returns true if hooks object has any entries
5. `getHooksSources` - gets sources that have hooks
6. Checks projectSettings and localSettings
7. Returns array of file paths: .claude/settings.json, .claude/settings.local.json
8. `hasBashPermission` - checks if rules have bash allow rules
9. Checks for ruleBehavior === 'allow' and toolName === BASH_TOOL_NAME or startsWith BASH_TOOL_NAME + '('
10. `getBashPermissionSources` - gets sources with bash allow rules
11. Checks projectSettings and localSettings permission rules
12. Returns array of file paths
13. `formatListWithAnd` - formats list with "and" conjunction
14. Takes items array and optional limit
15. `getApiKeyHelperSources` - gets API key helper sources
16. `getAwsCommandsSources` - gets AWS commands sources
17. `getGcpCommandsSources` - gets GCP commands sources
18. `getDangerousEnvVarsSources` - gets dangerous env vars sources
19. `getOtelHeadersHelperSources` - gets OTEL headers helper sources
20. `BASH_TOOL_NAME` - bash tool name constant
21. `SAFE_ENV_VARS` - safe env vars Set
22. `getSettingsForSource` - gets settings for source
23. `getPermissionRulesForSource` - gets permission rules for source

## Exports
- `getHooksSources` - gets hooks sources
- `getBashPermissionSources` - gets bash permission sources
- `formatListWithAnd` - formats list with "and"
- `getApiKeyHelperSources` - gets API key helper sources
- `getAwsCommandsSources` - gets AWS commands sources
- `getGcpCommandsSources` - gets GCP commands sources
- `getDangerousEnvVarsSources` - gets dangerous env vars sources
- `getOtelHeadersHelperSources` - gets OTEL headers sources
