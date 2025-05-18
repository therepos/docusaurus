// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const config = {
  title: 'My Docs Site', // Change this to your site title
  tagline: 'Documentation powered by Docusaurus',
  url: 'https://therepos.github.io',
  baseUrl: '/docusaurus/',
  organizationName: 'therepos',
  projectName: 'docusaurus',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  favicon: 'img/favicon.ico',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: '/', // Serve docs at root URL
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/therepos/docusaurus/edit/main/',
        },
        blog: false, // Disable blog
        theme: {
          customCss: require.resolve('./docs/extra/styles.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'My Docs Site',
        logo: {
          alt: 'Site Logo',
          src: 'img/logo.svg', // Optional: add a logo to static/img
        },
        items: [
          {
            type: 'doc',
            docId: 'about/index',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/therepos/docusaurus',
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
                label: 'About',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/therepos/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} therepos.`,
      },
    }),
};

module.exports = config;
