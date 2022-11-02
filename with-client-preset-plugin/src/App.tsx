import User from "./components/User/User";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

function App() {
    const client = new ApolloClient({
        ssrMode: false,
        uri: 'http://localhost:4000',
        cache: new InMemoryCache(),
    });

    return (
        <ApolloProvider client={client}>
            <div>
                <User/>
            </div>
        </ApolloProvider>
    )
}

export default App
