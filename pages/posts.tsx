import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav/Nav";
import { AllPosts } from "../components/Posts/AllPosts";
import { SharedHead } from "../components/SharedHead";
import { getPostsList, PostSummary } from "../utils/getPosts";

export default function Posts(props: { postsList: PostSummary[]}) {

    return (
        <>
            <SharedHead title="Posts" />
            <Nav />
            <div className="container w-full md:max-w-3xl mx-auto pt-12 pb-28">
                <AllPosts posts={props.postsList} />
            </div>
            <div className="w-full h-24 bg-gray-100 justify-center">
                <div className="h-full w-full md:max-w-3xl mx-auto px-4">
                    <Footer />
                </div>
            </div>
        </>

    )
}

export async function getStaticProps() {
    const postsList = await getPostsList();
    return {
        props: {postsList}
    }
}