import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "执法手册",
  tagline: "中国应急管理行业执法人员的实用指南",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docusaurus.incoder.org",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Enforcement-Handbook", // Usually your GitHub org/user name.
  projectName: "EnforcementBook-Web", // Usually your repo name.

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: "zh-Hans",
  //   locales: ["zh-Hans"],
  // },

  markdown: {
    mermaid: true,
    hooks:{
      onBrokenMarkdownLinks: "warn",
    }
  },

  themes: [
    "@docusaurus/theme-mermaid",
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          // https://docusaurus.io/zh-CN/docs/api/plugins/@docusaurus/plugin-content-docs
          sidebarPath: "./sidebars.ts",
          path: "docs",
          routeBasePath: "/",
          remarkPlugins: [
            [require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }],
          ],
          showLastUpdateTime: true,
        },
        blog: {
          // https://docusaurus.io/zh-CN/docs/api/plugins/@docusaurus/plugin-content-blog
          showReadingTime: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    blog: {
      sidebar: {
        groupByYear: true,
      },
    },
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "执法手册",
      logo: {
        alt: "中国应急管理",
        src: "img/logo.svg",
        srcDark: "img/logo_dark.svg",
        href: "/",
      },
      items: [
        // {
        //   type: "docSidebar",
        //   sidebarId: "tutorialSidebar",
        //   position: "left",
        //   label: "Tutorial",
        // },
        { to: "/blog", label: "更新记录", position: "left" },
        // {
        //   type: 'search',
        //   position: 'right',
        // },
        // {
        //   type: "docsVersionDropdown",
        //   position: "right",
        //   dropdownActiveClassDisabled: true,
        // },
        // language change
        // {
        //   type: "localeDropdown",
        //   position: "right",
        // },
        // {
        //   href: "https://github.com/RootCluster/Docs-Guides",
        //   position: "right",
        //   className: "header-github-link",
        //   "aria-label": "GitHub repository",
        // },
      ],
    },
    footer: {
      style: "dark",
      // links: [
      //   {
      //     title: 'Docs',
      //     items: [
      //       {
      //         label: 'Tutorial',
      //         to: '/docs/intro',
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} 新疆维吾尔自治区应急管理厅, Inc. Built with 执法手册.`,
    },
    // Algolia 搜索配置
    algolia: {
      // The application ID provided by Algolia
      appId: 'LL4STJRCRE',

      // Public API key: it is safe to commit it
      apiKey: '89dabd075ac771d4175ee9f49435efe4',

      indexName: 'EnforcementBook',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      replaceSearchResultPathname: {
        from: '/docs/', // or as RegExp: /\/docs\//
        to: '/',
      },

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: false,

      // Optional: whether you want to use the new Ask AI feature (undefined by default)
      askAi: 'YOUR_ALGOLIA_ASK_AI_ASSISTANT_ID',

      //... other Algolia params
    },

    // announcementBar: {
    //   id: `announcementBar-v1`,
    //   // content: `⭐️ If you like Docusaurus, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/facebook/docusaurus">GitHub</a> and follow us on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/docusaurus">Twitter ${TwitterSvg}</a>`,
    //   content: `🎉️ <b><a target="_blank" ">Docusaurus </a> is out!</b> 🥳️`,
    // },
    prism: {
      additionalLanguages: ["java", "bash", "diff", "json"],
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
