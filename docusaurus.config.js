module.exports = {
  title: 'QuangSon',
  tagline: 'I am programmer',
  url: 'https://quangson91.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'quangson91', // Usually your GitHub org/user name.
  projectName: 'quangson91.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'QuangSon',
      logo: {
        alt: 'QuangSon Logo',
        src: 'img/logo.jpg',
      },
      items: [
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/quangson91',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/users/3205503/quangson91',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/quangson91',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/quangson91',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} QuangSon. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        blog: {
          showReadingTime: true
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
