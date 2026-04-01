# utils/imageValidation

## Purpose
Provides image size validation for API compliance.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: apiLimits, analytics, format

## Logic
1. `OversizedImage` - { index, size } type for oversized image info
2. `ImageSizeError` - error class for images exceeding API limit
3. Single image: "Image base64 size (X) exceeds API limit (Y)"
4. Multiple images: lists all oversized images with sizes
5. `isBase64ImageBlock` - type guard for base64 image blocks
6. Checks type === 'image', source.type === 'base64', source.data is string
7. `validateImagesForAPI` - validates all images in messages
8. Safety net at API boundary to catch oversized images
9. API's 5MB limit applies to base64-encoded string length
10. Works with UserMessage/AssistantMessage and raw MessageParam types
11. Only checks user messages (skips assistant messages)
12. Handles wrapped message format { type, message: { role, content } }
13. Throws ImageSizeError if any image exceeds limit
14. Logs events for analytics tracking

## Exports
- `OversizedImage` - oversized image info type
- `ImageSizeError` - image size error class
- `isBase64ImageBlock` - type guard for base64 image blocks
- `validateImagesForAPI` - validates images for API
