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
  { name: "Early Contributors and Team", value: 1050000 },
  { name: "ICP Hubs", value: 1050000 },
  { name: "Community Building and Rewards", value: 1050000 },
  { name: "Liquidity", value: 3150000 },
  { name: "Available for Mining", value: 14700000 },
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
            <strong className="text-white">Total Supply:</strong> 21 Million
            $FRYS
          </p>
        </div>
        <div className="mt-10">
          <h3 className="text-2xl font-bold text-[#ffd543] font-rem">
            Initial Distribution
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2">
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    label={renderCustomizedLabel}
                    labelLine={false}
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-8">
              <h4 className="text-xl font-semibold text-gray-300 font-rem">
                Distribution and Issuance Schedule:
              </h4>
              <ul className="mt-2 text-lg text-gray-100 py-4 list-disc list-inside font-rem">
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
                  <ul className="list-inside list-disc font-rem">
                    <li>
                      <span>Genesis Block:</span>
                      <ul className="list-inside list-item pl-4">
                        <li>
                          Early Contributors and Team: 5% (1,050,000 FRYS)
                        </li>
                        <li>
                          Each team member receives: 95454.5455 FRYS (1,050,000
                          FRYS / 11)
                        </li>
                        <li>
                          ICP Hubs: 5% (1,050,000 FRYS) - Each ICP Hub receives:
                          43,750 FRYS (1,050,000 FRYS / 24)
                        </li>
                        <li>
                          Community Building and Rewards: 5% (1,050,000 FRYS)
                        </li>
                        <li>Liquidity: 15% (3,150,000 FRYS)</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <strong className="text-[#ffd543]">Mining Rewards:</strong>{" "}
                  Participants contribute computational resources to the network
                  and are rewarded with FRYS tokens.
                </li>
              </ul>
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
