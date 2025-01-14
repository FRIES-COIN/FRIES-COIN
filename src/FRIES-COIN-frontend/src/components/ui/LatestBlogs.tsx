import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { blogs, Blog } from "../../util/data";
import { toast } from "react-toastify";

function LatestBlog({ blog }: { blog: Blog }) {
  const navigation = useNavigate();
  return (
    <div
      className="flex flex-col hover:scale-95 ease-in duration-200 cursor-pointer md:mx-1 w-[95vw] md:w-[350px] my-2"
      onClick={() => navigation(`/blogs/${blog.id}`)}
    >
      <img
        src={blog.banner}
        alt={blog.title}
        className="w-full h-64 object-cover rounded-xl"
      />
      <div className="flex flex-col px-1">
        <h1 className="font-semibold text-base text-gray-300 font-rem mt-4 mb-2">
          {blog.title}
        </h1>
        <p className="font-light font-rem text-gray-400 leading-relaxed text-sm">
          {blog.content.paragraphOne.substring(0, 150)}
        </p>
      </div>
      <div className="flex items-center gap-4 w-full mt-4 px-2">
        <div className="flex items-center">
          <img
            src={blog.author.image}
            className="w-10 h-10 rounded-full p-1"
            alt={blog.author.name}
          />
          <p className="font-rem font-light text-sm text-gray-400">
            {blog.author.name}
          </p>
        </div>
        <p className="font-rem text-gray-400 font-light text-sm">
          {blog.readTime.minutes} min read
        </p>
      </div>
    </div>
  );
}

function LatestBlogs() {
  return (
    <div className="mt-12 mx-0 md:mx-2 mb-28">
      <div className="flex items-center justify-between mx-auto my-0 py-4">
        <h1 className="text-2xl font-rem font-semibold text-gray-300 mx-2">
          Recent Uploads
        </h1>
        <Link
          to="/all"
          className="text-sm underline font-rem font-light text-gray-300 mx-2"
        >
          See All
        </Link>
      </div>
      {blogs.length === 0 && (
        <p className="font-bold text-base font-rem text-center text-gray-400 mt-10">
          No Blogs Yet{" "}
        </p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div key={blog.id}>
            <LatestBlog blog={blog} />
          </div>
        ))}
      </div>
      <div className="w-full flex items-center justify-start mt-8 mx-2 md:mx-0">
        <button
          className="bg-[#ffd543] text-[#041c32] font-semibold font-rem hover:text-white py-2 px-4 rounded-lg hover:bg-transparent border-2 border-[#ffd543] transition duration-300"
          onClick={() => {
            toast.error("All latest blogs have been loaded!");
          }}
        >
          Load More
        </button>
      </div>
    </div>
  );
}

export default LatestBlogs;
