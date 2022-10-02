module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
  ],
  rules: {
    'yoda': 'off',
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'eol-last': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'no-multi-spaces': 'error',
    'object-curly-spacing': ['error', 'always'],
    'indent': ['error', 2, {
      SwitchCase: 1,
      ignoredNodes: ['TemplateLiteral *'],
    }],
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],
    'no-multiple-empty-lines': ['error', {
      max: 1,
      maxBOF: 0,
      maxEOF: 0,
    }],
    'import/newline-after-import': ['error', { count: 1 }],
    'import/order': ['error', {
      groups: ['builtin', 'external', 'internal', ['index', 'parent', 'sibling'], 'object', 'type'],
      'newlines-between': 'always',
      pathGroupsExcludedImportTypes: ['builtin'],
      alphabetize: { order: 'asc', caseInsensitive: true },
    }],
  },
  overrides: [
    {
      files: ['*.{ts,tsx}'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: [
          './tsconfig.json',
          './services/tsconfig.json',
          './web/tsconfig.json',
        ],
      },
      extends: [
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      plugins: [
        '@typescript-eslint',
      ],
      settings: {
        'import/resolver': {
          typescript: true,
          project: [
            './tsconfig.json',
            './services/tsconfig.json',
            './web/tsconfig.json',
          ],
        },
      },
      rules: {
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/semi': ['error', 'always'],
        '@typescript-eslint/quotes': ['error', 'single'],
        '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
        '@typescript-eslint/object-curly-spacing': ['error', 'always'],
        '@typescript-eslint/indent': ['error', 2, {
          SwitchCase: 1,
          ignoredNodes: ['TemplateLiteral *'],
        }],
        '@typescript-eslint/member-delimiter-style': ['error', {
          multiline: {
            delimiter: 'semi',
            requireLast: true,
          },
          singleline: {
            delimiter: 'semi',
            requireLast: false,
          },
        }],
        '@typescript-eslint/space-before-function-paren': ['error', {
          anonymous: 'always',
          named: 'never',
          asyncArrow: 'always',
        }],
        '@typescript-eslint/consistent-type-imports': ['error', {
          prefer: 'type-imports',
        }],
      },
    },
    {
      files: ['./web/**/*.{js,jsx,ts,tsx}'],
      env: {
        browser: true,
      },
      extends: [
        'next/core-web-vitals',
      ],
    },
    {
      files: ['./web/**/stories.{js,jsx,ts,tsx}'],
      env: {
        browser: true,
      },
      plugins: [
        'storybook',
      ],
      rules: {
        'import/no-anonymous-default-export': 'off',
        'storybook/await-interactions': 'error',
        'storybook/context-in-play-function': 'error',
        'storybook/default-exports': 'error',
        'storybook/hierarchy-separator': 'warn',
        'storybook/no-redundant-story-name': 'warn',
        'storybook/prefer-pascal-case': 'warn',
        'storybook/story-exports': 'error',
        'storybook/use-storybook-expect': 'error',
        'storybook/use-storybook-testing-library': 'error',
      },
    },
    {
      files: [
        '*.test.{js,jsx,ts,tsx}',
        '**/__tests__/**',
      ],
      env: {
        jest: true,
      },
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/prefer-ts-expect-error': 'off',
      },
    },
  ],
};
