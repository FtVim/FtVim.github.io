import {theme} from './src/themes/oldworld';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'FtVim',
  tagline: 'A Neovim config for the lazy',
  url: 'https://ftvim.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'FtVim', // Usually your GitHub org/user name.
  projectName: 'FtVim.github.io', // Usually your repo name.


  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/FtVim/FtVim.github.io/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'FtVim',
      logo: {
        alt: 'FtVim Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {
          href: 'https://github.com/FtVim/FtVim',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
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
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/FtVim/FtVim',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} FtVim, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: theme,
      darkTheme: theme,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
