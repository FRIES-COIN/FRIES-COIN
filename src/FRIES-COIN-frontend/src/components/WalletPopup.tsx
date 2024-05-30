import React from 'react';

interface WalletPopupProps {
  onClose: () => void;
}

const WalletPopup: React.FC<WalletPopupProps> = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-8 rounded-lg z-10 w-96"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4 text-center">Choose a Wallet</h2>
        <div className="flex justify-between mb-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-lg"
          >
            Plug Wallet
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-lg"
          >
            NFiD
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

export default WalletPopup;