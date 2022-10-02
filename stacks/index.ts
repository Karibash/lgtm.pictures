import { Api } from './Api';
import { TemporalBucket, PublicBucket } from './Bucket';
import { Web } from './Web';

import type { App } from '@serverless-stack/resources';

export default (app: App) => {
  app.setDefaultFunctionProps({
    runtime: 'nodejs16.x',
    srcPath: 'services',
    bundle: {
      format: 'esm',
    },
  });

  app
    .stack(TemporalBucket)
    .stack(PublicBucket)
    .stack(Api)
    .stack(Web);
};
