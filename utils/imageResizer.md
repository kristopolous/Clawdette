# utils/imageResizer

## Purpose
Provides image resizing utilities for API compliance.

## Imports
- **Stdlib**: (none)
- **External**: `@anthropic-ai/sdk`
- **Internal**: apiLimits, analytics, FileReadTool imageProcessor, debug, errors, format, log

## Logic
1. `ImageMediaType` - 'image/png' | 'image/jpeg' | 'image/gif' | 'image/webp'
2. Error type constants: MODULE_LOAD, PROCESSING, UNKNOWN, PIXEL_LIMIT, MEMORY, TIMEOUT, VIPS, PERMISSION
3. `ImageResizeError` - error class for resize failures
4. `classifyImageError` - classifies errors for analytics
5. Checks Node.js error codes (MODULE_NOT_FOUND, EACCES, ENOMEM)
6. Falls back to message matching for sharp/vips errors
7. `IMAGE_MAX_HEIGHT`, `IMAGE_MAX_WIDTH` - max dimensions
8. `IMAGE_TARGET_RAW_SIZE` - target size for resizing
9. `API_IMAGE_MAX_BASE64_SIZE` - max base64 size
10. `maybeResizeAndDownsampleImageBlock` - resizes image if needed
11. Uses sharp for image processing
12. Handles module loading errors gracefully
13. Logs events for analytics tracking
14. Formats error messages for user display

## Exports
- `ImageMediaType` - image media type
- `ImageResizeError` - resize error class
- `classifyImageError` - classifies image errors
- `maybeResizeAndDownsampleImageBlock` - resizes image block
- (Image resizing constants)
