import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <p className="font-rem font-bold text-lg text-gray-400">
        Opps, Nothing found😔
      </p>
      <Link
        className="bg-[#ffd543] text-[#041c32] font-semibold font-rem hover:text-white py-2 px-4 rounded-lg hover:bg-transparent border-2 border-[#ffd543] transition duration-300 mt-4"
        to="/blog"
      >
        Back Home
      </Link>
    </div>
  );
}

export default Error;
