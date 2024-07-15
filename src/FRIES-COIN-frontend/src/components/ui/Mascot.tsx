import React from "react";
import mascot from "../../assets/mascotgif.gif";

function Mascot() {
  return (
    <div>
      <h1 className="font-bold text-3xl font-rem text-center text-[#ffd543] ">
        Beyond Taste, Beyond Imagination
      </h1>
      <div className="flex justify-center items-center my-4">
        <img
          src={mascot}
          alt="mascot"
          className="md:w-[50%] rounded-md hover:shadow-xl hover:shadow-[#ffd543] hover:scale-95 transition-all duration-300 ease-in-out cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Mascot;
