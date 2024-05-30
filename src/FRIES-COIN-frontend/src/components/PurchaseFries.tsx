import React, { useState } from 'react';

interface PurchaseFriesProps {
  onClose: () => void;
}

const PurchaseFriesPopup: React.FC<PurchaseFriesProps> = ({ onClose }) => {
  const [amount, setAmount] = useState('');

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handlePurchase = () => {
    // Implement your purchase logic here
    console.log(`Purchasing ${amount} $FRIES`);
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-8 rounded-lg z-10 w-96"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4 text-center">Purchase $FRIES</h2>
        <div className="mb-4">
          <label htmlFor="amount" className="block mb-2 font-bold">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={handleAmountChange}
            className="w-full px-4 py-2 border border-gray-300 rounded"
            placeholder="Enter amount"
          />
        </div>
        <div className="flex justify-between mb-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-lg"
            onClick={handlePurchase}
            disabled={!amount}
          >
            Purchase $FRIES
          </button>
        </div>
        <div className="flex justify-center">
          <button
            className="mt-4 px-4 py-2 bg-gray-200 rounded"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseFriesPopup;