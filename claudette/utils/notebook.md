# utils/notebook

## Purpose
Reads, parses, and processes Jupyter notebook (`.ipynb`) files, converting cell data and outputs into tool result blocks suitable for the Claude API.

## Imports
- **External**: `@anthropic-ai/sdk/resources/index.mjs` (ImageBlockParam, TextBlockParam, ToolResultBlockParam)
- **Internal**: `../tools/BashTool/toolName.js`, `../tools/BashTool/utils.js`, `../types/notebook.js`, `./fsOperations.js`, `./path.js`, `./slowOperations.js`

## Logic
1. `LARGE_OUTPUT_THRESHOLD` — 10000 characters; outputs exceeding this are replaced with a hint message
2. `isLargeOutputs(outputs)` — sums text and image data lengths to check if outputs exceed threshold
3. `processOutputText(text)` — handles string or string[] input; joins arrays; truncates via `formatOutput`
4. `extractImage(data)` — extracts `image/png` or `image/jpeg` from notebook output data, stripping whitespace
5. `processOutput(output)` — transforms notebook cell outputs by type: `stream` (text), `execute_result`/`display_data` (text + image), `error` (formatted traceback)
6. `processCell(cell, index, codeLanguage, includeLargeOutputs)` — converts a notebook cell to `NotebookCellSource`; assigns cell IDs; sets language for code cells only; truncates large outputs with a hint to use BashTool + jq
7. `cellContentToToolResult(cell)` — formats cell source as XML-like `<cell id="...">` with optional `<cell_type>` and `<language>` metadata
8. `cellOutputToToolResult(output)` — converts cell outputs to `TextBlockParam` and `ImageBlockParam` arrays
9. `getToolResultFromCell(cell)` — combines cell content and outputs into a single tool result array
10. `readNotebook(notebookPath, cellId?)` — reads and parses `.ipynb` file; extracts language from metadata (defaults to `python`); if `cellId` provided, returns only that cell; otherwise processes all cells with large output truncation
11. `mapNotebookCellsToToolResult(data, toolUseID)` — maps processed cells to a `ToolResultBlockParam`; merges adjacent text blocks
12. `parseCellId(cellId)` — parses `cell-N` format strings to extract numeric index; returns `undefined` for invalid formats

## Exports
- `readNotebook(notebookPath: string, cellId?: string)` — async; returns `NotebookCellSource[]`; reads and parses a Jupyter notebook
- `mapNotebookCellsToToolResult(data: NotebookCellSource[], toolUseID: string)` — returns `ToolResultBlockParam`; converts cells to tool result format with adjacent text merging
- `parseCellId(cellId: string)` — returns `number | undefined`; parses `cell-N` format
