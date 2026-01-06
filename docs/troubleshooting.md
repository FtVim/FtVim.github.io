# Troubleshooting

Solutions to common problems with FtVim.

## Quick Diagnostics

Before diving into specific issues, run these commands:

```vim
:checkhealth          " Overall health check
:Lazy                 " Plugin status
:Mason                " LSP/tool status
:LspInfo              " Active LSP servers
```

## Icons Not Displaying

**Symptoms:** Squares, question marks, or missing icons in the UI.

**Solution:** Install a Nerd Font and configure your terminal to use it.

### Step 1: Install a Nerd Font

Download from [nerdfonts.com](https://www.nerdfonts.com/):
- JetBrainsMono Nerd Font (recommended)
- FiraCode Nerd Font
- Hack Nerd Font

On Linux:
```bash
# Example for JetBrainsMono
wget https://github.com/ryanoasis/nerd-fonts/releases/download/v3.0.2/JetBrainsMono.zip
unzip JetBrainsMono.zip -d ~/.local/share/fonts/
fc-cache -fv
```

On macOS:
```bash
brew tap homebrew/cask-fonts
brew install font-jetbrains-mono-nerd-font
```

### Step 2: Configure Your Terminal

Set your terminal's font to the Nerd Font you installed:
- **Alacritty:** Edit `~/.config/alacritty/alacritty.yml`
- **Kitty:** Edit `~/.config/kitty/kitty.conf`
- **iTerm2:** Preferences → Profiles → Text → Font
- **Windows Terminal:** Settings → Profiles → Appearance → Font face

## LSP Not Working

### Check LSP Status

```vim
:LspInfo
```

This shows which servers are attached to the current buffer.

### Server Not Attached

**Causes:**
1. Server not installed
2. File not recognized
3. Server failed to start

**Solutions:**

1. **Install the server:**
   ```vim
   :Mason
   ```
   Search for and install the appropriate server.

2. **Check filetype:**
   ```vim
   :set ft?
   ```
   Ensure the filetype is correct.

3. **Check logs:**
   ```vim
   :LspLog
   ```
   Look for error messages.

### Server Installed But Not Starting

1. **Verify binary exists:**
   ```bash
   which clangd  # or your server
   ```

2. **Check PATH in Neovim:**
   ```vim
   :echo $PATH
   ```

3. **Restart the server:**
   ```vim
   :LspRestart
   ```

### No Completions Appearing

1. **Ensure LSP is attached:** `:LspInfo`
2. **Check blink.cmp is loaded:** `:Lazy` (look for blink.cmp)
3. **Try triggering manually:** `Ctrl+Space` in insert mode
4. **Check sources:** `:lua print(vim.inspect(require('blink.cmp').get_sources()))`

## Treesitter Issues

### Highlighting Wrong or Missing

1. **Check parser is installed:**
   ```vim
   :TSInstallInfo
   ```

2. **Reinstall parser:**
   ```vim
   :TSInstall <language>
   ```

3. **Update parsers:**
   ```vim
   :TSUpdate
   ```

### Parser Installation Fails

**Symptoms:** Error during `:TSInstall`

**Causes:**
1. Missing C compiler
2. Network issues

**Solutions:**

1. **Install a C compiler:**
   - Linux: `sudo apt install build-essential` or `sudo dnf install gcc`
   - macOS: `xcode-select --install`
   - Windows: Install Visual Studio Build Tools or MinGW

2. **Check network:** Ensure you can reach GitHub

## Plugins Not Loading

### Check Plugin Status

```vim
:Lazy
```

Look for:
- Red = error
- Yellow = warning
- Green = loaded

### Clear Cache and Reinstall

```vim
:Lazy clean
:Lazy install
:Lazy sync
```

Or manually:
```bash
rm -rf ~/.local/share/nvim/lazy
rm -rf ~/.cache/nvim
nvim  # Plugins will reinstall
```

### Plugin Errors on Startup

1. **Check the error message** for the plugin name
2. **Update the plugin:**
   ```vim
   :Lazy update <plugin-name>
   ```
3. **Check plugin's GitHub issues** for known problems

## Performance Issues

### Slow Startup

1. **Profile startup:**
   ```bash
   nvim --startuptime startup.log
   cat startup.log
   ```

2. **Check for slow plugins:**
   ```vim
   :Lazy profile
   ```

3. **Common fixes:**
   - Update all plugins: `:Lazy update`
   - Reduce `ensure_installed` parsers/servers

### Slow Editing Large Files

1. **Disable Treesitter for large files** (see [Treesitter docs](./configuration/treesitter))
2. **Disable LSP for specific files:**
   ```vim
   :LspStop
   ```

### Slow Completion

1. **Reduce completion sources** in blink.cmp config
2. **Increase debounce time** for completion
3. **Use a faster LSP** (e.g., rust-analyzer can be slow on large projects)

## Colors/Theme Issues

### Colors Look Wrong

1. **Ensure true color support:**
   ```vim
   :set termguicolors?
   ```
   Should show `termguicolors`.

2. **Check terminal support:**
   ```bash
   echo $TERM
   ```
   Should be `xterm-256color` or similar.

3. **For tmux users,** add to `~/.tmux.conf`:
   ```
   set -g default-terminal "tmux-256color"
   set -ag terminal-overrides ",xterm-256color:RGB"
   ```

### Theme Not Applied

1. **Check colorscheme is installed:**
   ```vim
   :Lazy
   ```

2. **Manually set colorscheme:**
   ```vim
   :colorscheme tokyonight
   ```

## Search Issues (ripgrep)

### Grep/Search Not Working

1. **Check ripgrep is installed:**
   ```bash
   which rg
   ```

2. **Install ripgrep:**
   - Linux: `sudo apt install ripgrep` or `sudo dnf install ripgrep`
   - macOS: `brew install ripgrep`
   - Windows: `choco install ripgrep`

3. **Verify in Neovim:**
   ```vim
   :echo executable('rg')
   ```
   Should return `1`.

## Keymaps Not Working

### Check if Keymap Exists

```vim
:verbose map <leader>ff
```

Shows where the keymap is defined.

### Keymap Conflicts

```vim
:map
```

Lists all mappings. Look for duplicates.

### Leader Key Issues

1. **Check leader is set:**
   ```vim
   :echo mapleader
   ```
   Should show a space.

2. **Ensure leader is set before plugins load** (FtVim handles this)

## Terminal Issues

### Terminal Not Opening

1. **Check terminal keymap:**
   ```vim
   :map <C-\>
   ```

2. **Try command:**
   ```vim
   :terminal
   ```

### Terminal Colors Wrong

Add to your shell config (`~/.bashrc`, `~/.zshrc`):
```bash
export TERM=xterm-256color
```

## Clipboard Issues

### Cannot Paste from System Clipboard

1. **Check clipboard support:**
   ```vim
   :echo has('clipboard')
   ```
   Should return `1`.

2. **Install clipboard provider:**
   - Linux: `sudo apt install xclip` or `xsel`
   - macOS: Should work by default
   - WSL: Install win32yank

3. **Use clipboard register:**
   - Paste: `"+p`
   - Copy: `"+y`

## Mason Issues

### Tools Not Installing

1. **Check Mason log:**
   ```vim
   :MasonLog
   ```

2. **Verify network access** to GitHub and registries

3. **Update Mason registry:**
   ```vim
   :MasonUpdate
   ```

### Tool Not Found After Install

1. **Restart Neovim** after installation
2. **Check Mason bin is in PATH:**
   ```vim
   :echo stdpath('data') .. '/mason/bin'
   ```

## Specific Error Messages

### "E5108: Error executing lua"

Usually a syntax error in your config. Check:
1. The line number in the error
2. Recent config changes
3. Run `:checkhealth` for more info

### "No matching language servers"

The LSP server for your file's language isn't configured or installed:
1. `:LspInfo` to see status
2. `:Mason` to install server
3. Add server to your config

### "Pattern not found"

Your search pattern isn't in the file. Check:
1. Case sensitivity (use `\c` for case-insensitive)
2. Regex escaping (escape special chars with `\`)

## Getting More Help

### Built-in Help

```vim
:help <topic>
```

### Check Health

```vim
:checkhealth
```

### View Messages

```vim
:messages
```

Shows recent Neovim messages including errors.

### Verbose Mode

Start Neovim with verbose logging:
```bash
nvim -V9logfile.log
```

### Report a Bug

If you've found a bug in FtVim:

1. Check [existing issues](https://github.com/FtVim/FtVim/issues)
2. Create a minimal reproduction
3. Include:
   - Neovim version (`:version`)
   - FtVim version
   - Steps to reproduce
   - Expected vs actual behavior
   - Error messages

## Reset FtVim

If all else fails, reset to a clean state:

```bash
# Backup your config first!
cp -r ~/.config/nvim ~/.config/nvim.bak

# Remove FtVim data
rm -rf ~/.local/share/nvim
rm -rf ~/.cache/nvim
rm -rf ~/.local/state/nvim

# Reinstall
nvim
```

This reinstalls all plugins and resets caches while preserving your config.
