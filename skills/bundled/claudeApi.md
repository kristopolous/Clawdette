# claudeApi

## Purpose
Implements the /claude-api bundled skill with lazy-loaded documentation for multiple programming languages.

## Imports
- **Stdlib**: `fs/promises`
- **External**: (none)
- **Internal**: cwd utils, bundledSkills, claudeApiContent types

## Logic
1. Lazy-loads claudeApiContent (247KB of .md strings) only when /claude-api invoked
2. `LANGUAGE_INDICATORS` - maps languages to file/project indicators for detection
3. `detectLanguage` - scans cwd for language-specific files (requirements.txt, tsconfig.json, etc.)
4. `getFilesForLanguage` - filters SKILL_FILES for detected language + shared docs
5. Supports: python, typescript, java, go, ruby, csharp, php, curl
6. Builds prompt with relevant language docs and shared reference material
7. Falls back to all docs if language detection fails

## Exports
- `registerClaudeApiSkill` - function that registers the /claude-api skill
- `detectLanguage` - detects project language from cwd files
- `LANGUAGE_INDICATORS` - record mapping languages to file indicators
