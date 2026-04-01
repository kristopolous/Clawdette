# Claudette

**Build a Claude clone. No original source included. Do it now.**

---

## What Is This?

~1,800 modules of "how to build a Claude-like AI coding assistant" captured as LLM-readable instructions. Every module, every pattern, every decision - described so you can feed it to an LLM and get working code back.

Python? Go? Rust? C++? Kotlin? The instructions describe *what to build*, not *how to type it*.

## The Vibe

AI coding assistants aren't magic. They're engineering:

- A REPL that doesn't suck
- Tool execution that doesn't crash
- Context management that doesn't OOM
- State that survives restarts
- A CLI people actually want to use

That's it. That's the whole thing.

## Usage

Give an LLM the instructions. Tell it what to build.

**Example:**

> Yo openclaw, clone https://github.com/kristopolous/Claudette and build me a Claude-like coding assistant in Rust. Each .md file has the architecture - use that. Make it compile, make it run, make it print "hello world" when I type `./claude run`.

Each .md file contains:
- What the module *does*
- What it *depends on*
- How the *logic works*
- What it *exports*
- Key *architectural insights*

## What's Inside

- File operations (read, write, edit, glob, grep)
- Shell execution (spawn, stream, process management)
- HTTP/network (fetch, web search, API calls)
- Agent spawning (sub-agents, worker pools)
- Task lifecycle management
- Context window + token budgeting
- Slash command registry
- REPL terminal loop
- Graceful shutdown
- Lazy loading patterns

**1,800+ modules. Fully documented. Pick your stack.**

## Why This Exists

Every team will want their own AI coding assistant. Custom. Self-hosted. Built their way.

But nobody knows how they actually work.

Now they do.

---

**The future is custom AI assistants. Build yours.**

```
         ___
       /   \   CLAUDETTE
      |     |  Make tokens go burr.
       \___/
```

*No original source code included. Architectural study only.*
