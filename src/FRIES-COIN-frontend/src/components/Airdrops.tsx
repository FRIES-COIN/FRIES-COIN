// ./src/components/Airdrops.tsx

import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
import { TracingBeam } from "./ui/tracing-beam";
import useMedia from "../hooks/useMedia";
import friesImage from "../../public/images/fries.png";

const Airdrops: React.FC = () => {
  const isMobile = useMedia("(max-width: 768px)");
  const translateYValue = isMobile ? "0%" : "-50%";
  const [airdropUsers, setAirdropUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch airdrop users data from the backend
    const fetchAirdropUsers = async () => {
      try {
        const response = await fetch("/api/airdrop-users");
        const data = await response.json();
        setAirdropUsers(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching airdrop users:", error);
        setLoading(false);
      }
    };

    fetchAirdropUsers();
  }, []);

  const friesAnimation = useSpring({
    from: { transform: "translateY(-300%)" },
    to: { transform: `translateY(${translateYValue})` },
    config: { duration: 1000, delay: 500 },
    reset: true,
  });

  return (
    <div className="bg-[#041c32] py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-white">
      <h1 className="text-4xl font-bold text-center text-[#ffd543] mb-8 font-rem">
        Airdrop Mechanism
      </h1>
      <TracingBeam>
        <CardContainer containerClassName="my-10">
          <CardBody className="bg-gray-800 w-full h-auto rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#ffd543] transition-shadow duration-300">
            <CardItem
              translateZ={50}
              className="text-2xl font-bold mb-4 font-rem text-white"
            >
              Objective
            </CardItem>
            <CardItem
              translateZ={60}
              className="text-lg text-gray-300 font-rem"
            >
              The Air Drop mechanism aims to distribute Fries Coin (FRYS)
              tokens to a wide audience, encouraging initial adoption, community
              building, and engagement. Total Tokens for Air Drop: 2,100,000
              FRYS (10% of the total supply).
            </CardItem>
          </CardBody>
        </CardContainer>

        <CardContainer containerClassName="my-10">
          <CardBody className="bg-gray-800 w-full h-auto rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#ffd543] transition-shadow duration-300">
            <CardItem
              translateZ={50}
              className="text-2xl font-bold mb-4 text-white font-rem"
            >
              Phase 1: Pre-Launch Registration (Days 1-3)
            </CardItem>
            <CardItem translateZ={60} className="text-lg text-gray-300">
              <ul className="list-disc list-inside mt-4 font-rem">
                <li>
                  Create a dedicated registration portal on the Fries Coin
                  website.
                </li>
                <li>
                  Participants need to sign up with their email address and
                  Internet Computer wallet address.
                </li>
                <li>
                  Provide a short questionnaire to ensure genuine interest
                  (e.g., "Why do you love fries?").
                </li>
                <li>
                  Implement a "Fries Quiz" where participants answer fun trivia
                  questions about fries. Higher scores earn additional FRIES
                  tokens.
                </li>
              </ul>
            </CardItem>
          </CardBody>
        </CardContainer>

        <CardContainer containerClassName="my-10">
          <CardBody className="bg-gray-800 w-full h-auto rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#ffd543] transition-shadow duration-300">
            <CardItem
              translateZ={50}
              className="text-2xl font-bold mb-4 text-white  font-rem"
            >
              Phase 2: Initial Air Drop (Day 4)
            </CardItem>
            <CardItem
              translateZ={60}
              className="text-lg text-gray-300 font-rem"
            >
              <ul className="list-disc list-inside mt-4 font-rem">
                <li>
                  Distribute 50 FRYS to each of the 10,000 whitelisted wallet
                  addresses.
                </li>
                <li>
                  Conduct the distribution via smart contracts to ensure
                  transparency and security.
                </li>
                <li>
                  Encourage recipients to share their Air Drop on social media
                  with hashtags like #FriesCoin and #FriesLovers. Reward
                  participants with an additional 10 FRYS for each verified
                  social media post.
                </li>
                <li>
                  Introduce a "Most Creative Post" contest, awarding the top 10
                  posts with 100 FRYS each.
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
              Phase 3: Community Engagement (Weeks 2-4)
            </CardItem>
            <CardItem translateZ={60} className="text-lg text-gray-300">
              <ul className="list-disc list-inside mt-4 font-rem">
                <li>
                  Launch a referral program where existing FRYS holders can
                  refer friends to sign up for the Air Drop. Both the referrer
                  and the referee receive 20 FRYS each upon successful
                  registration and verification.
                </li>
                <li>
                  Organize community events such as online quizzes, meme
                  contests, and fries-themed photo competitions. Reward winners
                  with varying amounts of FRYS (e.g., 100, 200, and 300 FRYS
                  for top three winners).
                </li>
                <li>
                  Introduce a "Fries Coin Ambassador" program, where active
                  community members can earn monthly rewards for promoting Fries
                  Coin.
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
              Phase 4: Strategic Partnerships (Months 2-3)
            </CardItem>
            <CardItem translateZ={60} className="text-lg text-gray-300">
              <ul className="list-disc list-inside mt-4 font-rem">
                <li>
                  Partner with restaurants and food outlets to distribute FRYS
                  to their customers. Offer a bonus Air Drop of 100 FRYS to
                  customers who make purchases using FRYS at partnered outlets.
                </li>
                <li>
                  Introduce a "Fries Coin Loyalty Program," offering discounts
                  and rewards for repeat customers at partner restaurants.
                </li>
                <li>
                  Collaborate with influencers and content creators in the food
                  and crypto space. Conduct joint giveaways and Air Drops
                  through their platforms to reach a broader audience.
                </li>
                <li>
                  Organize live events and AMA (Ask Me Anything) sessions with
                  influencers to engage their followers.
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
              Phase 5: Continuous Engagement (Months 4-6)
            </CardItem>
            <CardItem
              translateZ={60}
              className="text-lg text-gray-300 font-rem"
            >
              <ul className="list-disc list-inside mt-4">
                <li>
                  Introduce a staking mechanism where users can stake their
                  FRYS tokens and earn rewards. Allocate a portion of the Air
                  Drop pool (500,000 FRYS) for staking rewards over six months.
                </li>
                <li>
                  Collect feedback from the community on the Air Drop process.
                  Make iterative improvements to the Air Drop mechanism based on
                  community suggestions and engagement levels.
                </li>
                <li>
                  Introduce quarterly community feedback sessions with rewards
                  for participants who provide valuable insights.
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
              Additional Features
            </CardItem>
            <CardItem
              translateZ={60}
              className="text-lg text-gray-300 font-rem"
            >
              <ul className="list-disc list-inside mt-4">
                <li>
                  Conduct a monthly lucky draw for all FRYS holders, with
                  prizes ranging from 100 to 1,000 FRYS. Each transaction with
                  FRYS counts as an entry into the draw, incentivizing usage.
                </li>
                <li>
                  Allocate a portion of the Air Drop pool for charity
                  initiatives. Partner with global food charities to distribute
                  FRYS to support food security and hunger relief efforts.
                </li>
                <li>
                  Launch educational campaigns to teach users about the Internet
                  Computer blockchain and how to securely manage their FRYS
                  tokens. Offer small FRYS rewards for completing educational
                  modules and quizzes.
                </li>
              </ul>
            </CardItem>
          </CardBody>
        </CardContainer>
      </TracingBeam>

      <div className="flex justify-center items-center mt-20">
        <animated.div style={friesAnimation} className="relative">
          <img
            src={friesImage}
            alt="Fries"
            className="w-64 h-64 md:w-80 md:h-80"
          />
        </animated.div>
      </div>
    </div>
  );
};

export default Airdrops;
