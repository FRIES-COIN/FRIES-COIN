import React from "react";
import { motion } from "framer-motion";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
import useMedia from "../hooks/useMedia";

const Features: React.FC = () => {
  const isMobile = useMedia("(max-width: 768px)");
  const translateYValue = isMobile ? "0%" : "-50%";

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <div className="bg-[#041c32] py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-white">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="text-center mb-12"
      >
        <motion.h1
          variants={fadeInUp}
          className="text-4xl font-bold text-center text-[#ffd543] mb-8 font-rem"
        >
          Unique Features of Fries Coin
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="text-lg text-gray-300 font-rem"
        >
          Discover the unique features that make Fries Coin stand out in the
          cryptocurrency space.
        </motion.p>
      </motion.div>

      <div className="space-y-20">
        {/* Core Features */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-center text-[#ffd543] mb-8 font-rem"
          >
            Core Features
          </motion.h2>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp}>
              <CardContainer containerClassName="h-full">
                <CardBody className="bg-gray-800 h-full rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#ffd543] transition-shadow duration-300">
                  <CardItem
                    translateZ={50}
                    className="text-2xl font-bold mb-4 text-white font-rem"
                  >
                    Decentralized Governance
                  </CardItem>
                  <CardItem
                    translateZ={60}
                    className="text-lg text-gray-300 font-rem"
                  >
                    <span className="text-[#ffd543] font-bold font-rem">
                      FRIES
                    </span>{" "}
                    holders participate in decentralized governance through
                    proposals and voting mechanisms on the Internet Computer.
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <CardContainer containerClassName="h-full">
                <CardBody className="bg-gray-800 h-full rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#ffd543] transition-shadow duration-300">
                  <CardItem
                    translateZ={50}
                    className="text-2xl font-bold mb-4 text-white font-rem"
                  >
                    Scalability and Security
                  </CardItem>
                  <CardItem
                    translateZ={60}
                    className="text-lg text-gray-300 font-rem"
                  >
                    Leveraging the{" "}
                    <span className="text-[#ffd543] font-bold">
                      Internet Computer's
                    </span>{" "}
                    scalability and security features ensures efficient and
                    secure token operations.
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <CardContainer containerClassName="h-full">
                <CardBody className="bg-gray-800 h-full rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#ffd543] transition-shadow duration-300">
                  <CardItem
                    translateZ={50}
                    className="text-2xl font-bold mb-4 text-white font-rem"
                  >
                    Community Building and Adoption
                  </CardItem>
                  <CardItem
                    translateZ={60}
                    className="text-lg text-gray-300 font-rem"
                  >
                    Develop partnerships with restaurants and food outlets to
                    accept{" "}
                    <span className="text-[#ffd543] font-bold">FRYS</span> as
                    payment. Implement loyalty programs and incentives to
                    encourage adoption and usage of Fries Coin in the community.
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <CardContainer containerClassName="h-full">
                <CardBody className="bg-gray-800 h-full rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#ffd543] transition-shadow duration-300">
                  <CardItem
                    translateZ={50}
                    className="text-2xl font-bold mb-4 text-white font-rem"
                  >
                    Environmental Sustainability
                  </CardItem>
                  <CardItem
                    translateZ={60}
                    className="text-lg text-gray-300 font-rem"
                  >
                    Explore eco-friendly practices for token operations on the{" "}
                    <span className="text-[#ffd543] font-bold">
                      Internet Computer
                    </span>
                    , aligning with sustainability initiatives.
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Development Features */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-center text-[#ffd543] mb-8 font-rem"
          >
            Development Features
          </motion.h2>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp}>
              <CardContainer containerClassName="h-full">
                <CardBody className="bg-gray-800 h-full rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#ffd543] transition-shadow duration-300">
                  <CardItem
                    translateZ={50}
                    className="text-2xl font-bold mb-4 text-white font-rem"
                  >
                    Developer Integrations
                  </CardItem>
                  <CardItem
                    translateZ={60}
                    className="text-lg text-gray-300 font-rem"
                  >
                    Integrate Fries Coin with{" "}
                    <span className="text-[#ffd543] font-bold">DFINITY's</span>{" "}
                    Internet Computer Protocol for seamless development and
                    deployment of decentralized applications.
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Future Features */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-center text-[#ffd543] mb-8 font-rem"
          >
            Future Features
          </motion.h2>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp}>
              <CardContainer containerClassName="h-full">
                <CardBody className="bg-gray-800 h-full rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#ffd543] transition-shadow duration-300">
                  <CardItem
                    translateZ={50}
                    className="text-2xl font-bold mb-4 text-white font-rem"
                  >
                    NFT Marketplace
                  </CardItem>
                  <CardItem
                    translateZ={60}
                    className="text-lg text-gray-300 font-rem"
                  >
                    Launch an NFT marketplace where users can buy, sell, and
                    trade{" "}
                    <span className="text-[#ffd543] font-bold">FRYS</span>
                    -themed NFTs, promoting community engagement and creativity.
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <CardContainer containerClassName="h-full">
                <CardBody className="bg-gray-800 h-full rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#ffd543] transition-shadow duration-300">
                  <CardItem
                    translateZ={50}
                    className="text-2xl font-bold mb-4 text-white font-rem"
                  >
                    DeFi Integrations
                  </CardItem>
                  <CardItem
                    translateZ={60}
                    className="text-lg text-gray-300 font-rem"
                  >
                    Integrate with decentralized finance (DeFi) platforms to
                    offer staking, lending, and borrowing of{" "}
                    <span className="text-[#ffd543] font-bold">FRYS</span>{" "}
                    tokens.
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <CardContainer containerClassName="h-full">
                <CardBody className="bg-gray-800 h-full rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#ffd543] transition-shadow duration-300">
                  <CardItem
                    translateZ={50}
                    className="text-2xl font-bold mb-4 text-white font-rem"
                  >
                    Cross-Chain Compatibility
                  </CardItem>
                  <CardItem
                    translateZ={60}
                    className="text-lg text-gray-300 font-rem"
                  >
                    Ensure cross-chain compatibility with other blockchains like
                    Ethereum and Binance Smart Chain, enabling{" "}
                    <span className="text-[#ffd543] font-bold">FRYS</span> to
                    be used across multiple platforms.
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <CardContainer containerClassName="h-full">
                <CardBody className="bg-gray-800 h-full rounded-xl p-6 border border-gray-700 hover:shadow-xl hover:shadow-[#ffd543] transition-shadow duration-300">
                  <CardItem
                    translateZ={50}
                    className="text-2xl font-bold mb-4 text-white font-rem"
                  >
                    Advanced Analytics
                  </CardItem>
                  <CardItem
                    translateZ={60}
                    className="text-lg text-gray-300 font-rem"
                  >
                    Provide advanced analytics and insights for users and
                    developers to track the performance and usage of{" "}
                    <span className="text-[#ffd543] font-bold">FRYS</span>{" "}
                    tokens.
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
