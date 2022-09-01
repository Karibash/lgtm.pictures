import { FileUploadUrl } from '@lgtm/graphql/types';
import { AppSyncResolverHandler } from 'aws-lambda';

import { createFileUploadUrl } from '../../domains/file-upload-url/resolvers/mutations/createFileUploadUrl';

export const handler: AppSyncResolverHandler<{}, FileUploadUrl> = async () => {
  return await createFileUploadUrl();
};
