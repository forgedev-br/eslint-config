require('@rushstack/eslint-patch/modern-module-resolution')

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [require.resolve('./base'), 'plugin:@typescript-eslint/recommended', 'plugin:vue/vue3-recommended'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  plugins: ['@typescript-eslint'],
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
        'import/no-default-export': 'off',
        'unicorn/filename-case': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/multiline-html-element-content-newline': 'off',
        'vue/html-self-closing': [
          'error',
          {
            html: {
              void: 'always',
            },
          },
        ],
        'vue/max-attributes-per-line': [
          'error',
          {
            singleline: 1,
            multiline: 1,
          },
        ],
      },
    },
  ],
}
