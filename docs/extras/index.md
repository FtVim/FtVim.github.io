---
sidebar_position: 1
---

# 🧩 Extras

Extras are optional feature packs that extend FtVim's functionality. They are disabled by default to keep the base configuration lean.

## Available Extras

| Extra | Description |
|-------|-------------|
| [42](/docs/extras/42) | 42 School support (header, formatter, line counter) |
| [Copilot](/docs/extras/copilot) | GitHub Copilot AI code completion |

## Enabling Extras

To enable an extra, edit `~/.config/nvim/lua/config/lazy.lua` and uncomment or add the import:

```lua
require("lazy").setup({
  spec = {
    -- FtVim core
    {
      "FtVim/FtVim",
      import = "ftvim.plugins",
    },
    
    -- Enable extras here:
    { import = "ftvim.plugins.extras.lang.42" },    -- 42 School
    { import = "ftvim.plugins.extras.copilot" },    -- GitHub Copilot
    
    -- Your plugins
    { import = "plugins" },
  },
})
```

After adding an extra, restart Neovim and run `:Lazy` to install the new plugins.

## Creating Your Own Extras

You can create your own extras for features you want to toggle on/off. Create a file in `~/.config/nvim/lua/plugins/extras/`:

```lua
-- ~/.config/nvim/lua/plugins/extras/rust.lua
return {
  -- Rust support
  {
    "mrcjkb/rustaceanvim",
    version = "^4",
    ft = { "rust" },
  },
  
  -- Add rust-analyzer to mason
  {
    "williamboman/mason.nvim",
    opts = {
      ensure_installed = { "rust-analyzer" },
    },
  },
}
```

Then import it in your `lazy.lua`:

```lua
{ import = "plugins.extras.rust" },
```
