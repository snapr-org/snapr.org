const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'snapr',
  tagline: 'economies with ♥ for people, by people',
  url: 'https://snapr.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/u2665-ad2d6f.ico',
  organizationName: 'snapr-org',
  projectName: 'snapr.org',
  themeConfig: {
    navbar: {
      title: 'snapr',
      logo: {
        alt: 'snapr heart',
        src: 'img/u2665-ad2d6f.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'introduction',
          position: 'left',
          label: 'introduction',
        },
        /*
        {
          to: '/blog',
          label: 'blog',
          position: 'left'
        },
        {
          href: 'https://github.com/snapr-org',
          label: 'github',
          position: 'right',
        },
        */
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'docs',
          items: [
            {
              label: 'introduction',
              to: 'docs/introduction',
            },
          ],
        },
        {
          title: 'contribute',
          items: [
            {
              label: 'chat / faucet',
              href: 'https://keybase.io/team/snapr',
            },
            {
              label: 'github',
              href: 'https://github.com/snapr-org',
            },
          ],
        },
        {
          title: 'systems',
          items: [
            {
              label: 'testnet',
              href: 'https://telemetry.snapr.org/#/snapr%20testnet',
            },
            {
              label: 'mainnet',
              href: 'https://telemetry.snapr.org/#/snapr%20mainnet',
            },
          ],
        },
      ],
      copyright: 'snapr',
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/snapr-org/snapr.org/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/snapr-org/snapr.org/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
