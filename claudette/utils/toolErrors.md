# utils/toolErrors

## Purpose
Provides error formatting utilities for tool errors.

## Imports
- **Stdlib**: (none)
- **External**: `zod/v4`
- **Internal**: errors, messages

## Logic
1. `formatError` - formats error for display
2. AbortError: returns message or INTERRUPT_MESSAGE_FOR_TOOL_USE
3. Non-Error: returns String(error)
4. Uses getErrorParts to build error message
5. Truncates to 10000 chars if longer (first 5000 + ... + last 5000)
6. `getErrorParts` - gets error message parts
7. ShellError: returns [exit code, interrupted message, stderr, stdout]
8. Other errors: returns [message, stderr?, stdout?]
9. `formatValidationPath` - formats Zod validation path to readable string
10. e.g., ['todos', 0, 'activeForm'] => 'todos[0].activeForm'
11. `formatZodValidationError` - formats Zod validation errors for LLM
12. Takes toolName and ZodError
13. Extracts missingParams (invalid_type with 'received undefined')
14. Extracts unexpectedParams (unrecognized_keys)
15. Formats as human-readable error message

## Exports
- `formatError` - formats error
- `getErrorParts` - gets error parts
- `formatValidationPath` - formats validation path
- `formatZodValidationError` - formats Zod validation errors
