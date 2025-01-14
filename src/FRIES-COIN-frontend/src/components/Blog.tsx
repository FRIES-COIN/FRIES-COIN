import BlogHeader from "../components/ui/BlogHeader";
import PodacastHeader from "../components/ui/PodcastHeader";
import Navbar from "./Navbar";

function Blog() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-background">
      <Navbar />
      <BlogHeader />
      <section>
        <h1 className="text-xl font-bold font-title text-gray-600 mt-8 mb-1 mx-2">
          This Week Episodes
        </h1>
        <PodacastHeader />
      </section>
      {/* <section className="mt-8 mx-4">
        <div className="flex items-center justify-between">
          <h1 className="text-gray-600 font-title font-bold uppercase text-xl">
            BROWSE TOPICS
          </h1>
          <a className="text-blue-600 font-title font-bold text-sm underline cursor-pointer">
            See All
          </a>
        </div>
        <Topics />
      </section> */}
    </div>
  );
}

export default Blog;
