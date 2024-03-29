import { cache } from '@emotion/css';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Head from 'next/head';

import { SnackbarProvider } from '../hooks/useSnackbar';
import { trpc } from '../trpc';

import type { NextComponentType, NextPage } from 'next';
import type { AppProps as NextAppProps, AppContext, AppInitialProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';

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
  palette: {
    mode: 'dark',
    divider: '#44475a',
    background: {
      default: '#282a36',
      paper: '#282a36',
    },
    primary: {
      main: '#ff79c6',
      light: '#ffacf9',
      dark: '#c94695',
      contrastText: '#000',
    },
    secondary: {
      main: '#50fa7b',
      light: '#8dffac',
      dark: '#00c64c',
      contrastText: '#000',
    },
    error: {
      main: '#ff5555',
      light: '#ff8982',
      dark: '#c5162c',
      contrastText: '#000',
    },
    warning: {
      main: '#ffb86c',
      light: '#ffea9c',
      dark: '#c9883e',
      contrastText: '#000',
    },
    info: {
      main: '#8be9fd',
      light: '#c0ffff',
      dark: '#56b7ca',
      contrastText: '#000',
    },
    success: {
      main: '#50fa7b',
      light: '#8dffac',
      dark: '#00c64c',
      contrastText: '#000',
    },
  },
  components: {
    MuiTooltip: {
      defaultProps: {
        enterDelay: 1000,
      },
    },
  },
});

export type PageComponent<P = Record<string, unknown>> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppProps = NextAppProps & {
  Component: PageComponent;
};

const App: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}) => {
  const getLayout = Component.getLayout ?? (page => page);

  // noinspection HtmlRequiredTitleElement
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider autoHideDuration={2000}>
          <Head>
            {process.env.NEXT_PUBLIC_STAGE !== 'production' && (
              <meta name="robots" content="noindex" />
            )}
            <meta name="viewport" content="initial-scale=1, width=device-width" />
          </Head>
          <CssBaseline />
          {getLayout(<Component {...pageProps} />)}
        </SnackbarProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default trpc.withTRPC(App);
