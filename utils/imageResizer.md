# imageResizer

## Purpose
Error type constants for analytics (numeric to comply with logEvent restrictions)

## Imports
- **Internal**: ../services/analytics/index.js, ./debug.js, ./errors.js, ./format.js, ./log.js

## Items

### ImageResizeError
**Type**: Class

### classifyImageError
**Type**: Function

### hashString
**Type**: Function

### maybeResizeAndDownsampleImageBuffer
**Type**: Function

### maybeResizeAndDownsampleImageBlock
**Type**: Function

### compressImageBuffer
**Type**: Function

### compressImageBufferWithTokenLimit
**Type**: Function

### compressImageBlock
**Type**: Function

### createCompressedImageResult
**Type**: Function

### tryProgressiveResizing
**Type**: Function

### applyFormatOptimizations
**Type**: Function

### tryPalettePNG
**Type**: Function

### tryJPEGConversion
**Type**: Function

### createUltraCompressedJPEG
**Type**: Function

### detectImageFormatFromBuffer
**Type**: Function

### detectImageFormatFromBase64
**Type**: Function

### createImageMetadataText
**Type**: Function

### ResizeResult
**Type**: Interface

### ImageCompressionContext
**Type**: Interface

### CompressedImageResult
**Type**: Interface

### ImageBlockWithDimensions
**Type**: Interface

### ImageMediaType
**Type**: Type alias

### ImageDimensions
**Type**: Type alias

## Exports
- ImageResizeError
- ImageDimensions
- ResizeResult
- maybeResizeAndDownsampleImageBuffer
- ImageBlockWithDimensions
- maybeResizeAndDownsampleImageBlock
- compressImageBuffer
- compressImageBufferWithTokenLimit
- compressImageBlock
- detectImageFormatFromBuffer
- detectImageFormatFromBase64
- createImageMetadataText

## Source
`imageResizer.ts`