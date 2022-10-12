import { t } from '../core/trpc';
import { fileUploadUrlRouter } from './file-upload-url';
import { postsRouter } from './posts';

export const appRouter = t.router({
  fileUploadUrl: fileUploadUrlRouter,
  posts: postsRouter,
});

export type AppRouter = typeof appRouter;
