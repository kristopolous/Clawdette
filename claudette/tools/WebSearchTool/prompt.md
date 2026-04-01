## Purpose
Provides tool name and prompt for WebSearch, enabling up-to-date web information retrieval.

## Imports
- **Internal**: `getLocalMonthYear` from constants/common

## Logic
Exports:
- `WEB_SEARCH_TOOL_NAME` = 'WebSearch'
- `getWebSearchPrompt(): string`: Returns instruction string containing:
  - What it does: search web, return results as markdown links, uses up-to-date info
  - CRITICAL: MUST include "Sources:" section listing all relevant URLs as markdown hyperlinks
  - Usage notes: domain filtering supported; web search only available in US
  - IMPORTANT: Use current month/year in queries for recent info; example given

The prompt dynamically injects current month/year from `getLocalMonthYear()`.

## Exports
- `WEB_SEARCH_TOOL_NAME` (string)
- `getWebSearchPrompt(): string`
