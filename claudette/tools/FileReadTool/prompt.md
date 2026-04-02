# FileReadTool/prompt

## Purpose

Exports constants and a template function for generating the Read tool's prompt. Documents tool capabilities (text, images, PDFs, notebooks), usage parameters, and instructions. Dynamically includes PDF support based on runtime feature detection.

## Imports

- **Stdlib**: None
- **External**: None
- **Internal**:
  - PDF: `isPDFSupported` (utility)
  - Tool: `BASH_TOOL_NAME` from BashTool

## Logic

**Constants**:
- `FILE_READ_TOOL_NAME`: `'Read'` - canonical tool name
- `FILE_UNCHANGED_STUB`: Message used when file unchanged since last read
- `MAX_LINES_TO_READ = 2000` - default line limit
- `DESCRIPTION = 'Read a file from the local filesystem.'`
- `LINE_FORMAT_INSTRUCTION = '- Results are returned using cat -n format, with line numbers starting at 1'`
- `OFFSET_INSTRUCTION_DEFAULT`: Recommends reading whole file by default; offset/limit optional for long files
- `OFFSET_INSTRUCTION_TARGETED`: Encourages reading only the needed part when target is known

**Function**:
- `renderPromptTemplate(lineFormat, maxSizeInstruction, offsetInstruction): string`:
  - Builds multi-line prompt with:
    - Tool name and premise ("Reads a file... Assume this tool is able to read all files")
    - Parameters: `file_path` must be absolute; default reads up to `MAX_LINES_TO_READ` from start; includes `maxSizeInstruction`
    - `offsetInstruction` and `lineFormat`
    - Image support note (multimodal visual presentation)
    - Conditional PDF support: if `isPDFSupported()`, adds paragraph about reading PDFs, mandatory pages parameter for large PDFs (>10 pages), 20-page max per request
    - Notebook support (.ipynb) with all cells/outputs
    - Directories note: use BashTool instead
    - Screenshot encouragement: always read provided screenshot path
    - Empty file warning note
  - Returns the complete prompt string

**Note**: The caller (FileReadTool) supplies runtime values for `maxSizeInstruction` (e.g., token/byte limits) and chooses which offset instruction to use.

## Exports

- `FILE_READ_TOOL_NAME: string`
- `FILE_UNCHANGED_STUB: string`
- `MAX_LINES_TO_READ: number`
- `DESCRIPTION: string`
- `LINE_FORMAT_INSTRUCTION: string`
- `OFFSET_INSTRUCTION_DEFAULT: string`
- `OFFSET_INSTRUCTION_TARGETED: string`
- `renderPromptTemplate(lineFormat: string, maxSizeInstruction: string, offsetInstruction: string): string`
