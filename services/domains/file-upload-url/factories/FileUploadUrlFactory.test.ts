import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { Config } from '@serverless-stack/node/config';
import { afterEach, expect, it, vi } from 'vitest';

import { FileUploadUrlFactory } from './FileUploadUrlFactory';

import type { PutObjectCommand } from '@aws-sdk/client-s3';
import type { Mock } from 'vitest';

afterEach(() => {
  vi.restoreAllMocks();
});

it('Check that the getSignedUrl function is called correctly.', async () => {
  vi.mock('@aws-sdk/s3-request-presigner', () => ({
    getSignedUrl: vi.fn<Parameters<typeof getSignedUrl>, ReturnType<typeof getSignedUrl>>(),
  }));

  const key = 'key';
  const expiresIn = 1;

  await FileUploadUrlFactory.create(key, expiresIn);

  expect(getSignedUrl).toHaveBeenCalledTimes(1);

  const [, command, options] = (getSignedUrl as Mock).mock.calls[0] as Parameters<typeof getSignedUrl>;
  expect((command as PutObjectCommand).input.Key).toBe(key);
  expect((command as PutObjectCommand).input.Bucket).toBe(Config.TEMPORAL_BUCKET_NAME);
  expect(options?.expiresIn).toBe(expiresIn);
});
