import { z } from 'zod';

export const createPaginationSchema = <Node extends z.ZodType, Cursor extends z.ZodType>(
  node: Node,
  cursor: Cursor,
) => {
  return z.object({
    pageInfo: z.object({
      startCursor: cursor.optional(),
      endCursor: cursor.optional(),
    }),
    edges: z.array(z.object({
      node: node,
      cursor: cursor,
    })),
  });
};
