## Purpose
Provides tool constants and the prompt template for the Read tool, explaining file reading capabilities and instructions.

## Imports
- **Internal**:
  - `isPDFSupported` from utils/pdfUtils
  - `BASH_TOOL_NAME` from BashTool/toolName

## Logic
Exports:
- `FILE_READ_TOOL_NAME` - 'Read'
- `FILE_UNCHANGED_STUB` - constant message for unchanged files
- `MAX_LINES_TO_READ` - constant 2000 (default line limit)
- `DESCRIPTION` - 'Read a file from the local filesystem.'
- `LINE_FORMAT_INSTRUCTION` - explains cat -n format, 1-based line numbers
- `OFFSET_INSTRUCTION_DEFAULT` - recommends reading whole file by default
- `OFFSET_INSTRUCTION_TARGETED` - guidance for reading specific parts of large files
- `renderPromptTemplate(lineFormat, maxSizeInstruction, offsetInstruction)`: Function that assembles the full tool prompt by interpolating the provided instruction fragments into a comprehensive description. The prompt covers:
  - Basic usage and assumption that all files are accessible
  - Parameter requirements (absolute path)
  - Default and optional limits (lines, offset, limit)
  - Image support, PDF support (conditionally includes PDF max pages note)
  - Jupyter notebook support
  - Distinction between files and directories (use Bash for directories)
  - Handling screenshots
  - Empty file warning

The template is called by the main tool with appropriate values based on configuration.

## Exports
- `FILE_READ_TOOL_NAME` (string)
- `FILE_UNCHANGED_STUB` (string)
- `MAX_LINES_TO_READ` (number)
- `DESCRIPTION` (string)
- `LINE_FORMAT_INSTRUCTION` (string)
- `OFFSET_INSTRUCTION_DEFAULT` (string)
- `OFFSET_INSTRUCTION_TARGETED` (string)
- `renderPromptTemplate(...)` (function)
