import cuid from 'cuid';
import { afterEach, expect, it, vi } from 'vitest';

import { FileUploadUrlFactory } from '../../factories/FileUploadUrlFactory';
import { createFileUploadUrl } from './createFileUploadUrl';

afterEach(() => {
  vi.restoreAllMocks();
});

it('create an file upload url', async () => {
  vi.mock('cuid', () => ({
    default: vi.fn().mockReturnValue('id'),
  }));

  const createFileUploadUrlSpy = vi
    .spyOn(FileUploadUrlFactory, 'create')
    .mockReturnValue(Promise.resolve('https://example.com'));

  const fileUploadUrl = await createFileUploadUrl();

  expect(cuid).toHaveBeenCalledTimes(1);
  expect(createFileUploadUrlSpy).toHaveBeenCalledTimes(1);

  expect(fileUploadUrl).not.toBeNull();
  expect(fileUploadUrl).toBe('https://example.com');
});
