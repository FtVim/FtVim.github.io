# ⚙️ Configuration

Once FtVim is installed, you can easily customize it to suit your preferences.

## 📂 File Structure

Your Neovim configuration files are organized in a structured way for easy access and modification. Here’s an overview of the important directories and files:

```text {4-7,9-11}
~/.config/nvim
├── lua
│   ├── config
│   │   ├── autocmds.lua # Custom auto-commands
│   │   ├── keymaps.lua # Key mappings
│   │   └── options.lua # General options and settings
│   └── plugins
│       ├── plug1.lua
│       ├── **
│       └── plug2.lua
```
This structure keeps your configuration modular and clean, making it easy to find and edit specific settings.

## 🎨 Icons & Colorscheme

To customize the icons and colorscheme in FtVim, you can adjust the options for the FtVim plugin. For example, you can set the colorscheme in the `lua/plugins/colorscheme.lua` file.

Here's how you can specify the Kanagawa colorscheme in your configuration:

```lua
return {
  {
    "FtVim/FtVim",
    opts = {
      colorscheme = "kanagawa",  -- Set your preferred colorscheme here
    }
  }
}
```
