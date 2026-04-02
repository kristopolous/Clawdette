# utils/modifiers

## Purpose
Provides synchronous detection of modifier key presses (shift, command, control, option) on macOS via a native addon (`modifiers-napi`).

## Imports
- **External**: `modifiers-napi` (native addon, loaded dynamically via `require`)

## Logic
1. `ModifierKey` type: union of `'shift' | 'command' | 'control' | 'option'`
2. `prewarmModifiers()` — loads the native module in advance to avoid latency on first use; macOS-only (no-op on other platforms); idempotent via `prewarmed` flag; silently ignores errors
3. `isModifierPressed(modifier)` — synchronously checks if a modifier key is currently pressed; returns `false` on non-macOS platforms; dynamically requires `modifiers-napi` on each call

## Exports
- `ModifierKey` — type alias for modifier key names
- `prewarmModifiers()` — pre-loads the native module (macOS only, no-op elsewhere)
- `isModifierPressed(modifier: ModifierKey)` — returns `boolean`; synchronous; macOS only
