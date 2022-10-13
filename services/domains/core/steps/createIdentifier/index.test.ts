import { describe, expect, it } from 'vitest';
import { z } from 'zod';

import { createIdentifier } from './index';

describe('Positive scenarios.', () => {
  it('Check that the id is generated with cuid.', () => {
    const id = createIdentifier()._unsafeUnwrap();

    expect(z.string().cuid().parse(id)).toBe(id);
  });
});
