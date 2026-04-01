# imageStore

## Purpose
In-memory cache of stored image paths

## Imports
- **Stdlib**: fs/promises, path
- **Internal**: ../bootstrap/state.js, ./config.js, ./debug.js, ./envUtils.js, ./fsOperations.js

## Items

### getImageStoreDir
**Type**: Function

### ensureImageStoreDir
**Type**: Function

### getImagePath
**Type**: Function

### cacheImagePath
**Type**: Function

### storeImage
**Type**: Function

### storeImages
**Type**: Function

### getStoredImagePath
**Type**: Function

### clearStoredImagePaths
**Type**: Function

### evictOldestIfAtCap
**Type**: Function

### cleanupOldImageCaches
**Type**: Function

## Exports
- cacheImagePath
- storeImage
- storeImages
- getStoredImagePath
- clearStoredImagePaths
- cleanupOldImageCaches

## Source
`imageStore.ts`