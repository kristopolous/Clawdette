## Purpose
Defines server-side API limits for images, PDFs, and media to prevent request failures.

## Imports
- **Stdlib**: none
- **External**: none
- **Internal**: none

## Logic
Constants document the hard limits enforced by the inference provider API including base64-encoded image size, raw image dimensions, PDF file sizes, page counts, and maximum media items per request. Client-side thresholds for extraction vs inline handling are also defined.

## Exports
- `API_IMAGE_MAX_BASE64_SIZE` - maximum base64-encoded image size (5 MB)
- `IMAGE_TARGET_RAW_SIZE` - target raw image size before base64 encoding (3.75 MB)
- `IMAGE_MAX_WIDTH` - client-side maximum image width (2000px)
- `IMAGE_MAX_HEIGHT` - client-side maximum image height (2000px)
- `PDF_TARGET_RAW_SIZE` - target raw PDF size fitting within API request limit (20 MB)
- `API_PDF_MAX_PAGES` - maximum PDF pages accepted by the API (100)
- `PDF_EXTRACT_SIZE_THRESHOLD` - size threshold above which PDFs are extracted to page images (3 MB)
- `PDF_MAX_EXTRACT_SIZE` - maximum PDF file size for page extraction path (100 MB)
- `PDF_MAX_PAGES_PER_READ` - max pages extracted in a single Read tool call (20)
- `PDF_AT_MENTION_INLINE_THRESHOLD` - page count above which PDFs are referenced instead of inlined (10)
- `API_MAX_MEDIA_PER_REQUEST` - maximum media items per API request (100)
