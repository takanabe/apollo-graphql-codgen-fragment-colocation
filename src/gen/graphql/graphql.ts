/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Feed = {
  __typename?: 'Feed';
  feedItems: Array<Maybe<FeedItem>>;
  id: Scalars['String'];
};

export type FeedItem = {
  __typename?: 'FeedItem';
  content: Scalars['String'];
  id: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  user: User;
};

export type User = {
  __typename?: 'User';
  age: Scalars['Int'];
  feed: Feed;
  id: Scalars['String'];
  name: Scalars['String'];
};

export type FeedFieldsFragment = { __typename?: 'Feed', id: string, feedItems: Array<(
    { __typename?: 'FeedItem' }
    & { ' $fragmentRefs'?: { 'FeedItemFieldsFragment': FeedItemFieldsFragment } }
  ) | null> } & { ' $fragmentName'?: 'FeedFieldsFragment' };

export type FeedItemFieldsFragment = { __typename?: 'FeedItem', id: string, content: string } & { ' $fragmentName'?: 'FeedItemFieldsFragment' };

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, name: string, age: number, feed: (
      { __typename?: 'Feed' }
      & { ' $fragmentRefs'?: { 'FeedFieldsFragment': FeedFieldsFragment } }
    ) } };

export const FeedItemFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FeedItemFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FeedItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]} as unknown as DocumentNode<FeedItemFieldsFragment, unknown>;
export const FeedFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FeedFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Feed"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"feedItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FeedItemFields"}}]}}]}},...FeedItemFieldsFragmentDoc.definitions]} as unknown as DocumentNode<FeedFieldsFragment, unknown>;
export const UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"feed"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FeedFields"}}]}}]}}]}},...FeedFieldsFragmentDoc.definitions]} as unknown as DocumentNode<UserQuery, UserQueryVariables>;