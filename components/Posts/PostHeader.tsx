import { format } from "date-fns"
import { PostFull } from "../../utils/getPosts"

export const PostHeader = (props: {post: PostFull}) => {
    const dateStr = format(new Date(props.post.date), "PPP");
    return (
        <div className="max-w mx-auto">
            <div className="text-2xl md:text-4xl font-serif font-semibold">
                {props.post.title}
            </div>
            <div className="text-sm font-sans">
                {dateStr}
            </div>
        </div>
    )
}