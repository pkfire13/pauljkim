import { Carousel } from "../components/Carousel";
import { Footer } from "../components/Footer";
import { Intro } from "../components/Intro/Intro";
import { Nav } from "../components/Nav/Nav";
import { Posts } from "../components/Posts/Posts";
import { Projects } from "../components/Projects/Projects";
import { SharedHead } from "../components/SharedHead";
import { getImagesList } from "../utils/getImages";
import { PostSummary,  getPostsList } from "../utils/getPosts";

export default function Home(props: {postsList: PostSummary[], imagesList: any[]}) {
  return (
    <div>
      <SharedHead title="Paul Kim" />
      <Nav />
      <div className="container w-full md:max-w-3xl mx-auto pt-12 pb-28">
        <div className="max-w space-y-12 px-4">
          <Intro />
          <Carousel imagesList={props.imagesList}/>
          <div id="posts" className="section">
            <Posts postsList={props.postsList}/>
          </div>
          <div id="projects" className="section">
            <Projects />
          </div>
        </div>
      </div>
      <div className="w-full h-24 bg-gray-100 justify-center">
        <div className="h-full w-fulll md:max-w-3xl mx-auto px-4">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const postsList = await getPostsList();
  const imagesList = await getImagesList()
  return {
    props: {postsList, imagesList}
  }
}
