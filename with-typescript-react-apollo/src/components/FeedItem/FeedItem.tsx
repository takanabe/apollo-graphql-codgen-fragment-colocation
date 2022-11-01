import {gql} from "@apollo/client";

// export const FEED_ITEM_FRAGMENT = gql`
//     fragment FeedItemFields on FeedItem {
//         id
//         content
//     }
// `

type Props = {
    // feedItemFragment: FragmentType<typeof FeedItemFragment>
}

export function FeedItem() {
    return (
        <div>
            <h1>feed item</h1>
            <ul>
                {/*<li>{feedItem.id}</li>*/}
                {/*<li>{feedItem.content}</li>*/}
            </ul>
        </div>
    )
}