import { err, ok } from 'neverthrow';
import { CustomError } from 'ts-custom-error';

import type { Result } from 'neverthrow';

export type EnvironmentVariableKey =
  'CONTENTS_BUCKET_NAME'
;

export class EnvironmentVariableNotFoundError extends CustomError {
  public constructor(key: EnvironmentVariableKey) {
    super(`Failed to get environment variables. Key name: ${key}.`);
  }
}

export type GetEnvironmentVariable = (key: EnvironmentVariableKey) => Result<string, unknown>;

export const getEnvironmentVariable: GetEnvironmentVariable = key => {
  const variable = process.env[key];
  if (variable) return ok(variable);
  return err(new EnvironmentVariableNotFoundError(key));
};
