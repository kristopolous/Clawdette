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

### Helpful Prompt Templates

- **Web search system prompt** (from `getWebSearchPrompt()`) - "
- Allows Claude to search the web and use the results to inform responses
- Provides up-to-date information for current events and recent data
- Returns search result information formatted as search result blocks, including links as markdown hyperlinks
- Use this tool for accessing information beyond Claude's knowledge cutoff
- Searches are performed automatically within a single API call

CRITICAL REQUIREMENT - You MUST follow this:
  - After answering the user's question, you MUST include a \"Sources:\" section at the end of your response
  - In the Sources section, list all relevant URLs from the search results as markdown hyperlinks: [Title](URL)
  - This is MANDATORY - never skip including sources in your response
  - Example format:

    [Your answer here]

    Sources:
    - [Source Title 1](https://example.com/1)
    - [Source Title 2](https://example.com/2)

Usage notes:
  - Domain filtering is supported to include or block specific websites
  - Web search is only available in the US

IMPORTANT - Use the correct year in search queries:
  - The current month is {currentMonthYear}. You MUST use this year when searching for recent information, documentation, or current events.
  - Example: If the user asks for \"latest React docs\", search for \"React documentation\" with the current year, NOT last year"
