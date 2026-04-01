## Purpose
Provides tool name, description, and the secondary model prompt builder for WebFetch.

## Imports
- None

## Logic
Exports:
- `WEB_FETCH_TOOL_NAME` - 'WebFetch'
- `DESCRIPTION` - multi-line string explaining:
  - Fetches URL content, converts HTML to markdown
  - Processes with a small fast model using a prompt
  - When to use, usage notes (MCP preference, URL requirements, HTTP→HTTPS upgrade, read-only, summarization, cache, redirect handling, GitHub via gh CLI)
- `makeSecondaryModelPrompt(markdownContent, prompt, isPreapprovedDomain)`: Constructs prompt for the secondary model. Includes webpage content between markers, the user's prompt, and domain-specific guidelines:
  - Preapproved domains: concise response, include details/code/examples as needed
  - Non-preapproved: strict 125-char quote limit, avoid verbatim copying beyond quotes, no legal commentary, no song lyrics

This prompt is sent to the Haiku model via `queryHaiku` in utils to extract/summarize info from the fetched page.

## Exports
- `WEB_FETCH_TOOL_NAME` (string)
- `DESCRIPTION` (string)
- `makeSecondaryModelPrompt(markdownContent, prompt, isPreapprovedDomain)` (function)
