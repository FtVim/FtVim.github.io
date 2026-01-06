# First Steps

Congratulations on installing FtVim! This guide will help you verify everything is working and get you started with the basics.

## 1. Verify Your Installation

### Run Health Checks

Open Neovim and run:

```vim
:checkhealth
```

This runs diagnostics on your setup. Look for any red errors - warnings (yellow) are usually fine.

Key sections to check:
- **nvim** - Core Neovim functionality
- **nvim-treesitter** - Syntax highlighting
- **mason** - LSP/tool installer

### Check Plugin Status

```vim
:Lazy
```

This opens the lazy.nvim plugin manager. All plugins should show as installed (green checkmarks).

Press `S` to sync and update all plugins if needed.

### Check Mason Status

```vim
:Mason
```

This shows installed language servers and tools. You should see at least:
- `lua_ls` (Lua language server)
- `clangd` (C/C++ language server)
- `pyright` (Python language server)
- `stylua` (Lua formatter)
- `shfmt` (Shell formatter)

## 2. Install Language Servers for Your Languages

FtVim includes LSP servers for C/C++, Python, and Lua by default. For other languages:

### Using Mason (Recommended)

1. Open Mason: `<leader>cm` or `:Mason`
2. Search for your language (press `/`)
3. Press `i` to install

### Common Servers by Language

| Language | Server | Install Command |
|----------|--------|-----------------|
| JavaScript/TypeScript | tsserver | `:MasonInstall typescript-language-server` |
| Rust | rust_analyzer | `:MasonInstall rust-analyzer` |
| Go | gopls | `:MasonInstall gopls` |
| Java | jdtls | `:MasonInstall jdtls` |
| HTML/CSS | html, cssls | `:MasonInstall html-lsp css-lsp` |

After installing, add the server to your config to ensure it's set up:

```lua
-- ~/.config/nvim/lua/plugins/lsp.lua
return {
  {
    "neovim/nvim-lspconfig",
    opts = {
      servers = {
        tsserver = {},  -- Enable TypeScript
        rust_analyzer = {},  -- Enable Rust
      },
    },
  },
}
```

## 3. Learn Essential Keymaps

FtVim uses `<Space>` as the leader key. Press `<Space>` and wait to see all available options via which-key.

### Navigation

| Keymap | Description |
|--------|-------------|
| `<leader>ff` | Find files |
| `<leader>fg` | Live grep (search text) |
| `<leader>fb` | Find buffers |
| `<leader>fr` | Recent files |
| `<leader>e` | File explorer (Neo-tree) |

### LSP (Code Intelligence)

| Keymap | Description |
|--------|-------------|
| `gd` | Go to definition |
| `gr` | Find references |
| `K` | Hover documentation |
| `<leader>ca` | Code actions |
| `<leader>cr` | Rename symbol |
| `<leader>cf` | Format code |

### Windows & Buffers

| Keymap | Description |
|--------|-------------|
| `<leader>bd` | Delete buffer |
| `<C-h/j/k/l>` | Navigate between windows |
| `<leader>-` | Horizontal split |
| `<leader>\|` | Vertical split |

### Git

| Keymap | Description |
|--------|-------------|
| `<leader>gg` | Open Lazygit |
| `<leader>gf` | Git file history |
| `<leader>gb` | Git blame |

## 4. Try the Basic Workflow

### Open a Project

```bash
cd ~/your-project
nvim
```

Or open a specific file:

```bash
nvim ~/your-project/main.py
```

### Navigate Files

1. Press `<leader>ff` to find files
2. Type part of the filename
3. Press `Enter` to open

### Edit Code

1. Navigate to a function
2. Press `K` to see documentation
3. Press `gd` to go to definition
4. Press `<C-o>` to go back

### Format and Save

1. Make some changes
2. Press `<leader>cf` to format
3. Press `:w` to save (or `<leader>w` if configured)

## 5. Make Your First Customization

Create a custom configuration file:

```bash
mkdir -p ~/.config/nvim/lua/plugins
nvim ~/.config/nvim/lua/plugins/custom.lua
```

Add a simple customization:

```lua
-- ~/.config/nvim/lua/plugins/custom.lua
return {
  -- Example: Change colorscheme
  {
    "folke/tokyonight.nvim",
    opts = {
      style = "night",  -- night, storm, day, moon
    },
  },
}
```

Save and restart Neovim to see changes.

## 6. Explore Which-Key

Press `<leader>` (Space) and wait a moment. Which-key will show all available commands:

- `f` - Find/File operations
- `g` - Git operations
- `b` - Buffer operations
- `c` - Code operations
- `x` - Diagnostics
- `s` - Search operations
- `u` - UI toggles

Navigate through the menus to discover features!

## 7. Common Tasks

### Open Terminal

Press `<C-\>` (Ctrl + backslash) to toggle the terminal.

### Toggle File Explorer

Press `<leader>e` to toggle Neo-tree sidebar.

### Search Across Project

Press `<leader>fg` to search for text across all files.

### Toggle Diagnostics

Press `<leader>xd` to toggle error/warning display.

## What's Next?

Now that you have the basics:

1. **[Keymaps](../configuration/keymaps)** - Complete keymap reference
2. **[Plugins](../configuration/plugins)** - Explore included plugins
3. **[LSP](../configuration/lsp)** - Configure language servers
4. **[Tips and Tricks](./tips-and-tricks)** - Level up your Vim skills

## Getting Help

- `:help <topic>` - Built-in Neovim help
- `:Lazy` - Plugin manager
- `:Mason` - LSP/tool installer
- `:checkhealth` - Diagnose issues
- `<leader>` - Which-key menu
