# permissions

## Purpose
Handle different decision reason types

## Imports
- **Stdlib**: bun:bundle
- **External**: @anthropic-ai/sdk
- **Internal**: ../../hooks/useCanUseTool.js, ../../Tool.js, ../../tools/AgentTool/constants.js, ../../tools/BashTool/shouldUseSandbox.js, ../../tools/BashTool/toolName.js, ../../tools/PowerShellTool/toolName.js, ../../tools/REPLTool/constants.js, ../../types/message.js, ../bash/commands.js, ../debug.js...

## Items

### permissionRuleSourceDisplayString
**Type**: Function

### getAllowRules
**Type**: Function

### createPermissionRequestMessage
**Type**: Function

### getDenyRules
**Type**: Function

### getAskRules
**Type**: Function

### toolMatchesRule
**Type**: Function

### toolAlwaysAllowedRule
**Type**: Function

### getDenyRuleForTool
**Type**: Function

### getAskRuleForTool
**Type**: Function

### getDenyRuleForAgent
**Type**: Function

### getRuleByContentsForTool
**Type**: Function

### getRuleByContentsForToolName
**Type**: Function

### runPermissionRequestHooksForHeadlessAgent
**Type**: Function

### persistDenialState
**Type**: Function

### handleDenialLimitExceeded
**Type**: Function

### checkRuleBasedPermissions
**Type**: Function

### hasPermissionsToUseToolInner
**Type**: Function

### deletePermissionRule
**Type**: Function

### convertRulesToUpdates
**Type**: Function

### applyPermissionRulesToPermissionContext
**Type**: Function

### syncPermissionRulesFromDisk
**Type**: Function

### getUpdatedInputOrFallback
**Type**: Function

### EditPermissionRuleArgs
**Type**: Type alias

## Exports
- permissionRuleSourceDisplayString
- getAllowRules
- createPermissionRequestMessage
- getDenyRules
- getAskRules
- toolAlwaysAllowedRule
- getDenyRuleForTool
- getAskRuleForTool
- getDenyRuleForAgent
- filterDeniedAgents
- getRuleByContentsForTool
- getRuleByContentsForToolName
- hasPermissionsToUseTool
- checkRuleBasedPermissions
- deletePermissionRule
- applyPermissionRulesToPermissionContext
- syncPermissionRulesFromDisk

## Source
`permissions.ts`