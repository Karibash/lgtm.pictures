import { StackContext, Api as ApiGateway, Config } from '@serverless-stack/resources';

export const Api = ({ stack }: StackContext) => {
  const api = new ApiGateway(stack, 'api', {
    routes: {
      'POST /graphql': {
        type: 'pothos',
        function: {
          handler: 'functions/graphql/graphql.handler',
        },
        schema: 'services/functions/graphql/schema.ts',
        output: 'graphql/schema.graphql',
        commands: [
          'npx genql --output ./graphql/genql --schema ./graphql/schema.graphql --esm',
        ],
      },
    },
  });

  new Config.Parameter(stack, 'API_URL', {
    value: api.url,
  });

  stack.addOutputs({
    API_URL_OUTPUT: api.url,
  });

  return api;
};
