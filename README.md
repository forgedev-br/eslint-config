# Code Formatting and Linting Configuration used by ForgeDev BR

## What"s included?

- [Biome](https://biomejs.dev/) for code formatting and linting;

## Setup

### Any Project

Install dependencies:
```bash
npm i -D @biomejs/biome
```

Configure your project:
```bash
npx @biomejs/biome init
```

Add a script to package.json:
```json
"scripts": {
  // other scripts
  "link": "npx @biomejs/biome check --apply ./src"
}
```

---

#### Node.js

Install dependencies:
```bash
npm i -D @forgedev-br/biome-config
```

Configure your project:
```bash
npx @biomejs/biome init
```

Inside `biome.json` file
```json
{
  "extends": ["@forgedev-br/biome-config/node"]
}
```

#### React (with Next.js)

Install dependencies:
```bash
npm i -D @forgedev-br/biome-config
```

Inside `biome.json` file
```json
{
  "extends": ["@forgedev-br/biome-config/next"]
}
```

#### React (with Vite)

Install dependencies:
```bash
npm i -D @forgedev-br/biome-config
```

Inside `biome.json` file
```json
{
  "extends": ["@forgedev-br/biome-config/vite"]
}
```
