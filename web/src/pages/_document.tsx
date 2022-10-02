import { cache } from '@emotion/css';
import createEmotionServer from '@emotion/server/create-instance';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

import type { NextComponentType } from 'next';
import type { DocumentContext, DocumentInitialProps, DocumentProps } from 'next/document';

const Document: NextComponentType<DocumentContext, DocumentInitialProps, DocumentProps> = () => {
  // noinspection HtmlRequiredTitleElement
  return (
    <Html lang="ja">
      <Head>
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="manifest" href="/favicons/manifest.json" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
        <meta name="msapplication-TileColor" content="#282a36" />
        <meta name="theme-color" content="#282a36" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

Document.getInitialProps = async context => {
  const page = await context.renderPage();
  const server = createEmotionServer(cache);
  const { ids, css } = server.extractCritical(page.html);

  const initialProps = await NextDocument.getInitialProps(context);
  return {
    ...initialProps,
    styles: (
      <>
        {initialProps.styles}
        <style
          data-emotion={`css ${ids.join(' ')}`}
          dangerouslySetInnerHTML={{ __html: css }}
        />
      </>
    ),
  };
};

export default Document;
