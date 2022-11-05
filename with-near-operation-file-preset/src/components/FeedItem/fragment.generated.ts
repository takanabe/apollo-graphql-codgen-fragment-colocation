import * as Types from '../../graphql/types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type FeedItemFieldsFragment = { __typename?: 'FeedItem', id: string, content: string };

export const FeedItemFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FeedItemFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FeedItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]} as unknown as DocumentNode<FeedItemFieldsFragment, unknown>;