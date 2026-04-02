#!/usr/bin/env python3
"""tk-claudette - A desktop GUI AI coding agent built with Python and Tkinter.

Supports any OpenAI-compatible endpoint: Anthropic, OpenAI, OpenRouter, Ollama,
LiteLLM, vLLM, or any custom host.
"""

import argparse
import sys
import os


def main():
    parser = argparse.ArgumentParser(
        description="tk-claudette - Vibe your own Claude (Tkinter edition)",
        epilog="""
Examples:
  # Anthropic (default)
  python3 -m tk.main

  # OpenAI
  python3 -m tk.main --host https://api.openai.com/v1 --model gpt-4o

  # OpenRouter
  python3 -m tk.main --host https://openrouter.ai/api/v1 --model anthropic/claude-sonnet-4

  # Ollama (local)
  python3 -m tk.main --host http://localhost:11434/v1 --model llama3

  # LiteLLM proxy
  python3 -m tk.main --host http://localhost:4000 --model claude-sonnet-4

  # Custom vLLM endpoint
  python3 -m tk.main --host http://localhost:8000/v1 --model meta-llama/Llama-3-70b
        """,
        formatter_class=argparse.RawDescriptionHelpFormatter,
    )
    parser.add_argument(
        "--model", "-m",
        help="Model name (any model your endpoint supports)",
    )
    parser.add_argument(
        "--host",
        help="API base URL (e.g. https://api.openai.com/v1, http://localhost:11434/v1)",
    )
    parser.add_argument(
        "--api-key",
        help="API key (or set ANTHROPIC_API_KEY / OPENAI_API_KEY / OPENROUTER_API_KEY)",
    )
    parser.add_argument(
        "--cwd",
        help="Working directory",
        default=os.getcwd(),
    )
    parser.add_argument(
        "--max-tokens",
        type=int,
        default=8192,
        help="Maximum tokens per request",
    )
    parser.add_argument(
        "--version", "-v",
        action="version",
        version="tk-claudette 0.1.0",
    )
    args = parser.parse_args()

    from tk.config import Config
    from tk.api import APIClient
    from tk.tools import create_tool_registry
    from tk.models import CostTracker
    from tk.query import QueryEngine
    from tk.ui import MainWindow

    config = Config()

    if args.host:
        config.set_api_base(args.host)
    if args.model:
        config.set_model(args.model)
    if args.api_key:
        config.set_api_key(args.api_key)

    if not config.api_key:
        print("Error: No API key found.")
        print("Set one of: ANTHROPIC_API_KEY, OPENAI_API_KEY, OPENROUTER_API_KEY")
        print("Or pass --api-key on the command line.")
        sys.exit(1)

    api_client = APIClient(
        api_key=config.api_key,
        base_url=config.api_base,
        model=config.model,
    )

    tool_registry = create_tool_registry()

    cost_tracker = CostTracker(
        input_cost_per_million=config.input_cost_per_million,
        output_cost_per_million=config.output_cost_per_million,
    )

    config.max_tokens = args.max_tokens

    query_engine = QueryEngine(
        api_client=api_client,
        tool_registry=tool_registry,
        cost_tracker=cost_tracker,
        config=config,
        cwd=args.cwd,
    )

    app = MainWindow(config=config, query_engine=query_engine, tool_registry=tool_registry)
    app.run()


if __name__ == "__main__":
    main()
