import {Feed} from "../Feed";
import {useQuery} from "@apollo/client";
import { UserDocument } from "./query.generated";

export default function User() {
    const {data, loading, error} = useQuery(UserDocument)

    if (loading) {
        return <div>loading</div>
    }

    if (error) {
        return <div>error</div>
    }

    return (
        <div>
            {data &&
                <div>
                    <h1>User</h1>
                    <ul>
                        <li>id:{data.user.id}</li>
                        <li>name:{data.user.name}</li>
                        <li>age:{data.user.age}</li>
                    </ul>
                    <Feed feedFragment={data.user.feed}/>
                </div>
            }
        </div>
    )
}