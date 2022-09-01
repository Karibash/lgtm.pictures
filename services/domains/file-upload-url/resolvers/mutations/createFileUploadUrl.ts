import { FileUploadUrl } from '@lgtm/graphql/types';
import { ulid } from 'ulid';

import { FileUploadUrlFactory } from '../../factories/FileUploadUrlFactory';

// 5 minutes
const uploadExpireTime = 60 * 5;

export const createFileUploadUrl = async (): Promise<FileUploadUrl> => {
  const id = ulid();
  const url = await FileUploadUrlFactory.create(id, uploadExpireTime);
  return { id, url };
};
