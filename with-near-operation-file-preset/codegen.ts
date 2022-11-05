import type {CodegenConfig} from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    schema: "../graphql/schema.graphqls",
    documents: [
        "src/**/*.gql",
    ],
    ignoreNoDocuments: true, // for better experience with the watcher
    generates: {
        'src/graphql/types.ts': { plugins: ['typescript'] },
        "src/": {
            preset: 'near-operation-file',
            presetConfig: {
              extension: '.generated.ts',
              baseTypesPath: 'graphql/types.ts',
            },
            plugins: ['typescript-operations', 'typed-document-node', 'typescript-msw'],
        },
        "src/graphql/graphql.schema.json": {
            plugins: ["introspection"]
        }
    }
};

export default config;
