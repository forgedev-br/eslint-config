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

#### Using TailwindCSS

If you are using TailwindCSS, you need to pass the config file to the prettier configuration:
```
rules: {
  'prettier/prettier': [
    'error',
    {
      tailwindConfig: '<tailwind config file>',
    },
  ],
}
```

Where `<tailwind config file>` is your `tailwind.config.js` or `tailwind.config.ts` file.
