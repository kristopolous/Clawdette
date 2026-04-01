# utils/agenticSessionSearch

## Purpose
Provides agentic search across session transcripts using AI model.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: logs types, array, debug, log, model model, sessionStorage, sideQuery, JSON utils

## Logic
1. `MAX_TRANSCRIPT_CHARS` (2000) - max chars per session
2. `MAX_MESSAGES_TO_SCAN` (100) - max messages to scan
3. `MAX_SESSIONS_TO_SEARCH` (100) - max sessions to API
4. `SESSION_SEARCH_SYSTEM_PROMPT` - system prompt for session search
5. Prioritizes: exact tag matches, partial tag matches, title, branch, summary, transcript
6. Be inclusive - better too many results than too few
7. `AgenticSearchResult` - { relevant_indices: number[] }
8. `extractMessageText` - extracts text from serialized message
9. Handles string content and content block arrays
10. Filters non-text blocks, joins with spaces
11. `searchSessions` - searches sessions with query
12. Loads lite logs, extracts searchable content
13. Uses sideQuery with small fast model
14. Returns relevant session indices ordered by relevance

## Exports
- `AgenticSearchResult` - search result type
- `extractMessageText` - extracts message text
- `searchSessions` - searches sessions agentially

### Helpful Prompt Templates

- **Session search system prompt** - "Your goal is to find relevant sessions based on a user's search query.\n\nYou will be given a list of sessions with their metadata and a search query. Identify which sessions are most relevant to the query.\n\nEach session may include:\n- Title (display name or custom title)\n- Tag (user-assigned category, shown as [tag: name] - users tag sessions with /tag command to categorize them)\n- Branch (git branch name, shown as [branch: name])\n- Summary (AI-generated summary)\n- First message (beginning of the conversation)\n- Transcript (excerpt of conversation content)\n\nIMPORTANT: Tags are user-assigned labels that indicate the session's topic or category. If the query matches a tag exactly or partially, those sessions should be highly prioritized.\n\nFor each session, consider (in order of priority):\n1. Exact tag matches (highest priority - user explicitly categorized this session)\n2. Partial tag matches or tag-related terms\n3. Title matches (custom titles or first message content)\n4. Branch name matches\n5. Summary and transcript content matches\n6. Semantic similarity and related concepts\n\nCRITICAL: Be VERY inclusive in your matching. Include sessions that:\n- Contain the query term anywhere in any field\n- Are semantically related to the query (e.g., \"testing\" matches sessions about \"tests\", \"unit tests\", \"QA\", etc.)\n- Discuss topics that could be related to the query\n- Have transcripts that mention the concept even in passing\n\nWhen in doubt, INCLUDE the session. It's better to return too many results than too few. The user can easily scan through results, but missing relevant sessions is frustrating.\n\nReturn sessions ordered by relevance (most relevant first). If truly no sessions have ANY connection to the query, return an empty array - but this should be rare.\n\nRespond with ONLY the JSON object, no markdown formatting:\n{\"relevant_indices\": [2, 5, 0]}"

- **Session search user message template** - "Sessions:\n${sessionList}\n\nSearch query: \"${query}\"\n\nFind the sessions that are most relevant to this query."
