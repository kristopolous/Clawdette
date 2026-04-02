# utils/generatedFiles

## Purpose
Detects generated/vendored files to exclude from attribution. Based on GitHub Linguist vendored patterns.

## Imports
- **Stdlib**: `path` (`basename`, `extname`, `posix`, `sep`)
- **External**: (none)
- **Internal**: (none)

## Items

### EXCLUDED_FILENAMES
**Type**: Constant (Set)
Exact filename matches (case-insensitive): `package-lock.json`, `yarn.lock`, `pnpm-lock.yaml`, `bun.lockb`, `bun.lock`, `composer.lock`, `gemfile.lock`, `cargo.lock`, `poetry.lock`, `pipfile.lock`, `shrinkwrap.json`, `npm-shrinkwrap.json`.

### EXCLUDED_EXTENSIONS
**Type**: Constant (Set)
Extension patterns (case-insensitive): `.lock`, `.min.js`, `.min.css`, `.min.html`, `.bundle.js`, `.bundle.css`, `.generated.ts`, `.generated.js`, `.d.ts`.

### EXCLUDED_DIRECTORIES
**Type**: Constant (array)
Directory path patterns: `/dist/`, `/build/`, `/out/`, `/output/`, `/node_modules/`, `/vendor/`, `/vendored/`, `/third_party/`, `/third-party/`, `/external/`, `/.next/`, `/.nuxt/`, `/.svelte-kit/`, `/coverage/`, `/__pycache__/`, `/.tox/`, `/venv/`, `/.venv/`, `/target/release/`, `/target/debug/`.

### EXCLUDED_FILENAME_PATTERNS
**Type**: Constant (array of regex)
Regex patterns for complex matching: `*.min.*`, `*-min.*`, `*.bundle.*`, `*.generated.*`, `*.gen.*`, `*.auto.*`, `*_generated.*`, `*_gen.*`, `*.pb.(go|js|ts|py|rb)`, `*_pb2?.py`, `*.pb.h`, `*.grpc.*`, `*.swagger.*`, `*.openapi.*`.

### isGeneratedFile
**Type**: Function
Checks if a file should be excluded from attribution. Normalizes path separators to posix. Checks: exact filename match, extension match (including compound extensions like `.min.js`), directory patterns, filename regex patterns.

### filterGeneratedFiles
**Type**: Function
Filters an array of file paths, removing generated files. Delegates to `isGeneratedFile`.

## Exports
- `isGeneratedFile` — checks if a single file is generated
- `filterGeneratedFiles` — filters array of paths, removing generated files

## Source
`generatedFiles`
