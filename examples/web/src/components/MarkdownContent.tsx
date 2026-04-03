'use client'

import { marked } from 'marked'
import { useState, useEffect } from 'react'

interface CodeBlockProps {
  code: string
  language?: string
}

function CodeBlock({ code, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="my-3 rounded-lg overflow-hidden border border-[#30363d]">
      <div className="flex items-center justify-between px-3 py-1.5 bg-[#161b22] border-b border-[#30363d]">
        <span className="text-xs text-[#8b949e] font-mono">{language || 'text'}</span>
        <button
          onClick={handleCopy}
          className="text-xs text-[#8b949e] hover:text-[#c9d1d9] transition-colors"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre className="p-3 bg-[#0d1117] overflow-x-auto">
        <code className="text-xs font-mono text-[#c9d1d9]">{code}</code>
      </pre>
    </div>
  )
}

interface MarkdownContentProps {
  content: string
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  const [tokens, setTokens] = useState<marked.Token[]>([])

  useEffect(() => {
    const lexer = new marked.Lexer()
    setTokens(lexer.lex(content))
  }, [content])

  const renderToken = (token: marked.Token, index: number): React.ReactNode => {
    switch (token.type) {
      case 'code': {
        const code = token as marked.Tokens.Code
        return <CodeBlock key={index} code={code.text} language={code.lang || undefined} />
      }
      case 'paragraph': {
        const p = token as marked.Tokens.Paragraph
        return <p key={index} dangerouslySetInnerHTML={{ __html: p.text }} />
      }
      case 'heading': {
        const h = token as marked.Tokens.Heading
        const Tag = `h${h.depth}` as keyof JSX.IntrinsicElements
        return <Tag key={index} dangerouslySetInnerHTML={{ __html: h.text }} />
      }
      case 'list': {
        const list = token as marked.Tokens.List
        const Tag = list.ordered ? 'ol' : 'ul'
        return (
          <Tag key={index}>
            {list.items.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: item.text }} />
            ))}
          </Tag>
        )
      }
      case 'blockquote': {
        const bq = token as marked.Tokens.Blockquote
        return (
          <blockquote key={index} className="border-l-4 border-[#30363d] pl-4 text-[#8b949e]">
            {bq.tokens.map((t, i) => renderToken(t, i))}
          </blockquote>
        )
      }
      case 'hr':
        return <hr key={index} className="border-[#30363d] my-4" />
      case 'text': {
        const t = token as marked.Tokens.Text
        return t.raw ? <span key={index} dangerouslySetInnerHTML={{ __html: t.raw }} /> : <span key={index}>{t.text}</span>
      }
      case 'html': {
        const html = token as marked.Tokens.HTML
        return <div key={index} dangerouslySetInnerHTML={{ __html: html.text }} />
      }
      case 'table': {
        const table = token as marked.Tokens.Table
        return (
          <table key={index} className="border-collapse border border-[#30363d] text-sm">
            {table.header && (
              <thead>
                <tr>
                  {table.header.map((cell, i) => (
                    <th key={i} className="border border-[#30363d] px-3 py-1.5 bg-[#161b22] font-medium">
                      {cell.text}
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {table.rows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="border border-[#30363d] px-3 py-1.5">
                      {cell.text}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )
      }
      default:
        if ('tokens' in token && Array.isArray((token as marked.Tokens.Generic).tokens)) {
          return <div key={index}>{(token as marked.Tokens.Generic).tokens?.map((t, i) => renderToken(t, i))}</div>
        }
        return <div key={index}>{(token as marked.Tokens.Generic).raw || (token as marked.Tokens.Generic).text || ''}</div>
    }
  }

  return (
    <div className="prose prose-invert prose-sm max-w-none">
      {tokens.map((token, i) => renderToken(token, i))}
    </div>
  )
}
