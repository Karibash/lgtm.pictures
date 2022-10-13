import { ImageUploadEndpointSchema } from '../../domains/image-upload-endpoint/schema';
import { createImageUploadEndpoint } from '../../domains/image-upload-endpoint/workflows/createImageUploadEndpoint';
import { t } from '../core/trpc';

export const imageUploadEndpointRouter = t.router({
  create: t.procedure
    .output(ImageUploadEndpointSchema)
    .mutation(async () => {
      return await createImageUploadEndpoint().match(
        data => {
          return data;
        },
        error => {
          throw error;
        },
      );
    }),
});
