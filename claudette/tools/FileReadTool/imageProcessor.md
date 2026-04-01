## Purpose
Provides image processing capabilities for the Read tool, supporting image operations like resizing, format conversion, and metadata extraction.

## Imports
- **Stdlib**: `buffer` (Buffer type), `crypto` (randomUUID used via upload but not here)
- **External**: `feature` from 'bun:bundle', `sharp` (or native `image-processor-napi`)
- **Internal**: `isInBundledMode` utility

## Logic
Exports:
- `SharpInstance` type: Interface to image processor with methods `metadata()`, `resize()`, `jpeg()`, `png()`, `webp()`, `toBuffer()`.
- `SharpFunction` type: Function type for creating a SharpInstance from Buffer.
- `SharpCreator` type: Function for creating new images (used for image generation, distinct from processing).
- `getImageProcessor()`: Async singleton that returns a SharpFunction. Prefers native `image-processor-napi` in bundled mode; falls back to `sharp`. Caches module globally.
- `getImageCreator()`: Async singleton that returns SharpCreator; always uses `sharp` (creator not supported by native module). Caches module globally.

Dynamic import handling accommodates ESM/CJS interop via `MaybeDefault` and `unwrapDefault`.

## Exports
- `getImageProcessor()` (async)
- `getImageCreator()` (async)
- `SharpInstance` (type)
- `SharpFunction` (type)
- `SharpCreator` (type)
