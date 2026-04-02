# addDirPluginSettings

## Purpose
Reads plugin-related settings (`enabledPlugins`, `extraKnownMarketplaces`) from `--add-dir` directories, with lowest priority in the settings cascade.

## Imports
- **External**: `zod/v4`
- **Stdlib**: `path`
- **Internal**: `../../bootstrap/state`, `../settings/settings`, `../settings/types`

## Logic
Iterates over additional directories from `getAdditionalDirectoriesForClaudeMd()`. For each directory, reads `settings.json` then `settings.local.json` from `.claude/` subdirectory (local wins within dir). Across directories, later CLI order wins on conflict. Callers must spread standard settings on top so user/project/local/flag/policy sources override these.

## Exports
- `getAddDirEnabledPlugins` - Merged `enabledPlugins` record from all `--add-dir` directories
- `getAddDirExtraMarketplaces` - Merged `extraKnownMarketplaces` record from all `--add-dir` directories
