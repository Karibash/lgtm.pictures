import { App } from '@serverless-stack/resources';

import { Api } from './Api';
import { TemporalBucket, PublicBucket } from './Bucket';
import { Web } from './Web';

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
