import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import buy from "../../public/buy.jpeg";

interface BuyProps {
  handleConnectWallet: () => void;
}

const Buy: React.FC<BuyProps> = ({ handleConnectWallet }) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-700 md:mx-0 mx-2 w-auto relative group/card hover:shadow-xl hover:shadow-[#ffd543] dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold font-rem text-white"
        >
          Join the <span className="text-[#ffd543]">$FRYS MOVEMENT</span>
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-gray-300 text-sm max-w-sm mt-2"
        >
          Buy $FRYS token and get access to exclusive features and benefits.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={buy}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            onClick={handleConnectWallet}
            className="px-4 py-2 rounded-xl text-xs font-normal text-white cursor-pointer"
          >
            Connect Wallet →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-[#ffd543] text-black text-xs font-bold"
          >
            <a
              href="http://icpex.org/exchange?payToken=ryjl3-tyaaa-aaaaa-aaaba-cai&receiveToken=ezu5v-7qaaa-aaaam-acpbq-cai"
              target="_blank"
            >
              Swap $FRYS
            </a>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default Buy;
