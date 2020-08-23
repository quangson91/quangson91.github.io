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
        src: 'img/logo.png',
      },
      items: [
        { to: 'blog', label: 'Blog', position: 'left' },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} QuangSon. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
