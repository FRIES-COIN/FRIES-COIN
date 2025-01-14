import banner from "../../../public/collection5.png";
import { m_avatar1 } from "../../util";
import { blogs } from "../../util/data";

function TeamNews() {
  return (
    <div className="mt-12 mx-0 md:mx-2">
      <h1 className="text-2xl font-rem font-semibold my-4 text-gray-300 mx-2">
        From the FRYS Team
      </h1>
      <div className="flex flex-col items-start md:flex-row gap-2 md:gap-4 mt-4">
        <img
          src={blogs[0].banner}
          className="object-contain md:object-cover rounded-xl w-[100vw] h-auto md:w-[450px] md:h-[350px]"
          alt="banner news"
        />
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4 w-full">
            <div className="flex items-center">
              <img src="/logo.png" className="w-8 h-8 rounded-full" />
              <p className="font-rem font-light text-sm text-gray-300 uppercase">
                {blogs[0].author.company}
              </p>
            </div>
            <p className="font-rem text-gray-300 font-light text-sm">
              12 Minutes
            </p>
          </div>
          <h1 className="text-xl font-bold font-rem text-gray-300 mt-4 mb-2 px-2">
            {blogs[0].title}
          </h1>
          <p className="text-gray-400 font-rem font-normal leading-relaxed md:mb-4 w-[100vw] md:w-2/3 lg:w-3/4 px-2">
            {blogs[0].content.paragraphOne}...
          </p>
          <div className="flex items-center gap-4 w-full mt-4 md:mt-12 px-2">
            <div className="flex items-center">
              <img src={m_avatar1} className="w-14 h-14 rounded-full p-1" />
              <p className="font-rem font-light text-sm text-gray-400">
                {blogs[0].author.name}
              </p>
            </div>
            <p className="font-rem text-gray-400 font-light text-sm">
              {blogs[0].readTime.minutes} min read
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamNews;
