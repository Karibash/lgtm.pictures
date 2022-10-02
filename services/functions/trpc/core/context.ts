import type { inferAsyncReturnType } from '@trpc/server';
import type { CreateAWSLambdaContextOptions } from '@trpc/server/adapters/aws-lambda';
import type { APIGatewayProxyEventV2 } from 'aws-lambda';

export const createContext = (options: CreateAWSLambdaContextOptions<APIGatewayProxyEventV2>) => {
  return {};
};

export type Context = inferAsyncReturnType<typeof createContext>;
