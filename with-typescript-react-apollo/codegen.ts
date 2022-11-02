import type {CodegenConfig} from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    schema: "../graphql/schema.graphqls",
    documents: './src/components/**/*.tsx',
    ignoreNoDocuments: true, // for better experience with the watcher
    generates: {
        "src/gen/graphql/generated-types.ts": {
            plugins: [
                'typescript',
                'typescript-operations',
                'typescript-react-apollo'
            ]
        },
        "src/gen/graphql/graphql.schema.json": {
            plugins: ["introspection"]
        }
    }
};

export default config;
