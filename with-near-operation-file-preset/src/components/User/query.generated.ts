import * as Types from '../../graphql/types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { FeedFieldsFragmentDoc } from '../Feed/query.generated';
import { graphql, ResponseResolver, GraphQLRequest, GraphQLContext } from 'msw'
export type UserQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, name: string, age: number, feed: { __typename?: 'Feed', id: string, feedItems: Array<{ __typename?: 'FeedItem', id: string, content: string } | null> } } };


export const UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"feed"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FeedFields"}}]}}]}}]}},...FeedFieldsFragmentDoc.definitions]} as unknown as DocumentNode<UserQuery, UserQueryVariables>;

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockUserQuery((req, res, ctx) => {
 *   return res(
 *     ctx.data({ user })
 *   )
 * })
 */
export const mockUserQuery = (resolver: ResponseResolver<GraphQLRequest<UserQueryVariables>, GraphQLContext<UserQuery>, any>) =>
  graphql.query<UserQuery, UserQueryVariables>(
    'user',
    resolver
  )
