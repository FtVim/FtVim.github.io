# Formatting

FtVim uses [conform.nvim](https://github.com/stevearc/conform.nvim) for code formatting, providing fast and reliable formatting with support for many formatters.

## Default Configuration

FtVim comes with these formatters pre-configured:

| Language | Formatter |
|----------|-----------|
| Lua | `stylua` |
| Shell/Bash | `shfmt` |

These formatters are automatically installed via Mason.

## Formatting Keymaps

| Keymap | Mode | Description |
|--------|------|-------------|
| `<leader>cf` | Normal, Visual | Format buffer or selection |

## Manual Formatting

To format the current buffer, press `<leader>cf` in normal mode.

To format a selection, select the text in visual mode and press `<leader>cf`.

You can also use the command:

```vim
:lua require("conform").format()
```

## Format on Save

Format on save is **disabled by default** in FtVim. To enable it, add this to your configuration:

```lua
-- In your Neovim config (e.g., ~/.config/nvim/lua/plugins/formatting.lua)
return {
  {
    "stevearc/conform.nvim",
    opts = {
      format_on_save = {
        timeout_ms = 500,
        lsp_fallback = true,
      },
    },
  },
}
```

### Format on Save Options

```lua
format_on_save = {
  timeout_ms = 500,       -- Timeout for formatting
  lsp_fallback = true,    -- Use LSP if no formatter is configured
  async = false,          -- Sync formatting (recommended for save)
}
```

### Disable Format on Save for Specific Filetypes

```lua
return {
  {
    "stevearc/conform.nvim",
    opts = {
      format_on_save = function(bufnr)
        -- Disable for certain filetypes
        local ignore_filetypes = { "sql", "java" }
        if vim.tbl_contains(ignore_filetypes, vim.bo[bufnr].filetype) then
          return nil
        end
        return {
          timeout_ms = 500,
          lsp_fallback = true,
        }
      end,
    },
  },
}
```

## Adding New Formatters

### Step 1: Install the Formatter

Add the formatter to Mason's ensure_installed list:

```lua
return {
  {
    "williamboman/mason.nvim",
    opts = {
      ensure_installed = {
        "prettier",    -- JavaScript/TypeScript/JSON/etc.
        "black",       -- Python
        "clang-format", -- C/C++
      },
    },
  },
}
```

Or install manually via `:Mason`.

### Step 2: Configure the Formatter

Add the formatter to conform.nvim:

```lua
return {
  {
    "stevearc/conform.nvim",
    opts = {
      formatters_by_ft = {
        javascript = { "prettier" },
        typescript = { "prettier" },
        json = { "prettier" },
        python = { "black" },
        c = { "clang-format" },
        cpp = { "clang-format" },
      },
    },
  },
}
```

### Using Multiple Formatters

Run formatters in sequence:

```lua
formatters_by_ft = {
  python = { "isort", "black" }, -- Run isort first, then black
}
```

Use the first available formatter:

```lua
formatters_by_ft = {
  javascript = { "prettierd", "prettier", stop_after_first = true },
}
```

## Customizing Formatter Options

Override formatter settings:

```lua
return {
  {
    "stevearc/conform.nvim",
    opts = {
      formatters = {
        stylua = {
          prepend_args = { "--indent-type", "Spaces", "--indent-width", "2" },
        },
        shfmt = {
          prepend_args = { "-i", "2" }, -- 2-space indent
        },
        prettier = {
          prepend_args = { "--tab-width", "2", "--single-quote" },
        },
      },
    },
  },
}
```

## Disabling Formatting

### For Specific Filetypes

```lua
return {
  {
    "stevearc/conform.nvim",
    opts = {
      formatters_by_ft = {
        -- Set to empty table to disable
        markdown = {},
      },
    },
  },
}
```

### Disable LSP Fallback

```lua
return {
  {
    "stevearc/conform.nvim",
    opts = {
      format_on_save = {
        lsp_fallback = false, -- Don't use LSP for formatting
      },
    },
  },
}
```

## Troubleshooting

### Check Conform Status

```vim
:ConformInfo
```

Shows configured formatters and their status for the current buffer.

### Common Issues

**Formatter not working:**
1. Check `:ConformInfo` to see if the formatter is detected
2. Ensure the formatter is installed (`:Mason`)
3. Verify the formatter binary is in your PATH

**Formatting slow:**
1. Some formatters (like prettier) can be slow on large files
2. Consider using faster alternatives (e.g., `prettierd` instead of `prettier`)
3. Increase `timeout_ms` if needed

**Format on save not working:**
1. Ensure `format_on_save` is configured (disabled by default)
2. Check `:ConformInfo` for the formatter status
3. Look for errors with `:messages`

## Recommended Formatters by Language

| Language | Formatter | Notes |
|----------|-----------|-------|
| Lua | `stylua` | Default in FtVim |
| Shell/Bash | `shfmt` | Default in FtVim |
| JavaScript/TypeScript | `prettier` or `prettierd` | prettierd is faster |
| Python | `black` or `ruff_format` | ruff is faster |
| Go | `gofmt` or `goimports` | goimports also organizes imports |
| Rust | `rustfmt` | Comes with Rust toolchain |
| C/C++ | `clang-format` | Highly configurable |
| JSON | `prettier` or `jq` | jq for JSON-only projects |
| YAML | `prettier` or `yamlfmt` | |
| Markdown | `prettier` | |
| HTML/CSS | `prettier` | |

## Example: Complete Formatting Setup

Here's a full example for a web development setup:

```lua
return {
  -- Install formatters
  {
    "williamboman/mason.nvim",
    opts = {
      ensure_installed = {
        "prettierd",
        "eslint_d",
      },
    },
  },

  -- Configure formatting
  {
    "stevearc/conform.nvim",
    opts = {
      formatters_by_ft = {
        javascript = { "prettierd" },
        typescript = { "prettierd" },
        javascriptreact = { "prettierd" },
        typescriptreact = { "prettierd" },
        json = { "prettierd" },
        html = { "prettierd" },
        css = { "prettierd" },
        markdown = { "prettierd" },
      },
      format_on_save = {
        timeout_ms = 500,
        lsp_fallback = true,
      },
    },
  },
}
```
