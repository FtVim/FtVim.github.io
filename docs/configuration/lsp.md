# LSP (Language Server Protocol)

FtVim comes with built-in LSP support, providing IDE-like features such as code completion, go-to-definition, hover documentation, and diagnostics.

## What is LSP?

The Language Server Protocol (LSP) is a standard that allows editors to communicate with language servers to provide features like:

- **Code completion** - Intelligent suggestions as you type
- **Go to definition** - Jump to where a function or variable is defined
- **Find references** - See all places where something is used
- **Hover documentation** - View documentation by hovering over code
- **Diagnostics** - Real-time error and warning detection
- **Code actions** - Quick fixes and refactoring options
- **Rename** - Rename symbols across your entire project

## How FtVim Handles LSP

FtVim uses three plugins to manage LSP:

| Plugin | Purpose |
|--------|---------|
| [nvim-lspconfig](https://github.com/neovim/nvim-lspconfig) | Configuration for LSP servers |
| [mason.nvim](https://github.com/williamboman/mason.nvim) | Package manager for LSP servers, formatters, linters |
| [mason-lspconfig.nvim](https://github.com/williamboman/mason-lspconfig.nvim) | Bridge between mason and lspconfig |

## Default Language Servers

FtVim comes pre-configured with these language servers:

| Language | Server | Description |
|----------|--------|-------------|
| C/C++ | `clangd` | Full-featured C/C++ language server |
| Python | `pyright` | Fast Python type checker and language server |
| Lua | `lua_ls` | Lua language server with Neovim API support |

These servers are automatically installed via Mason when you first open a file of that type.

## LSP Keymaps

These keymaps are available when an LSP server is attached to the current buffer:

| Keymap | Description |
|--------|-------------|
| `gd` | Go to definition |
| `gr` | Find references |
| `gI` | Go to implementation |
| `gy` | Go to type definition |
| `gD` | Go to declaration |
| `K` | Show hover documentation |
| `gK` | Show signature help |
| `<C-k>` (insert mode) | Show signature help |
| `<leader>ca` | Code action |
| `<leader>cr` | Rename symbol |
| `<leader>ch` | Toggle inlay hints |
| `<leader>cm` | Open Mason |

## Installing New Language Servers

### Using Mason UI

1. Open Mason with `<leader>cm` or `:Mason`
2. Browse or search for your language server
3. Press `i` to install

### Via Configuration

Add servers to your user configuration:

```lua
-- In your Neovim config (e.g., ~/.config/nvim/lua/plugins/lsp.lua)
return {
  {
    "neovim/nvim-lspconfig",
    opts = {
      servers = {
        -- Add new servers here
        tsserver = {}, -- TypeScript/JavaScript
        rust_analyzer = {}, -- Rust
        gopls = {}, -- Go
      },
    },
  },
}
```

## Configuring Server Settings

Override settings for any server:

```lua
return {
  {
    "neovim/nvim-lspconfig",
    opts = {
      servers = {
        pyright = {
          settings = {
            python = {
              analysis = {
                typeCheckingMode = "strict", -- Change from "basic" to "strict"
                autoSearchPaths = true,
                useLibraryCodeForTypes = true,
              },
            },
          },
        },
      },
    },
  },
}
```

## Disabling Language Servers

### Temporarily

To stop an LSP server for the current session:

```vim
:LspStop
```

To stop a specific server:

```vim
:LspStop clangd
```

### Permanently

Disable a server via configuration:

```lua
return {
  {
    "neovim/nvim-lspconfig",
    opts = {
      servers = {
        -- Set to false to disable
        clangd = false,
      },
    },
  },
}
```

Or prevent Mason from installing it:

```lua
return {
  {
    "neovim/nvim-lspconfig",
    opts = {
      servers = {
        clangd = {
          mason = false, -- Don't install via Mason
        },
      },
    },
  },
}
```

## Managing Diagnostics

### Toggle Diagnostics

Use `<leader>xd` to toggle diagnostics on/off for the current buffer.

### Disable Diagnostics for Specific Filetypes

Add an autocommand to your configuration:

```lua
vim.api.nvim_create_autocmd("FileType", {
  pattern = { "markdown", "text" },
  callback = function()
    vim.diagnostic.enable(false)
  end,
})
```

### Configure Diagnostic Display

FtVim configures diagnostics with virtual text and signs by default. To customize:

```lua
vim.diagnostic.config({
  virtual_text = false, -- Disable inline virtual text
  signs = true,
  underline = true,
  update_in_insert = false,
  severity_sort = true,
})
```

## Troubleshooting

### Check LSP Status

```vim
:LspInfo
```

Shows which LSP servers are attached to the current buffer.

### View LSP Logs

```vim
:LspLog
```

Opens the LSP log file for debugging issues.

### Check Mason Status

```vim
:Mason
```

View installed servers and their status.

### Common Issues

**Server not starting:**
1. Check `:LspInfo` to see if the server is attached
2. Ensure the server is installed (`:Mason`)
3. Check `:LspLog` for errors
4. Verify the language server binary is in your PATH

**No completions:**
1. Ensure LSP is attached (`:LspInfo`)
2. Wait a moment for the server to index your project
3. Check `:checkhealth` for any issues

**Slow performance:**
1. Large projects may take time to index
2. Consider configuring the server to limit scope (e.g., `diagnosticMode = "openFilesOnly"` for pyright)

## Advanced Configuration

### Custom Server Setup

For servers requiring special setup:

```lua
return {
  {
    "neovim/nvim-lspconfig",
    opts = {
      servers = {
        clangd = {
          cmd = {
            "clangd",
            "--background-index",
            "--clang-tidy",
            "--header-insertion=never", -- Custom flag
          },
        },
      },
      setup = {
        -- Custom setup function for clangd
        clangd = function(_, opts)
          -- Custom logic here
          require("lspconfig").clangd.setup(opts)
          return true -- Return true to skip default setup
        end,
      },
    },
  },
}
```

### Using LSP Without Mason

If you prefer to manage LSP servers manually:

```lua
return {
  {
    "neovim/nvim-lspconfig",
    opts = {
      servers = {
        clangd = {
          mason = false, -- Skip Mason installation
        },
      },
    },
  },
}
```

Ensure the server binary is available in your system PATH.
