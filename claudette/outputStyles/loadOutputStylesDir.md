# outputStyles/loadOutputStylesDir

## Purpose
Loads markdown files from .claude/output-styles directories and converts them to output styles.

## Imports
- **Stdlib**: `path`
- **External**: `lodash-es/memoize`
- **Internal**: constants outputStyles, debug, frontmatterParser, log, markdownConfigLoader, plugins loadPluginOutputStyles

## Logic
1. `getOutputStyleDirStyles` - memoized function loading output styles from directories
2. Loads from project .claude/output-styles/*.md (project styles)
3. Loads from user ~/.claude/output-styles/*.md (user styles, overridden by project styles)
4. Each filename becomes style name, file content becomes style prompt
5. Frontmatter provides name and description
6. Parses keep-coding-instructions flag (supports boolean and string values)
7. Warns if force-for-plugin set on non-plugin output style
8. Returns OutputStyleConfig array with name, description, prompt, source, keepCodingInstructions
9. `loadMarkdownFilesForSubdir` - loads markdown files for subdirectory
10. `coerceDescriptionToString` - coerces description to string
11. `extractDescriptionFromMarkdown` - extracts description from markdown content
12. `clearPluginOutputStyleCache` - clears plugin output style cache
13. `logForDebugging` - debug logging
14. `logError` - error logging
15. `basename` - gets file basename

## Exports
- `getOutputStyleDirStyles` - loads output styles from directories
