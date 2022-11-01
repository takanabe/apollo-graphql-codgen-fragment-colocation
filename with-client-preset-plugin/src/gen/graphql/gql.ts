/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n    fragment FeedFields on Feed {\n        id\n        feedItems {\n            ...FeedItemFields\n        }\n    }\n": types.FeedFieldsFragmentDoc,
    "\n    fragment FeedItemFields on FeedItem {\n        id\n        content\n    }\n": types.FeedItemFieldsFragmentDoc,
    "\n    query user {\n        user {\n            id\n            name\n            age\n            feed {\n                ...FeedFields\n            }\n        }\n    }\n": types.UserDocument,
};

export function graphql(source: "\n    fragment FeedFields on Feed {\n        id\n        feedItems {\n            ...FeedItemFields\n        }\n    }\n"): (typeof documents)["\n    fragment FeedFields on Feed {\n        id\n        feedItems {\n            ...FeedItemFields\n        }\n    }\n"];
export function graphql(source: "\n    fragment FeedItemFields on FeedItem {\n        id\n        content\n    }\n"): (typeof documents)["\n    fragment FeedItemFields on FeedItem {\n        id\n        content\n    }\n"];
export function graphql(source: "\n    query user {\n        user {\n            id\n            name\n            age\n            feed {\n                ...FeedFields\n            }\n        }\n    }\n"): (typeof documents)["\n    query user {\n        user {\n            id\n            name\n            age\n            feed {\n                ...FeedFields\n            }\n        }\n    }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;