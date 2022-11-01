import type {CodegenConfig} from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    schema: "../graphql/schema.graphqls",
    documents: [
        // "src/**/*.graphql",
        "src/components/**/*.tsx",
    ],
    ignoreNoDocuments: true, // for better experience with the watcher
    generates: {
        "src/gen/graphql/": {
            preset: "client",
            plugins: []
        },
        "src/gen/graphql//graphql.schema.json": {
            plugins: ["introspection"]
        }
    }
};

export default config;
