import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js"
import { z } from "zod"

const server = new McpServer({
  name: "my-mcp-server",
  version: "1.0.0",
  capabilities: {
    tools: {},
    resources: {},
    prompts: {},
  },
})

// Example tool: get_hello
server.tool(
  "get_hello",
  "Returns a hello message.",
  {
    name: z.string().describe("Your name"),
  },
  async ({ name }) => {
    return {
      content: [
        {
          type: "text",
          text: `Hello, ${name}! Welcome to MCP.`,
        },
      ],
    }
  },
)

async function main() {
  const transport = new StdioServerTransport()
  await server.connect(transport)
  console.error("MCP Server running on stdio")
}

main().catch((error) => {
  console.error("Fatal error in main():", error)
  process.exit(1)
})
