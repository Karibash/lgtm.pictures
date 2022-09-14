module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: [
    '../src/components/**/stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    'storybook-addon-next',
    'storybook-addon-swc',
  ],
  managerHead: (head) => {
    return `
      ${head}
      <link rel="shortcut icon" type="image/x-icon" href="/storybook/favicon.ico">
    `;
  },
};
