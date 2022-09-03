import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NextPage } from 'next';
import { AppProps as NextAppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement, ReactNode } from 'react';

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

export type PageComponent<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppProps = NextAppProps & {
  Component: PageComponent;
};

const App = ({ Component, pageProps }: AppProps) => {
  const getLayout = Component.getLayout ?? (page => page);

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
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
