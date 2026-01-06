# Tips and Tricks

Level up your Neovim skills with these essential techniques and productivity tips.

## Essential Motions

Motions are the foundation of Vim efficiency. Master these to navigate code like a pro.

### Character Movement

| Motion | Description |
|--------|-------------|
| `h` | Left |
| `j` | Down |
| `k` | Up |
| `l` | Right |

**Tip:** Avoid arrow keys! Your fingers stay on home row with `hjkl`.

### Word Movement

| Motion | Description |
|--------|-------------|
| `w` | Next word start |
| `W` | Next WORD start (space-separated) |
| `b` | Previous word start |
| `B` | Previous WORD start |
| `e` | Next word end |
| `E` | Next WORD end |

**Example:** `3w` moves 3 words forward.

### Line Movement

| Motion | Description |
|--------|-------------|
| `0` | Start of line |
| `^` | First non-blank character |
| `$` | End of line |
| `g_` | Last non-blank character |

### Screen Movement

| Motion | Description |
|--------|-------------|
| `gg` | First line of file |
| `G` | Last line of file |
| `{number}G` | Go to line number |
| `Ctrl+d` | Half page down |
| `Ctrl+u` | Half page up |
| `Ctrl+f` | Full page down |
| `Ctrl+b` | Full page up |
| `H` | Top of screen |
| `M` | Middle of screen |
| `L` | Bottom of screen |
| `zz` | Center current line |

### Find Movement

| Motion | Description |
|--------|-------------|
| `f{char}` | Find char forward |
| `F{char}` | Find char backward |
| `t{char}` | Till char forward |
| `T{char}` | Till char backward |
| `;` | Repeat find forward |
| `,` | Repeat find backward |

**Example:** `f(` jumps to next `(`, `;` jumps to the one after that.

### Search Movement

| Motion | Description |
|--------|-------------|
| `/{pattern}` | Search forward |
| `?{pattern}` | Search backward |
| `n` | Next match |
| `N` | Previous match |
| `*` | Search word under cursor |
| `#` | Search word under cursor (backward) |

## Operators

Operators perform actions on text. Combine them with motions for powerful editing.

### Basic Operators

| Operator | Description |
|----------|-------------|
| `d` | Delete |
| `c` | Change (delete + insert) |
| `y` | Yank (copy) |
| `>` | Indent right |
| `<` | Indent left |
| `=` | Auto-indent |
| `gU` | Uppercase |
| `gu` | Lowercase |

### Operator + Motion Examples

| Command | Description |
|---------|-------------|
| `dw` | Delete word |
| `d$` | Delete to end of line |
| `d0` | Delete to start of line |
| `cw` | Change word |
| `c$` | Change to end of line |
| `yy` | Yank entire line |
| `y3j` | Yank 3 lines down |
| `>j` | Indent current + next line |
| `gUw` | Uppercase word |

### Double Operator (Line)

| Command | Description |
|---------|-------------|
| `dd` | Delete line |
| `cc` | Change line |
| `yy` | Yank line |
| `>>` | Indent line |
| `<<` | Unindent line |

## Text Objects

Text objects let you operate on structured text. This is Vim's superpower!

### Syntax: `{operator}{a|i}{object}`

- `a` = "around" (includes delimiters)
- `i` = "inside" (excludes delimiters)

### Common Text Objects

| Object | Description |
|--------|-------------|
| `w` | Word |
| `s` | Sentence |
| `p` | Paragraph |
| `"` | Double quotes |
| `'` | Single quotes |
| `` ` `` | Backticks |
| `(` or `)` or `b` | Parentheses |
| `[` or `]` | Square brackets |
| `{` or `}` or `B` | Curly braces |
| `<` or `>` | Angle brackets |
| `t` | HTML/XML tag |

### Text Object Examples

| Command | Description |
|---------|-------------|
| `diw` | Delete inner word |
| `daw` | Delete around word (includes spaces) |
| `ci"` | Change inside quotes |
| `ca"` | Change around quotes |
| `di(` | Delete inside parentheses |
| `da{` | Delete around braces |
| `cit` | Change inside tag |
| `vip` | Select inner paragraph |

### Treesitter Text Objects (FtVim)

FtVim adds smart text objects via Treesitter:

| Command | Description |
|---------|-------------|
| `daf` | Delete around function |
| `cif` | Change inside function |
| `vac` | Select around class |
| `daa` | Delete around argument |

## The Dot Command

The `.` command repeats your last change. It's incredibly powerful!

### Example: Changing Multiple Words

1. `ciw` - Change inner word
2. Type the new word
3. `Esc` - Return to normal mode
4. `n` - Find next occurrence (if searching)
5. `.` - Repeat the change

### Example: Adding Semicolons

1. `A;` - Append semicolon to line
2. `Esc`
3. `j` - Move down
4. `.` - Add semicolon to this line too

## Macros

Macros record and replay keystrokes. Perfect for repetitive tasks.

### Recording a Macro

1. `q{register}` - Start recording (e.g., `qa`)
2. Perform your edits
3. `q` - Stop recording

### Playing a Macro

