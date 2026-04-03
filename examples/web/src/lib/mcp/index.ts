import { McpServerConfig, Tool, ToolUseContext } from '../../types'
import { connectMcpServer, listMcpTools, callMcpTool, disconnectMcpServer, McpConnection } from './client'

export class McpManager {
  private connections: Map<string, McpConnection> = new Map()

  async registerServer(config: McpServerConfig): Promise<void> {
    if (this.connections.has(config.name)) {
      await this.unregisterServer(config.name)
    }
    const connection = await connectMcpServer(config)
    this.connections.set(config.name, connection)
  }

  async unregisterServer(name: string): Promise<void> {
    const connection = this.connections.get(name)
    if (connection) {
      disconnectMcpServer(connection)
      this.connections.delete(name)
    }
  }

  async getMcpTools(): Promise<Tool[]> {
    const tools: Tool[] = []
    for (const [name, connection] of this.connections) {
      const mcpTools = await listMcpTools(connection)
      for (const mcpTool of mcpTools) {
        tools.push({
          name: `${name}_${mcpTool.name}`,
          description: mcpTool.description,
          input_schema: mcpTool.inputSchema as Tool['input_schema'],
          execute: async (input: Record<string, unknown>, _context: ToolUseContext) => {
            return callMcpTool(connection, mcpTool.name, input)
          },
        })
      }
    }
    return tools
  }

  async callMcpTool(name: string, args: Record<string, unknown>): Promise<string> {
    const parts = name.split('_')
    const serverName = parts[0]
    const toolName = parts.slice(1).join('_')
    const connection = this.connections.get(serverName)
    if (!connection) {
      throw new Error(`MCP server "${serverName}" not found`)
    }
    return callMcpTool(connection, toolName, args)
  }

  getConnection(name: string): McpConnection | undefined {
    return this.connections.get(name)
  }

  listServers(): string[] {
    return Array.from(this.connections.keys())
  }

  async disconnectAll(): Promise<void> {
    for (const [, connection] of this.connections) {
      disconnectMcpServer(connection)
    }
    this.connections.clear()
  }
}
