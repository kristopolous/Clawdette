## Purpose
Defines Zod schemas for validating LSPTool input operations using discriminated unions.

## Imports
- **External**: `z` from 'zod/v4'
- **Internal**: `lazySchema` utility

## Logic
Exports two main things:
1. `lspToolInputSchema` - a lazy-loaded discriminated union schema with 'operation' as discriminator. Defines 9 operation-specific schemas (goToDefinition, findReferences, hover, documentSymbol, workspaceSymbol, goToImplementation, prepareCallHierarchy, incomingCalls, outgoingCalls), each requiring filePath, line (positive int), and character (positive int).
2. `isValidLSPOperation()` - type guard that checks if an operation string is one of the 9 valid LSP operations.
3. `LSPToolInput` type inferred from the schema.

The lazySchema wrapper defers schema construction until first use, reducing initialization overhead.

## Exports
- `lspToolInputSchema` - Zod schema for input validation
- `LSPToolInput` - TypeScript type for LSP input
- `isValidLSPOperation(operation)` - type guard function
