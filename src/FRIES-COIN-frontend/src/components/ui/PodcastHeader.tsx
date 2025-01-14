import { FaDotCircle, FaPlay } from "react-icons/fa";
import { Podcast, podcasts } from "../../util/data";
import { toast } from "react-toastify";

function PodcastCard({ podcast }: { podcast: Podcast }) {
  return (
    <div
      className="relative h-[400px] w-[330px] md:w-[330px] lg:w-[350px] rounded-xl hover:opacity-90 transition-all ease-in duration-300"
      onClick={() => {
        toast.success("To be released soon!!☺️");
      }}
    >
      <img
        src={podcast.bannerImage}
        alt={podcast.title}
        className="absolute top-0 bottom-0 h-[400px] w-full object-cover rounded-xl inset-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t rounded-xl from-[#0C0C0C] to-transparent"></div>
      <div className="absolute backdrop-blur-xl w-full p-2 rounded-b-xl bottom-0">
        <div className="-mb-4 flex items-center justify-between">
          <h1 className="text-white text-base font-rem font-title">
            {podcast.title}
          </h1>
          <div className="bg-[#f8a504] px-4 text-white rounded-full h-10 w-10 flex items-center justify-center cursor-pointer hover:bg-red-600 hover:scale-95 transition-all duration-200">
            <FaPlay color="black" size={16} />
          </div>
        </div>
        <div className="w-full justify-between flex items-center bg-transparent rounded-full px-2 py-1 mt-8">
          <div className="flex items-center gap-0">
            <img
              src={podcast.host.image}
              alt="host"
              className="rounded-full h-7 w-7"
            />
            <img
              src={podcast.guest.image}
              alt="guest"
              className="rounded-full h-7 -ml-3 w-7"
            />
          </div>
          <div className="text-xs flex items-center">
            <h1 className="font-semibold font-body text-gray-200">
              {podcast.host.name}
            </h1>
            <span className="text-sm mx-1 text-gray-200">{"&"}</span>
            <h1 className="font-semibold font-rem text-gray-200">
              {podcast.guest.name}
            </h1>
          </div>
        </div>
        <div className="flex items-center justify-between -mt-1">
          <div className="flex items-center ">
            <p className="text-white text-sm font-bold font-rem text-center mt-5 mb-5 ">
              {podcast.duration.minutes}:{podcast.duration.seconds}
            </p>
            <FaDotCircle className="text-white mx-2" size={10} />
            <p className="text-sm font-bold font-rem text-center mt-5 mb-5 underline text-white">
              {podcast.series}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PodacastHeader() {
  return (
    <div
      className="mx-2 md:mx-4 mt-4 overflow-scroll scroll-smooth"
      style={{
        scrollbarWidth: "none",
      }}
    >
      <div className="carousel rounded-box carousel-center">
        {podcasts.map((podcast: Podcast) => (
          <div key={podcast.title} className="carousel-item mx-2">
            <PodcastCard podcast={podcast} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PodacastHeader;
