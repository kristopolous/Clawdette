# shadowedRuleDetection

## Purpose
Only check allow rules that have specific content (e.g., "Bash(ls:*)")

## Imports
- **Internal**: ../../Tool, ../../tools/BashTool/toolName, ./PermissionRule

## Items

### isSharedSettingSource
**Type**: Function

### formatSource
**Type**: Function

### generateFixSuggestion
**Type**: Function

### isAllowRuleShadowedByAskRule
**Type**: Function

### isAllowRuleShadowedByDenyRule
**Type**: Function

### detectUnreachableRules
**Type**: Function

### ShadowType
**Type**: Type alias

### UnreachableRule
**Type**: Type alias

### DetectUnreachableRulesOptions
**Type**: Type alias

### ShadowResult
**Type**: Type alias

## Exports
- ShadowType
- UnreachableRule
- DetectUnreachableRulesOptions
- isSharedSettingSource
- detectUnreachableRules

## Source
`shadowedRuleDetection`