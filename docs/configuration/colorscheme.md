---
sidebar_position: 4
---

# 🎨 Colorscheme

FtVim uses [Catppuccin](https://github.com/catppuccin/nvim) as the default colorscheme. This guide shows you how to customize or change it.

## Changing Catppuccin Flavor

Catppuccin has four flavors: `latte` (light), `frappe`, `macchiato`, and `mocha` (darkest).

Create `~/.config/nvim/lua/plugins/colorscheme.lua`:

```lua
return {
  {
    "catppuccin/nvim",
    name = "catppuccin",
    opts = {
      flavour = "frappe", -- latte, frappe, macchiato, mocha
    },
  },
}
```

## Using a Different Colorscheme

### Step 1: Add the Colorscheme Plugin

Create `~/.config/nvim/lua/plugins/colorscheme.lua`:

```lua
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
  
  -- Optionally disable catppuccin
  { "catppuccin/nvim", enabled = false },
}
```

### Step 2: Restart Neovim

The new colorscheme will be applied automatically.

## Popular Colorschemes

Here are some popular colorschemes you can use:

### Tokyo Night

```lua
{
  "folke/tokyonight.nvim",
  lazy = false,
  priority = 1000,
  opts = {
    style = "night", -- night, storm, day, moon
  },
  config = function(_, opts)
    require("tokyonight").setup(opts)
    vim.cmd.colorscheme("tokyonight")
  end,
}
```

### Rose Pine

```lua
{
  "rose-pine/neovim",
  name = "rose-pine",
  lazy = false,
  priority = 1000,
  opts = {
    variant = "main", -- main, moon, dawn
  },
  config = function(_, opts)
    require("rose-pine").setup(opts)
    vim.cmd.colorscheme("rose-pine")
  end,
}
```

### Kanagawa

```lua
{
  "rebelot/kanagawa.nvim",
  lazy = false,
  priority = 1000,
  opts = {
    theme = "wave", -- wave, dragon, lotus
  },
  config = function(_, opts)
    require("kanagawa").setup(opts)
    vim.cmd.colorscheme("kanagawa")
  end,
}
```

### Gruvbox Material

```lua
{
  "sainnhe/gruvbox-material",
  lazy = false,
  priority = 1000,
  config = function()
    vim.g.gruvbox_material_background = "medium" -- hard, medium, soft
    vim.cmd.colorscheme("gruvbox-material")
  end,
}
```

### Nord

```lua
{
  "shaunsingh/nord.nvim",
  lazy = false,
  priority = 1000,
  config = function()
    vim.cmd.colorscheme("nord")
  end,
}
```

### One Dark

```lua
{
  "navarasu/onedark.nvim",
  lazy = false,
  priority = 1000,
  opts = {
    style = "dark", -- dark, darker, cool, deep, warm, warmer
  },
  config = function(_, opts)
    require("onedark").setup(opts)
    require("onedark").load()
  end,
}
```

## Temporary Change

To change the colorscheme temporarily (current session only):

```vim
:colorscheme <name>
```

For example:
```vim
:colorscheme tokyonight
```

:::note
Temporary changes are lost when you restart Neovim. For permanent changes, add the colorscheme plugin as shown above.
:::

## Customizing Colors

Most colorschemes support customization. Check the colorscheme's documentation for available options.

Example with Catppuccin:

```lua
return {
  {
    "catppuccin/nvim",
    name = "catppuccin",
    opts = {
      flavour = "mocha",
      transparent_background = true,
      integrations = {
        alpha = true,
        cmp = true,
        gitsigns = true,
        illuminate = true,
        indent_blankline = { enabled = true },
        mason = true,
        native_lsp = { enabled = true },
        neotree = true,
        notify = true,
        treesitter = true,
        which_key = true,
      },
    },
  },
}
```
