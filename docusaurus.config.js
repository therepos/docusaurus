import {themes as prismThemes} from 'prism-react-renderer';

const currentYear = new Date().getFullYear();

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
          blogSidebarTitle: 'Timeline',
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
          sidebarId: 'aboutSidebar',
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
    prism: {
      theme: prismThemes.github,
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" style="color: #ebedf0;">CC BY 4.0</a> © ${currentYear} therepos. Made with Docusaurus.`,
    },
  },
};
