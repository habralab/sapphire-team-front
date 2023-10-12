module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react-hooks/recommended',
    'plugin:boundaries/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    'react-hooks/exhaustive-deps': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/accessible-emoji': 'off',
    'react/prop-types': 'off',
    'import/no-unresolved': 'error',
    'import/newline-after-import': 'error',
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc', caseInsensitive: true },
        'newlines-between': 'always',
        pathGroups: [
          { group: 'internal', position: 'after', pattern: '~/pages/**' },
          { group: 'internal', position: 'after', pattern: '~/widgets/**' },
          { group: 'internal', position: 'after', pattern: '~/features/**' },
          { group: 'internal', position: 'after', pattern: '~/entities/**' },
          { group: 'internal', position: 'after', pattern: '~/shared/**' },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            message: 'Private imports are prohibited, use public imports instead',
            group: ['~/app/**'],
          },
          {
            message: 'Private imports are prohibited, use public imports instead',
            group: ['~/pages/*/**'],
          },
          {
            message: 'Private imports are prohibited, use public imports instead',
            group: ['~/widgets/*/**'],
          },
          {
            message: 'Private imports are prohibited, use public imports instead',
            group: ['~/features/*/**'],
          },
          {
            message: 'Private imports are prohibited, use public imports instead',
            group: ['~/entities/*/**'],
          },
          {
            message: 'Private imports are prohibited, use public imports instead',
            group: ['~/shared/*/**'],
          },
          {
            message: 'Prefer absolute imports instead of relatives (for root modules)',
            group: ['../**/app'],
          },
          {
            message: 'Prefer absolute imports instead of relatives (for root modules)',
            group: ['../**/pages'],
          },
          {
            message: 'Prefer absolute imports instead of relatives (for root modules)',
            group: ['../**/widgets'],
          },
          {
            message: 'Prefer absolute imports instead of relatives (for root modules)',
            group: ['../**/features'],
          },
          {
            message: 'Prefer absolute imports instead of relatives (for root modules)',
            group: ['../**/entities'],
          },
          {
            message: 'Prefer absolute imports instead of relatives (for root modules)',
            group: ['../**/shared'],
          },
        ],
      },
    ],
    'boundaries/element-types': [
      'warn',
      {
        default: 'disallow',
        rules: [
          {
            from: 'app',
            allow: ['pages', 'widgets', 'features', 'entities', 'shared'],
          },
          { from: 'pages', allow: ['widgets', 'features', 'entities', 'shared'] },
          { from: 'widgets', allow: ['features', 'entities', 'shared'] },
          { from: 'features', allow: ['entities', 'shared'] },
          { from: 'entities', allow: ['shared'] },
          { from: 'shared', allow: ['shared'] },
        ],
      },
    ],
    '@typescript-eslint/no-misused-promises': [
      2,
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: true,
      node: true,
    },
    'boundaries/elements': [
      { type: 'app', pattern: 'app/*' },
      { type: 'pages', pattern: 'pages/*' },
      { type: 'widgets', pattern: 'widgets/*' },
      { type: 'features', pattern: 'features/*' },
      { type: 'entities', pattern: 'entities/*' },
      { type: 'shared', pattern: 'shared/*' },
    ],
    'boundaries/ignore': ['src/**/*.test.*', 'tests/**/*.test.*'],
  },
  overrides: [
    {
      files: ['tests/**/*.test.{ts,tsx}', 'src/**/*.test.{ts,tsx}'],
      extends: [
        'plugin:testing-library/react',
        'plugin:jest-dom/recommended',
        'plugin:vitest/all',
      ],
      rules: {
        'boundaries/element-types': 'off',
        'vitest/consistent-test-it': ['error', { fn: 'test' }],
        'vitest/require-top-level-describe': 'off',
      },
    },
  ],
};
