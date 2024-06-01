import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCopy } from "react-icons/fa";

const CodeBlock: React.FC<{ code: string }> = ({ code }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="relative mb-4">
      <pre className="bg-gray-800 text-white p-4 rounded">
        <code>{code}</code>
      </pre>
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 text-white bg-gray-700 hover:bg-gray-600 p-1 rounded"
      >
        <FaCopy />
      </button>
    </div>
  );
};

const sections = ["Getting Started", "API Reference", "Smart Contract Development"] as const;

type Section = typeof sections[number];

const sectionContent: Record<Section, JSX.Element> = {
  "Getting Started": (
    <>
      <h1 className="text-3xl font-bold mb-4">Getting Started</h1>
      <p className="mb-4">
        To get started, you'll need to set up your development environment. Follow the steps below to get everything up and running.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Prerequisites</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Node.js version 18^+</li>
        <li>npm or yarn</li>
        <li>dfx (DFINITY's Canister SDK) version 20^+</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Installation</h2>
      <p className="mb-2">First, clone the repository and install the dependencies:</p>
      <CodeBlock code={`git clone https://github.com/FRIES-COIN/FRIES-COIN.git\ncd FRIES-COIN\nnpm install`} />
      <h2 className="text-2xl font-semibold mb-2">Running the Project</h2>
      <p className="mb-2">To run the project locally, use the following command:</p>
      <CodeBlock code={`dfx start --background --clean\ndfx deploy\nnpm start`} />
    </>
  ),
  "API Reference": (
    <>
      <h1 className="text-3xl font-bold mb-4">API Reference</h1>
      <h2 className="text-2xl font-semibold mb-2">Get Balance</h2>
      <CodeBlock code={`GET /api/balance`} />
      <p className="mb-2">
        <strong>Parameters:</strong>
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><code>address</code> (string): The address of the wallet.</li>
      </ul>
      <p className="mb-2">
        <strong>Response:</strong>
      </p>
      <CodeBlock code={`{\n  "balance": 1000\n}`} />
      <h2 className="text-2xl font-semibold mb-2">Transfer Funds</h2>
      <CodeBlock code={`POST /api/transfer`} />
      <p className="mb-2">
        <strong>Parameters:</strong>
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><code>from</code> (string): The sender's address.</li>
        <li><code>to</code> (string): The recipient's address.</li>
        <li><code>amount</code> (number): The amount to transfer.</li>
      </ul>
      <p className="mb-2">
        <strong>Response:</strong>
      </p>
      <CodeBlock code={`{\n  "success": true,\n  "transactionId": "abc123"\n}`} />
    </>
  ),
  "Smart Contract Development": (
    <>
      <h1 className="text-3xl font-bold mb-4">Smart Contract Development</h1>
      <p className="mb-4">To develop smart contracts for Fries Coin, follow the guidelines below.</p>
      <h2 className="text-2xl font-semibold mb-2">Writing a Contract</h2>
      <CodeBlock code={`use ic_cdk::export::candid::CandidType;\nuse serde::Deserialize;\n\n#[derive(CandidType, Deserialize)]\nstruct TransferArgs {\n    to: String,\n    amount: u64,\n}\n\n#[update]\nfn transfer(args: TransferArgs) -> Result<(), String> {\n    // Your transfer logic here\n}`} />
    </>
  ),
};

const DeveloperDocs: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>("Getting Started");

  const renderSectionContent = (section: Section) => {
    return sectionContent[section];
  };

  return (
    <div className="flex bg-[#041c32] text-white min-h-screen">
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-1/4 bg-gray-900 p-4"
      >
        <h2 className="text-xl font-bold mb-4">Developer Docs</h2>
        <ul>
          {sections.map((section) => (
            <li
              key={section}
              className={`cursor-pointer mb-2 p-2 rounded ${
                activeSection === section ? "bg-gray-700" : "bg-gray-800 hover:bg-gray-700"
              }`}
              onClick={() => setActiveSection(section)}
            >
              {section}
            </li>
          ))}
        </ul>
      </motion.div>
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-3/4 p-8"
      >
        {renderSectionContent(activeSection)}
      </motion.div>
    </div>
  );
};

export default DeveloperDocs;
