/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [require.resolve('./base'), 'plugin:react/recommended', 'plugin:react-hooks/recommended'],
  env: {
    node: true,
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
  plugins: ['react', 'react-hooks', 'jsx-a11y'],
  rules: {
    'jsx-a11y/alt-text': ['warn', { elements: ['img'], img: ['Image'] }],
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
      files: [
        'src/app/**/{layout,loading,page,route}.tsx',
        'src/**/*.stories.{ts,tsx}',
        'tailwind.config.{js,ts,cjs}',
        'postcss.config.{js,ts,cjs}',
      ],
      rules: {
        'import/no-default-export': 'off',
        'react/function-component-definition': 'off',
      },
    },
  ],
}
