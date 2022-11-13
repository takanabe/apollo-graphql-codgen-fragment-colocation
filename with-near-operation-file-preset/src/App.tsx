import User from "./components/User";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { mockUserQuery } from "./components/User/query.generated";
import user from "./components/User/mock.json"
import { setupWorker } from "msw";

export const handlers = [mockUserQuery((req, res, ctx) => {
  return res(
    ctx.data({ user })
  )
})]

export const worker = setupWorker(...handlers)
worker.start()

function App() {
  const client = new ApolloClient({
    ssrMode: false,
    uri: 'http://localhost:4000',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <div>
        <User />
      </div>
    </ApolloProvider>
  )
}

export default App
