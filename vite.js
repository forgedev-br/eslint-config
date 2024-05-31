/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: require.resolve('./index'),
  env: {
    browser: true,
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
    'react/function-component-definition': ['warn', { namedComponents: 'arrow-function' }],
    'react/jsx-pascal-case': 'warn',
    'react/no-unknown-property': 'error',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
  },
  overrides: [
    {
      files: ['src/app/**/*', 'src/**/*.stories.tsx'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
}
