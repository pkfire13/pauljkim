import {format } from  "date-fns"
import Link from "next/link";
import { PostSummary } from "../../utils/getPosts";

export const Posts = (props: {postsList: PostSummary[] }) => {
    const recentPosts = props.postsList.slice(0,4)

    return (
        <div>
            <div className="text-xl text-gray-400 font-serif">
                Recent Posts
            </div>
            <div className="my-2 space-y-1">
                {recentPosts.map((post) => {
                    const dateStr = format(new Date(post.date), "PP");
                    return <PostLink key={post.id} title={post.title} date={dateStr} link={post.link} />;
                    }
                )}
            </div>

            <div className="text-right">
                <Link href="/posts" className="text-l text-green-700 font-sans font-semibold no-underline hover:underline">
                    All Posts
                </Link>
            </div>
        </div>
    )
}

const PostLink = (props: {title: string; date: string; link: string}) => {
    return (
        <div className="flex flex-row justify-between items-center text-m font-sans">
            <a href={props.link} className="flex flex-1 font-semibold no-underline hover:underline">
                {props.title}
            </a>
            <div className="text-xs text-gray-400 text-right ml-2">
                {props.date}
            </div>
        </div>
    )
}