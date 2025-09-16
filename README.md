# MCP Server Boilerplate (TypeScript/JavaScript)

This is a boilerplate template for creating a Model Context Protocol (MCP) server using TypeScript/JavaScript.

## Features

- Uses the official [@modelcontextprotocol/sdk](https://github.com/modelcontextprotocol/typescript-sdk)
- Example tool implementation (weather API)
- Ready for integration with Claude Desktop, VS Code, and other MCP clients

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm

### Setup

```bash
npm install
```

### Build

```bash
npm run build
```

### Run

```bash
node build/index.js
```

### MCP Integration

To connect this server to an MCP client (e.g., Claude Desktop, VS Code):

1. Add an entry to your `mcp.json` or client config:
   ```json
   {
     "servers": {
       "my-mcp-server": {
         "type": "stdio",
         "command": "node",
         "args": ["/absolute/path/to/build/index.js"]
       }
     }
   }
   ```
2. Restart your MCP client.

## References

- [MCP Documentation](https://modelcontextprotocol.io/)
- [TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk)
- [Build an MCP Server Guide](https://modelcontextprotocol.io/docs/develop/build-server)

## License

MIT
