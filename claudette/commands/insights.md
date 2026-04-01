## Purpose
Analyzes Claudette usage data to generate insights about user behavior, session patterns, and productivity trends.

## Imports
- **Stdlib**: `child_process`, `diff`, `fs/promises`, `os`, `path`
- **External**: `diff`
- **Internal**: `Command` type, `queryWithModel`, `AGENT_TOOL_NAME`, `LEGACY_AGENT_TOOL_NAME`, `LogOption` type, `getClaudeConfigHomeDir`, `toError`, `execFileNoThrow`, `logError`, `extractTextContent`, `getDefaultOpusModel`, session storage utils, `jsonParse`, `jsonStringify`, `countCharInString`, `asSystemPrompt`, `escapeXmlAttr`

## Logic
Collects session data from local storage and optionally from remote hosts (for internal users). Processes session logs to extract metadata (SessionMeta) and facets (SessionFacets) using AI models (Opus). Aggregates statistics about tool usage, languages, git activity, interruptions, errors, multi-clauding patterns, lines modified, and more. Generates six parallel insight sections (project areas, interaction style, what works, friction analysis, suggestions, on_the_horizon) using AI prompts, plus optional internal-specific sections (cc_team_improvements, model_behavior_improvements). Results provide comprehensive usage analytics with time-of-day patterns and multi-clauding detection.

## Exports
- `deduplicateSessionBranches` - Removes duplicate conversation branches from same session, keeping the one with most user messages
- `detectMultiClauding` - Detects overlapping multiple Claude sessions within 30-minute window
- Many internal helper functions for data collection, processing, and formatting

### Helpful Prompt Templates

- **(Facet extraction from session transcripts)** - "Analyze this Claude Code session and extract structured facets. CRITICAL GUIDELINES: 1) goal_categories: Count ONLY what the USER explicitly asked for. 2) user_satisfaction_counts: Base ONLY on explicit user signals. 3) friction_counts: Be specific about what went wrong. 4) If very short or just warmup, use warmup_minimal for goal_category" (Returns JSON with underlying_goal, goal_categories, outcome, user_satisfaction_counts, claude_helpfulness, session_type, friction_counts, friction_detail, primary_success, brief_summary)

- **(Summarize transcript chunk)** - "Summarize this portion of a Claude Code session transcript. Focus on: 1. What the user asked for 2. What Claude did (tools used, files modified) 3. Any friction or issues 4. The outcome. Keep it concise - 3-5 sentences. Preserve specific details like file names, error messages, and user feedback."

- **(Insight: Project areas)** - "Analyze this Claude Code usage data and identify project areas. RESPOND WITH ONLY A VALID JSON OBJECT: { areas: [{name, session_count, description}] }. Include 4-5 areas. Skip internal CC operations."

- **(Insight: Interaction style)** - "Analyze this Claude Code usage data and describe the user's interaction style. RESPOND WITH ONLY A VALID JSON OBJECT: { narrative, key_pattern }. Use second person 'you'. Describe patterns: iterate quickly vs detailed upfront specs? Interrupt often or let Claude run?"

- **(Insight: What works)** - "Analyze this Claude Code usage data and identify what's working well for this user. Use second person ('you'). RESPOND WITH ONLY A VALID JSON OBJECT: { intro, impressive_workflows: [{title, description}] }. Include 3 impressive workflows."

- **(Insight: Friction analysis)** - "Analyze this Claude Code usage data and identify friction points for this user. Use second person ('you'). RESPOND WITH ONLY A VALID JSON OBJECT: { intro, categories: [{category, description, examples}] }. Include 3 friction categories with 2 examples each."

- **(Insight: Suggestions)** - "Analyze this Claude Code usage data and suggest improvements. Includes CC FEATURES REFERENCE (MCP Servers, Custom Skills, Hooks, Headless Mode, Task Agents). RESPOND WITH ONLY A VALID JSON OBJECT: { claude_md_additions, features_to_try, usage_patterns }. PRIORITIZE instructions that appear MULTIPLE TIMES in the user data."

- **(Insight: On the horizon)** - "Analyze this Claude Code usage data and identify future opportunities. RESPOND WITH ONLY A VALID JSON OBJECT: { intro, opportunities: [{title, whats_possible, how_to_try, copyable_prompt}] }. Include 3 opportunities. Think BIG - autonomous workflows, parallel agents, iterating against tests."

- **(Insight: Fun ending)** - "Analyze this Claude Code usage data and find a memorable moment. RESPOND WITH ONLY A VALID JSON OBJECT: { headline, detail }. Find something genuinely interesting or amusing from the session summaries."

- **(Internal: CC team improvements)** - "Analyze this Claude Code usage data and suggest product improvements for the CC team. RESPOND WITH ONLY A VALID JSON OBJECT: { improvements: [{title, detail, evidence}] }. Include 2-3 improvements based on friction patterns observed."

- **(Internal: Model behavior improvements)** - "Analyze this Claude Code usage data and suggest model behavior improvements. RESPOND WITH ONLY A VALID JSON OBJECT: { improvements: [{title, detail, evidence}] }. Include 2-3 improvements based on friction patterns observed."
