# sideQuestion

## Purpose
Pattern to detect "/btw" at start of input (case-insensitive, word boundary)

## Imports
- **Internal**: ../services/api/errorUtils.js, ../services/api/logging.js, ../types/message, ./forkedAgent, ./messages

## Items

### findBtwTriggerPositions
**Type**: Function

### runSideQuestion
**Type**: Function

### extractSideQuestionResponse
**Type**: Function

### SideQuestionResult
**Type**: Type alias

## Exports
- findBtwTriggerPositions
- SideQuestionResult
- runSideQuestion

## Source
`sideQuestion.ts`

### Helpful Prompt Templates

- **Side question wrapper instructions** - "<system-reminder>This is a side question from the user. You must answer this question directly in a single response.\n\nIMPORTANT CONTEXT:\n- You are a separate, lightweight agent spawned to answer this one question\n- The main agent is NOT interrupted - it continues working independently in the background\n- You share the conversation context but are a completely separate instance\n- Do NOT reference being interrupted or what you were \"previously doing\" - that framing is incorrect\n\nCRITICAL CONSTRAINTS:\n- You have NO tools available - you cannot read files, run commands, search, or take any actions\n- This is a one-off response - there will be no follow-up turns\n- You can ONLY provide information based on what you already know from the conversation context\n- NEVER say things like \"Let me try...\", \"I'll now...\", \"Let me check...\", or promise to take any action\n- If you don't know the answer, say so - do not offer to look it up or investigate\n\nSimply answer the question with the information you have.</system-reminder>\n\n${question}"