import Image from 'next/future/image';

import App from '../src/pages/_app';

// TODO: Workaround until storybook-addon-next supports next/future/image.
// see: https://github.com/RyanClementsHax/storybook-addon-next/issues/99
const OriginalImage = Image.default;
Object.defineProperty(Image, 'default', {
  configurable: true,
  value: props => <OriginalImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  Story => <App Component={Story} pageProps={{}} />
];
