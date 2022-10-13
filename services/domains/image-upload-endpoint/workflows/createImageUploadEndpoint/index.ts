import { Result } from 'neverthrow';

import { createIdentifier } from '../../../core/steps/createIdentifier';
import { createSchemaParser } from '../../../core/steps/createSchemaParser';
import { getEnvironmentVariable } from '../../../core/steps/getEnvironmentVariable';
import { ImageUploadEndpointSchema } from '../../schema';
import { createPresignedEndpoint } from '../../steps/createPresignedEndpoint';

import type { ImageUploadEndpoint } from '../../schema';
import type { CreatePresignedEndpointInput } from '../../steps/createPresignedEndpoint';

// 5 minutes
const uploadExpiresIn = 60 * 5;

// 10MB
const maxFileSize = 1024 * 1024 * 10;

export type CreateImageUploadEndpoint = () => Result<ImageUploadEndpoint, unknown>;

export const createImageUploadEndpoint = () => {
  return Result.combine([getEnvironmentVariable('CONTENTS_BUCKET_NAME'), createIdentifier()] as const)
    .map(([bucket, id]) => ({
      bucket,
      key: `temporal/${id}`,
      expiresIn: uploadExpiresIn,
      conditions: [
        ['content-length-range', 0, maxFileSize],
        ['starts-with', '$Content-Type', 'image/'],
      ],
    }) as CreatePresignedEndpointInput)
    .asyncAndThen(createPresignedEndpoint)
    .andThen(createSchemaParser(ImageUploadEndpointSchema));
};
