/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'prettier',
  ],
  env: {
    es2022: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    node: {},
  },
  plugins: ['unicorn', 'import', 'simple-import-sort', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        tabWidth: 2,
        useTabs: false,
        semi: false,
        quoteProps: 'as-needed',
        singleQuote: true,
        jsxSingleQuote: false,
        arrowParens: 'always',
        trailingComma: 'es5',
        endOfLine: 'auto',
        tailwindFunctions: ['tv', 'cn', 'cva'],
        plugins: ['prettier-plugin-tailwindcss'],
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        disallowTypeAnnotations: true,
        fixStyle: 'separate-type-imports',
        prefer: 'type-imports',
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        format: ['PascalCase'],
        selector: ['typeLike', 'enumMember'],
      },
      {
        custom: {
          match: false,
          regex: '^I[A-Z]|^(Interface|Props|State)$',
        },
        format: ['PascalCase'],
        selector: 'interface',
      },
    ],
    '@typescript-eslint/no-explicit-any': 'error',
    'import/default': 'off',
    'import/namespace': 'off',
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'error',
    'import/no-default-export': 'error',
    'import/no-duplicates': 'error',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'import/order': 'off',
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
    'no-var': 'error',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'if', next: '*' },
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'function' },
      { blankLine: 'always', prev: 'function', next: '*' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
      { blankLine: 'always', prev: 'directive', next: '*' },
    ],
    'prefer-const': 'warn',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'unicorn/filename-case': ['error', { case: 'kebabCase' }],
    'unicorn/prefer-node-protocol': 'warn',
  },
  overrides: [
    {
      files: ['tailwind.config.{js,ts,cjs}', 'postcss.config.{js,ts,cjs}'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
}
