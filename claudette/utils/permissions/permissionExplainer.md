# permissionExplainer

## Purpose
Map risk levels to numeric values for analytics

## Imports
- **Stdlib**: zod/v4
- **Internal**: ../../services/analytics/index, .././services/analytics/metadata, .././types/message, ./config, ./debug, ./errors, ./lazySchema, ../log, ../model/model, ../sideQuery...

## Items

### formatToolInput
**Type**: Function

### extractConversationContext
**Type**: Function

### isPermissionExplainerEnabled
**Type**: Function

### generatePermissionExplanation
**Type**: Function

### RiskLevel
**Type**: Type alias

### PermissionExplanation
**Type**: Type alias

### GenerateExplanationParams
**Type**: Type alias

## Exports
- RiskLevel
- PermissionExplanation
- isPermissionExplainerEnabled
- generatePermissionExplanation

## Source
`permissionExplainer`