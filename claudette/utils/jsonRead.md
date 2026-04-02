# utils/jsonRead

## Purpose
Provides BOM stripping utility for JSON reading.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: (none)

## Logic
1. `UTF8_BOM` - '\uFEFF' (UTF-8 byte order mark)
2. `stripBOM` - strips BOM from content string
3. PowerShell 5.x writes UTF-8 with BOM by default (Out-File, Set-Content)
4. Without stripping, JSON.parse fails with "Unexpected token"
5. Leaf module to break settings → json → log → types/logs → settings cycle
6. Used by json safeParseJSON and syncCacheState inline parsing
7. Returns content.slice(1) if starts with BOM, else original content

## Exports
- `stripBOM` - strips UTF-8 BOM from content string if present
