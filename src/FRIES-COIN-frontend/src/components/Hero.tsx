// ./src/components/Hero.jsx
import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
  const friesAnimation = useSpring({
    from: { transform: "translateY(-100%)" },
    to: { transform: "translateY(0%)" },
    config: { duration: 1000 },
    loop: true,
  });

  return (
    <div className="bg-yellow-100 h-screen flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-4">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-bold mb-4">
            Join the Crispy Revolution with Fries Coin
          </h1>
          <p className="text-xl mb-6">
            The world's first meme coin dedicated to fries enthusiasts
            everywhere.
          </p>
          <button className="bg-yellow-500 text-white py-2 px-4 rounded-full hover:bg-yellow-600 transition duration-300">
            Get Started
          </button>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center relative">
          <animated.div style={friesAnimation} className="absolute top-0">
            <svg
              width="100"
              height="100"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-fries"
            >
              <path d="M3 3h18v18H3z"></path>
            </svg>
          </animated.div>
          <div className="relative">
            <img
              src="/path-to-fries-bucket.png"
              alt="Fries Bucket"
              className="w-32 h-32 md:w-48 md:h-48"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
