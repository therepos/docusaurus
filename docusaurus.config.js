module.exports = {
  title: 'My Docusaurus Site',
  tagline: 'Docs made simple',
  url: 'https://therepos.github.io',
  baseUrl: '/docusaurus/',
  organizationName: 'therepos',
  projectName: 'docusaurus',
  deploymentBranch: 'gh-pages',
  favicon: 'img/favicon.ico',
  trailingSlash: false,

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: '/', // Serve docs at site root
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: [],
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'My Docusaurus Site',
      items: [
        {
          href: 'https://github.com/therepos/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} therepos.`,
    },
  },
};
