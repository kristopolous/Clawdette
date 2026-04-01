# validation

## Purpose
Parse the JSON first

## Imports
- **Stdlib**: src/services/mcp/types.js, zod/v4
- **Internal**: ../slowOperations.js, ../stringUtils.js, ./permissionValidation.js, ./schemaOutput.js, ./types.js, ./types.js, ./validationTips.js

## Items

### isInvalidTypeIssue
**Type**: Function

### isInvalidValueIssue
**Type**: Function

### isUnrecognizedKeysIssue
**Type**: Function

### isTooSmallIssue
**Type**: Function

### getReceivedType
**Type**: Function

### extractReceivedFromMessage
**Type**: Function

### formatZodError
**Type**: Function

### validateSettingsFileContent
**Type**: Function

### filterInvalidPermissionRules
**Type**: Function

### FieldPath
**Type**: Type alias

### ValidationError
**Type**: Type alias

### SettingsWithErrors
**Type**: Type alias

## Exports
- FieldPath
- ValidationError
- SettingsWithErrors
- formatZodError
- validateSettingsFileContent
- filterInvalidPermissionRules

## Source
`validation.ts`