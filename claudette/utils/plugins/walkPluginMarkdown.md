# utils/plugins/walkPluginMarkdown

## Purpose
Recursively walks plugin directories, invoking callback for each .md file.

## Imports
- **Stdlib**: `path`
- **External**: (none)
- **Internal**: debug, fsOperations

## Logic
1. `SKILL_MD_RE` - /^skill\.md$/i regex for skill.md files
2. `walkPluginMarkdown` - main function for walking plugin markdown
3. Takes rootDir, onFile callback, and opts (stopAtSkillDir, logLabel)
4. Namespace array tracks subdirectory path relative to root
5. When stopAtSkillDir true and directory contains SKILL.md:
   - onFile called for all .md files in that directory
   - Subdirectories not scanned (skill directories are leaf containers)
6. Readdir errors swallowed with debug log (one bad directory doesn't abort plugin load)
7. `scan` - internal recursive scanner
8. Collects .md files, recurses into subdirectories
9. Calls onFile with fullPath and namespace for each .md file
10. Namespace built as [...namespace, entry.name] for subdirectories

## Exports
- `SKILL_MD_RE` - skill.md regex pattern
- `walkPluginMarkdown` - walks plugin markdown files
