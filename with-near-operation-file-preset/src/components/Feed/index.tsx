import {FeedItem} from "../FeedItem";
import { FeedFieldsFragment } from "./fragment.generated";

type Props = {
    feedFragment: FeedFieldsFragment
}

export function Feed({feedFragment: feed}: Props) {
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