# mcpValidation

## Purpose
Estimates MCP tool output size and truncates content that exceeds token limits. Uses a two-tier check: fast heuristic (rough token estimation) followed by accurate API token counting only when needed. Handles both text and image content blocks, with image compression for oversized images.

## Imports
- **Stdlib**: (none)
- **External**: @anthropic-ai/sdk/resources/index.mjs (ContentBlockParam, ImageBlockParam, TextBlockParam types)
- **Internal**: ../services/analytics/growthbook (getFeatureValue_CACHED_MAY_BE_STALE), ../services/tokenEstimation (countMessagesTokensWithAPI, roughTokenCountEstimation), ./imageResizer (compressImageBlock), ./log (logError)

## Logic
1. **Token cap resolution** — `getMaxMcpOutputTokens` resolves the MCP output token cap with precedence: MAX_MCP_OUTPUT_TOKENS env var > GrowthBook flag 'tengu_satin_quoll' key 'mcp_tool' > hardcoded default (25000).
2. **Size estimation** — `getContentSizeEstimate` computes rough token count: for strings uses roughTokenCountEstimation, for content arrays sums text block estimates + IMAGE_TOKEN_ESTIMATE (1600) per image block.
3. **Truncation threshold** — Fast path: if content size estimate ≤ 50% of max tokens (MCP_TOKEN_COUNT_THRESHOLD_FACTOR), skips API call. Slow path: uses countMessagesTokensWithAPI for accurate count.
4. **String truncation** — `truncateString` slices at maxChars (maxTokens * 4). Appends truncation message with guidance about pagination.
5. **Block truncation** — `truncateContentBlocks` iterates blocks, accumulating chars. Text blocks are sliced. Image blocks are included if they fit, compressed via compressImageBlock if partially fitting, or skipped if no room. Non-text/non-image blocks passed through.
6. **Two-phase check** — `truncateMcpContentIfNeeded` first checks if truncation is needed (heuristic + API), then calls `truncateMcpContent` only if necessary.

## Exports
- `MCP_TOKEN_COUNT_THRESHOLD_FACTOR` — Constant: 0.5. Content below 50% of max tokens skips API token counting.
- `IMAGE_TOKEN_ESTIMATE` — Constant: 1600. Estimated token count per image block.
- `getMaxMcpOutputTokens()` — Resolves MCP output token cap (env > GrowthBook > default 25000)
- `MCPToolResult` — Type: string | ContentBlockParam[] | undefined
- `getContentSizeEstimate(content)` — Returns rough token count for MCP tool result
- `mcpContentNeedsTruncation(content)` — Async: returns true if content exceeds token limit (fast heuristic + accurate API check)
- `truncateMcpContent(content)` — Async: truncates content to char limit and appends truncation message
- `truncateMcpContentIfNeeded(content)` — Async: checks if truncation needed, then truncates. Returns original content if no truncation needed.

## Source
`mcpValidation`
