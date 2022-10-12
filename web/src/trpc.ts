import { httpBatchLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';
import superjson from 'superjson';

import type { AppRouter } from '@lgtm/services/applications/routers/app';

export const trpc = createTRPCNext<AppRouter>({
  ssr: false,
  config: ({ ctx }) => {
    const isClient = typeof window !== 'undefined';
    return {
      transformer: superjson,
      queryClientConfig: {
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
          },
        },
      },
      links: [
        httpBatchLink({
          url: '/api/trpc',
          headers: () => {
            if (isClient || !ctx?.req) return {};
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { connection, ...headers } = ctx.req.headers;
            return headers;
          },
        }),
      ],
    };
  },
});
