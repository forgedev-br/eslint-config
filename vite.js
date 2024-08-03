/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [require.resolve('./base'), 'plugin:react/recommended', 'plugin:react-hooks/recommended'],
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react-refresh', 'react', 'react-hooks', 'jsx-a11y'],
  rules: {
    'jsx-a11y/alt-text': ['warn', { elements: ['img'] }],
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
    'react/button-has-type': 'warn',
    'react/hook-use-state': 'warn',
    'react/jsx-boolean-value': 'warn',
    'react/jsx-fragments': 'warn',
    'react/jsx-no-useless-fragment': ['warn', { allowExpressions: true }],
    'react/jsx-pascal-case': 'warn',
    'react/jsx-sort-props': 'warn',
    'react/no-unknown-property': 'error',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },
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
      },
    },
  ],
}
