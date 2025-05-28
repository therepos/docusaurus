export default {
  title: 'Docusaurus',
  tagline: 'Docusaurus Tagline',
  url: 'https://therepos.github.io',
  baseUrl: '/docusaurus/',
  organizationName: 'therepos',
  projectName: 'docusaurus',
  deploymentBranch: 'gh-pages',
  favicon: 'img/favicon.ico',
  trailingSlash: false,

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          showLastUpdateTime: true,
          sidebarCollapsible: true,
          editUrl: 'https://github.com/therepos/docusaurus/edit/main/',
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'Blog',
          blogDescription: 'Thoughts and updates.',
          routeBasePath: 'blog',
          blogSidebarTitle: 'Events',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: './src/css/styles.css',
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Docs',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'aboutidebar',
          position: 'left',
          label: 'About',
        },
        {
          type: 'search',
          position: 'right',
        },
        {
          href: 'https://github.com/therepos/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left',
        },
      ],
    },

    // Material Icons
    headTags: [
      {
        tagName: 'link',
        attributes: {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined',
        },
      },
    ],
  },
};
