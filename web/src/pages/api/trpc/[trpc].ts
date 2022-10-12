import { appRouter } from '@lgtm/services/applications/routers/app';
import { createNextApiHandler } from '@trpc/server/adapters/next';

import type { Context } from '@lgtm/services/applications/core/context';
import type { CreateNextContextOptions } from '@trpc/server/adapters/next';

const createContext = (options: CreateNextContextOptions): Context => {
  return {};
};

export default createNextApiHandler({
  router: appRouter,
  createContext: createContext,
  batching: {
    enabled: true,
  },
});
