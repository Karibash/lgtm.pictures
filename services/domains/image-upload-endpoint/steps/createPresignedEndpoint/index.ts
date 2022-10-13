import { createPresignedPost } from '@aws-sdk/s3-presigned-post';
import { ResultAsync } from 'neverthrow';

import { s3Client } from '../../../../infrastructures/clients/s3';

import type { PresignedPost, PresignedPostOptions } from '@aws-sdk/s3-presigned-post';

export type CreatePresignedEndpointInput = {
  bucket: PresignedPostOptions['Bucket'];
  key: PresignedPostOptions['Key'];
  conditions?: PresignedPostOptions['Conditions'];
  expiresIn?: PresignedPostOptions['Expires'];
};

export type CreatePresignedEndpoint = (input: CreatePresignedEndpointInput) => ResultAsync<PresignedPost, unknown>;

export const createPresignedEndpoint: CreatePresignedEndpoint = input => {
  return ResultAsync.fromPromise(createPresignedPost(s3Client, {
    Bucket: input.bucket,
    Key: input.key,
    Conditions: input.conditions,
    Expires: input.expiresIn,
  }), error => error);
};
