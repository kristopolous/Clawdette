# ink/focus

## Purpose
Provides DOM-like focus manager for Ink terminal UI.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: ink dom, ink events focus-event

## Logic
1. `MAX_FOCUS_STACK` (32) - max focus stack size
2. `FocusManager` - pure state focus manager
3. Tracks activeElement and focus stack
4. No reference to tree - callers pass root for tree walks
5. Stored on root DOMElement so any node can reach via parentNode
6. `activeElement` - currently focused element
7. `dispatchFocusEvent` - dispatches focus events
8. `enabled` - whether focus is enabled
9. `focusStack` - stack of previously focused elements
10. `focus` - focuses a node
11. Returns if node === activeElement or !enabled
12. Deduplicates before pushing to prevent unbounded growth from Tab cycling
13. Dispatches blur event to previous, focus event to new
14. `blur` - blurs current element
15. Dispatches blur event with null as related target
16. `handleNodeRemoved` - handles node removal from tree
17. Removes node and descendants from stack via isInTree check
18. Checks if activeElement is removed node or descendant
19. Dispatches blur, restores focus from stack
20. `handleAutoFocus` - handles auto focus
21. `handleClickFocus` - handles click focus
22. Checks tabIndex attribute, focuses if number
23. `enable` - enables focus
24. `disable` - disables focus
25. `focusNext` - focuses next tabbable element
26. `focusPrevious` - focuses previous tabbable element
27. `moveFocus` - moves focus by direction (1 or -1)
28. Collects tabbable elements, cycles with wraparound
29. `collectTabbable` - collects all tabbable elements
30. `walkTree` - walks tree collecting tabbable elements
31. Checks tabIndex >= 0, skips #text nodes
32. `isInTree` - checks if node is in tree under root
33. `getRootNode` - walks up to find root with FocusManager
34. `getFocusManager` - gets FocusManager for node via root

## Exports
- `MAX_FOCUS_STACK` - max focus stack constant
- `FocusManager` - focus manager class
- `getRootNode` - gets root node
- `getFocusManager` - gets focus manager
