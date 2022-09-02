import { StackContext, AppSyncApi, use } from '@serverless-stack/resources';

import { TemporalBucket } from './Bucket';

export const Api = ({ stack }: StackContext) => {
  const temporalBucket = use(TemporalBucket);

  const api = new AppSyncApi(stack, 'Api', {
    defaults: {
      function: {
        config: [
          ...temporalBucket.parameters,
        ],
      },
    },
    schema: 'graphql/schemas/schema.graphql',
    resolvers: {
      'Mutation createFileUploadUrl': 'functions/graphql/createFileUploadUrl.handler',
    },
  });

  api.attachPermissionsToDataSource('Mutation createFileUploadUrl', [temporalBucket.bucket]);

  return api;
};
