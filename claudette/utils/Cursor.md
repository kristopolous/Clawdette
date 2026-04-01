# Cursor

## Purpose
Track yank state for yank-pop (alt-y)

## Imports
- **Internal**: ../ink/stringWidth, ../ink/wrapAnsi

## Items

### pushToKillRing
**Type**: Function

### getLastKill
**Type**: Function

### getKillRingItem
**Type**: Function

### getKillRingSize
**Type**: Function

### clearKillRing
**Type**: Function

### resetKillAccumulation
**Type**: Function

### recordYank
**Type**: Function

### canYankPop
**Type**: Function

### yankPop
**Type**: Function

### updateYankLength
**Type**: Function

### resetYankState
**Type**: Function

### WrappedText
**Type**: Type alias

### Position
**Type**: Type alias

## Exports
- pushToKillRing
- getLastKill
- getKillRingItem
- getKillRingSize
- clearKillRing
- resetKillAccumulation
- recordYank
- canYankPop
- yankPop
- updateYankLength
- resetYankState
- VIM_WORD_CHAR_REGEX
- WHITESPACE_REGEX
- isVimWordChar
- isVimWhitespace
- isVimPunctuation
- Cursor
- MeasuredText

## Source
`Cursor.ts`