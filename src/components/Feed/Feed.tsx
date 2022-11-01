import {FeedItem} from "../FeedItem/FeedItem";
import {FragmentType, useFragment} from "../../gen/graphql";
import {graphql} from "../../gen/graphql";

export const FeedFragment = graphql(`
    fragment FeedFields on Feed {
        id
        feedItems {
            ...FeedItemFields
        }
    }
`)

type Props = {
    feedFragment: FragmentType<typeof FeedFragment>
}

export function Feed({feedFragment}: Props) {
    const feed = useFragment(FeedFragment, feedFragment)
    return (
        <div>
            {
                feed.feedItems.map((feedItemFragment, index) => {
                    return ( feedItemFragment ? <FeedItem key={index} feedItemFragment={feedItemFragment} /> : null);
                })
            }
        </div>
    )
}