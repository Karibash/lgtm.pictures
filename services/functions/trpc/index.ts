import { awsLambdaRequestHandler } from '@trpc/server/adapters/aws-lambda';

import { createContext } from './core/context';
import { appRouter } from './routers/app';

import type { APIGatewayProxyHandlerV2 } from 'aws-lambda';

export const handler: APIGatewayProxyHandlerV2 = awsLambdaRequestHandler({
  router: appRouter,
  createContext,
});
