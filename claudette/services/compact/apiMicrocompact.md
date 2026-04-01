# compact/apiMicrocompact

## Purpose
Implements API-based microcompact using native context management edits.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: Tool constants, shell utils, envUtils

## Logic
1. `DEFAULT_MAX_INPUT_TOKENS` (180k) - typical warning threshold
2. `DEFAULT_TARGET_INPUT_TOKENS` (40k) - keep last 40k tokens like client-side
3. `TOOLS_CLEARABLE_RESULTS` - shell, glob, grep, file read, web fetch/search
4. `TOOLS_CLEARABLE_USES` - file edit/write, notebook edit
5. `ContextEditStrategy` - type for clear_tool_uses_20250919 and clear_thinking_20251015
6. `ContextManagementConfig` - wrapper with edits array
7. `getAPIContextManagement` - builds config based on thinking state
8. Preserves thinking blocks in previous assistant turns
9. Skips when redact-thinking active (no model-visible content)
10. clearAllThinking (>1h idle = cache miss) keeps only last thinking turn
11. API schema requires value >= 1 for thinking turns

## Exports
- `ContextEditStrategy` - type for context edit strategies
- `ContextManagementConfig` - configuration wrapper type
- `getAPIContextManagement` - builds API context management config
- Constants: DEFAULT_MAX_INPUT_TOKENS, DEFAULT_TARGET_INPUT_TOKENS, TOOLS_CLEARABLE_*
