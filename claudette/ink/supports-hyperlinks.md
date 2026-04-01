## Purpose
Detects whether the current terminal/environment supports OSC 8 hyperlinks, extending the supports-hyperlinks library with additional terminal-specific detection.

## Imports
- **Stdlib**: None specified
- **External**: supports-hyperlinks library
- **Internal**: None specified

## Logic
1. **ADDITIONAL_HYPERLINK_TERMINALS**: Array of terminal names known to support OSC 8 hyperlinks but not detected by the base supports-hyperlinks library:
   - 'ghostty', 'Hyper', 'kitty', 'alacritty', 'iTerm.app', 'iTerm2'

2. **Type Definitions**:
   - EnvLike: Record<string, string | undefined> for environment variable-like objects
   - SupportsHyperlinksOptions: Optional parameters for overriding environment and stdout support detection

3. **supportsHyperlinks() Function**:
   - Takes optional options parameter for testing overrides
   - First checks if stdout supports hyperlinks (from options or supports-hyperlinks library)
   - If supported, returns true immediately
   - Otherwise, checks environment variables:
     * TERM_PROGRAM against ADDITIONAL_HYPERLINK_TERMINALS
     * LC_TERMINAL against ADDITIONAL_HYPERLINK_TERMINALS (preserved in tmux)
     * TERM variable containing 'kitty' (for kitty terminals)
   - Returns true if any check passes, false otherwise

## Exports
- `ADDITIONAL_HYPERLINK_TERMINALS` - Constant array of additional terminal names supporting OSC 8
- `supportsHyperlinks` - Function that returns boolean indicating OSC 8 hyperlink support