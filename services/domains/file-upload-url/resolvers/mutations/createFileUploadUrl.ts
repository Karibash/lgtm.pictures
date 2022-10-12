import cuid from 'cuid';

import { FileUploadUrlFactory } from '../../factories/FileUploadUrlFactory';
import { FileUploadUrlSchema } from '../../schema';

import type { FileUploadUrl } from '../../schema';

// 5 minutes
const uploadExpireTime = 60 * 5;

export const createFileUploadUrl = async (): Promise<FileUploadUrl> => {
  const url = await FileUploadUrlFactory.create(`temporal/${cuid()}`, uploadExpireTime);
  return FileUploadUrlSchema.parse(url);
};
