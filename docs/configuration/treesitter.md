# Treesitter

FtVim uses [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter) for advanced syntax highlighting, code navigation, and text objects.

## What is Treesitter?

Treesitter is a parsing system that builds a syntax tree of your code. Unlike traditional regex-based highlighting, Treesitter:

- Provides **accurate syntax highlighting** that understands code structure
- Enables **smart text objects** (select function, class, parameter, etc.)
- Supports **intelligent indentation**
- Powers **code folding** based on syntax
- Works across **all supported languages** consistently

## Default Parsers

FtVim comes with these parsers pre-installed:

| Parser | Language |
|--------|----------|
| `bash` | Bash/Shell scripts |
| `c` | C |
| `lua` | Lua |
| `markdown` | Markdown |
| `python` | Python |
| `vim` | Vimscript |
| `vimdoc` | Vim help files |

## Installing Parsers

### Automatic Installation

When you open a file, Treesitter will offer to install the parser if it's not already installed.

### Manual Installation

Install a specific parser:

```vim
:TSInstall javascript
```

Install multiple parsers:

```vim
:TSInstall typescript tsx json html css
```

### Via Configuration

Add parsers to ensure_installed:

```lua
-- In your Neovim config (e.g., ~/.config/nvim/lua/plugins/treesitter.lua)
return {
  {
    "nvim-treesitter/nvim-treesitter",
    opts = {
      ensure_installed = {
        -- Add your languages here
        "javascript",
        "typescript",
        "tsx",
        "html",
        "css",
        "json",
        "yaml",
        "rust",
        "go",
      },
    },
  },
}
```

## Updating Parsers

Update all installed parsers:

```vim
:TSUpdate
```

Update a specific parser:

```vim
:TSUpdate python
```

Sync update (blocking):

```vim
:TSUpdateSync
```

## Treesitter Commands

| Command | Description |
|---------|-------------|
| `:TSInstall <lang>` | Install a parser |
| `:TSUpdate` | Update all parsers |
| `:TSUninstall <lang>` | Remove a parser |
| `:TSInstallInfo` | Show installed parsers |
| `:TSModuleInfo` | Show module information |

## Text Objects

FtVim integrates Treesitter with [mini.ai](https://github.com/echasnovski/mini.ai) to provide smart text objects:

| Text Object | Description |
|-------------|-------------|
| `af` / `if` | Around/inside function |
| `ac` / `ic` | Around/inside class |
| `aa` / `ia` | Around/inside argument/parameter |
| `ao` / `io` | Around/inside block/scope |

### Usage Examples

- `daf` - Delete a function
- `vif` - Select inside function
- `caa` - Change around argument
- `yic` - Yank inside class

These work in any language with Treesitter support!

## Treesitter Features

### Syntax Highlighting

Enabled by default. Provides accurate, context-aware highlighting:

```lua
opts = {
  highlight = { enable = true },
}
```

### Smart Indentation

Automatic indentation based on syntax:

```lua
opts = {
  indent = { enable = true },
}
```

### Incremental Selection

Expand/shrink selection based on syntax nodes:

```lua
opts = {
  incremental_selection = {
    enable = true,
    keymaps = {
      init_selection = "<C-space>",
      node_incremental = "<C-space>",
      scope_incremental = false,
      node_decremental = "<bs>",
    },
  },
}
```

## Troubleshooting

### Check Parser Status

```vim
:TSInstallInfo
```

Shows all available parsers and their installation status.

### Check Health

```vim
:checkhealth nvim-treesitter
```

Diagnoses common Treesitter issues.

### Common Issues

**Highlighting not working:**
1. Ensure the parser is installed (`:TSInstallInfo`)
2. Check that highlight is enabled (`:TSModuleInfo`)
3. Try reinstalling the parser (`:TSInstall <lang>`)

**Parser installation fails:**
1. Ensure you have a C compiler installed (gcc, clang)
2. On Windows, ensure MSVC or MinGW is available
3. Check network connectivity for downloading parsers

**Slow performance on large files:**
1. Treesitter can be slow on very large files
2. Consider disabling for large files:

```lua
opts = {
  highlight = {
    enable = true,
    disable = function(lang, buf)
      local max_filesize = 100 * 1024 -- 100 KB
      local ok, stats = pcall(vim.loop.fs_stat, vim.api.nvim_buf_get_name(buf))
      if ok and stats and stats.size > max_filesize then
        return true
      end
    end,
  },
}
```

**Wrong highlighting:**
1. Update the parser (`:TSUpdate <lang>`)
2. The parser may have bugs - check nvim-treesitter issues
3. Some languages have multiple parsers (e.g., `typescript` vs `tsx`)

## Popular Parsers

Here's a list of commonly used parsers:

| Category | Parsers |
|----------|---------|
| Web | `html`, `css`, `javascript`, `typescript`, `tsx`, `json`, `yaml` |
| Systems | `c`, `cpp`, `rust`, `go`, `zig` |
| Scripting | `python`, `lua`, `bash`, `ruby`, `perl` |
| JVM | `java`, `kotlin`, `scala` |
| Functional | `haskell`, `ocaml`, `elixir` |
| Data | `json`, `yaml`, `toml`, `xml` |
| Docs | `markdown`, `vimdoc`, `comment` |
| Config | `dockerfile`, `make`, `cmake`, `nginx` |
| Git | `diff`, `git_config`, `gitcommit`, `gitignore` |

## Advanced Configuration

### Custom Highlights

Override specific highlight groups:

```lua
vim.api.nvim_set_hl(0, "@function", { fg = "#7aa2f7" })
vim.api.nvim_set_hl(0, "@variable", { fg = "#c0caf5" })
```

### Language-Specific Settings

Configure parsers individually:

```lua
return {
  {
    "nvim-treesitter/nvim-treesitter",
    opts = {
      highlight = {
        enable = true,
        -- Disable for specific languages
        disable = { "latex" },
      },
      indent = {
        enable = true,
        -- Disable indent for these (sometimes buggy)
        disable = { "python", "yaml" },
      },
    },
  },
}
```
