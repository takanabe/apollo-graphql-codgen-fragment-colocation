# graphql-codegen-fragment-collocation

## TL;DR

- A fragment is reusable sets of fields in GraphQL Query and Mutation.
- But, fragment compositions (flagment collocations) in React components gives us component-scoped data declaration.
  - this is similar to what we have achieved with CSS in JS.
- The fragment composition approach prevent us from unexpected under-fetching and over-fetching data because its always fetch only data components need.

## Concept

### Concern of User component

![](docs/concept1.png)

### Concern of Feed component

![](docs/concept2.png)

### Concern of FeedItem component

![](docs/concept3.png)

## Usage

### Choose project

First, you need to move to the project directory placed at the root of this repository.

```
cd with-client-preset-plugin
```

Then, running following commands to test it out.

### Run web app

```
npm run dev
```

### Run GraphQL server

```
npm run mock
```

### Generate GraphQL code using GraphQL Codegen

See https://www.the-guild.dev/graphql/codegen/docs/guides/react-vue

```
npm run codegen

or

npm run codgen:watch
```
