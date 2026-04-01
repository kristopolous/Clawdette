# frontmatterParser

## Purpose
YAML can return null for keys with no value (e.g., "key:" with nothing after)

## Imports
- **Internal**: ./debug.js, ./settings/types.js, ./yaml

## Items

### quoteProblematicValues
**Type**: Function

### parseFrontmatter
**Type**: Function

### splitPathInFrontmatter
**Type**: Function

### expandBraces
**Type**: Function

### parsePositiveIntFromFrontmatter
**Type**: Function

### coerceDescriptionToString
**Type**: Function

### parseBooleanFrontmatter
**Type**: Function

### parseShellFrontmatter
**Type**: Function

### FrontmatterData
**Type**: Type alias

### ParsedMarkdown
**Type**: Type alias

### FrontmatterShell
**Type**: Type alias

## Exports
- FrontmatterData
- ParsedMarkdown
- FRONTMATTER_REGEX
- parseFrontmatter
- splitPathInFrontmatter
- parsePositiveIntFromFrontmatter
- coerceDescriptionToString
- parseBooleanFrontmatter
- FrontmatterShell
- parseShellFrontmatter

## Source
`frontmatterParser.ts`