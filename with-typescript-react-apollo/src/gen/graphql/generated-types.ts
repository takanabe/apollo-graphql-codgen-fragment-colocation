import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
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

export type FeedFieldsFragment = { __typename?: 'Feed', id: string, feedItems: Array<{ __typename?: 'FeedItem', content: string } | null> };

export type FeedItemFieldsFragment = { __typename?: 'FeedItem', content: string };

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, name: string, age: number, feed: { __typename?: 'Feed', id: string, feedItems: Array<{ __typename?: 'FeedItem', content: string } | null> } } };

export const FeedItemFieldsFragmentDoc = gql`
    fragment FeedItemFields on FeedItem {
  content
}
    `;
export const FeedFieldsFragmentDoc = gql`
    fragment FeedFields on Feed {
  id
  feedItems {
    ...FeedItemFields
  }
}
    ${FeedItemFieldsFragmentDoc}`;
export const UserDocument = gql`
    query user {
  user {
    id
    name
    age
    feed {
      ...FeedFields
    }
  }
}
    ${FeedFieldsFragmentDoc}`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;