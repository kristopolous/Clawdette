# utils/jetbrains

## Purpose
Provides JetBrains IDE plugin detection utilities.

## Imports
- **Stdlib**: `os`, `path`
- **External**: (none)
- **Internal**: fsOperations, ide types

## Logic
1. `PLUGIN_PREFIX` - 'claude-code-jetbrains-plugin'
2. `ideNameToDirMap` - maps IDE names to directory patterns
3. Includes: pycharm, intellij, webstorm, phpstorm, rubymine, clion, goland, rider, datagrip, appcode, dataspell, aqua, gateway, fleet, androidstudio
4. `buildCommonPluginDirectoryPaths` - builds plugin directory paths
5. macOS: ~/Library/Application Support/JetBrains, ~/Library/Application Support
6. Windows: %APPDATA%/JetBrains, %LOCALAPPDATA%/JetBrains, %APPDATA%
7. Linux: ~/.config/JetBrains, ~/.local/share/JetBrains, ~/.{IDE}
8. Android Studio uses Google directories
9. `isJetBrainsPluginInstalled` - checks if plugin installed
10. Scans plugin directories for claude-code-jetbrains-plugin
11. `isJetBrainsPluginInstalledCached` - cached version of check
12. `getJetBrainsIDEType` - gets IDE type from process
13. `getJetBrainsIDEVersion` - gets IDE version
14. `showJetBrainsOnboarding` - shows JetBrains onboarding

## Exports
- `PLUGIN_PREFIX` - plugin prefix constant
- `ideNameToDirMap` - IDE name to directory map
- `buildCommonPluginDirectoryPaths` - builds plugin paths
- `isJetBrainsPluginInstalled` - checks plugin installed
- `isJetBrainsPluginInstalledCached` - cached plugin check
- `getJetBrainsIDEType` - gets IDE type
- `getJetBrainsIDEVersion` - gets IDE version
- `showJetBrainsOnboarding` - shows onboarding
