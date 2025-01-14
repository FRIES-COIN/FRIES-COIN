import React from "react";
import { useParams } from "react-router-dom";
import { Blog, blogs } from "../util/data";

function BlogView() {
  const { id } = useParams();
  console.log(id);
  const blog: Blog | undefined = blogs.find((blog) => blog.id === id);

  return (
    <div className="max-w-[900px] mx-auto my-0 min-h-screen pt-20">
      {blog === undefined ? (
        <p className="font-rem font-bold text-xl text-center">
          Oops! Something went wong
        </p>
      ) : (
        <div className="flex flex-col gap-2 mx-2">
          <h1 className="text-gray-300 font-rem font-bold text-xl leading-relaxed">
            {blog.title}
          </h1>
          <p className="text-gray-400 font-rem text-base">
            {blog.readTime.minutes} min read
          </p>
          <p className="text-gray-400 font-rem text-base">
            {blog.author.name} from {blog.author.company.toLocaleUpperCase()}
          </p>
          <div className="bg-gray-300 h-[1px] w-full my-4"></div>
          <p className="text-gray-300 font-rem font-normal text-base leading-relaxed">
            {blog.content.paragraphOne}
          </p>
          <img
            src={blog.content.images[0]}
            alt={blog.title}
            className="w-full h-64 md:h-72 object-cover rounded-lg my-2"
          />
          <p className="text-gray-300 font-rem font-normal text-base leading-relaxed">
            {blog.content.paragraphTwo}
          </p>
          <img
            src={blog.content.images[1]}
            alt={blog.title}
            className="w-full h-64 md:h-72 object-cover rounded-lg my-2"
          />
          <p className="text-gray-300 font-rem font-normal text-base leading-relaxed">
            {blog.content.paragraphThree}
          </p>
          <img
            src={blog.content.images[2]}
            alt={blog.title}
            className="w-full h-64 md:h-72 object-cover rounded-lg my-2"
          />
          <p className="text-gray-300 font-rem font-normal text-base leading-relaxed">
            {blog.content.paragraphFour}
          </p>
          <p className="text-gray-300 font-rem font-normal text-base leading-relaxed">
            {blog.content.restContent}
          </p>
        </div>
      )}
    </div>
  );
}
export default BlogView;
