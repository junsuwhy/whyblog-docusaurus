import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'My Blog & Knowledge Base',
  tagline: 'Powered by Docusaurus',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://junsuwhy.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/whyblog-docusaurus/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'junsuwhy', // Usually your GitHub org/user name.
  projectName: 'whyblog-docusaurus', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-hant".
  i18n: {
    defaultLocale: 'zh-hant',
    locales: ['zh-hant', 'en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          path: './content/docs',
        },
        blog: {
          path: './content/blog',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'My Blog & Knowledge Base',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/',
          label: '首頁',
          position: 'left',
          activeBaseRegex: '^/$',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '文件',
        },
        {to: '/blog', label: '部落格', position: 'left'},
        {
          to: '/about',
          label: '關於',
          position: 'left',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/junsuwhy/whyblog-docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文件',
          items: [
            {
              label: '快速開始',
              to: '/docs/intro',
            },
            {
              label: '建立頁面',
              to: '/docs/tutorial-basics/create-a-page',
            },
          ],
        },
        {
          title: '社群',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/junsuwhy/whyblog-docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/junsuwhy',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '部落格',
              to: '/blog',
            },
            {
              label: '關於',
              to: '/about',
            },
            {
              label: 'RSS',
              href: '/blog/rss.xml',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Blog & Knowledge Base. 使用 Docusaurus 建置。`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
