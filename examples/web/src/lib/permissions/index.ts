import { PermissionContext } from '../../types'

export function getEmptyPermissionContext(): PermissionContext {
  return {
    mode: 'ask',
    alwaysAllow: new Set(),
    alwaysDeny: new Set(),
  }
}

export function checkPermission(
  toolName: string,
  _input: Record<string, unknown>,
  context: PermissionContext
): 'allow' | 'deny' | 'ask' {
  if (context.mode === 'yolo') {
    return 'allow'
  }

  if (context.mode === 'auto') {
    if (context.alwaysDeny.has(toolName)) {
      return 'deny'
    }
    if (context.alwaysAllow.has(toolName)) {
      return 'allow'
    }
    return 'ask'
  }

  if (context.alwaysAllow.has(toolName)) {
    return 'allow'
  }

  if (context.alwaysDeny.has(toolName)) {
    return 'deny'
  }

  return 'ask'
}

export function updatePermissionRules(
  context: PermissionContext,
  toolName: string,
  rule: 'alwaysAllow' | 'alwaysDeny' | 'remove'
): void {
  if (rule === 'alwaysAllow') {
    context.alwaysAllow.add(toolName)
    context.alwaysDeny.delete(toolName)
  } else if (rule === 'alwaysDeny') {
    context.alwaysDeny.add(toolName)
    context.alwaysAllow.delete(toolName)
  } else {
    context.alwaysAllow.delete(toolName)
    context.alwaysDeny.delete(toolName)
  }
}
