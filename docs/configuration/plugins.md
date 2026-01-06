---
sidebar_position: 3
---

# 🔌 Plugins

FtVim comes with a carefully curated set of plugins. All plugins are managed by [lazy.nvim](https://github.com/folke/lazy.nvim).

## Core

| Plugin | Description |
|--------|-------------|
| [lazy.nvim](https://github.com/folke/lazy.nvim) | Modern plugin manager |
| [plenary.nvim](https://github.com/nvim-lua/plenary.nvim) | Lua utility library |
| [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter) | Syntax highlighting and code understanding |

## UI

| Plugin | Description |
|--------|-------------|
| [catppuccin](https://github.com/catppuccin/nvim) | Default colorscheme |
| [alpha-nvim](https://github.com/goolord/alpha-nvim) | Dashboard/start screen |
| [bufferline.nvim](https://github.com/akinsho/bufferline.nvim) | Buffer tabs |
| [lualine.nvim](https://github.com/nvim-lualine/lualine.nvim) | Statusline |
| [indent-blankline.nvim](https://github.com/lukas-reineke/indent-blankline.nvim) | Indent guides |
| [mini.indentscope](https://github.com/echasnovski/mini.indentscope) | Animated scope indicator |
| [nvim-notify](https://github.com/rcarriga/nvim-notify) | Notification manager |
| [dressing.nvim](https://github.com/stevearc/dressing.nvim) | Better UI for inputs and selects |
| [nvim-web-devicons](https://github.com/nvim-tree/nvim-web-devicons) | File icons |
| [vim-illuminate](https://github.com/RRethy/vim-illuminate) | Highlight word under cursor |

## Editor

| Plugin | Description |
|--------|-------------|
| [neo-tree.nvim](https://github.com/nvim-neo-tree/neo-tree.nvim) | File explorer |
| [snacks.nvim](https://github.com/folke/snacks.nvim) | Fuzzy finder (files, grep, buffers, etc.) |
| [which-key.nvim](https://github.com/folke/which-key.nvim) | Keybinding hints |
| [toggleterm.nvim](https://github.com/akinsho/toggleterm.nvim) | Terminal integration |
| [mini.ai](https://github.com/echasnovski/mini.ai) | Better text objects |
| [mini.bufremove](https://github.com/echasnovski/mini.bufremove) | Better buffer deletion |

## Coding

| Plugin | Description |
|--------|-------------|
| [blink.cmp](https://github.com/saghen/blink.cmp) | Auto-completion |
| [nvim-lspconfig](https://github.com/neovim/nvim-lspconfig) | LSP configuration |
| [mason.nvim](https://github.com/williamboman/mason.nvim) | LSP/DAP/Linter installer |
| [mason-lspconfig.nvim](https://github.com/williamboman/mason-lspconfig.nvim) | Mason + lspconfig integration |
| [conform.nvim](https://github.com/stevearc/conform.nvim) | Code formatting |
| [Comment.nvim](https://github.com/numToStr/Comment.nvim) | Code commenting |

## Git

| Plugin | Description |
|--------|-------------|
| [gitsigns.nvim](https://github.com/lewis6991/gitsigns.nvim) | Git signs, blame, and hunks |

## Default Language Servers

FtVim configures these LSP servers by default:

| Language | Server |
|----------|--------|
| C/C++ | clangd |
| Python | pyright |
| Lua | lua_ls |

Additional servers can be installed via `:Mason`.

## Default Formatters

| Language | Formatter |
|----------|-----------|
| Lua | stylua |

Additional formatters can be installed via `:Mason`.

## Default Treesitter Parsers

The following parsers are installed by default:

- `bash`
- `c`
- `lua`
- `markdown`
- `python`
- `vim`
- `vimdoc`

Additional parsers are installed automatically when you open files of other types.

## Lazy Loading

Most plugins are lazy-loaded for fast startup:

- **Event-based**: Load on specific events (e.g., `BufReadPost`, `InsertEnter`)
- **Command-based**: Load when a command is run (e.g., `:Neotree`)
- **Keymap-based**: Load when a keymap is pressed (e.g., `<leader>ff`)

This keeps startup time fast while ensuring plugins are available when needed.

## Plugin Updates

To update all plugins:

```vim
:Lazy update
```

To check for updates without installing:

```vim
:Lazy check
```

To view plugin status:

```vim
:Lazy
```
