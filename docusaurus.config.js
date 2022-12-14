// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RecipeSage Documentation',
  tagline: 'An open source recipe keeper, shopping list organizer, and meal planner.',
  url: 'https://docs.recipesage.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://recipesage.com/assets/icon/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'julianpoy', // Usually your GitHub org/user name.
  projectName: 'recipesage-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  trailingSlash: true,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: '',
        logo: {
          alt: 'RecipeSage Logo',
          src: 'https://recipesage.com/assets/recipesage-black-trimmed.png',
          srcDark: 'https://recipesage.com/assets/recipesage-white-trimmed.png',
        },
        items: [
          {
            href: 'https://recipesage.com',
            label: 'Open App',
            position: 'left',
          },
          {
            type: 'doc',
            docId: 'tutorials/index',
            position: 'left',
            label: 'User Guide',
          },
          {
            type: 'doc',
            docId: 'release-notes',
            position: 'left',
            label: 'Release Notes',
          },
          {
            href: 'https://github.com/julianpoy/recipesage',
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
                label: 'User Guide',
                to: '/docs/tutorials/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/recipesageofficial',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Reddit',
                href: 'https://reddit.com/r/recipesage',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Contact Me',
                href: 'https://recipesage.com/#/about/contact',
              },
              {
                label: 'GitHub (Application)',
                href: 'https://github.com/julianpoy/recipesage',
              },
              {
                label: 'GitHub (Documentation)',
                href: 'https://github.com/julianpoy/recipesage-docs',
              },
            ],
          },
        ],
        copyright: 'Thanks for the support!',
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
