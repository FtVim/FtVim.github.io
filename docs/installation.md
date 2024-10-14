---
sidebar_position: 2
---

# 🛠️ Installation

Using the [starter](https://github.com/FtVim/starter) template

1. Delete or Backup Your Current Neovim Files
To ensure a clean installation, remove or back up your existing Neovim configuration and data files:
```bash
# Remove existing Neovim configuration (required)
rm -rf ~/.config/nvim

# Optional but recommended: clean Neovim data and cache
rm -rf ~/.local/share/nvim
rm -rf ~/.local/state/nvim
rm -rf ~/.cache/nvim
```

2. Clone the FtVim Starter Configuration
Next, clone the FtVim starter repository into your Neovim configuration directory:
```bash
git clone https://github.com/FtVim/starter ~/.config/nvim
```

3. Start Neovim!
Now you're ready to launch Neovim with your fresh FtVim setup:
```bash
nvim
```


