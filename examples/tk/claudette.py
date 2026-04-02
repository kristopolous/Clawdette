#!/usr/bin/env python3
"""Launcher for tk-claudette."""
import sys
import os

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "src"))

from tk.main import main

if __name__ == "__main__":
    main()
