# Typescript Fullstack Boilerplate

A starter fullstack typescript application with the following features

## Frontend

1. UI components with React
2. State management with Mobx
3. Bundling with webpack
   1. Markdown content display with [markdown-loader](https://www.npmjs.com/package/markdown-loader)
   2. Absolute path mapping, using mappings from tsconfig.json, with [tsconfig-paths-webpack-plugin](https://www.npmjs.com/package/tsconfig-paths-webpack-plugin)

## Backend

1. Node.js
2. Bundling with webpack
   1. Absolute path mapping, using mappings from tsconfig.json, with [tsconfig-paths-webpack-plugin](https://www.npmjs.com/package/tsconfig-paths-webpack-plugin)

## Repository-wide

1. [Monorepository](https://en.wikipedia.org/wiki/Monorepo)
   1. Multiple applications (in this case, node server and browser client) sharing some common dependencies
      1. Note: applications depend directly on .ts source - not on a package as when using lerna
   2. [tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) inheritance using "extends"
2. Vscode [multi-root workspaces](https://code.visualstudio.com/docs/editor/multi-root-workspaces) for client and server
3. A dockerfile for containerizing the fullstack app for deployment
