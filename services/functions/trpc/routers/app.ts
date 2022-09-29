import { t } from '../core/trpc';
import { fileUploadUrlRouter } from './file-upload-url';

export const appRouter = t.router({
  fileUploadUrl: fileUploadUrlRouter,
});

export type AppRouter = typeof appRouter;
