import { t } from '../core/trpc';
import { imageUploadEndpointRouter } from './image-upload-endpoint';
import { postsRouter } from './posts';

export const appRouter = t.router({
  imageUploadEndpoint: imageUploadEndpointRouter,
  posts: postsRouter,
});

export type AppRouter = typeof appRouter;
