import React from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../components/ui/tracing-beam";
import icpImage from "../../public/icp.png";
import prelaunch from "../../public/prelaunch.png";
import launch from "../../public/launch.jpg";
import postLaunch from "../../public/postlaunch.jpg";
import finalImage from "../../public/final.png";

export default function Roadmap() {
  return (
    <section className="bg-dark">
      <TracingBeam className="px-6">
        <h1 className="text-4xl font-bold text-[#ffd543] text-center font-rem">
          $FRYS COIN Roadmap
        </h1>
        <div className="max-w-2xl mx-auto antialiased pt-4 relative mt-4">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2
                className={`rounded-full text-sm w-fit px-4 py-1 mb-4 font-rem ${
                  item.badge === "Done"
                    ? "bg-[#ffd543] text-black"
                    : "bg-gray-700 text-white"
                }`}
              >
                {item.badge}
              </h2>

              <p className={twMerge("font-rem text-xl mb-4 text-gray-300")}>
                {item.title}
              </p>

              <div className="text-sm text-gray-100 prose prose-sm dark:prose-invert ">
                {item?.image && (
                  <img
                    src={item.image}
                    alt="roadmap thumbnail"
                    height="1000"
                    width="1000"
                    className="rounded-lg mb-10 object-cover"
                  />
                )}
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </section>
  );
}

