# pdf

## Purpose
Reads PDF files as base64, validates PDF format, extracts page counts via `pdfinfo`, and renders PDF pages as JPEG images via `pdftoppm` for large documents.

## Imports
- **Stdlib**: `crypto`, `fs/promises`, `path`
- **Internal**: `../constants/apiLimits`, `./errors`, `./execFileNoThrow`, `./format`, `./fsOperations`, `./toolResultStorage`

## Logic
1. **readPDF** — Validates file size against `PDF_TARGET_RAW_SIZE` (~20MB), checks `%PDF-` magic bytes to reject non-PDF files, reads and base64-encodes the file. Returns structured `PDFResult` with typed error reasons (`empty`, `too_large`, `corrupted`, `unknown`).
2. **getPDFPageCount** — Runs `pdfinfo` (poppler-utils) with a 10s timeout, parses the `Pages:` line from stdout. Returns `null` if unavailable.
3. **extractPDFPages** — For large PDFs, uses `pdftoppm` to render pages as JPEG images at 100 DPI. Checks `pdftoppm` availability (cached), validates file size against `PDF_MAX_EXTRACT_SIZE`, detects password-protected and corrupted PDFs from stderr output. Outputs to a UUID-named directory under the tool results dir.

## Exports
- `PDFError` - Typed error with reason (`empty`|`too_large`|`password_protected`|`corrupted`|`unknown`|`unavailable`) and message
- `PDFResult<T>` - Discriminated union: `{ success: true, data: T }` | `{ success: false, error: PDFError }`
- `readPDF` - Read a PDF file and return base64-encoded data with validation
- `getPDFPageCount` - Get page count via `pdfinfo`, returns `null` if unavailable
- `PDFExtractPagesResult` - Result type for page extraction with output directory and count
- `resetPdftoppmCache` - Reset the `pdftoppm` availability cache (tests only)
- `isPdftoppmAvailable` - Check if `pdftoppm` binary is available (cached)
- `extractPDFPages` - Extract PDF pages as JPEG images using `pdftoppm`, with optional page range
