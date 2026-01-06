# Migrating from VSCode

Welcome to FtVim! This guide helps Visual Studio Code users transition to Neovim by mapping familiar features and shortcuts.

## Key Differences

### Modal Editing

The biggest difference is **modal editing**. In VSCode, you're always in "insert mode". In Vim:

| Mode | Purpose | Enter With |
|------|---------|-----------|
| **Normal** | Navigation, commands | `Esc` or `Ctrl+[` |
| **Insert** | Typing text | `i`, `a`, `o`, etc. |
| **Visual** | Selecting text | `v`, `V`, `Ctrl+v` |
| **Command** | Running commands | `:` |

**Tip:** Press `Esc` whenever you're unsure. It returns you to Normal mode.

### No Mouse Required

While FtVim supports mouse, you'll be much faster using the keyboard. Give it a few days!

### Configuration is Code

Instead of a settings GUI, you configure FtVim with Lua code. This is more powerful and version-controllable.

## Keyboard Shortcuts Comparison

### File Navigation

| VSCode | FtVim | Description |
|--------|-------|-------------|
| `Ctrl+P` | `<leader>ff` | Find files |
| `Ctrl+Shift+F` | `<leader>fg` | Search in files (grep) |
| `Ctrl+Shift+E` | `<leader>e` | Toggle file explorer |
| `Ctrl+Tab` | `<leader>fb` | Switch between open files |
| `Ctrl+Shift+P` | `<leader>fC` | Command palette |
| `Ctrl+G` | `:<number>` | Go to line |
| `Ctrl+R` | `<leader>fr` | Recent files |

### Editing

| VSCode | FtVim | Description |
|--------|-------|-------------|
| `Ctrl+C` | `y` (yank) | Copy (in visual mode) |
| `Ctrl+V` | `p` (paste) | Paste |
| `Ctrl+X` | `d` (delete) | Cut (in visual mode) |
| `Ctrl+Z` | `u` | Undo |
| `Ctrl+Shift+Z` | `Ctrl+r` | Redo |
| `Ctrl+D` | `*` then `cgn` | Select next occurrence |
| `Ctrl+/` | `gcc` | Toggle line comment |
| `Shift+Alt+A` | `gbc` | Toggle block comment |
| `Alt+Up/Down` | `:m -2` / `:m +1` | Move line up/down |
| `Ctrl+Shift+K` | `dd` | Delete line |
| `Ctrl+Enter` | `o` | Insert line below |
| `Ctrl+Shift+Enter` | `O` | Insert line above |

### Code Intelligence

| VSCode | FtVim | Description |
|--------|-------|-------------|
| `F12` | `gd` | Go to definition |
| `Shift+F12` | `gr` | Find references |
| `Ctrl+Space` | `Ctrl+Space` | Trigger autocomplete |
| `Ctrl+.` | `<leader>ca` | Quick fix / code actions |
| `F2` | `<leader>cr` | Rename symbol |
| `Ctrl+Shift+O` | `<leader>ss` | Go to symbol in file |
| `Ctrl+T` | `<leader>sS` | Go to symbol in workspace |
| `Ctrl+Hover` | `K` | Show hover documentation |
| `Shift+Alt+F` | `<leader>cf` | Format document |

### Search & Replace

| VSCode | FtVim | Description |
|--------|-------|-------------|
| `Ctrl+F` | `/` | Search in file |
| `Ctrl+H` | `:%s/old/new/g` | Replace in file |
| `F3` | `n` | Next match |
| `Shift+F3` | `N` | Previous match |
| `Ctrl+Shift+F` | `<leader>fg` | Search in project |
| `Ctrl+Shift+H` | `<leader>sr` | Replace in project |

### Window Management

| VSCode | FtVim | Description |
|--------|-------|-------------|
| `Ctrl+\` | `<leader>\|` | Split editor vertically |
| `Ctrl+1/2/3` | `<C-h/l>` | Focus editor group |
| `Ctrl+W` | `<leader>bd` | Close editor |
| `Ctrl+Shift+T` | - | Reopen closed editor |
| `Ctrl+B` | `<leader>e` | Toggle sidebar |
| `` Ctrl+` `` | `<C-\>` | Toggle terminal |

