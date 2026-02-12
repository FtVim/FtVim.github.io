---
sidebar_position: 4
---

# 🎨 Colorscheme

FtVim uses [Catppuccin](https://github.com/catppuccin/nvim) as the default colorscheme. This guide shows you how to customize or change it.

## Using a Different Colorscheme

The simplest way to change the colorscheme is in your `~/.config/nvim/lua/config/lazy.lua`. Just add the `opts` key to the FtVim spec:

```lua
spec = {
  {
    "FtVim/FtVim",
    import = "ftvim.plugins",
    opts = {
      colorscheme = "tokyonight", -- any installed colorscheme
    },
  },
  { import = "plugins" },
},
```

That's it! FtVim handles loading the colorscheme for you.

:::tip
Tokyo Night and Kanagawa are already bundled with FtVim, so just setting `colorscheme` in `opts` is enough. For other colorschemes, you also need to add the plugin (see examples below).
:::

## Adding a New Colorscheme Plugin

If the colorscheme you want isn't bundled with FtVim, add its plugin in `~/.config/nvim/lua/plugins/colorscheme.lua`:

```lua
return {
  {
    "rose-pine/neovim",
    name = "rose-pine",
    lazy = false,
    priority = 1000,
    opts = {
      variant = "main", -- main, moon, dawn
    },
  },

  -- Optionally disable catppuccin if you don't need it
  -- { "catppuccin/nvim", enabled = false },
}
```

And set it in your `lazy.lua`:

```lua
opts = {
  colorscheme = "rose-pine",
},
```

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

## Alternative: Set Colorscheme in Plugin Config

You can also set the colorscheme directly in a plugin's `config` function. FtVim will detect the change and won't overwrite it:

```lua
-- ~/.config/nvim/lua/plugins/colorscheme.lua
return {
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

:::note
The recommended approach is setting `colorscheme` in `opts` in your `lazy.lua` (shown above). It's simpler and keeps all your FtVim configuration in one place.
:::

## Popular Colorschemes

Here are some popular colorschemes. For each one, set `colorscheme` in your `lazy.lua` opts and add the plugin spec in `~/.config/nvim/lua/plugins/colorscheme.lua`.

### Tokyo Night

Already bundled — just set it in `lazy.lua`:

```lua
opts = { colorscheme = "tokyonight" }
```

To customize, create `lua/plugins/colorscheme.lua`:

```lua
return {
  {
    "folke/tokyonight.nvim",
    opts = {
      style = "night", -- night, storm, day, moon
    },
  },
}
```

### Kanagawa

Already bundled — just set it in `lazy.lua`:

```lua
opts = { colorscheme = "kanagawa" }
```

To customize, create `lua/plugins/colorscheme.lua`:

```lua
return {
  {
    "rebelot/kanagawa.nvim",
    opts = {
      theme = "wave", -- wave, dragon, lotus
    },
  },
}
```

### Rose Pine

In `lazy.lua`:

```lua
opts = { colorscheme = "rose-pine" }
```

In `lua/plugins/colorscheme.lua`:

```lua
return {
  {
    "rose-pine/neovim",
    name = "rose-pine",
    lazy = false,
    priority = 1000,
    opts = {
      variant = "main", -- main, moon, dawn
    },
  },
}
```

### Gruvbox Material

In `lazy.lua`:

```lua
opts = { colorscheme = "gruvbox-material" }
```

In `lua/plugins/colorscheme.lua`:

```lua
return {
  {
    "sainnhe/gruvbox-material",
    lazy = false,
    priority = 1000,
    config = function()
      vim.g.gruvbox_material_background = "medium" -- hard, medium, soft
    end,
  },
}
```

### Nord

In `lazy.lua`:

```lua
opts = { colorscheme = "nord" }
```

In `lua/plugins/colorscheme.lua`:

```lua
return {
  {
    "shaunsingh/nord.nvim",
    lazy = false,
    priority = 1000,
  },
}
```

### One Dark

In `lazy.lua`:

```lua
opts = { colorscheme = "onedark" }
```

In `lua/plugins/colorscheme.lua`:

```lua
return {
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
  },
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
Temporary changes are lost when you restart Neovim. For permanent changes, follow the steps above.
:::

## Customizing Colors

Most colorschemes support customization. Check the colorscheme's documentation for available options.

Example with Catppuccin in `lua/plugins/colorscheme.lua`:

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
