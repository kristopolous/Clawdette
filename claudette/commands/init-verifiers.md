## Purpose
Sets up verifier programs (like linters, type checkers, test runners) for automatic code validation.

## Imports
- **Internal**: `Command` type, task framework, prompt execution utils

## Logic
Interactive 'local-jsx' command that discovers available verifiers in the project (e.g., eslint, typecheck, test), configures them as post-edit hooks, and sets up automatic running in non-interactive mode. Guides user through selection and configuration of verifiers with React Ink UI.

## Exports
- `default` - Command object (type: 'local-jsx') for init-verifiers

### Helpful Prompt Templates

- **(Create verifier skills)** - "Use the TodoWrite tool to track your progress through this multi-step task. ## Goal: Create one or more verifier skills for the Verify agent to automatically verify code changes. Do NOT create verifiers for unit tests or typechecking. Focus on functional verification: web UI (Playwright), CLI (Tmux), and API (HTTP) verifiers. ## Phase 1: Auto-Detection - Scan top-level directories, detect project type/stack, application type, existing verification tools, dev server config. ## Phase 2: Verification Tool Setup - For web apps: check Playwright/MCP browser tools; For CLI: check asciinema/tmux; For APIs: check curl/httpie. ## Phase 3: Interactive Q&A - Confirm verifier name, project-specific questions, authentication requirements. ## Phase 4: Generate Verifier Skill - Write SKILL.md to .claude/skills/<verifier-name>/ with template: 'You are a verification executor. You receive a verification plan and execute it EXACTLY as written.' Include project context, setup instructions, authentication, reporting, cleanup, and self-update sections. ## Phase 5: Confirm Creation - Inform user where skills were created and how Verify agent discovers them."
