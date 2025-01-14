import BlogHeader from "../components/ui/BlogHeader";
import PodacastHeader from "../components/ui/PodcastHeader";
import Navbar from "./Navbar";
import LatestBlogs from "./ui/LatestBlogs";
import TeamNews from "./ui/TeamNews";

function Blog() {
  return (
    <div className="flex flex-col min-h-screen bg-inherit text-background overflow-hidden">
      <Navbar />
      <BlogHeader />
      <section className="max-w-[1140px] my-0 mx-auto">
        <h1 className="text-xl font-bold font-rem text-gray-300 mt-8 mb-1 mx-2">
          This Week Episodes
        </h1>
        <PodacastHeader />
        <TeamNews />
        <LatestBlogs />
      </section>
    </div>
  );
}

export default Blog;
