# utils/sandbox/sandbox-adapter

## Purpose
Adapter layer wrapping @anthropic-ai/sandbox-runtime with Claude CLI-specific integrations.

## Imports
- **Stdlib**: `fs`, `fs/promises`, `path`
- **External**: `@anthropic-ai/sandbox-runtime`, `lodash-es`
- **Internal**: bootstrap state, debug, path, platform, settings changeDetector/constants/managedPath/settings, BashTool, FileEditTool, FileReadTool, WebFetchTool, errors, permissions filesystem/PermissionRule, ripgrep

## Logic
1. Bridges external sandbox-runtime package with Claude CLI's settings, tool integration, additional features
2. `SandboxManager` - extends BaseSandboxManager from @anthropic-ai/sandbox-runtime
3. `SandboxRuntimeConfigSchema` - runtime config schema
4. `SandboxViolationStore` - violation store
5. `FsReadRestrictionConfig`, `FsWriteRestrictionConfig` - filesystem restriction configs
6. `IgnoreViolationsConfig` - ignore violations config
7. `NetworkHostPattern`, `NetworkRestrictionConfig` - network restriction configs
8. `SandboxAskCallback` - sandbox ask callback
9. `SandboxDependencyCheck` - dependency check
10. `SandboxRuntimeConfig` - runtime config
11. `SandboxViolationEvent` - violation event
12. `getAdditionalDirectoriesForClaudeMd`, `getCwdState`, `getOriginalCwd` - bootstrap state functions
13. `logForDebugging` - debug logging
14. `expandPath` - expands path
15. `getPlatform`, `Platform` - platform functions
16. `settingsChangeDetector` - settings change detector
17. `SETTING_SOURCES`, `SettingSource` - setting source types
18. `getManagedSettingsDropInDir` - gets managed settings drop-in dir
19. `getInitialSettings`, `getSettings_DEPRECATED`, `getSettingsFilePathForSource`, `getSettingsForSource`, `getSettingsRootPathForSource`, `updateSettingsForSource` - settings functions
20. `SettingsJson` - settings JSON type
21. `BASH_TOOL_NAME`, `FILE_EDIT_TOOL_NAME`, `FILE_READ_TOOL_NAME`, `WEB_FETCH_TOOL_NAME` - tool name constants
22. `errorMessage` - gets error message
23. `getClaudeTempDir` - gets Claude temp dir
24. `permissionRuleValueFromString` - parses permission rule from string
25. `permissionRuleExtractPrefix` - extracts prefix from permission rule
26. `ripgrepCommand` - gets ripgrep command

## Exports
- `SandboxManager` - sandbox manager class
- `SandboxRuntimeConfigSchema` - runtime config schema
- `SandboxViolationStore` - violation store
- (Sandbox adapter functions)
