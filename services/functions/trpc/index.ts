import { awsLambdaRequestHandler } from '@trpc/server/adapters/aws-lambda';
import { APIGatewayProxyHandlerV2 } from 'aws-lambda';

import { createContext } from './core/context';
import { appRouter } from './routers/app';

export const handler: APIGatewayProxyHandlerV2 = awsLambdaRequestHandler({
  router: appRouter,
  createContext,
});
