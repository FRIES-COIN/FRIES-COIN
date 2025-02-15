import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
import { TracingBeam } from "./ui/tracing-beam";
import useMedia from "../hooks/useMedia";

const Whitepaper: React.FC = () => {
  const isMobile = useMedia("(max-width: 768px)");
  const translateYValue = isMobile ? "0%" : "-50%";

  const whitepaperAnimation = useSpring({
    from: { transform: "translateY(-300%)" },
    to: { transform: `translateY(${translateYValue})` },
    config: { duration: 1000, delay: 500 },
    reset: true,
  });

  return (
    <div className="bg-[#041c32] py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-white">
      <h1 className="text-4xl font-bold text-center text-[#ffd543] mb-8">
        Fries Coin White Paper
      </h1>
      <TracingBeam>
        <CardContainer containerClassName="my-10">
          <CardBody className="bg-gray-800 w-full h-auto rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#ffd543] transition-shadow duration-300">
            <CardItem
              translateZ={50}
              className="text-2xl font-bold mb-4 text-white font-rem"
            >
              1. Detailed Description
            </CardItem>
            <CardItem
              translateZ={60}
              className="text-lg text-gray-300 font-rem"
            >
              Fries Coin (FRYS) is a revolutionary meme coin with a utility
              twist, designed for all fries lovers around the world. Built on
              the{" "}
              <span className="text-[#ffd543] font-bold">
                Internet Computer (ICP) blockchain
              </span>
              , Fries Coin aims to become the go-to currency for purchasing
              fries and related products at restaurants and food outlets
              globally. Additionally, FRYS serves as a{" "}
              <span className="text-[#ffd543] font-bold">governance token</span>
              , allowing its holders to vote on proposals and changes, ensuring
              the community has a say in its future development.
            </CardItem>
          </CardBody>
        </CardContainer>

        <CardContainer containerClassName="my-10">
          <CardBody className="bg-gray-800 w-full h-auto rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#ffd543] transition-shadow duration-300">
            <CardItem
              translateZ={50}
              className="text-2xl font-bold mb-4 text-white font-rem"
            >
              2. Story Behind Fries Coin
            </CardItem>
            <CardItem
              translateZ={60}
              className="text-lg text-gray-300 font-rem"
            >
              Fries Coin was conceived by a group of friends who share an
              unwavering love for fries. Their vision is to create a fun,
              engaging, and valuable token that unites fries enthusiasts
              worldwide. Fries Coin is not just about enjoying a beloved snack;
              it's about building a global community where every fry lover can
              contribute to and benefit from the ecosystem. With Fries Coin, you
              can pay for your favorite fries, participate in exclusive rewards
              programs, and have a say in the project's direction.
            </CardItem>
          </CardBody>
        </CardContainer>

        <CardContainer containerClassName="my-10">
          <CardBody className="bg-gray-800 w-full h-auto rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#ffd543] transition-shadow duration-300">
            <CardItem
              translateZ={50}
              className="text-2xl font-bold mb-4 text-white font-rem"
            >
              3. Roadmap
            </CardItem>
            <CardItem
              translateZ={60}
              className="text-lg text-gray-300 font-rem"
            >
              <strong className="text-[#ffd543] font-rem">
                Phase 1: Launch (Days 1-3)
              </strong>
              <ul className="list-disc list-inside mt-4 font-rem">
                <li>
                  Day 1: Launch Fries Coin on the Internet Computer blockchain.
                </li>
                <li>
                  Day 2: Distribute initial tokens to the team, early
                  contributors, and community rewards.
                </li>
                <li>
                  Day 3: List Fries Coin on major cryptocurrency exchanges.
                </li>
              </ul>
              <strong className="text-[#ffd543]">
                Phase 2: Community Building (Months 1-3)
              </strong>
              <ul className="list-disc list-inside mt-4">
                <li>
                  Month 1: Launch marketing campaigns and social media presence.
                </li>
                <li>
                  Month 2: Partner with local and international restaurants to
                  accept Fries Coin.
                </li>
                <li>
                  Month 3: Implement loyalty programs and rewards for users and
                  businesses.
                </li>
              </ul>
              <strong className="text-[#ffd543]">
                Phase 3: Governance and Development (Months 4-6)
              </strong>
              <ul className="list-disc list-inside mt-4">
                <li>Month 4: Establish decentralized governance structure.</li>
                <li>
                  Month 5: Introduce voting mechanisms for proposals and
                  upgrades.
                </li>
                <li>
                  Month 6: Develop and release additional features based on
                  community feedback.
                </li>
              </ul>
              <strong className="text-[#ffd543]">
                Phase 4: Expansion and Sustainability (Months 7-12)
              </strong>
              <ul className="list-disc list-inside mt-4">
                <li>
                  Month 7: Expand partnerships to more restaurants and food
                  chains globally.
                </li>
                <li>
                  Month 8: Launch eco-friendly initiatives funded by transaction
                  fees.
                </li>
                <li>
                  Month 9-12: Continuously improve the platform, focusing on
                  scalability and user experience.
                </li>
              </ul>
            </CardItem>
          </CardBody>
        </CardContainer>

        <CardContainer containerClassName="my-10">
          <CardBody className="bg-gray-800 w-full h-auto rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#ffd543] transition-shadow duration-300">
            <CardItem
              translateZ={50}
              className="text-2xl font-bold mb-4 text-white font-rem"
            >
              4. Tokenomics
            </CardItem>
            <CardItem
              translateZ={60}
              className="text-lg text-gray-300 font-rem"
            >
              <strong className="text-[#ffd543] font-rem">Total Supply:</strong>{" "}
              1 Billion FRYS
              <br />
              <br />
              <strong className="text-[#ffd543] font-rem">
                Distribution and Issuance Schedule
              </strong>
              <br />
              <ul className="list-disc list-inside mt-4 font-rem">
                <li>
                  <strong className="text-[#ffd543]">
                    PoUW Consensus Mechanism:
                  </strong>{" "}
                  Fries Coin operates on the Internet Computer blockchain,
                  utilizing the PoUW consensus mechanism. PoUW rewards
                  participants for providing computational resources to the
                  network, contributing to its security and functionality.
                </li>
                <li>
                  <strong className="text-[#ffd543]">
                    Initial Distribution:
                  </strong>{" "}
                  Genesis Block: Initial distribution of FRYS:
                  <ul className="list-disc list-inside mt-4 ml-8">
                    <li>
                      Early Contributors and Team: 5% 
                    </li>
                    <li>
                    ICP Hubs: 5% 
                    </li>
                    
                    <li>
                      Community Building and Rewards: 5% 
                    </li>
                    <li> Liquidity: 15%</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-[#ffd543]">Mining Rewards:</strong>{" "}
                  Participants contribute computational resources to the network
                  and are rewarded with FRYS tokens. Mining rewards are
                  distributed to validators based on their contribution to the
                  network's computational work.
                </li>
              </ul>
            </CardItem>
          </CardBody>
        </CardContainer>

        <CardContainer containerClassName="my-10">
          <CardBody className="bg-gray-800 w-full h-auto rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#ffd543] transition-shadow duration-300">
            <CardItem
              translateZ={50}
              className="text-2xl font-bold mb-4 text-white font-rem"
            >
              Unique Features
            </CardItem>
            <CardItem
              translateZ={60}
              className="text-lg text-gray-300 font-rem"
            >
              <ul className="list-disc list-inside mt-4 font-rem">
                <li>
                  <strong className="text-[#ffd543]">
                    Decentralized Governance:
                  </strong>{" "}
                  FRYS holders participate in decentralized governance through
                  proposals and voting mechanisms on the Internet Computer.
                </li>
                <li>
                  <strong className="text-[#ffd543]">
                    Scalability and Security:
                  </strong>{" "}
                  Leveraging the Internet Computer's scalability and security
                  features ensures efficient and secure token operations.
                </li>
                <li>
                  <strong className="text-[#ffd543]">
                    Community Building and Adoption:
                  </strong>{" "}
                  Develop partnerships with restaurants and food outlets to
                  accept FRYS as payment. Implement loyalty programs and
                  incentives to encourage adoption and usage of Fries Coin in
                  the community.
                </li>
                <li>
                  <strong className="text-[#ffd543]">
                    Environmental Sustainability:
                  </strong>{" "}
                  Explore eco-friendly practices for token operations on the
                  Internet Computer, aligning with sustainability initiatives.
                </li>
              </ul>
            </CardItem>
          </CardBody>
        </CardContainer>

        <CardContainer containerClassName="my-10">
          <CardBody className="bg-gray-800 w-full h-auto rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#ffd543] transition-shadow duration-300">
            <CardItem
              translateZ={50}
              className="text-2xl font-bold mb-4 text-white font-rem"
            >
              5. Governance and Implementation
            </CardItem>
            <CardItem
              translateZ={60}
              className="text-lg text-gray-300 font-rem"
            >
              <strong className="text-[#ffd543]">
                Decentralized Governance:
              </strong>{" "}
              Proposals are submitted and voted on by FRYS holders using the
              Internet Computer's governance mechanism.
              <br />
              <br />
              <strong className="text-[#ffd543]">Implementation:</strong>{" "}
              Approved proposals are implemented through smart contracts on the
              Internet Computer, ensuring transparency and efficiency.
            </CardItem>
          </CardBody>
        </CardContainer>
      </TracingBeam>
    </div>
  );
};

export default Whitepaper;