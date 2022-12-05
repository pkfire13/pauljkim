import { getYear, format } from "date-fns";
import { PostSummary } from "../../utils/getPosts";

export const AllPosts = (props: {posts: PostSummary[]}) => {

    const groupedByYear = groupBy(props.posts, (post) => getYear(new Date(post.date)));

    return (
        <>
            <div className="flex flex-1 flex-col font-sans">
                <div className="text-3xl md:text-5xl font-serif font-semibold">
                    Posts
                </div>

                {Array.from(groupedByYear.keys()).map((year) => {
                    const postsInYear = groupedByYear.get(year);
                    return (
                        <div className="mt-8">
                            <div className="text-2xl text-gray-400 font-serif">
                                {year}
                            </div>
                            <div className="mt-2 space-y-2">
                                {postsInYear.map((post) => {
                                    return (
                                        <PostEntry key={post.id} post={post} />
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

const PostEntry = (props: {post: PostSummary}) => {
    const dateStr = format(new Date(props.post.date), "MMM dd");
    return (
        <a href={props.post.link}
        className="flex flex-row items-center no-underline hover:underline font-sans font-semibold">
            <div className="text-left w-20 md:w-32">
                {dateStr}
            </div>
            <div className="flex flex-1">
                {props.post.title}
            </div>
        </a>
    )
}

const groupBy = (list, keyGetter) => {
    const map = new Map();
    list.forEach((item) => {
        const key = keyGetter(item);
        const collection = map.get(key);
        if(!collection) {
            map.set(key, [item]);
        } else {
            collection.push(item)
        }
    })
    return map;
}