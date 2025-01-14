import React from "react";
import { Link } from "react-router-dom";

function LatestBlogs() {
  return (
    <div className="mt-12 mx-0 md:mx-2 mb-28">
      <div className="flex items-center justify-between max-[1140px] mx-auto my-0 py-4">
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
      <p className="font-bold text-base font-rem text-center text-gray-400 mt-10">
        No Blogs Yet{" "}
      </p>
    </div>
  );
}

export default LatestBlogs;
