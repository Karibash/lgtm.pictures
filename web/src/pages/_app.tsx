import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { AppProps } from 'next/app';
import Head from 'next/head';

const cache = createCache({ key: 'css' });

const App = ({ Component, pageProps }: AppProps) => {
  // noinspection HtmlRequiredTitleElement
  return (
    <CacheProvider value={cache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <CssBaseline />
      <Component {...pageProps} />
    </CacheProvider>
  );
};

export default App;
