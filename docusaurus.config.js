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
        routeBasePath: '/',
        sidebarPath: require.resolve('./sidebars.js'),
      },
      blog: false,
      theme: {
        // Removed: customCss
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
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
      // showLastUpdateAuthor: false,
      // showLastUpdateTime: false,
      // editUrl: undefined,
    },
    // Disable pagination
    pagination: {
      previous: false,
      next: false,
    },    
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} therepos.`,
    },
  },
};
