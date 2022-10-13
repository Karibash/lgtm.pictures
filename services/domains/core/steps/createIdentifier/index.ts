import cuid from 'cuid';
import { Result } from 'neverthrow';

export type CreateIdentifier = () => Result<string, unknown>;

export const createIdentifier: CreateIdentifier = Result.fromThrowable(cuid);
