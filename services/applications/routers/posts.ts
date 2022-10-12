import cuid from 'cuid';
import { z } from 'zod';

import { PostSchema } from '../../domains/post/schema';
import { t } from '../core/trpc';
import { createPaginationSchema } from '../helpers/pagination';

const createMocks = (offset: number) => {
  const edges = [...Array<undefined>(25)].map((_, index) => {
    const id = index + offset;
    return {
      cursor: id,
      node: {
        id: cuid(),
        image: {
          url: `https://via.placeholder.com/${512 * (index % 3 ? 1 : 2)}x${512 * (index % 5 ? 1 : 2)}`,
          title: `title-${id}`,
          width: 512 * (index % 3 ? 1 : 2),
          height: 512 * (index % 5 ? 1 : 2),
        },
        viewCount: (index % 5) * 10,
        favorited: Boolean(index % 3),
        favoriteCount: (index % 3) * 10,
      },
    };
  });

  return {
    edges,
    pageInfo: {
      startCursor: edges[0].cursor,
      endCursor: edges.slice(-1)[0].cursor,
    },
  };
};

export const postsRouter = t.router({
  getFavoritePosts: t.procedure
    .input(z.object({
      cursor: z.number().optional(),
    }))
    .output(createPaginationSchema(PostSchema, z.number()))
    .query(({ input: { cursor } }) => {
      return createMocks(cursor ?? 0);
    }),
  getLatestPosts: t.procedure
    .input(z.object({
      cursor: z.number().optional(),
    }))
    .output(createPaginationSchema(PostSchema, z.number()))
    .query(({ input: { cursor } }) => {
      return createMocks(cursor ?? 0);
    }),
  getTrendPosts: t.procedure
    .input(z.object({
      cursor: z.number().optional(),
    }))
    .output(createPaginationSchema(PostSchema, z.number()))
    .query(({ input: { cursor } }) => {
      return createMocks(cursor ?? 0);
    }),
});
