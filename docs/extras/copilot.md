---
sidebar_position: 3
---

# 🤖 GitHub Copilot Extra

The Copilot extra integrates GitHub Copilot AI-powered code completion into FtVim, seamlessly integrated with the blink.cmp completion engine.

## Enabling

Add this to your `~/.config/nvim/lua/config/lazy.lua`:

```lua
{ import = "ftvim.plugins.extras.copilot" },
```

## Requirements

- A [GitHub Copilot](https://github.com/features/copilot) subscription (free for students)
- Node.js (for the Copilot language server)

## Setup

### 1. Enable the Extra

Add the import to your `lazy.lua` as shown above.

### 2. Authenticate

After restarting Neovim, authenticate with GitHub:

```vim
:Copilot auth
```

This will open a browser window where you can authorize Copilot with your GitHub account.

### 3. Verify

Check that Copilot is working:

```vim
:Copilot status
```

## Usage

Once authenticated, Copilot suggestions appear automatically in the completion menu alongside other sources.

### Completion Sources Priority

With the Copilot extra enabled, completion sources are prioritized:

1. **Copilot** (highest priority, score offset: 100)
2. **LSP** (language server completions)
3. **Path** (file paths)
4. **Snippets** (code snippets)
5. **Buffer** (words from current buffer)

Copilot suggestions are marked with a special icon in the completion menu.

### Keyboard Shortcuts

Use the standard blink.cmp keymaps to interact with completions:

| Keymap | Description |
|--------|-------------|
| `<C-Space>` | Trigger completion |
| `<C-y>` | Accept completion |
| `<C-e>` | Cancel completion |
| `<C-n>` / `<Down>` | Next item |
| `<C-p>` / `<Up>` | Previous item |
| `<Tab>` | Accept or next item |
| `<S-Tab>` | Previous item |

## Commands

| Command | Description |
|---------|-------------|
| `:Copilot auth` | Authenticate with GitHub |
| `:Copilot status` | Check Copilot status |
| `:Copilot enable` | Enable Copilot |
| `:Copilot disable` | Disable Copilot |
| `:Copilot panel` | Open Copilot panel (disabled by default) |

## Configuration

The default configuration disables Copilot's native suggestion UI in favor of blink.cmp integration:

```lua
{
  suggestion = { enabled = false },
  panel = { enabled = false },
  filetypes = {
    markdown = true,
    help = true,
  },
}
```

### Customizing

To customize Copilot settings, add this to your plugins:

```lua
-- ~/.config/nvim/lua/plugins/copilot.lua
return {
  {
    "zbirenbaum/copilot.lua",
    opts = {
      filetypes = {
        markdown = true,
        help = true,
        -- Disable for specific filetypes
        yaml = false,
        env = false,
        ["."] = false,  -- Disable for dotfiles
      },
    },
  },
}
```

### Using Native Copilot Suggestions

If you prefer Copilot's native inline suggestions instead of blink.cmp integration:

```lua
return {
  {
    "zbirenbaum/copilot.lua",
    opts = {
      suggestion = {
        enabled = true,
        auto_trigger = true,
        keymap = {
          accept = "<M-l>",
          accept_word = "<M-k>",
          accept_line = "<M-j>",
          next = "<M-]>",
          prev = "<M-[>",
          dismiss = "<C-]>",
        },
      },
      panel = { enabled = true },
    },
  },
  -- Disable blink-cmp-copilot if using native suggestions
  { "giuxtaposition/blink-cmp-copilot", enabled = false },
}
```

## Included Plugins

| Plugin | Description |
|--------|-------------|
| [copilot.lua](https://github.com/zbirenbaum/copilot.lua) | Lua implementation of Copilot |
| [blink-cmp-copilot](https://github.com/giuxtaposition/blink-cmp-copilot) | Copilot source for blink.cmp |

## Troubleshooting

### "Copilot: Not authenticated"

Run `:Copilot auth` and follow the authentication flow.

### Copilot not showing in completions

1. Check status: `:Copilot status`
2. Make sure you're in a supported filetype
3. Restart Neovim after enabling the extra

### Node.js not found

Install Node.js:

```bash
# Ubuntu/Debian
sudo apt install nodejs

# macOS
brew install node

# Or use nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install node
```

### Copilot is slow

Copilot suggestions are fetched asynchronously and may take a moment to appear, especially on slower connections. The `async = true` setting ensures it doesn't block other completions.
