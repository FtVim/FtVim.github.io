module.exports = {
  plain: {
    color: "#c9c7cd", // foreground color
    backgroundColor: "#161617", // background color
  },
  styles: [
    {
      types: ["prolog", "builtin"],
      style: {
        color: "#ea83a5", // red
      },
    },
    {
      types: ["function"],
      style: {
        color: "#9ca2cf", // blue
      },
    },
    {
      types: ["symbol"],
      style: {
        color: "#acb1d7", // brightBlue
      },
    },
    {
      types: ["punctuation"],
      style: {
        color: "#e8b0d4", // brightPurple
      },
    },
    {
      types: ["string", "char", "tag", "selector"],
      style: {
        color: "#a7c8b3", // brightGreen
      },
    },
    {
      types: ["keyword"],
      style: {
        color: "#e29eca", // purple
      },
    },
    {
      types: ["operator"],
      style: {
        color: "#97c0c4", // brightCyan
      },
    },
    {
      types: ["constant", "boolean"],
      style: {
        color: "#ed96b3", // brightRed
      },
    },
    {
      types: ["variable"],
      style: {
        color: "#c9c7cd", // white
      },
    },
    {
      types: ["comment"],
      style: {
        color: "#353539", // brightBlack
        fontStyle: "italic",
      },
    },
    {
      types: ["attr-name"],
      style: {
        color: "#e6b99d", // yellow
      },
    },
  ],
};
