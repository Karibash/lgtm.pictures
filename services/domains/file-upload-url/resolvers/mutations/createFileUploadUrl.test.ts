import { ulid } from 'ulid';
import { afterEach, expect, it, vi } from 'vitest';

import { FileUploadUrlFactory } from '../../factories/FileUploadUrlFactory';
import { createFileUploadUrl } from './createFileUploadUrl';

afterEach(() => {
  vi.restoreAllMocks();
});

it('create an file upload url', async () => {
  vi.mock('ulid', () => ({
    ulid: vi.fn().mockReturnValue('id'),
  }));

  const createFileUploadUrlSpy = vi
    .spyOn(FileUploadUrlFactory, 'create')
    .mockReturnValue(Promise.resolve('url'));

  const fileUploadUrl = await createFileUploadUrl();

  expect(ulid).toHaveBeenCalledTimes(1);
  expect(createFileUploadUrlSpy).toHaveBeenCalledTimes(1);

  expect(fileUploadUrl).not.toBeNull();
  expect(fileUploadUrl.id).toBe('id');
  expect(fileUploadUrl.url).toBe('url');
});
