import React from "react";
import { useParams } from "react-router-dom";

function BlogView() {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="max-w-[900px] mx-auto my-0 bg-gray-400 h-screen">
      <h1 className="text-white">Blog View Page of {id}</h1>
    </div>
  );
}
export default BlogView;
