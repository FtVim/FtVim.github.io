---
sidebar_position: 2
---

# 🛠️ Installation

FtVim uses a **starter template** model. You clone the starter repository which then loads FtVim as a plugin. This keeps your configuration separate from FtVim's core, making updates easy.

## Standard Installation

### 1. Backup Your Current Configuration

```bash
# Backup existing configuration (if any)
mv ~/.config/nvim ~/.config/nvim.bak
mv ~/.local/share/nvim ~/.local/share/nvim.bak
mv ~/.local/state/nvim ~/.local/state/nvim.bak
mv ~/.cache/nvim ~/.cache/nvim.bak
```

### 2. Clone the Starter Template

```bash
git clone https://github.com/FtVim/starter ~/.config/nvim
```

### 3. Start Neovim

```bash
nvim
```

On first launch, [lazy.nvim](https://github.com/folke/lazy.nvim) will automatically install all plugins. This may take a minute.

## Parallel Installation

Want to try FtVim without replacing your current configuration? Use `NVIM_APPNAME`:

```bash
# Clone to a separate directory
git clone https://github.com/FtVim/starter ~/.config/ftvim

# Run with NVIM_APPNAME
NVIM_APPNAME=ftvim nvim
```

This keeps FtVim completely isolated from your main Neovim configuration.

:::tip
You can create an alias for convenience:
```bash
alias ftvim='NVIM_APPNAME=ftvim nvim'
```
:::

## Post-Installation

After installation, you may want to:

1. **Install language servers** - Open Neovim and run `:Mason` to install LSP servers for your languages
2. **Enable extras** - See [Extras](/docs/extras) for optional features like 42 support or Copilot
3. **Customize** - See [Configuration](/docs/configuration) to personalize FtVim

## Updating

To update FtVim and all plugins:

```vim
:Lazy update
```

## Uninstalling

To completely remove FtVim:

```bash
rm -rf ~/.config/nvim
rm -rf ~/.local/share/nvim
rm -rf ~/.local/state/nvim
rm -rf ~/.cache/nvim
```
