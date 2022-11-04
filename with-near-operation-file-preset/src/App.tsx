import User from "./components/User";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { mockUserQuery } from "./components/User/query.generated";
import user from "./components/User/mock.json"

mockUserQuery((req, res, ctx) => {
  return res(
    ctx.data({ user })
  )
})

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
