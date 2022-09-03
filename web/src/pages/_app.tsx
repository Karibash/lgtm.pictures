import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppProps } from 'next/app';
import Head from 'next/head';

const cache = createCache({ key: 'css' });

const theme = createTheme({
  typography: {
    fontFamily: [
      '"Roboto"',
      '"Noto Sans JP"',
      '"Helvetica"',
      '"Arial"',
      'sans-serif',
    ].join(','),
  },
});

const App = ({ Component, pageProps }: AppProps) => {
  // noinspection HtmlRequiredTitleElement
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <Head>
          {process.env.NEXT_PUBLIC_STAGE !== 'production' && (
            <meta name="robots" content="noindex" />
          )}
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
