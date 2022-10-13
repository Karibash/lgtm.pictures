import { describe, expect, it } from 'vitest';
import { z, ZodError } from 'zod';

import { createSchemaParser } from './index';

describe('Positive scenarios.', () => {
  it('Check that the parsing process can be performed normally.', () => {
    const schema = z.string();
    const schemaParser = createSchemaParser(schema);

    expect(schemaParser('foo')._unsafeUnwrap()).toBe('foo');
  });
});

describe('Negative scenarios.', () => {
  it('Check that an error occurs when the parsing process fails.', () => {
    const schema = z.string();
    const schemaParser = createSchemaParser(schema);

    expect(schemaParser(0)._unsafeUnwrapErr()).toBeInstanceOf(ZodError);
  });
});
