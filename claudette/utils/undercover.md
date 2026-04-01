# utils/undercover

## Purpose
Provides undercover mode safety utilities for contributing to public/open-source repos.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: commitAttribution, config, envUtils

## Logic
1. Undercover mode adds safety instructions to commit/PR prompts
2. Strips all attribution to avoid leaking internal model codenames, project names, or Anthropic-internal info
3. Model is not told what model it is
4. Activation:
   - CLAUDE_CODE_UNDERCOVER=1 — force ON (even in internal repos)
   - Otherwise AUTO: active UNLESS repo remote matches internal allowlist (INTERNAL_MODEL_REPOS)
   - Safe default is ON — Claude may push to public remotes from CWD that isn't git checkout
   - NO force-OFF — guards against model codename leaks
5. All code paths gated on process.env.USER_TYPE === 'ant'
6. USER_TYPE is build-time --define, bundler constant-folds checks and DCEs ant-only branches from external builds
7. In external builds, every function reduces to trivial return
8. `isUndercover` - checks if undercover mode active
9. `getUndercoverInstructions` - gets undercover mode instructions
10. Lists what NEVER to include: internal model codenames, unreleased model versions, internal repo names, internal tooling, "Claudette" phrase, model/version hints, Co-Authored-By lines
11. Provides GOOD/BAD examples
12. `shouldShowUndercoverAutoNotice` - checks if should show auto-undercover explainer dialog
13. True when: undercover active via auto-detection (not forced via env), user hasn't seen notice before
14. Pure function — component marks flag on mount
15. `getRepoClassCached` - gets cached repo class
16. `getGlobalConfig` - gets global config
17. `isEnvTruthy` - checks env var truthy

## Exports
- `isUndercover` - checks undercover mode
- `getUndercoverInstructions` - gets undercover instructions
- `shouldShowUndercoverAutoNotice` - checks if should show notice

### Helpful Prompt Templates

- **Undercover mode instructions for commit/PR prompts** - "## UNDERCOVER MODE — CRITICAL\n\nYou are operating UNDERCOVER in a PUBLIC/OPEN-SOURCE repository. Your commit\nmessages, PR titles, and PR bodies MUST NOT contain ANY Anthropic-internal\ninformation. Do not blow your cover.\n\nNEVER include in commit messages or PR descriptions:\n- Internal model codenames (animal names like Capybara, Tengu, etc.)\n- Unreleased model version numbers (e.g., opus-4-7, sonnet-4-8)\n- Internal repo or project names (e.g., claude-cli-internal, anthropics/…)\n- Internal tooling, Slack channels, or short links (e.g., go/cc, #claude-code-…)\n- The phrase \"Claude Code\" or any mention that you are an AI\n- Any hint of what model or version you are\n- Co-Authored-By lines or any other attribution\n\nWrite commit messages as a human developer would — describe only what the code\nchange does.\n\nGOOD:\n- \"Fix race condition in file watcher initialization\"\n- \"Add support for custom key bindings\"\n- \"Refactor parser for better error messages\"\n\nBAD (never write these):\n- \"Fix bug found while testing with Claude Capybara\"\n- \"1-shotted by claude-opus-4-6\"\n- \"Generated with Claude Code\"\n- \"Co-Authored-By: Claude Opus 4.6 <…>\""
