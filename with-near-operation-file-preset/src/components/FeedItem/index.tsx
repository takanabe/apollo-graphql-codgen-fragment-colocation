import {FeedItemFieldsFragment} from './fragment.generated'

type Props = {
    feedItemFragment: FeedItemFieldsFragment
}

export function FeedItem({feedItemFragment: feedItem}:Props) {
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