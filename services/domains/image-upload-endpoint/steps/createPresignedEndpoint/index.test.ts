import { createPresignedPost } from '@aws-sdk/s3-presigned-post';
import { afterEach, beforeAll, describe, expect, it, vi } from 'vitest';

import { createPresignedEndpoint } from './index';

import type { Mock } from 'vitest';

beforeAll(() => {
  vi.mock('@aws-sdk/s3-presigned-post', () => ({
    createPresignedPost: vi
      .fn<Parameters<typeof createPresignedPost>, ReturnType<typeof createPresignedPost>>()
      .mockResolvedValue({ url: 'url', fields: {} }),
  }));
});

afterEach(() => {
  vi.clearAllMocks();
});

describe('Positive scenarios.', () => {
  it('Check that the return value of the createPresignedEndpoint function is returned.', async () => {
    const result = await createPresignedEndpoint({
      bucket: 'bucket',
      key: 'key',
    });

    expect(result._unsafeUnwrap()).toEqual({ url: 'url', fields: {} });
  });

  it('Check that the expected value is passed to the createPresignedPost function.', async () => {
    void await createPresignedEndpoint({
      bucket: 'bucket',
      key: 'key',
      expiresIn: 100,
      conditions: [{ key: 'key' }],
    });

    const [, options] = (createPresignedPost as Mock).mock.calls[0] as Parameters<typeof createPresignedPost>;
    expect(options).toEqual({
      Bucket: 'bucket',
      Key: 'key',
      Expires: 100,
      Conditions: [{ key: 'key' }],
    });
  });
});
