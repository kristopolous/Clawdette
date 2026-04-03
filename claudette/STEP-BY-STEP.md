# How to Build Claudette — Step by Step

This guide walks you through building Claudette from the spec-kit build kit. Follow these steps in order.

---

## Step 1: Read the Build Kit

Open these files in order. Spend time on each one.

1. **`CONSTITUTION.md`** — The rules. Non-negotiable principles for this build.
2. **`SPEC.md`** — What you're building. User stories, requirements, success criteria.
3. **`PLAN.md`** — How to build it. Architecture, file structure, tech stack.
4. **`START-HERE.md`** — The technology map. Every jargon token (ALL-CAPS) maps to a capability. When a doc says "uses INFERENCE" or "requires SCHEMA", look it up here.
5. **`TASKS.md`** — Your checklist. 77 tasks in order. Do them one at a time.
6. **`INSTRUCTIONS.md`** — Detailed workflow guidance.
7. **`docs/`** — 192 behavioral specification files. Reference these as you implement each task.

---

## Step 2: Set Up the Project

```bash
# Create the project directory
mkdir claudette-python
cd claudette-python

# Create the file structure from PLAN.md
mkdir -p src/claudette/{bootstrap,query,tools,services/{api,mcp,compact},state,constants,utils,commands,repl,memory,skills,keybindings}
mkdir -p tests

# Create pyproject.toml (see TASKS.md T001 for details)
# Install dependencies
pip install -e ".[dev]"

# Verify setup
python -c "import claudette; print('OK')"
```

---

## Step 3: Work Through Tasks

Open `TASKS.md`. Start at Phase 1. For **each task**:

### 3.1 Read the task description
- Note the file path (e.g., `src/claudette/cli.py`)
- Note any [P] tag — these can be done in parallel with other [P] tasks in the same phase

### 3.2 Read the relevant docs
- Look in `docs/` for specifications related to this task
- Check `START-HERE.md` for any jargon tokens mentioned

### 3.3 Write tests first
- Create `tests/test_<module>.py`
- Write tests that **fail** because the feature doesn't exist yet
- Run `pytest tests/test_<module>.py` — confirm they fail

### 3.4 Implement the feature
- Write the code in the specified file path
- Run `pytest tests/test_<module>.py` — confirm they pass
- Run `ruff check src/` — no errors
- Run `mypy src/` — no type errors

### 3.5 Mark the task complete
- Change `[ ]` to `[x]` in `TASKS.md`
- Commit your changes: `git add . && git commit -m "T###: <task description>"`

### 3.6 Verify the phase
- After all tasks in a phase are done, run:
  ```bash
  python -c "import claudette; print('OK')"
  ```
- If it fails, fix before moving to the next phase

---

## Step 4: Phase Order

Do phases in this order. **Do not skip phases.**

| Phase | What | Tasks |
|-------|------|-------|
| **1. Foundation** | Project setup, CLI, config, constants, state | T001–T014 |
| **2. Core Loop** | API client, query engine, query loop, retry, errors | T015–T027 |
| **3. Tools** | Bash, Read, Write, Edit, Glob, Grep, WebFetch, WebSearch, Agent | T028–T039 |
| **4. Prompts** | System prompt assembly, templates, CLAUDE.md loading | T040–T046 |
| **5. REPL UI** | Terminal interface, message rendering, input handling | T047–T053 |
| **6. Permissions** | Permission system, path validation, risk assessment | T054–T057 |
| **7. Additional** | Commands, memory, compaction, cost tracking, MCP, skills | T058–T066 |
| **N. Verification** | End-to-end testing, quality gates | T067–T077 |

---

## Step 5: Final Verification

After all tasks are complete:

1. **Run the full test suite**: `pytest tests/ -v`
2. **Run linting**: `ruff check src/`
3. **Run type checking**: `mypy src/`
4. **Test with a real API**:
   ```bash
   export ANTHROPIC_API_KEY=your-key
   python -m claudette "hello world"
   ```
5. **Run through `CHECKLIST.md`** — every item must pass

---

## Key Rules

1. **Write tests before implementation** — not optional
2. **Run tests after each task** — don't accumulate broken code
3. **Follow the task order** — dependencies are intentional
4. **Don't skip features** — if the docs describe it, implement it
5. **Commit after each task** — one commit minimum per task
6. **Read the docs** — the `docs/` directory has detailed specifications
7. **Use the jargon** — ALL-CAPS tokens in docs map to capabilities in `START-HERE.md`

---

## Troubleshooting

### Import errors
```bash
pip install -e .
# Check all __init__.py files exist
```

### Test failures
```bash
pytest tests/test_specific.py -v  # Run one test file
pytest tests/test_specific.py -v -k test_name  # Run one test
```

### Linting errors
```bash
ruff check src/ --fix  # Auto-fix what it can
ruff check src/  # See remaining issues
```

### Type errors
```bash
mypy src/  # See all type errors
mypy src/claudette/specific_module.py  # Check one module
```

### API connection errors
```bash
echo $ANTHROPIC_API_KEY  # Verify key is set
# Test with curl first
curl -H "Authorization: Bearer $ANTHROPIC_API_KEY" https://api.openai.com/v1/models
```
