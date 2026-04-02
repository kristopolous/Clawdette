'use client'

import { useState, useEffect, useCallback } from 'react'

interface FileViewerProps {
  path: string
  content: string
  isDirty: boolean
  onChange: (content: string) => void
  onSave: () => void
  onClose: () => void
}

export default function FileViewer({
  path,
  content,
  isDirty,
  onChange,
  onSave,
  onClose,
}: FileViewerProps) {
  const [editMode, setEditMode] = useState(false)
  const [editContent, setEditContent] = useState(content)

  useEffect(() => {
    setEditContent(content)
    setEditMode(false)
  }, [content])

  const handleSave = useCallback(() => {
    onChange(editContent)
    onSave()
    setEditMode(false)
  }, [editContent, onChange, onSave])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 's') {
        e.preventDefault()
        if (editMode) handleSave()
      }
    },
    [editMode, handleSave]
  )

  const fileName = path.split('/').pop() || path

  return (
    <div className="h-full flex flex-col bg-[#0d1117]" onKeyDown={handleKeyDown}>
      <div className="flex items-center justify-between px-3 py-2 border-b border-[#30363d]">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-[#c9d1d9]">{fileName}</span>
          <span className="text-xs text-[#8b949e]">{path}</span>
          {isDirty && <span className="text-xs text-[#d29922]">●</span>}
        </div>
        <div className="flex items-center gap-2">
          {!editMode ? (
            <button
              onClick={() => setEditMode(true)}
              className="px-2 py-1 text-xs bg-[#21262d] border border-[#30363d] rounded hover:bg-[#30363d] transition-colors"
            >
              Edit
            </button>
          ) : (
            <>
              <button
                onClick={() => {
                  setEditContent(content)
                  setEditMode(false)
                }}
                className="px-2 py-1 text-xs bg-[#21262d] border border-[#30363d] rounded hover:bg-[#30363d] transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-2 py-1 text-xs bg-[#238636] text-white rounded hover:bg-[#2ea043] transition-colors"
              >
                Save
              </button>
            </>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs text-[#8b949e] hover:text-[#c9d1d9] transition-colors"
          >
            ✕
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        {editMode ? (
          <textarea
            value={editContent}
            onChange={e => setEditContent(e.target.value)}
            className="w-full h-full p-3 bg-[#0d1117] text-[#c9d1d9] font-mono text-xs resize-none focus:outline-none"
            spellCheck={false}
          />
        ) : (
          <pre className="p-3 text-xs font-mono text-[#c9d1d9] whitespace-pre-wrap">
            {content}
          </pre>
        )}
      </div>
    </div>
  )
}
