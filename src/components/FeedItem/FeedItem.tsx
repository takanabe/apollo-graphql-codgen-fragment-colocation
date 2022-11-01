import {FragmentType, graphql, useFragment} from "../../gen/graphql";

export const FeedItemFragment = graphql(`
    fragment FeedItemFields on FeedItem {
        id
        content
    }
`)

type Props = {
    feedItemFragment: FragmentType<typeof FeedItemFragment>
}

export function FeedItem({feedItemFragment}:Props) {
    const feedItem = useFragment(FeedItemFragment, feedItemFragment)
    return (
        <div>
            <h1>feed item</h1>
            <ul>
                <li>{feedItem.id}</li>
                <li>{feedItem.content}</li>
            </ul>
        </div>
    )
}