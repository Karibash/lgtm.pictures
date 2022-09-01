/// <reference types="vitest" />

import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    testTimeout: 30000,
    setupFiles: [
      'vitest.setup.ts',
    ],
  },
  logLevel: 'info',
  esbuild: {
    sourcemap: 'both',
  },
});
