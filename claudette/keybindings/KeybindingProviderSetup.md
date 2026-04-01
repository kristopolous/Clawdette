## Purpose
Top-level React component that initializes the keybinding system, loads default and user bindings with hot-reload support, and intercepts chord sequences before other input handlers.

## Imports
- **Stdlib**: none
- **External**: `react` (useCallback, useEffect, useRef, useState), `react/compiler-runtime`
- **Internal**: `context/notifications.js` (useNotifications), `ink/events/input-event.js` (InputEvent), `ink.js` (Key, useInput), `utils/array.js` (count), `utils/debug.js` (logForDebugging), `utils/stringUtils.js` (plural), `KeybindingContext.js` (KeybindingProvider), `loadUserBindings.js` (initializeKeybindingWatcher, loadKeybindingsSyncWithWarnings, subscribeToKeybindingChanges), `resolver.js` (resolveKeyWithChordState), `types.js` (KeybindingContextName, ParsedBinding, ParsedKeystroke), `validate.js` (KeybindingWarning)

## Logic
Loads bindings synchronously for initial render, subscribes to file change events for hot-reloading, and displays validation warnings via notifications. Manages chord state with a ref for synchronous access and a timeout for automatic cancellation. Renders a ChordInterceptor that registers useInput first in the component tree to capture chord keystrokes before child components like PromptInput can consume them. The interceptor resolves each keystroke through the chord resolver, invoking registered handlers on match and stopping propagation to prevent duplicate handling.

## Exports
- `KeybindingSetup` - provider component that wraps the app to enable keybinding support with hot-reload and chord handling
