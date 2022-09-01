import { vi } from 'vitest';

vi.mock('@serverless-stack/node/config', () => ({
  Config: {
    TEMPORAL_BUCKET_NAME: 'TEMPORAL_BUCKET_NAME',
    PUBLIC_BUCKET_NAME: 'PUBLIC_BUCKET_NAME',
  },
}));
