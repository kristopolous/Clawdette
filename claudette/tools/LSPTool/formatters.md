## Purpose
Provides formatting functions for LSP (Language Server Protocol) operation results into human-readable strings.

## Imports
- **Stdlib**: `path` (relative)
- **External**: Types from 'vscode-languageserver-types' (CallHierarchyIncomingCall, CallHierarchyItem, CallHierarchyOutgoingCall, DocumentSymbol, Hover, Location, LocationLink, MarkedString, MarkupContent, SymbolInformation, SymbolKind)
- **Internal**:
  - `logForDebugging` utility
  - `errorMessage` utility
  - `plural` utility

## Logic
Exports multiple format functions, each handling a specific LSP operation:
- `formatUri()`: Converts file URIs to relative paths when shorter; decodes URI encoding; normalizes path separators.
- `formatLocation()`: Formats Location as `file:line:character` (1-based).
- `formatGoToDefinitionResult()`: Handles single/array/multiple definitions; groups by file; filters invalid locations.
- `formatFindReferencesResult()`: Groups references by file; lists line:character positions.
- `extractMarkupText()`: Extracts text from MarkupContent/MarkedString variants.
- `formatHoverResult()`: Returns hover documentation with optional position.
- `symbolKindToString()`: Maps SymbolKind enum numbers to readable strings.
- `formatDocumentSymbolResult()`: Hierarchical outline for DocumentSymbol[]; delegates flat SymbolInformation[] to workspace symbol formatter.
- `formatWorkspaceSymbolResult()`: Flat list grouped by file, includes container names.
- `formatCallHierarchyItem()`: Formats a single call hierarchy item with location validation.
- `formatPrepareCallHierarchyResult()`: Formats prepare call hierarchy results.
- `formatIncomingCallsResult()`: Groups incoming calls by file, shows call sites.
- `formatOutgoingCallsResult()`: Groups outgoing calls by file, shows call sites.

All functions filter invalid data (undefined URIs) and log warnings via `logForDebugging`.

## Exports
- `formatGoToDefinitionResult(result, cwd?)`
- `formatFindReferencesResult(result, cwd?)`
- `formatHoverResult(result, cwd?)`
- `formatDocumentSymbolResult(result, cwd?)`
- `formatWorkspaceSymbolResult(result, cwd?)`
- `formatPrepareCallHierarchyResult(result, cwd?)`
- `formatIncomingCallsResult(result, cwd?)`
- `formatOutgoingCallsResult(result, cwd?))`
