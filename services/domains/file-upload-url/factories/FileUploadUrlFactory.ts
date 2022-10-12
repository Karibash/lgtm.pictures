export * as FileUploadUrlFactory from './FileUploadUrlFactory';

import { PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

import { s3Client } from '../../../infrastructures/clients/s3';

export const create = async (key: string, expiresIn: number): Promise<string> => {
  const command = new PutObjectCommand({
    Bucket: process.env.CONTENTS_BUCKET_NAME,
    Key: key,
  });

  return await getSignedUrl(s3Client, command, { expiresIn });
};
