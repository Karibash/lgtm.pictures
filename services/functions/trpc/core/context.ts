import { inferAsyncReturnType } from '@trpc/server';
import { CreateAWSLambdaContextOptions } from '@trpc/server/adapters/aws-lambda';
import { APIGatewayProxyEventV2 } from 'aws-lambda';

export const createContext = (options: CreateAWSLambdaContextOptions<APIGatewayProxyEventV2>) => {
  return {};
};

export type Context = inferAsyncReturnType<typeof createContext>;
