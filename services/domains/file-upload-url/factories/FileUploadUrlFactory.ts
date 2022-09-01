export * as FileUploadUrlFactory from './FileUploadUrlFactory';

import { PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { Config } from '@serverless-stack/node/config';

import { s3Client } from '../../../clients/s3';

export const create = async (key: string, expiresIn: number): Promise<string> => {
  const command = new PutObjectCommand({
    Bucket: Config.TEMPORAL_BUCKET_NAME,
    Key: key,
  });

  return await getSignedUrl(s3Client, command, { expiresIn });
};
