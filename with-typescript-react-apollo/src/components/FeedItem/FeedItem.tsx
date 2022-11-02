import {gql} from "@apollo/client";
import {FeedItemFieldsFragment} from "../../gen/graphql/generated-types";

export const FEED_ITEM_FRAGMENT = gql`
    fragment FeedItemFields on FeedItem {
        content
    }
`

type Props = {
    feedItemFragment: FeedItemFieldsFragment
}

export function FeedItem({feedItemFragment}:Props) {
    return (
        <div>
            <h1>feed item</h1>
            <ul>
                {/*<li>id: {feedItemFragment.id}</li>*/}
                <li>content: {feedItemFragment.content}</li>
            </ul>
        </div>
    )
}