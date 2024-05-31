# ESLint configuration used by ForgeDev BR

## Whats included?

- Standard config base;
- React plugin;
- React Hooks plugin;
- JSX a11y plugin;
- Prettier;

## Setup

### Node.js

Install dependencies:
```
npm i -D eslint @forgedev-br/eslint-config
```

Inside `.eslintrc.json`
```
{
  extends: '@forgedev-br/eslint-config/node'
}
```

### React (with Next.js)

Install dependencies:
```
npm i -D eslint @forgedev-br/eslint-config
```

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

Install dependencies:
```
npm i -D eslint @forgedev-br/eslint-config
```

Inside `.eslintrc.js`
```
{
  extends: '@forgedev-br/eslint-config/vite'
}
```
