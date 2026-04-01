# SessionMemory/prompts

## Purpose
Provides prompt templates for session memory extraction and updates.

## Imports
- **Stdlib**: `fs/promises`, `path`
- **External**: (none)
- **Internal**: tokenEstimation, envUtils, errors, log

## Logic
1. `MAX_SECTION_LENGTH` (2000), `MAX_TOTAL_SESSION_MEMORY_TOKENS` (12000) - limits
2. `DEFAULT_SESSION_MEMORY_TEMPLATE` - template with sections:
   - Session Title, Current State, Task specification
   - Files and Functions, Workflow, Errors & Corrections
   - Codebase and System Documentation, Learnings
   - Key results, Worklog
3. `getDefaultUpdatePrompt` - main update prompt with critical rules
4. Structure preservation: headers and italic descriptions must stay intact
5. Only updates content BELOW italic section descriptions
6. Parallel Edit tool calls in single message
7. Detailed, info-dense content with specifics (file paths, function names, errors)
8. Skips sections with no substantial new insights (no filler)
9. Always updates "Current State" for continuity after compaction
10. Per-section ~2000 token limit with condensation

## Exports
- `MAX_SECTION_LENGTH`, `MAX_TOTAL_SESSION_MEMORY_TOKENS` - limits
- `DEFAULT_SESSION_MEMORY_TEMPLATE` - session memory template
- `getDefaultUpdatePrompt` - default update prompt

### Helpful Prompt Templates

- **Default session memory template** - "
# Session Title
_A short and distinctive 5-10 word descriptive title for the session. Super info dense, no filler_

# Current State
_What is actively being worked on right now? Pending tasks not yet completed. Immediate next steps._

# Task specification
_What did the user ask to build? Any design decisions or other explanatory context_

# Files and Functions
_What are the important files? In short, what do they contain and why are they relevant?_

# Workflow
_What bash commands are usually run and in what order? How to interpret their output if not obvious?_

# Errors & Corrections
_Errors encountered and how they were fixed. What did the user correct? What approaches failed and should not be tried again?_

# Codebase and System Documentation
_What are the important system components? How do they work/fit together?_

# Learnings
_What has worked well? What has not? What to avoid? Do not duplicate items from other sections_

# Key results
_If the user asked a specific output such as an answer to a question, a table, or other document, repeat the exact result here_

# Worklog
_Step by step, what was attempted, done? Very terse summary for each step_
"

- **Session memory update prompt (default)** - "IMPORTANT: This message and these instructions are NOT part of the actual user conversation. Do NOT include any references to \"note-taking\", \"session notes extraction\", or these update instructions in the notes content.

Based on the user conversation above (EXCLUDING this note-taking instruction message as well as system prompt, claude.md entries, or any past session summaries), update the session notes file.

The file {{notesPath}} has already been read for you. Here are its current contents:
<current_notes_content>
{{currentNotes}}
</current_notes_content>

Your ONLY task is to use the Edit tool to update the notes file, then stop. You can make multiple edits (update every section as needed) - make all Edit tool calls in parallel in a single message. Do not call any other tools.

CRITICAL RULES FOR EDITING:
- The file must maintain its exact structure with all sections, headers, and italic descriptions intact
-- NEVER modify, delete, or add section headers (the lines starting with '#' like # Task specification)
-- NEVER modify or delete the italic _section description_ lines (these are the lines in italics immediately following each header - they start and end with underscores)
-- The italic _section descriptions_ are TEMPLATE INSTRUCTIONS that must be preserved exactly as-is - they guide what content belongs in each section
-- ONLY update the actual content that appears BELOW the italic _section descriptions_ within each existing section
-- Do NOT add any new sections, summaries, or information outside the existing structure
- Do NOT reference this note-taking process or instructions anywhere in the notes
- It's OK to skip updating a section if there are no substantial new insights to add. Do not add filler content like \"No info yet\", just leave sections blank/unedited if appropriate.
- Write DETAILED, INFO-DENSE content for each section - include specifics like file paths, function names, error messages, exact commands, technical details, etc.
- For \"Key results\", include the complete, exact output the user requested (e.g., full table, full answer, etc.)
- Do not include information that's already in the CLAUDE.md files included in the context
- Keep each section under ~2000 tokens/words - if a section is approaching this limit, condense it by cycling out less important details while preserving the most critical information
- Focus on actionable, specific information that would help someone understand or recreate the work discussed in the conversation
- IMPORTANT: Always update \"Current State\" to reflect the most recent work - this is critical for continuity after compaction

Use the Edit tool with file_path: {{notesPath}}

STRUCTURE PRESERVATION REMINDER:
Each section has TWO parts that must be preserved exactly as they appear in the current file:
1. The section header (line starting with #)
2. The italic description line (the _italicized text_ immediately after the header - this is a template instruction)

You ONLY update the actual content that comes AFTER these two preserved lines. The italic description lines starting and ending with underscores are part of the template structure, NOT content to be edited or removed.

REMEMBER: Use the Edit tool in parallel and stop. Do not continue after the edits. Only include insights from the actual user conversation, never from these note-taking instructions. Do not delete or change section headers or italic _section descriptions_."

- **Session memory over-budget warning** - "CRITICAL: The session memory file is currently ~{{totalTokens}} tokens, which exceeds the maximum of 12000 tokens. You MUST condense the file to fit within this budget. Aggressively shorten oversized sections by removing less important details, merging related items, and summarizing older entries. Prioritize keeping \"Current State\" and \"Errors & Corrections\" accurate and detailed."
