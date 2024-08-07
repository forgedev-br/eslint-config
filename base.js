/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
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
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },
    'import/resolver': {
      typescript: true,
      node: true,
    },
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
        trailingComma: 'all',
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
    'default-case-last': 'error',
    'import/default': 'off',
    'import/export': 'off',
    'import/first': 'error',
    'import/namespace': 'off',
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'error',
    'import/no-default-export': 'error',
    'import/no-duplicates': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'import/order': 'off',
    'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
    'no-else-return': 'warn',
    'no-var': 'error',
    'object-shorthand': 'warn',
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
  ignorePatterns: ['.*.js', 'node_modules/'],
  overrides: [
    {
      files: ['tailwind.config.{js,ts,cjs,mjs}', 'postcss.config.{js,ts,cjs,mjs}'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
}
