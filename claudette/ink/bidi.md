## Purpose
Provides bidirectional text reordering for terminal rendering on platforms that lack native Unicode Bidi Algorithm support (primarily Windows environments).

## Imports
- **Stdlib**: None specified
- **External**: bidi-js library
- **Internal**: None specified

## Logic
1. **Detection Logic**:
   - `needsBidi()` function determines if software bidi reordering is needed:
     * Always needed on Windows (process.platform === 'win32')
     * Needed when WT_SESSION environment variable is present (Windows Terminal/WSL)
     * Needed when TERM_PROGRAM is 'vscode' (VS Code integrated terminal)
   - Result is cached in `needsSoftwareBidi` variable after first check

2. **Bidi Instance Management**:
   - Lazily initializes bidi-js instance via `getBidi()` function
   - Stores instance in `bidiInstance` variable to avoid recreation

3. **Reordering Process** (`reorderBidi` function):
   - Early returns if bidi not needed or empty input array
   - Creates plain text string from ClusteredChar values for bidi processing
   - Checks for RTL characters using `hasRTLCharacters()` to avoid unnecessary processing
   - Gets embedding levels from bidi-js with 'auto' direction detection
   - Maps bidi levels back to ClusteredChar indices accounting for multi-code unit characters
   - Implements standard bidi reordering algorithm:
     * Finds maximum embedding level
     * For each level from max down to 1:
       - Finds contiguous runs of characters at or above current level
       - Reverses both the character array and level array for each run
   - Returns reordered array of ClusteredChar objects

4. **Helper Functions**:
   - `reverseRange<T>`: Generic function to reverse elements in array range
   - `reverseRangeNumbers`: Specialized version for number arrays (levels)
   - `hasRTLCharacters`: Regex-based check for Hebrew, Arabic, Thaana, and Syriac Unicode ranges

5. **ClusteredChar Type**:
   - Defines the structure used throughout ink for rendered characters:
     * value: The character/grapheme string
     * width: Display width (1 or 2 columns)
     * styleId: Reference to style in style pool
     * hyperlink: Optional URL for OSC 8 hyperlinks

## Exports
- `reorderBidi` - Main function that takes ClusteredChar[] and returns visually ordered array