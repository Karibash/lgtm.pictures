import { createFileUploadUrl } from '../../../domains/file-upload-url/resolvers/mutations/createFileUploadUrl';
import { FileUploadUrlSchema } from '../../../domains/file-upload-url/schema';
import { t } from '../core/trpc';

export const fileUploadUrlRouter = t.router({
  create: t.procedure
    .output(FileUploadUrlSchema)
    .mutation(async () => {
      return await createFileUploadUrl();
    }),
});
