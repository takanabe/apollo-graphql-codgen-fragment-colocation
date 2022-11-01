import {FEED_ITEM_FRAGMENT, FeedItem} from "../FeedItem/FeedItem";
import {gql} from "@apollo/client";

// export const FEED_FRAGMENT = gql`
//     ${FEED_ITEM_FRAGMENT}
//     fragment FeedFields on Feed {
//         id
//         feedItems {
//             ...FeedItemFields
//         }
//     }
// `
//
type Props = {
    // feedFragment: FragmentType<typeof FeedFragment>
}

export function Feed() {
    return (
        <div>
            {
                // feed.feedItems.map((feedItemFragment, index) => {
                //     return ( feedItemFragment ? <FeedItem key={index} feedItemFragment={feedItemFragment} /> : null);
                // })
            }
        </div>
    )
}