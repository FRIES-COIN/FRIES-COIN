// ./src/components/Hero.jsx
import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { FaArrowDown } from "react-icons/fa";
import fries from "../../public/images/fries.png";
import useMedia from "../hooks/useMedia";

type HeroProps = {
  handleConnectWallet: () => void;
};

const Hero = ({ handleConnectWallet }: HeroProps) => {
  const isMobile = useMedia("(max-width: 768px)");
  const translateYValue = isMobile ? "0%" : "-50%";

  const friesAnimation = useSpring({
    from: { transform: "translateY(-300%)" },
    to: { transform: `translateY(${translateYValue})` },
    config: { duration: 1000, delay: 500 },
    reset: true,
  });

  return (
    <div className="bg-[#041c32] h-screen flex items-center justify-center mb-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-4">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-semibold mb-4 text-white font-rem">
            <span className="text-[#ffd543] text5xl font-bold">$FRYS: </span>
            Join the Crispy Revolution with Fries Coin
          </h1>
          <p className="text-xl mb-6 text-white leading-relaxed font-rem">
            The world's first meme coin dedicated to fries enthusiasts
            everywhere.
          </p>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <a
              className="bg-[#ffd543] text-[#041c32] font-semibold text-lg font-rem md:text-xl hover:text-white py-2 px-4 rounded-lg hover:bg-transparent border-2 border-[#ffd543] transition duration-300"
              href="https://app.icpswap.com/swap?input=ryjl3-tyaaa-aaaaa-aaaba-cai&output=ezu5v-7qaaa-aaaam-acpbq-cai"
              target="_blank"
            >
              Swap on ICPSWAP{" "}
            </a>
            <a
              href="https://icpex.org/wallet"
              target="_blank"
              className="bg-[#041c32] text-[#ffd543] text-center font-semibold text-lg font-rem md:text-xl hover:text-black py-2 px-4 rounded-lg hover:bg-[#ffd543] border-2 border-[#ffd543] transition duration-300"
            >
              Swap on icpex
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center relative">
          <animated.div style={friesAnimation} className="absolute top-0">
            <img
              src={fries}
              alt="Fries"
              className="w-64 h-64 md:w-80 md:h-80"
            />
          </animated.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
