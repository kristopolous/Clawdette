'use client'

import { useState, useCallback } from 'react'

interface FileExplorerProps {
  vfs: {
    root: {
      type: 'file' | 'directory'
      name: string
      content?: string
      children?: Map<string, any>
    }
    list: (path: string) => string[]
    isDir: (path: string) => boolean
  }
  onFileSelect: (path: string) => void
  selectedPath?: string
}

interface TreeNode {
  name: string
  path: string
  type: 'file' | 'directory'
  children?: TreeNode[]
}

function buildTree(
  vfs: FileExplorerProps['vfs'],
  path: string,
  name: string
): TreeNode {
  const isDir = vfs.isDir(path)
  const node: TreeNode = { name, path, type: isDir ? 'directory' : 'file' }

  if (isDir) {
    const entries = vfs.list(path)
    node.children = entries
      .sort((a, b) => {
        const aIsDir = vfs.isDir(`${path}/${a}`)
        const bIsDir = vfs.isDir(`${path}/${b}`)
        if (aIsDir && !bIsDir) return -1
        if (!aIsDir && bIsDir) return 1
        return a.localeCompare(b)
      })
      .map(entry => buildTree(vfs, `${path}/${entry}`, entry))
  }

  return node
}

function TreeNodeComponent({
  node,
  depth,
  onFileSelect,
  selectedPath,
}: {
  node: TreeNode
  depth: number
  onFileSelect: (path: string) => void
  selectedPath?: string
}) {
  const [expanded, setExpanded] = useState(depth < 2)

  const handleClick = useCallback(() => {
    if (node.type === 'directory') {
      setExpanded(!expanded)
    } else {
      onFileSelect(node.path)
    }
  }, [node, expanded, onFileSelect])

  const isSelected = selectedPath === node.path

  return (
    <div>
      <button
        onClick={handleClick}
        className={`w-full flex items-center gap-1 py-1 px-2 text-xs font-mono hover:bg-[#1c2128] transition-colors text-left ${
          isSelected ? 'bg-[#1c2128] text-[#58a6ff]' : 'text-[#c9d1d9]'
        }`}
        style={{ paddingLeft: `${depth * 12 + 8}px` }}
      >
        <span className="w-4 h-4 flex items-center justify-center flex-shrink-0">
          {node.type === 'directory' ? (
            <span className="text-[#8b949e]">{expanded ? '▼' : '▶'}</span>
          ) : (
            <span className="text-[#8b949e]">◈</span>
          )}
        </span>
        <span className="truncate">{node.name}</span>
      </button>
      {node.type === 'directory' && expanded && node.children && (
        <div>
          {node.children.map(child => (
            <TreeNodeComponent
              key={child.path}
              node={child}
              depth={depth + 1}
              onFileSelect={onFileSelect}
              selectedPath={selectedPath}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default function FileExplorer({
  vfs,
  onFileSelect,
  selectedPath,
}: FileExplorerProps) {
  const tree = buildTree(vfs, '/', '/')

  return (
    <div className="h-full flex flex-col bg-[#0d1117] border-r border-[#30363d]">
      <div className="px-3 py-2 border-b border-[#30363d]">
        <h2 className="text-xs font-semibold text-[#8b949e] uppercase tracking-wider">
          Files
        </h2>
      </div>
      <div className="flex-1 overflow-y-auto">
        <TreeNodeComponent
          node={tree}
          depth={0}
          onFileSelect={onFileSelect}
          selectedPath={selectedPath}
        />
      </div>
    </div>
  )
}
