import { z } from 'zod';

export const FileUploadUrlSchema = z.string().url();

export type FileUploadUrl = z.infer<typeof FileUploadUrlSchema>;