| Command | Description |
|---------|-------------|
| `@{register}` | Play macro (e.g., `@a`) |
| `@@` | Repeat last macro |
| `5@a` | Play macro 5 times |

### Macro Tips

- Use `0` to start at line beginning (consistent starting point)
- Use `j` to move to next line at end (for multi-line replay)
- Test on one line before running on many

### Example: Add Quotes Around Words

1. Position cursor on first word
2. `qa` - Start recording to register `a`
3. `ciw"Ctrl+r""` - Change word, add quotes, paste original
4. `j0w` - Move to next line, first word
5. `q` - Stop recording
6. `10@a` - Repeat 10 times

## Registers

Registers are like multiple clipboards.

### Types of Registers

| Register | Description |
|----------|-------------|
| `"` | Default register |
| `0` | Yank register (last yank) |
| `1-9` | Delete history |
| `a-z` | Named registers |
| `A-Z` | Append to named register |
| `+` | System clipboard |
| `*` | Primary selection (Linux) |
| `_` | Black hole (delete without saving) |

### Using Registers

| Command | Description |
|---------|-------------|
| `"ay` | Yank to register `a` |
| `"ap` | Paste from register `a` |
| `"+y` | Yank to system clipboard |
| `"+p` | Paste from system clipboard |
| `"_d` | Delete without saving |
| `:reg` | View all registers |

### Tip: Access Last Yank

After yanking then deleting, your yank is in register `0`:

```
"0p
```

## Marks

Marks save positions you can jump back to.

### Setting Marks

| Command | Description |
|---------|-------------|
| `m{a-z}` | Set local mark |
| `m{A-Z}` | Set global mark (across files) |

### Jumping to Marks

| Command | Description |
|---------|-------------|
| `'{mark}` | Jump to mark's line |
| `` `{mark} `` | Jump to exact position |
| `''` | Jump to last position |
| ``` `` ``` | Jump to exact last position |

### Automatic Marks

| Mark | Description |
|------|-------------|
| `` `. `` | Last change |
| `` `" `` | Last position when file closed |
| `` `[ `` | Start of last yank/change |
| `` `] `` | End of last yank/change |
| `` `< `` | Start of last visual selection |
| `` `> `` | End of last visual selection |

## Search and Replace

### Basic Replace

```vim
:s/old/new/      " Replace first on line
:s/old/new/g     " Replace all on line
:%s/old/new/g    " Replace all in file
:%s/old/new/gc   " Replace all with confirmation
```

### Replace Tips

| Pattern | Description |
|---------|-------------|
| `\<word\>` | Whole word only |
| `.*` | Any characters |
| `\n` | Newline |
| `&` | The matched text |
| `\1` | First capture group |

### Visual Mode Replace

1. Select text with `v`
2. `:s/old/new/g` - Replace in selection

### Replace Word Under Cursor

1. `*` - Search for word
2. `:%s//new/g` - Replace (empty pattern = last search)

## Splits and Navigation

### Creating Splits

| Command | Description |
|---------|-------------|
| `<leader>\|` | Vertical split |
| `<leader>-` | Horizontal split |
| `:vs {file}` | Vertical split with file |
| `:sp {file}` | Horizontal split with file |

### Navigating Splits

| Keymap | Description |
|--------|-------------|
| `<C-h>` | Move to left window |
| `<C-j>` | Move to window below |
| `<C-k>` | Move to window above |
| `<C-l>` | Move to right window |

### Resizing Splits

| Command | Description |
|---------|-------------|
| `<C-w>=` | Equal size |
| `<C-w>>` | Increase width |
| `<C-w><` | Decrease width |
| `<C-w>+` | Increase height |
| `<C-w>-` | Decrease height |

## Productivity Tips

### 1. Use Relative Line Numbers

FtVim enables relative line numbers by default. Use them with motions:
- `5j` - Jump 5 lines down
- `3k` - Jump 3 lines up

### 2. Stay in Normal Mode

Spend most time in normal mode. Enter insert mode briefly, make changes, return to normal.

### 3. Avoid Repetitive Keystrokes

Bad: `jjjjjjj`  
Good: `7j` or use search/find

### 4. Use Visual Block Mode

`Ctrl+v` enters visual block mode. Great for:
- Adding text to multiple lines: `Ctrl+v`, select, `I`, type, `Esc`
- Removing columns: `Ctrl+v`, select, `d`

### 5. Quick Substitution

`:%s/\<old\>/new/g` - Replace whole words only

### 6. Jump to Matching Bracket

`%` jumps between matching `()`, `[]`, `{}`

### 7. Indent Blocks Quickly

`>i{` - Indent inside braces  
`<i{` - Unindent inside braces

### 8. Sort Lines

Visual select lines, then `:sort`

### 9. Remove Trailing Whitespace

```vim
:%s/\s\+$//e
```

### 10. Increment/Decrement Numbers

`Ctrl+a` - Increment number under cursor  
`Ctrl+x` - Decrement number under cursor

## Practice Resources

- Run `:Tutor` in Neovim for interactive tutorial
- [Vim Adventures](https://vim-adventures.com/) - Game to learn Vim
- [VimGolf](https://www.vimgolf.com/) - Challenges to improve efficiency
- Practice daily - muscle memory takes time!
