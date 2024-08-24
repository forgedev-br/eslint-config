require('@rushstack/eslint-patch/modern-module-resolution')

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    require.resolve('./base'),
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
  ],
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: [
        'vite.config.ts',
        'src/**/*.stories.{ts,tsx}',
        'tailwind.config.{js,ts,cjs}',
        'postcss.config.{js,ts,cjs}',
      ],
      rules: {
        'import/no-default-export': 'off',
        '@typescript-eslint/no-require-imports': 'off',
      },
    },
    {
      files: ['src/**/*.vue'],
      rules: {
        'unicorn/filename-case': ['error', { case: 'pascalCase' }],
      },
    },
  ],
}
