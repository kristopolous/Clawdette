'use client'

interface ToolPermission {
  id: string
  toolName: string
  toolInput: Record<string, unknown>
}

interface ToolPermissionDialogProps {
  permission: ToolPermission
  onAllow: () => void
  onDeny: () => void
  onAllowAll: () => void
}

export default function ToolPermissionDialog({
  permission,
  onAllow,
  onDeny,
  onAllowAll,
}: ToolPermissionDialogProps) {
  const formatInput = () => {
    const entries = Object.entries(permission.toolInput)
    return entries.map(([key, value]) => (
      <div key={key} className="flex gap-2 text-xs font-mono">
        <span className="text-[#8b949e]">{key}:</span>
        <span className="text-[#c9d1d9] truncate">{String(value)}</span>
      </div>
    ))
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-[#161b22] border border-[#30363d] rounded-lg max-w-md w-full shadow-xl">
        <div className="px-4 py-3 border-b border-[#30363d]">
          <h3 className="text-sm font-semibold text-[#c9d1d9]">Tool Permission Required</h3>
        </div>
        <div className="px-4 py-3">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2 py-0.5 bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-mono rounded">
              {permission.toolName}
            </span>
          </div>
          <div className="space-y-1 bg-[#0d1117] rounded-md p-3">
            {formatInput()}
          </div>
        </div>
        <div className="px-4 py-3 border-t border-[#30363d] flex items-center justify-between gap-2">
          <button
            onClick={onDeny}
            className="px-3 py-1.5 text-xs bg-[#21262d] border border-[#30363d] rounded hover:bg-[#30363d] transition-colors text-[#c9d1d9]"
          >
            Deny
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={onAllow}
              className="px-3 py-1.5 text-xs bg-[#238636] text-white rounded hover:bg-[#2ea043] transition-colors"
            >
              Allow
            </button>
            <button
              onClick={onAllowAll}
              className="px-3 py-1.5 text-xs bg-[#1f6feb] text-white rounded hover:bg-[#388bfd] transition-colors"
            >
              Allow all
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