### Git

| VSCode | FtVim | Description |
|--------|-------|-------------|
| Source Control view | `<leader>gg` | Open Lazygit |
| - | `<leader>gb` | Git blame |
| Git: Stage Changes | (in Lazygit) `s` | Stage file |
| Git: Commit | (in Lazygit) `c` | Commit |

## VSCode Extensions → FtVim Equivalents

| VSCode Extension | FtVim Plugin | Notes |
|------------------|--------------|-------|
| IntelliSense | nvim-lspconfig + blink.cmp | Built-in |
| GitLens | gitsigns.nvim + lazygit | Built-in |
| Prettier | conform.nvim | Configure formatters |
| ESLint | LSP + none-ls | Via LSP |
| Auto Rename Tag | nvim-ts-autotag | Add as extra |
| Bracket Pair Colorizer | Built-in Neovim | `matchparen` |
| Path Intellisense | blink.cmp | Path source |
| Project Manager | - | Use sessions or Telescope |
| TODO Highlight | todo-comments.nvim | Built-in |
| Error Lens | LSP virtual text | Built-in |

## Concepts Translation

### Files vs Buffers

| VSCode | Neovim |
|--------|--------|
| Open file = Tab | Open file = Buffer |
| Tab = One file | Tab = Window layout |

In Neovim, **buffers** are open files (even if not visible). **Windows** are viewports showing buffers. **Tabs** are collections of windows.

Think of it as: You can have many buffers, arrange them in windows, and save window arrangements as tabs.

### The Explorer

VSCode's sidebar explorer → FtVim's Neo-tree

- `<leader>e` - Toggle explorer
- `a` - Create file/folder
- `d` - Delete
- `r` - Rename
- `c` - Copy
- `p` - Paste
- `Enter` - Open file

### Integrated Terminal

VSCode: `` Ctrl+` ``  
FtVim: `<C-\>` (Ctrl + backslash)

The terminal floats over your editor. Press the same key to hide it.

### Settings

VSCode: `Ctrl+,` opens settings GUI  
FtVim: Edit `~/.config/nvim/lua/plugins/*.lua`

## Quick Tips for Transitioning

### 1. Don't Fight Modal Editing

It feels strange at first, but modal editing is more efficient. Stick with it for a week.

### 2. Learn Motions Gradually

Start with basics:
- `h j k l` - Movement
- `w b` - Word movement
- `gg G` - Start/end of file
- `0 $` - Start/end of line

### 3. Use Which-Key

Press `<leader>` (Space) and wait. FtVim shows all available commands!

### 4. Master the Dot Command

`.` repeats your last change. It's incredibly powerful.

Example:
1. `ciw` - Change inner word
2. Type new word
3. `Esc`
4. Move to next word
5. `.` - Repeat the change!

### 5. Embrace Text Objects

Instead of selecting with mouse:
- `diw` - Delete inner word
- `ci"` - Change inside quotes
- `da{` - Delete around braces
- `vip` - Select inner paragraph

### 6. Use Registers for Multiple Clipboards

`"ay` - Yank to register `a`  
`"ap` - Paste from register `a`

You have 26 registers (a-z)!

## Your First Week

### Day 1-2: Survival Mode
- Focus on `i`, `Esc`, `:w`, `:q`
- Use `<leader>ff` to find files
- Use the mouse if needed

### Day 3-4: Basic Motions
- Practice `h j k l` movement
- Learn `w b e` word motions
- Try `0 $ gg G` jumps

### Day 5-7: Editing Commands
- `d` (delete), `c` (change), `y` (yank)
- Combine with motions: `dw`, `c$`, `yy`
- Use `.` to repeat

### Week 2+: Advanced Features
- Text objects (`ciw`, `da{`)
- Macros (`q` to record)
- Marks (`m` to set, `'` to jump)

## Getting Help

If you're stuck:

1. Press `<leader>` to see available commands
2. `:help <topic>` for built-in docs
3. Check [Troubleshooting](../troubleshooting) for common issues
4. [Tips and Tricks](./tips-and-tricks) for more techniques

Remember: Every Vim expert was once a beginner. The learning curve is worth it!
