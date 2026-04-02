# pdfUtils

## Purpose
Utilities for PDF handling: page range parsing, model support checking, and file extension detection.

## Imports
- **Internal**: `./model/model`

## Logic
1. **parsePDFPageRange** — Parses page range strings in formats `"5"`, `"1-10"`, `"3-"` (open-ended). Returns `null` for invalid input. Pages are 1-indexed.
2. **isPDFSupported** — Checks if the current model supports native PDF document blocks. Returns `false` only for `claude-3-haiku` (substring match covers all provider formats). Unsupported models fall back to page extraction via poppler-utils.
3. **isPDFExtension** — Checks if a file extension (with or without leading dot) is a PDF. Uses `DOCUMENT_EXTENSIONS` set.

## Exports
- `DOCUMENT_EXTENSIONS` - Set of document extensions handled specially (currently `pdf`)
- `parsePDFPageRange` - Parse a page range string into `{ firstPage, lastPage }` or `null`
- `isPDFSupported` - Check if the current model supports native PDF reading
- `isPDFExtension` - Check if a file extension is PDF
