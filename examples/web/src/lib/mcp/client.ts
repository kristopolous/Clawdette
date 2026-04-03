import { spawn, ChildProcess } from 'child_process'
import { McpServerConfig } from '../../types'

export interface McpConnection {
  config: McpServerConfig
  process: ChildProcess
  stdin: NodeJS.WritableStream
  stdout: NodeJS.ReadableStream
  pendingRequests: Map<number, { resolve: (value: unknown) => void; reject: (reason: unknown) => void }>
  nextRequestId: number
  initialized: boolean
  capabilities?: Record<string, unknown>
}

let messageId = 0

function createRequest(method: string, params: Record<string, unknown> = {}) {
  const id = ++messageId
  return { jsonrpc: '2.0', id, method, params }
}

function sendRequest(connection: McpConnection, method: string, params: Record<string, unknown> = {}): Promise<unknown> {
  return new Promise((resolve, reject) => {
    const request = createRequest(method, params)
    connection.pendingRequests.set(request.id, { resolve, reject })
    const data = JSON.stringify(request) + '\n'
    connection.stdin.write(data)
  })
}

function sendNotification(connection: McpConnection, method: string, params: Record<string, unknown> = {}) {
  const notification = { jsonrpc: '2.0', method, params }
  connection.stdin.write(JSON.stringify(notification) + '\n')
}

export async function connectMcpServer(config: McpServerConfig): Promise<McpConnection> {
  const child = spawn(config.command, config.args, {
    env: { ...process.env, ...config.env },
    stdio: ['pipe', 'pipe', 'pipe'],
  })

  const connection: McpConnection = {
    config,
    process: child,
    stdin: child.stdin,
    stdout: child.stdout,
    pendingRequests: new Map(),
    nextRequestId: 1,
    initialized: false,
  }

  let buffer = ''

  child.stdout.on('data', (chunk: Buffer) => {
    buffer += chunk.toString()
    const lines = buffer.split('\n')
    buffer = lines.pop() || ''

    for (const line of lines) {
      if (!line.trim()) continue
      try {
        const message = JSON.parse(line)
        if (message.id !== undefined) {
          const pending = connection.pendingRequests.get(message.id)
          if (pending) {
            connection.pendingRequests.delete(message.id)
            if (message.error) {
              pending.reject(new Error(message.error.message || JSON.stringify(message.error)))
            } else {
              pending.resolve(message.result)
            }
          }
        }
      } catch {
        // ignore parse errors
      }
    }
  })

  child.stderr.on('data', () => {
    // stderr is ignored for MCP protocol
  })

  child.on('error', (err) => {
    for (const [, pending] of connection.pendingRequests) {
      pending.reject(err)
    }
    connection.pendingRequests.clear()
  })

  child.on('exit', (code) => {
    const error = new Error(`MCP server exited with code ${code}`)
    for (const [, pending] of connection.pendingRequests) {
      pending.reject(error)
    }
    connection.pendingRequests.clear()
  })

  const result = await sendRequest(connection, 'initialize', {
    protocolVersion: '2024-11-05',
    capabilities: {},
    clientInfo: { name: 'claudette-web', version: '0.1.0' },
  }) as Record<string, unknown>

  connection.capabilities = result?.capabilities as Record<string, unknown> | undefined
  connection.initialized = true

  sendNotification(connection, 'notifications/initialized')

  return connection
}

export async function listMcpTools(connection: McpConnection): Promise<Array<{ name: string; description: string; inputSchema: Record<string, unknown> }>> {
  const result = await sendRequest(connection, 'tools/list', {}) as { tools: Array<{ name: string; description: string; inputSchema: Record<string, unknown> }> }
  return result?.tools || []
}

export async function callMcpTool(connection: McpConnection, name: string, args: Record<string, unknown>): Promise<string> {
  const result = await sendRequest(connection, 'tools/call', { name, arguments: args }) as { content: Array<{ type: string; text?: string }> }

  if (!result?.content) {
    return JSON.stringify(result)
  }

  return result.content.map((block) => block.text || '').join('\n')
}

export function disconnectMcpServer(connection: McpConnection): void {
  for (const [, pending] of connection.pendingRequests) {
    pending.reject(new Error('Connection closed'))
  }
  connection.pendingRequests.clear()
  connection.process.kill()
}
