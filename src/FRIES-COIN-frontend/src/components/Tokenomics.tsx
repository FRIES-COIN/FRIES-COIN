import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import sauceImage from "../../public/sauce.png";

const data = [
  { name: "Early Contributors and Team", value: 5 },
  { name: "ICP Hubs", value: 5 },
  { name: "Community Building & Rewards", value: 5 },
  { name: "Liquidity", value: 15 },
  { name: "Ecosystem Growth & Development", value: 20 },
  { name: "Staking Rewards", value: 20 },
  { name: "Treasury & Future Developments", value: 10 },
  { name: "Public Sale (IDO/ICO)", value: 15 },
  { name: "Advisors & Strategic Partnerships", value: 5 }
];

const COLORS = ["#FFBB28", "#FF8042", "#00C49F"];

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: any) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      fontSize={10}
      fontWeight="bold"
      fontFamily="REM"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${data[index].name} (${(percent * 100).toFixed(0)}%)`}
    </text>
  );
};

const Tokenomics: React.FC = () => {
  return (
    <div className=" py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-[#ffd543] text-center font-rem">
          Tokenomics
        </h2>
        <div className="mt-10">
          <p className="mt-4 text-2xl text-[#ffd543] font-extrabold text-center font-rem">
            <strong className="text-white">Total Supply:</strong> 1 Billion
            tokens $FRYS
          </p>
        </div>
        <div className="mt-10">
          <h3 className="text-2xl font-bold text-[#ffd543] font-rem">
            Initial Distribution
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-8">
              <h4 className="text-xl font-semibold text-gray-300 font-rem">
                Distribution and Issuance Schedule:
              </h4>
              <ul className="mt-2 text-lg text-gray-100 py-4 font-rem">
                <li className="leading-relaxed">
                  <strong className="text-[#ffd543]">
                    PoUW Consensus Mechanism:
                  </strong>{" "}
                  Fries Coin operates on the Internet Computer blockchain,
                  utilizing the PoUW consensus mechanism.
                </li>
                <li>
                  <strong className="text-[#ffd543]">
                    Initial Distribution:
                  </strong>
                  <ul className="mt-2 text-lg text-gray-100 py-4 font-rem space-y-4 w-full">
                    <li className="leading-relaxed">
                      <b className="text-[#ffd543] text-xl">Early Contributors and Team (5%)</b>
                      <i className="block ml-4 text-gray-300">
                        Reward for the core team and early supporters who helped build the project.
                      </i>
                    </li>
                    <li className="leading-relaxed">
                      <b className="text-[#ffd543] text-xl">ICP Hubs (5%)</b>
                      <i className="block ml-4 text-gray-300">
                        Allocated to ICP Hubs to foster blockchain adoption and developer engagement.
                      </i>
                    </li>
                    <li className="leading-relaxed">
                      <b className="text-[#ffd543] text-xl">Community Building & Rewards (5%)</b>
                      <i className="block ml-4 text-gray-300">
                        Used for giveaways, ambassador programs, and marketing campaigns.
                      </i>
                    </li>
                    <li className="leading-relaxed">
                      <b className="text-[#ffd543] text-xl">Liquidity (15%)</b>
                      <i className="block ml-4 text-gray-300">
                        Ensures smooth trading and reduces volatility. Locked forever.
                      </i>
                    </li>
                    <li className="leading-relaxed">
                      <b className="text-[#ffd543] text-xl">Ecosystem Growth & Development (20%)</b>
                      <i className="block ml-4 text-gray-300">
                        Funds to support developers, integrations, partnerships, and grants for dApp builders.
                      </i>
                    </li>
                    <li className="leading-relaxed">
                      <b className="text-[#ffd543] text-xl">Staking Rewards (20%)</b>
                      <i className="block ml-4 text-gray-300">
                        Incentivizes long-term holding by allowing users to stake Fry's Coin for passive rewards.
                      </i>
                    </li>
                    <li className="leading-relaxed">
                      <b className="text-[#ffd543] text-xl">Treasury & Future Developments (10%)</b>
                      <i className="block ml-4 text-gray-300">
                        Reserved for unforeseen opportunities, partnerships, and further development of the ecosystem.
                      </i>
                    </li>
                    <li className="leading-relaxed">
                      <b className="text-[#ffd543] text-xl">Public Sale (IDO/ICO) (15%)</b>
                      <i className="block ml-4 text-gray-300">
                        Allocated for early investors and public buyers to ensure fair distribution.
                      </i>
                    </li>
                    <li className="leading-relaxed">
                      <b className="text-[#ffd543] text-xl">Advisors & Strategic Partnerships (5%)</b>
                      <i className="block ml-4 text-gray-300">
                        Reserved for key industry experts who provide strategic guidance.
                      </i>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="mt-6">
                <h4 className="text-xl font-semibold text-[#ffd543] font-rem">Key Benefits:</h4>
                <ul className="mt-2 text-gray-100 list-inside list-disc">
                  <li>Sustainability through Treasury allocation</li>
                  <li>Community Driven with staking and rewards</li>
                  <li>Sufficient Liquidity for smooth transactions</li>
                  <li>Strong Growth Potential with development funds</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="position absolute md:top-0 md:left-0 top-5 left-5">
        <img
          src={sauceImage}
          alt="sauce image"
          className="md:w-40 h-auto w-20"
        />
      </div>
    </div>
  );
};
export default Tokenomics;
