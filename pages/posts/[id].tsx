import { useRouter } from "next/router";
import { getAllPosts, getPost, PostFull } from "../../utils/getPosts";
import ErrorPage from "next/error"

import { SharedHead } from "../../components/SharedHead";
import { Nav } from "../../components/Nav/Nav";
import { PostHeader } from "../../components/Posts/PostHeader";
import { PostBody } from "../../components/Posts/PostBody";
import { Footer } from "../../components/Footer";
import markdownToHtml from "../../utils/markdownToHtml";

export default function Post(props: {post: PostFull}) {
    const router = useRouter();

    if(!router.isFallback && !props.post){
        return <ErrorPage statusCode={404} />
    }

    return (
        <div>
            <SharedHead title={props.post.title} />
            <Nav />
            <div className="container w-full md:max-w-3xl mx-auto pt-12 pb-28">
                <article className="max-w space-y-12 px-4">
                    <PostHeader post={props.post} />
                    <PostBody post={props.post} />
                </article>
            </div>
            <div className="w-full h-24 bg-gray-100 justify-center">
                <div className="h-full w-full md:max-w-3xl mx-auto px-4">
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps({ params }) {
    const post = getPost(params.id);
    const content = await markdownToHtml(post.content || "");

    return  {
        props: {
            post: {
                ...post,
                content,
            }
        }
    }
}

export async function getStaticPaths() {
    const posts = await getAllPosts();

    const pathsList = Object.keys(posts).map((postId) => {
        return {
            params: {
                id: postId,
            }
        };
    })

    return {
        paths: pathsList,
        fallback: false
    }
}