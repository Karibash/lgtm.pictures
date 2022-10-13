import { afterAll, beforeAll, describe, expect, it } from 'vitest';

import { getEnvironmentVariable, EnvironmentVariableNotFoundError } from './index';

describe('Positive scenarios.', () => {
  it('Check if environment variables can be obtained.', () => {
    const bucketName = getEnvironmentVariable('CONTENTS_BUCKET_NAME');

    expect(bucketName._unsafeUnwrap()).toBe(process.env.CONTENTS_BUCKET_NAME);
  });
});

describe('Negative scenarios.', () => {
  const CONTENTS_BUCKET_NAME = process.env.CONTENTS_BUCKET_NAME;

  beforeAll(() => {
    delete process.env.CONTENTS_BUCKET_NAME;
  });

  afterAll(() => {
    process.env.CONTENTS_BUCKET_NAME = CONTENTS_BUCKET_NAME;
  });

  it('Check if an error occurs if the environment variable fails to be retrieved.', () => {
    const bucketName = getEnvironmentVariable('CONTENTS_BUCKET_NAME');

    expect(bucketName._unsafeUnwrapErr()).toBeInstanceOf(EnvironmentVariableNotFoundError);
  });
});
