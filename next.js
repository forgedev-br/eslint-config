/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    require.resolve('./base'),
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
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
    'jsx-a11y/alt-text': ['warn', { elements: ['img'], img: ['Image'] }],
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
  },
  overrides: [
    {
      files: ['src/**/{default,error,layout,loading,middleware,not-found,page,route}.{ts,tsx}'],
      rules: {
        'import/no-default-export': 'off',
        'react/function-component-definition': 'off',
      },
    },
    {
      files: ['tailwind.config.{js,ts,cjs,mjs}', 'postcss.config.{js,ts,cjs,mjs}'],
      rules: {
        'import/no-default-export': 'off',
        '@typescript-eslint/no-require-imports': 'off',
      },
    },
  ],
}
