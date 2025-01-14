import React from "react";
import { IconExternalLink } from "@tabler/icons-react";
import { FaSearch } from "react-icons/fa";

function BlogHeader() {
  return (
    <div className="flex flex-col items-center md:items-end md:flex-row md:justify-between mt-8 mx-4 border-b border-gray-200 pb-4">
      <div className="flex flex-col">
        <a href="/" className="flex items-center text-white underline font-rem">
          Read Blogging Tutorial
          <span>
            <IconExternalLink size={20} className="text-blue-500 mb-1" />
          </span>
        </a>
        <h1 className="text-2xl font-rem font-bold mt-4 text-gray-200">
          Stay Ahead in the Ever-Changing World of NFTs
        </h1>
        <p className="text-gray-300 mt-2 font-rem">
          Exploring the Future of NFTs, One Block at a Time
        </p>
      </div>
      <div className="flex items-center justify-center mt-4 md:mt-0 mx-4 w-full md:w-1/2">
        <div className="flex items-center border border-gray-200 rounded-full px-2 w-full md:w-1/2">
          <FaSearch className="text-gray-500 ml-4" size={20} />
          <input
            type="text"
            placeholder="search.."
            className="bg-[#041c32] text-background border-none focus:outline-none py-2 px-2 font-rem text-gray-300 "
          />
        </div>
      </div>
    </div>
  );
}

export default BlogHeader;
