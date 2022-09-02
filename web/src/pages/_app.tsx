import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { AppProps } from 'next/app';

const cache = createCache({ key: 'css' });

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <CacheProvider value={cache}>
      <CssBaseline />
      <Component {...pageProps} />
    </CacheProvider>
  );
};

export default App;
