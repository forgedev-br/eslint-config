# ESLint configuration used by ForgeDev BR

## Whats included?

- Standard config base;
- React plugin;
- React Hooks plugin;
- JSX a11y plugin;
- Prettier;
- Eslint;
- Simple-sort-import;

## Setup

Install dependencies:
```
npm i -D eslint@8.57.0 @forgedev-br/eslint-config
```
> This package works with eslint v8

### Node.js

Inside `.eslintrc.json`
```
{
  extends: '@forgedev-br/eslint-config/node'
}
```

### React (with Next.js)

Inside `.eslintrc.js`
```
{
  extends: [
    '@forgedev-br/eslint-config/next',
    'next/core-web-vitals'
  ]
}
```

### React (with Vite)

Inside `.eslintrc.js`
```
{
  extends: '@forgedev-br/eslint-config/vite'
}
```
