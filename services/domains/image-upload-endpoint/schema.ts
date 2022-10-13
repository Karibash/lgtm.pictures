import { z } from 'zod';

export const ImageUploadEndpointSchema = z.object({
  url: z.string().url(),
  fields: z.record(z.string()),
});

export type ImageUploadEndpoint = z.infer<typeof ImageUploadEndpointSchema>;
