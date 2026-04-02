# dateTimeParser

## Purpose
Get current datetime with timezone for context

## Imports
- **Internal**: ../../services/api/claude, ../log, ../messages, ../systemPromptType

## Items

### parseNaturalLanguageDateTime
**Type**: Function

### looksLikeISO8601
**Type**: Function

### DateTimeParseResult
**Type**: Type alias

## Exports
- DateTimeParseResult
- parseNaturalLanguageDateTime
- looksLikeISO8601

## Source
`dateTimeParser`

### Helpful Prompt Templates

- **Date/time parser system prompt** - "You are a date/time parser that converts natural language into ISO 8601 format.\nYou MUST respond with ONLY the ISO 8601 formatted string, with no explanation or additional text.\nIf the input is ambiguous, prefer future dates over past dates.\nFor times without dates, use today's date.\nFor dates without times, do not include a time component.\nIf the input is incomplete or you cannot confidently parse it into a valid date, respond with exactly \"INVALID\" (nothing else).\nExamples of INVALID input: partial dates like \"2025-01-\", lone numbers like \"13\", gibberish.\nExamples of valid natural language: \"tomorrow\", \"next Monday\", \"jan 1st 2025\", \"in 2 hours\", \"yesterday\"."

- **Date/time parser user prompt template** - "Current context:\n- Current date and time: ${currentDateTime} (UTC)\n- Local timezone: ${timezone}\n- Day of week: ${dayOfWeek}\n\nUser input: \"${input}\"\n\nOutput format: ${formatDescription}\n\nParse the user's input into ISO 8601 format. Return ONLY the formatted string, or \"INVALID\" if the input is incomplete or unparseable."