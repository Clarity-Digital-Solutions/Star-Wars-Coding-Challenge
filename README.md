# Next App Boilerplate

This is a [Next.js](https://nextjs.org/) Typescript. This a basic boilerplate which includes:

- Apollo
- Graphql
- ChakraUI (which uses emotion and framer-motion)
- react-testing-library
- Cypress

## Getting Started

First, run the development server:

```bash
# install node locally
brew install nvm
nvm install

npm install -g yarn

# install deps
yarn install

yarn dev
```

### Testing

To run unit and integration tests with Jest

```
yarn test
```

To run end-to-end browser tests with Cypress

```bash

# start the dev server (run in seprate terminal)
yarn dev

# start Cypress
yarn cypress:open

```