const dummyContent = [
  {
    title: "Phase 1: Concept and Immediate Development",
    description: (
      <>
        <ul className="font-rem text-gray-300 leading-relaxed">
          <li>
            <span className="text-[#ffd543] font-semibold">
              Idea Finalization
            </span>{" "}
            Finalize the concept of Fries Coin as a meme and utility coin.
          </li>
          <li>
            <span className="text-[#ffd543] font-semibold">Team Assembly</span>{" "}
            Quickly assemble a small, agile team of developers, marketers, and
            community managers.
          </li>
          <li>
            <span className="text-[#ffd543] font-semibold">
              White Paper Draft:
            </span>{" "}
            Write a concise, 1-2 page white paper detailing the vision, mission,
            and basic technical aspects of Fries Coin.
          </li>
          <li>
            <span className="text-[#ffd543] font-semibold">
              Community Setup:
            </span>{" "}
            Create social media profiles on Twitter, Discord, and Telegram to
            start building a community and generating buzz.
          </li>
          <li>
            <span className="text-[#ffd543] font-semibold">
              Technical Setup
            </span>{" "}
            Set up the development environment on the Internet Computer Protocol
            (ICP).
          </li>
        </ul>
      </>
    ),
    badge: "Done",
    image: icpImage,
  },
  {
    title: "Phase 2: Rapid Development & Pre-launch",
    description: (
      <>
        <ul className="font-rem leading-relaxed text-gray-300 ">
          <li>
            <span className="text-[#ffd543] font-semibold">
              Smart Contract Development:
            </span>{" "}
            Develop and test the basic smart contracts for Fries Coin.
          </li>
          <li>
            <span className="text-[#ffd543] font-semibold">
              Security Audit:
            </span>{" "}
            Conduct a basic security audit of the smart contracts.
          </li>
          <li>
            <span className="text-[#ffd543] font-semibold">
              Website Creation:
            </span>{" "}
            Launch a simple, attractive website with the white paper, roadmap,
            and links to community platforms.
          </li>
          <li>
            <span className="text-[#ffd543] font-semibold">
              Initial Marketing Push:
            </span>{" "}
            Begin a rapid marketing campaign on social media to attract early
            adopters and generate excitement.
          </li>
          <li>
            <span className="text-[#ffd543] font-semibold">
              Token Allocation Plan:
            </span>{" "}
            Outline and finalize the tokenomics, including total supply,
            distribution, and initial allocation.
          </li>
          <li>
            <span className="text-[#ffd543] font-semibold">
              Partnerships Outreach:
            </span>{" "}
            Start reaching out to local restaurants and food outlets to gauge
            interest in accepting Fries Coin.
          </li>
          <li>
            <span className="text-[#ffd543] font-semibold">
              Legal Consultation:
            </span>{" "}
            Consult with legal experts to ensure compliance with relevant
            regulations.
          </li>
        </ul>
      </>
    ),
    badge: "In-progress",
    image: prelaunch,
  },
  {
    title: "Phase 3: Launch & Immediate Adoption",
    description: (
      <>
        <ul className="font-rem leading-relaxed text-gray-300 ">
          <li>
            <span className="text-[#ffd543] font-semibold">
              Public Token Sale:
            </span>{" "}
            Launch the public sale of Fries Coin to the community.
          </li>
          <li>
            <span className="text-[#ffd543] font-semibold">
              Exchange Listing:
            </span>{" "}
            List Fries Coin on at least one major cryptocurrency exchange or a
            decentralized exchange (DEX) for immediate trading.
          </li>
          <li>
            <span className="text-[#ffd543] font-semibold">
              Merchant Integration:
            </span>{" "}
            Announce initial partnerships with a few local restaurants or food
            trucks that will accept Fries Coin.
          </li>
          <li>
            <span className="text-[#ffd543] font-semibold">
              Community Engagement:
            </span>{" "}
            Host a live AMA (Ask Me Anything) session to engage with the
            community, answer questions, and build trust.
          </li>
          <li>
            <span className="text-[#ffd543] font-semibold">
              Governance Setup:
            </span>{" "}
            Introduce the initial governance framework, allowing token holders
            to propose and vote on the next steps for Fries Coin.
          </li>
          <li>
            <span className="text-[#ffd543] font-semibold">
              Support Channels:
            </span>{" "}
            Set up customer support channels for immediate post-launch user
            assistance.
          </li>
          <li>
            <span className="text-[#ffd543] font-semibold">
              Documentation and FAQs:
            </span>{" "}
            Prepare thorough documentation and FAQs for users and merchants.
          </li>
          <li>
            <span className="text-[#ffd543] font-semibold">
              Initial Airdrop/Incentive Program:
            </span>{" "}
            Launch an airdrop or other incentive program to encourage adoption
            and distribution.
          </li>
        </ul>
      </>
    ),
    badge: "In-progress",
    image: launch,
  },
  {
    title: "Phase 4: Post-Launch Activities (Days 4-7)",
    description: (
      <>
        <ul className="text-gray-300 leading-relaxed font-rem">
          <li>
            <span className="text-[#ffd543] font-semibold">
              Continued Marketing:
            </span>{" "}
            Intensify marketing efforts to maintain momentum and attract more
            users.
          </li>
          <li>
            <span className="text-[#ffd543] font-semibold">User Feedback:</span>{" "}
            Collect feedback from early users and merchants to identify and
            address any immediate issues.
          </li>
          <li>
            <span className="text-[#ffd543] font-semibold">
              Technology Refinement:
            </span>{" "}
            Make any necessary adjustments to smart contracts and platform
            features based on user feedback.
          </li>
          <li>
            <span className="text-[#ffd543] font-semibold">
              Community Building:
            </span>{" "}
            Organize online events and contests to foster community spirit and
            increase engagement.
          </li>
          <li>
            <span className="text-[#ffd543] font-semibold">
              Future Planning:
            </span>{" "}
            Begin planning the next phases of development, focusing on expanding
            merchant acceptance and additional features.
          </li>
          <li>
            <span className="text-[#ffd543] font-semibold">
              Analytics and Tracking:
            </span>{" "}
            Implement basic analytics to monitor adoption rates and transaction
            volumes.
          </li>
        </ul>
      </>
    ),
    badge: "In-progress",
    image: postLaunch,
  },

  {
    title: "Immediate Next Steps (Week 2 and Beyond)",
    description: (
      <>
        <ul className="text-gray-300 leading-relaxed font-rem">
          <li>
            <span className="text-[#ffd543] font-semibold">
              Expand Merchant Network:
            </span>{" "}
            Continue onboarding more restaurants and food outlets to accept
            Fries Coin.
          </li>
          <li>
            <span className="text-[#ffd543] font-semibold">
              Mobile App Development:
            </span>{" "}
            Start developing a mobile wallet app for easier transactions.
          </li>
          <li>
            <span className="text-[#ffd543] font-semibold">
              Advanced Governance:
            </span>{" "}
            Develop and implement more sophisticated governance mechanisms based
            on community input.
          </li>
          <li>
            <span className="text-[#ffd543] font-semibold">
              Global Outreach:
            </span>{" "}
            Extend marketing efforts internationally to attract a global
            audience of fries lovers.
          </li>
          <li>
            <span className="text-[#ffd543] font-semibold">Partnerships:</span>{" "}
            Secure strategic partnerships with food delivery services and larger
            restaurant chains.
          </li>
          <li>
            <span className="text-[#ffd543] font-semibold">
              Sustainability Initiatives:
            </span>{" "}
            Implement initiatives to ensure long-term sustainability and
            environmental responsibility of the Fries Coin network.
          </li>
        </ul>
      </>
    ),
    badge: "Upcoming",
    image: finalImage,
  },
];