# Monorepo utilisant turborepo react + python

This is an official starter Turborepo.

## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages
- `api`: back with [poetry](https://python-poetry.org/) localhost:8000
- `web`: another [Next.js](https://nextjs.org/) app localhost:3000
- `web/components/ui`: a stub React component library shared by both `web` and `docs` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo
- `@packages`: to define

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd  react-python-mono
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd react-python-mono
pnpm dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

- [Uvivorn](https://github.com/encode/uvicorn) uvicorn est un serveur web asynchrone qui joue un rôle clé dans l'exécution d'applications web asynchrones,


pour générer la bdd aller a la racine du fichier models.py
puis lancer poetry run python models/models.py

pour générer le grapqhl.ts aller a la racine de @package/codegen
puis lancer pnpm codegen (le serveur doit tourner)