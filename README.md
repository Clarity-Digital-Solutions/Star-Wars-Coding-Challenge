# Star Wars Coding Challenge

## Description

This challenge revolves around a Star Wars GraphQL API and a simple Figma design. It requires that you work with the end-point to display the relevant data within a UI you create which mirrors the Figma supplied design.

- Use this repo as the starting point.
- The [Figma artwork can be accessed and inspected here](https://www.figma.com/file/2SA4kQe58Uf8wZ7ukqww1K/Starship-challenge?node-id=0%3A1). You will need to have or create a free Figma account in order to access the design.

Use the [Star Wars GraphQL API](https://graphql.org/swapi-graphql/) to dynamically obtain a list of Spaceships along with their hyperdrive rating.

Add a GraphQL query to update the list of Pilots when clicking on a Spaceship.

This is a [Next.js](https://nextjs.org/) Typescript. This a basic boilerplate which includes:

- Apollo
- Graphql
- ChakraUI (which uses emotion and framer-motion)
- react-testing-library
- Cypress
- graphql-codegen (types generated from https://graphql.org/swapi-graphql)

Notes:

- The Spaceship list should be sortable by hyperdrive rating.
- Not all Spaceships have Pilots so some sort of empty or error message needs to be displayed when the user clicks on those.
- How closely does your UI replicate the design?
- Is your design accessible?
- We’re looking for a considered approach to testing ensuring important aspects of the app are covered.

## Getting Started

Get the GraphQl API running locally by cloning this [repo](https://github.com/graphql/swapi-graphql) and following the steps.

Copy and paste the server url into the ApolloClient property [here](https://github.com/Clarity-Digital-Solutions/Star-Wars-Coding-Challenge/blob/main/lib/apollo.tsx#L5)

Run the development server:

```bash
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
