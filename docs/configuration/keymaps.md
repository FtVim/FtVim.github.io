---
sidebar_position: 2
---

# ⌨️ Keymaps

FtVim comes with a comprehensive set of keymaps designed for efficient editing. The leader key is `<Space>` by default.

:::tip
Press `<leader>` (Space) and wait to see all available keymaps via which-key.
:::

## General

| Keymap | Description |
|--------|-------------|
| `<C-s>` | Save file |
| `<Esc>` | Clear search highlight |
| `jk` | Exit insert mode (alternative to Esc) |

### Window Navigation

| Keymap | Description |
|--------|-------------|
| `<C-h>` | Go to left window |
| `<C-j>` | Go to lower window |
| `<C-k>` | Go to upper window |
| `<C-l>` | Go to right window |

### Window Resize

| Keymap | Description |
|--------|-------------|
| `<C-Up>` | Increase window height |
| `<C-Down>` | Decrease window height |
| `<C-Left>` | Decrease window width |
| `<C-Right>` | Increase window width |

### Move Lines

| Keymap | Mode | Description |
|--------|------|-------------|
| `<A-j>` | Normal/Insert/Visual | Move line(s) down |
| `<A-k>` | Normal/Insert/Visual | Move line(s) up |

### Indenting

| Keymap | Mode | Description |
|--------|------|-------------|
| `<` | Visual | Indent left (stays in visual mode) |
| `>` | Visual | Indent right (stays in visual mode) |

## Find (Leader + f)

All find commands use [snacks.nvim](https://github.com/folke/snacks.nvim) picker.

| Keymap | Description |
|--------|-------------|
| `<leader>ff` | Find files |
| `<leader>fr` | Recent files |
| `<leader>fb` | Find buffers |
| `<leader>fs` | Find string (grep) |
| `<leader>fc` | Find string under cursor |
| `<leader>fh` | Find help tags |
| `<leader>fk` | Find keymaps |
| `<leader>fC` | Find commands |
| `<leader>fH` | Find highlights |
| `<leader>fM` | Find man pages |
| `<leader>fR` | Find registers |
| `<leader>fl` | Resume last search |
| `<leader>fn` | New file |

### Picker Navigation

When the picker is open:

| Keymap | Description |
|--------|-------------|
| `<C-j>` / `<C-n>` | Next item |
| `<C-k>` / `<C-p>` | Previous item |
| `<CR>` | Confirm selection |
| `<Esc>` | Close picker |

## Buffers (Leader + b)

| Keymap | Description |
|--------|-------------|
| `<S-h>` | Previous buffer |
| `<S-l>` | Next buffer |
| `<leader>bb` | Previous buffer |
| `<leader>bn` | Next buffer |
| `<leader>bd` | Close buffer |
| `<leader>bD` | Force close buffer |
| `<leader>bf` | Find buffer |
| `<leader>bj` | Jump to buffer (pick) |
| `<leader>be` | Pick buffer to close |
| `<leader>bh` | Close buffers to the left |
| `<leader>bl` | Close buffers to the right |
| `<leader>bW` | Save without formatting |
| `<leader>bD` | Sort buffers by directory |
| `<leader>bL` | Sort buffers by language |

## Code / LSP (Leader + c)

| Keymap | Description |
|--------|-------------|
| `gd` | Go to definition |
| `gr` | Go to references |
| `gI` | Go to implementation |
| `gy` | Go to type definition |
| `gD` | Go to declaration |
| `K` | Hover documentation |
| `gK` | Signature help |
| `<C-k>` (insert) | Signature help |
| `<leader>ca` | Code action |
| `<leader>cr` | Rename symbol |
| `<leader>cd` | Go to definition |
| `<leader>ci` | Go to implementation |
| `<leader>ct` | Go to type definition |
| `<leader>cs` | Signature help |
| `<leader>cv` | Hover |
| `<leader>cx` | Rename |
| `<leader>ch` | Toggle inlay hints |

## Git (Leader + g)

| Keymap | Description |
|--------|-------------|
| `<leader>gb` | Git branches |
| `<leader>gc` | Git commits |
| `<leader>gC` | Git buffer commits |
| `<leader>go` | Git status |
| `]h` | Next hunk |
| `[h` | Previous hunk |
| `<leader>ghs` | Stage hunk |
| `<leader>ghr` | Reset hunk |
| `<leader>ghS` | Stage buffer |
| `<leader>ghu` | Undo stage hunk |
| `<leader>ghR` | Reset buffer |
| `<leader>ghp` | Preview hunk |
| `<leader>ghb` | Blame line |
| `<leader>ghB` | Blame buffer |
| `<leader>ghd` | Diff this |
| `<leader>ghD` | Diff this ~ |

## Windows (Leader + w)

| Keymap | Description |
|--------|-------------|
| `<leader>wd` | Close window |
| `<leader>ww` | New window |
| `<leader>wsh` | Split horizontal |
| `<leader>wsv` | Split vertical |

## Tabs (Leader + Tab)

| Keymap | Description |
|--------|-------------|
| `<leader><tab><tab>` | New tab |
| `<leader><tab>d` | Close tab |
| `<leader><tab>]` | Next tab |
| `<leader><tab>[` | Previous tab |
| `<leader><tab>l` | Last tab |
| `<leader><tab>f` | First tab |
| `<leader><tab>o` | Close other tabs |

## Terminal

| Keymap | Description |
|--------|-------------|
| `<C-\>` | Toggle terminal |
| `<leader>tf` | Float terminal |
| `<leader>th` | Horizontal terminal |
| `<leader>tv` | Vertical terminal |

In terminal mode, use `<C-h/j/k/l>` to navigate to other windows.

## Explorer

| Keymap | Description |
|--------|-------------|
| `<leader>e` | Toggle file explorer (Neo-tree) |

In Neo-tree:
| Keymap | Description |
|--------|-------------|
| `l` | Open file/expand folder |
| `h` | Close folder |
| `<Space>` | None (disabled to preserve leader) |

## Diagnostics (Leader + x)

| Keymap | Description |
|--------|-------------|
| `<leader>xd` | Toggle diagnostics on/off |
| `<leader>xl` | Location list |
| `<leader>xq` | Quickfix list |
| `[q` | Previous quickfix item |
| `]q` | Next quickfix item |

## Plugins (Leader + p)

| Keymap | Description |
|--------|-------------|
| `<leader>l` | Open Lazy (plugin manager) |
| `<leader>pl` | Open Lazy |
| `<leader>pi` | Install plugins |
| `<leader>pu` | Update plugins |
| `<leader>ps` | Sync plugins |
| `<leader>pS` | Clear unused plugins |

## Other

| Keymap | Description |
|--------|-------------|
| `<leader>;` | Dashboard |
| `<leader>/` | Comment line |
| `<leader>/` (visual) | Comment selection |
| `<leader>qq` | Quit |
| `<leader>K` | Keywordprg |
| `gco` | Add comment below |
| `gcO` | Add comment above |
| `]]` | Next reference |
| `[[` | Previous reference |

## FtVim (Leader + F)

| Keymap | Description |
|--------|-------------|
| `<leader>Fk` | View all keymaps |

### With 42 Extra Enabled

| Keymap | Description |
|--------|-------------|
| `<leader>Fh` | Insert 42 header |
| `<leader>Ff` | Format C code (42 norm) |
| `<leader>Fc` | Count lines (42) |

## Treesitter (Leader + T)

| Keymap | Description |
|--------|-------------|
| `<leader>Ti` | Treesitter info |

## Mason (Leader + c + m)

| Keymap | Description |
|--------|-------------|
| `<leader>cmm` | Open Mason |
