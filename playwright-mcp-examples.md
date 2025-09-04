# Playwright MCP Configuration

## Installed Packages

### 1. Official Playwright MCP (@playwright/mcp)
```bash
npx @playwright/mcp
```

### 2. ExecuteAutomation Playwright MCP (@executeautomation/playwright-mcp-server)
```bash
npx @executeautomation/playwright-mcp-server
```

## Usage Examples

### Basic Web Data Fetching
```bash
# Start the Playwright MCP server
npx @playwright/mcp --headless

# Or with specific options
npx @playwright/mcp --browser chrome --headless --viewport-size "1920,1080"
```

### Configuration Options
- `--browser`: chrome, firefox, webkit, msedge
- `--headless`: Run in headless mode
- `--viewport-size`: Set browser viewport (e.g., "1280,720")
- `--user-agent`: Custom user agent string
- `--proxy-server`: Proxy configuration
- `--output-dir`: Directory for output files
- `--save-trace`: Save Playwright trace
- `--caps`: Additional capabilities (vision, pdf)

### For Claude Desktop MCP Configuration
Add to your Claude Desktop configuration file:

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["-y", "@playwright/mcp", "--headless"]
    }
  }
}
```

Or using ExecuteAutomation version:

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx", 
      "args": ["-y", "@executeautomation/playwright-mcp-server"]
    }
  }
}
```

## Features
- Browser automation and web scraping
- Screenshot capture
- PDF generation
- JavaScript execution in browser context
- Accessibility snapshots
- Network request handling
- Storage state management