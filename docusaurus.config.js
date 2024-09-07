/**
 * Copyright (c) Ftvim Organization.
 */

const config = {
  title: "FtVim",
  tagline: "A Neovim config",
  url: "https://ftvim.github.io/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  trailingSlash: false,
  organizationName: "FtVim",
  projectName: "FtVim.github.io",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "docs",
          sidebarPath: require.resolve("./sidebars.js"),
          remarkPlugins: [require("./src/remark/playground")],
        },
        blog: false,
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "FtVim",
      logo: {
        alt: "FtVim Logo",
        src: "img/logo.png",
      },
      items: [
        {
          to: "docs/getting-started/introduction",
          position: "left",
          label: "Docs",
        },
        {
          href: "https://github.com/FtVim/FtVim",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introduction",
              to: "docs/getting-started/introduction",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discussions",
              href: "https://github.com/FtVim/FtVim/discussions",
            },
            {
              label: "Discord",
              href: "https://discord.gg/75kvFwyxpe",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/FtVim/FtVim",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} FtVim, Inc. Built with Docusaurus.`,
    },
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
  },
};

export default config;
