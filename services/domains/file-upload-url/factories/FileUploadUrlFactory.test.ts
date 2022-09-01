import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { Config } from '@serverless-stack/node/config';
import { afterEach, expect, it, Mock, vi } from 'vitest';

import { FileUploadUrlFactory } from './FileUploadUrlFactory';

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

  const callResult = (getSignedUrl as Mock).mock.calls[0];
  expect(callResult[1].input.Key).toBe(key);
  expect(callResult[1].input.Bucket).toBe(Config.TEMPORAL_BUCKET_NAME);
  expect(callResult[2].expiresIn).toBe(expiresIn);
});
