import { z } from 'zod';

export const PostSchema = z.object({
  id: z.string().cuid(),
  image: z.object({
    url: z.string().url(),
    title: z.string(),
    width: z.number(),
    height: z.number(),
  }),
  viewCount: z.number(),
  favorited: z.boolean(),
  favoriteCount: z.number(),
});

export type Post = z.infer<typeof PostSchema>;
