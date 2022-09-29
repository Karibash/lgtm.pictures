import { AppRouter } from '@lgtm/services/functions/trpc/routers/app';
import { httpBatchLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';
import superjson from 'superjson';

const endpoint = `${process.env.NEXT_PUBLIC_API_URL ?? ''}/api/trpc`;

export const trpc = createTRPCNext<AppRouter>({
  ssr: true,
  config: ({ ctx }) => {
    const isClient = typeof window !== 'undefined';
    return {
      transformer: superjson,
      links: [
        httpBatchLink({
          url: endpoint,
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
