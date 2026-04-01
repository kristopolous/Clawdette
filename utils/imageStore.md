# utils/imageStore

## Purpose
Provides image storage utilities for pasted images.

## Imports
- **Stdlib**: `fs/promises`, `path`
- **External**: (none)
- **Internal**: bootstrap state, config types, debug, envUtils, fsOperations

## Logic
1. `IMAGE_STORE_DIR` - 'image-cache'
2. `MAX_STORED_IMAGE_PATHS` (200) - max stored image paths
3. `storedImagePaths` - in-memory cache of image paths by ID
4. `getImageStoreDir` - gets image store directory for current session
5. Path: ~/.claude/image-cache/{sessionId}/
6. `ensureImageStoreDir` - ensures image store directory exists
7. `getImagePath` - gets file path for image by ID
8. Format: {id}.{extension} where extension from mediaType
9. `cacheImagePath` - caches image path immediately (fast, no I/O)
10. Evicts oldest if at capacity
11. `storeImage` - stores image from pastedContents to disk
12. Opens file with 0o600 permissions (owner read/write only)
13. Writes base64 content, syncs to disk
14. Evicts oldest if at capacity
15. `evictOldestIfAtCap` - evicts oldest image if at capacity
16. `getImagePaths` - gets all stored image paths
17. `clearImageStore` - clears image store

## Exports
- `IMAGE_STORE_DIR` - image store directory constant
- `MAX_STORED_IMAGE_PATHS` - max stored paths constant
- `cacheImagePath` - caches image path
- `storeImage` - stores image to disk
- `evictOldestIfAtCap` - evicts oldest if at capacity
- `getImagePaths` - gets all image paths
- `clearImageStore` - clears image store
