## Purpose
Utility functions for detecting which configuration sources contain potentially risky settings like hooks, bash permissions, dangerous environment variables, and cloud provider commands.

## Imports
- **Stdlib**: None
- **External**: None
- **Internal**: `utils/permissions/PermissionRule.js`, `utils/settings/settings.js`, `utils/settings/types.js`, `tools/BashTool/toolName.js`, `utils/managedEnvConstants.js`, `utils/permissions/permissionsLoader.js`

## Logic
Each detection function checks project and local settings sources for specific configurations (hooks, bash permissions, OTEL headers helper, API key helper, AWS/GCP commands, dangerous environment variables) and returns an array of file paths where the configuration is found. A shared `formatListWithAnd` utility formats item lists with proper conjunction.

## Exports
- `getHooksSources` - Returns file paths that have hook configurations
- `getBashPermissionSources` - Returns file paths that have bash allow rules
- `formatListWithAnd` - Formats a list of strings with "and" conjunction, optionally limiting displayed items
- `getOtelHeadersHelperSources` - Returns file paths that have OTEL headers helper configured
- `getApiKeyHelperSources` - Returns file paths that have API key helper configured
- `getAwsCommandsSources` - Returns file paths that have AWS authentication commands configured
- `getGcpCommandsSources` - Returns file paths that have GCP authentication commands configured
- `getDangerousEnvVarsSources` - Returns file paths that have environment variables not in the safe list
