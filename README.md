# ESLint configuration used by ForgeDev BR Team

## Whats included?

- Support for Node.js, Next.js and Vue;
- Standard config base;
- JSX a11y plugin;
- Prettier;
- Eslint;
- Simple-sort-import;

## Setup

Install dependencies:
```sh
pnpm install -D eslint@8.57.0 @forgedev-br/eslint-config
```
> This package does not work with eslint 9.x.x

### Node.js

Inside `.eslintrc.json`
```sh
{
  extends: '@forgedev-br/eslint-config/node'
}
```

### Next.js

Inside `.eslintrc.js`
```sh
{
  extends: [
    'next/core-web-vitals',
    '@forgedev-br/eslint-config/next'
  ]
}
```

### React with Vite

Inside `.eslintrc.js`
```sh
{
  extends: '@forgedev-br/eslint-config/react'
}
```

### Vue with Vite

Inside `.eslintrc.js`
```sh
{
  extends: '@forgedev-br/eslint-config/vue'
}
```
