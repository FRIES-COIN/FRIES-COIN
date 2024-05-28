import React from "react";
import aboutImage from "../../public/about.png";
const About: React.FC = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-[#fff] text-center font-rem">
        About{" "}
        <span className="text-[#ffd543] font-rem font-extrabold">$FRIES</span>
        Coin
      </h2>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 pr-8">
          <div className="mt-10">
            <h3 className="text-2xl font-bold text-gray-500 font-rem">
              Our Story
            </h3>
            <p className="mt-4 text-lg text-gray-300 font-rem">
              Fries Coin began with a simple yet compelling idea: to unite fries
              enthusiasts worldwide through a unique cryptocurrency. As fries
              lovers ourselves, we recognized the need for a community where
              people could share their love for fries, from recipes to favorite
              fries spots.
            </p>
            <h4 className="mt-6 text-xl font-semibold text-gray-500 font-rem">
              Development
            </h4>
            <p className="mt-2 text-lg text-gray-300 font-rem">
              Our team comprises seasoned developers, blockchain experts, and
              fries aficionados. We leveraged the Internet Computer Protocol
              (ICP) to build a secure, scalable, and decentralized platform that
              would serve as the backbone of Fries Coin. ICP's innovative
              technology ensures that our transactions are fast, reliable, and
              environmentally friendly.
            </p>
            <h4 className="mt-6 text-xl font-semibold text-gray-500 font-rem">
              Vision
            </h4>
            <p className="mt-2 text-lg text-gray-300 font-rem">
              We aim to become the go-to digital currency for all things fries.
              Whether you're buying fries at your favorite restaurant or tipping
              a great fries recipe online, Fries Coin will be your currency of
              choice. Join us in celebrating the crispy, golden goodness of
              fries with Fries Coin.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={aboutImage} alt="Fries" className="w-80 h-auto" />
        </div>
      </div>
    </div>
  );
};

export default About;
