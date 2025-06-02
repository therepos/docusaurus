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
          path: 'blog',
          routeBasePath: 'blog',
          // blogTitle: 'Blog',
          // blogDescription: 'Thoughts and updates.',
          // blogSidebarTitle: 'Timeline',
          blogSidebarTitle: 'Timeline',
          blogSidebarCount: 'ALL',
          onUntruncatedBlogPosts: 'ignore',
          showReadingTime: true,
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
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
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
      copyright: `
        <div class="footer-row">
          <div class="footer-left">
            <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" style="color: #ebedf0;">CC BY 4.0</a> © ${currentYear} therepos.<br/>
            Made with Docusaurus.
          </div>
          <div class="footer-icons">
            <a href="https://github.com" class="icon icon-github" target="_blank" aria-label="GitHub"></a>
            <a href="https://hub.docker.com" class="icon icon-docker" target="_blank" aria-label="Docker"></a>
          </div>
        </div>
      `,
    },
  },
};
