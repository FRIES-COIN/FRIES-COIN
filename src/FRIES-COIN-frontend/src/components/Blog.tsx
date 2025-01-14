import BlogHeader from "../components/ui/BlogHeader";
import PodacastHeader from "../components/ui/PodcastHeader";
import Navbar from "./Navbar";

function Blog() {
  return (
    <div className="flex flex-col min-h-screen bg-inherit text-background">
      <Navbar />
      <BlogHeader />
      <section className="">
        <h1 className="text-xl font-bold font-rem text-gray-300 mt-8 mb-1 mx-2">
          This Week Episodes
        </h1>
        <PodacastHeader />
      </section>
    </div>
  );
}

export default Blog;
