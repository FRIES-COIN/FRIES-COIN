import React from "react";
import logo from "../../public/images/logo.png";
import { FaTelegram } from "react-icons/fa";
import { HiChatAlt2 } from "react-icons/hi";
import { FaTwitter } from "react-icons/fa6";

export default function Navbar() {
  return (
    <nav className="bg-[#041c32] text-white">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="w-full text-gray-700 md:text-center text-2xl font-semibold flex items-center gap-2 cursor-pointer">
          <img src={logo} alt="logo" className="w-10 h-10" />
          <a href="#" className="font-rem text-[#ffd543]">
            $FRIES
          </a>
        </div>
        <div className="flex items-center justify-between">
          <div className="hidden w-full text-gray-600 md:flex md:items-center">
            <a
              className="mx-4 text-gray-300 font-semibold hover:text-[#ffd543] ease-in durtaion-150 cursor-pointer"
              href="#"
            >
              AirDrops
            </a>

            <a
              className="mx-4 text-gray-300 font-semibold hover:text-[#ffd543] ease-in durtaion-150 cursor-pointer"
              href="#"
            >
              Features
            </a>
            <a
              className="mx-4 text-gray-300 font-semibold hover:text-[#ffd543] ease-in duration-150 cursor-pointer"
              href="#"
            >
              Whitepaper
            </a>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full justify-end">
          <div className="border-[1px] border-[#ffd543] rounded-full w-[30px] h-[30px] flex items-center justify-center p-1">
            <HiChatAlt2 color="#ffd543" size={24} />
          </div>

          <div className="border-[1px] border-[#ffd543] rounded-full w-[30px] h-[30px] flex items-center justify-center p-1">
            <FaTwitter color="#ffd543" size={24} />
          </div>

          <div className="border-[1px] border-[#ffd543] rounded-full w-[30px] h-[30px] flex items-center justify-center p-1">
            <FaTelegram color="#ffd543" size={24} />
          </div>
        </div>
      </div>
    </nav>
  );
}
