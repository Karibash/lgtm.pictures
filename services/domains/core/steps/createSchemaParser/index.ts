import { Result } from 'neverthrow';

import type { z } from 'zod';

export type CreateSchemaParser =
  <Schema extends z.ZodType>(schema: Schema) => (data: unknown) => Result<z.infer<Schema>, unknown>;

export const createSchemaParser: CreateSchemaParser = schema => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return Result.fromThrowable(data => schema.parse(data));
};
