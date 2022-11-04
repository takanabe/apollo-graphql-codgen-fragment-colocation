import * as Types from '../../graphql/types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { FeedItemFieldsFragmentDoc } from '../FeedItem/query.generated';
export type FeedFieldsFragment = { __typename?: 'Feed', id: string, feedItems: Array<{ __typename?: 'FeedItem', id: string, content: string } | null> };

export const FeedFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FeedFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Feed"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"feedItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FeedItemFields"}}]}}]}},...FeedItemFieldsFragmentDoc.definitions]} as unknown as DocumentNode<FeedFieldsFragment, unknown>;