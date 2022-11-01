import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';
import {loadSchemaSync} from '@graphql-tools/load'
import {GraphQLFileLoader} from '@graphql-tools/graphql-file-loader'

const typeDefs = loadSchemaSync('../graphql/schema.graphqls', {loaders: [new GraphQLFileLoader()]})
const resolvers = {
    Query: {
        user() {
            return {
                id: 1,
                name: "mockName",
                age: 11,
                feed: {
                    id: 'mockFeed',
                    feedItems: [
                        {id: "mockFeedItem1", content: "mockContent1"},
                        {id: "mockFeedItem2", content: "mockContent2"},
                        {id: "mockFeedItem3", content: "mockContent3"},
                    ]
                }
            }
        },
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

startStandaloneServer(server, {listen: {port: 4000}}).then(({url}) => {
    console.log(`🚀 Server listening at: ${url}`);
});

