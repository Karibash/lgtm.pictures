import { StackContext, use, NextjsSite } from '@serverless-stack/resources';

import { Api } from './Api';

export const Web = ({ stack }: StackContext) => {
  const api = use(Api);

  return new NextjsSite(stack, 'site', {
    path: 'web',
    nextBinPath: '../node_modules/.bin/next',
    environment: {
      NEXT_PUBLIC_API_URL: api.url,
    },
  });
};
