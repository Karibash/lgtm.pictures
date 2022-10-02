import { Api as ApiGateway, use } from '@serverless-stack/resources';

import { TemporalBucket } from './Bucket';

import type { StackContext } from '@serverless-stack/resources';

export const Api = ({ stack }: StackContext) => {
  const temporalBucket = use(TemporalBucket);

  return new ApiGateway(stack, 'Api', {
    defaults: {
      function: {
        permissions: [
          temporalBucket.bucket,
        ],
        config: [
          ...temporalBucket.parameters,
        ],
      },
    },
    cors: {
      allowMethods: ['GET', 'POST'],
    },
    routes: {
      'GET /api/trpc/{proxy+}': 'functions/trpc/index.handler',
      'POST /api/trpc/{proxy+}': 'functions/trpc/index.handler',
    },
  });
};
