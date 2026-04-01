## Purpose
Provides access to the native color-diff module for syntax-highlighted diff rendering with environment variable-based availability checking.

## Imports
- **Stdlib**: None
- **External**: `color-diff-napi`
- **Internal**: `utils/envUtils`

## Logic
Checks the `CLAUDE_CODE_SYNTAX_HIGHLIGHT` environment variable to determine if the native color-diff module should be used. Exports guarded accessor functions that return the native module or null based on availability.

## Exports
- `getColorModuleUnavailableReason` - Returns 'env' if syntax highlighting is disabled via environment variable, null otherwise
- `expectColorDiff` - Returns the ColorDiff class if available, null otherwise
- `expectColorFile` - Returns the ColorFile class if available, null otherwise
- `getSyntaxTheme` - Returns a syntax theme by name if the module is available, null otherwise
