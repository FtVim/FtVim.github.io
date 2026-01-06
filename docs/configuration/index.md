---
sidebar_position: 1
---

# ⚙️ Configuration

FtVim is designed to be easily customizable. Your personal configuration lives in the starter template, separate from FtVim's core plugins.

## 📂 File Structure

```
~/.config/nvim/
├── init.lua                    # Entry point (don't modify)
└── lua/
    ├── config/
    │   ├── lazy.lua            # Plugin manager setup & extras
    │   ├── options.lua         # Your Neovim options
    │   ├── keymaps.lua         # Your custom keymaps
    │   └── autocmds.lua        # Your autocommands
    └── plugins/
        └── example.lua         # Your custom plugins
```

## 🔧 Customizing Options

Edit `~/.config/nvim/lua/config/options.lua` to override FtVim's default options:

```lua
-- Disable relative line numbers
vim.opt.relativenumber = false

-- Enable format on save
vim.g.autoformat = true

-- Change leader key (default is space)
vim.g.mapleader = ","

-- Set tab width
vim.opt.tabstop = 2
vim.opt.shiftwidth = 2
```

### Default Options

FtVim sets sensible defaults including:

| Option | Default | Description |
|--------|---------|-------------|
| `mapleader` | `" "` (space) | Leader key for custom mappings |
| `number` | `true` | Show line numbers |
| `relativenumber` | `true` | Show relative line numbers |
| `tabstop` | `4` | Tab width |
| `shiftwidth` | `4` | Indent width |
| `expandtab` | `false` | Use tabs (not spaces) |
| `clipboard` | `unnamedplus` | Use system clipboard |
| `termguicolors` | `true` | Enable 24-bit colors |
| `mouse` | `"a"` | Enable mouse support |

## ⌨️ Custom Keymaps

Add your own keymaps in `~/.config/nvim/lua/config/keymaps.lua`:

```lua
local map = vim.keymap.set

-- Save with Ctrl+S (already included by default)
map({ "n", "i", "v" }, "<C-s>", "<cmd>w<cr><esc>", { desc = "Save file" })

-- Close buffer with leader+c
map("n", "<leader>c", "<cmd>bd<cr>", { desc = "Close buffer" })

-- Your custom mappings here
```

See [Keymaps](/docs/configuration/keymaps) for a full list of default keymaps.

## 🔌 Adding Plugins

Add your plugins in `~/.config/nvim/lua/plugins/`. Each `.lua` file in this directory is automatically loaded.

### Adding a New Plugin

Create a new file or edit `example.lua`:

```lua
return {
  -- Add a new plugin
  {
    "folke/zen-mode.nvim",
    cmd = "ZenMode",
    keys = {
      { "<leader>z", "<cmd>ZenMode<cr>", desc = "Zen Mode" },
    },
    opts = {},
  },
}
```

### Overriding FtVim Plugin Settings

You can override any plugin's settings by specifying the same plugin:

```lua
return {
  -- Override neo-tree settings
  {
    "nvim-neo-tree/neo-tree.nvim",
    opts = {
      filesystem = {
        filtered_items = {
          visible = false,        -- Hide dotfiles
          hide_dotfiles = true,
        },
      },
    },
  },
}
```

### Disabling a Plugin

```lua
return {
  -- Disable a plugin
  { "goolord/alpha-nvim", enabled = false },
}
```

## 🎨 Changing Colorscheme

See [Colorscheme](/docs/configuration/colorscheme) for detailed instructions on customizing colors.

Quick example:

```lua
-- In lua/plugins/colorscheme.lua
return {
  -- Add your preferred colorscheme
  {
    "folke/tokyonight.nvim",
    lazy = false,
    priority = 1000,
    config = function()
      vim.cmd.colorscheme("tokyonight")
    end,
  },
}
```

## 🚀 Enabling Extras

FtVim includes optional features called "extras". Enable them in `~/.config/nvim/lua/config/lazy.lua`:

```lua
require("lazy").setup({
  spec = {
    { dir = "path/to/FtVim", import = "ftvim.plugins" },
    
    -- Enable 42 School support
    { import = "ftvim.plugins.extras.lang.42" },
    
    -- Enable GitHub Copilot
    { import = "ftvim.plugins.extras.copilot" },
    
    { import = "plugins" },
  },
})
```

See [Extras](/docs/extras) for available extras and their features.
