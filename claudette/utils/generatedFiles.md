# utils/generatedFiles

## Purpose
Provides generated file detection for attribution exclusion.

## Imports
- **Stdlib**: `path`
- **External**: (none)
- **Internal**: (none)

## Logic
1. `EXCLUDED_FILENAMES` - exact filename matches (packagelockon, yarn.lock, etc.)
2. `EXCLUDED_EXTENSIONS` - extension patterns (.lock, min, .d, etc.)
3. `EXCLUDED_DIRECTORIES` - directory patterns (/dist/, /build/, /node_modules/, etc.)
4. `EXCLUDED_FILENAME_PATTERNS` - regex patterns for complex matching
5. Patterns: *.min.*, *-min.*, *.bundle.*, *.generated.*, *.gen.*, *.auto.*
6. Protocol buffer files: *.pb.(go|js|ts|py|rb), *_pb2?.py, *.pb.h
7. gRPC generated: *.grpc.*
8. Swagger/OpenAPI: *.swagger.*, *.openapi.*
9. `isGeneratedFile` - checks if file should be excluded from attribution
10. Based on GitHub Linguist vendored patterns
11. Checks filename, extension, directory, and pattern matches
12. Case-insensitive matching for filenames and extensions

## Exports
- `EXCLUDED_FILENAMES` - excluded filename set
- `EXCLUDED_EXTENSIONS` - excluded extension set
- `EXCLUDED_DIRECTORIES` - excluded directory patterns
- `EXCLUDED_FILENAME_PATTERNS` - excluded filename regex patterns
- `isGeneratedFile` - checks if file is generated
