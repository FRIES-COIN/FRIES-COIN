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
        className="bg-white p-6 rounded-lg z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4">Choose a Wallet</h2>
        <div>
          <button className="mb-2 px-4 py-2 bg-blue-500 text-white rounded">
            Plug Wallet
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded">
            NFiD
          </button>
        </div>
        <button
          className="mt-4 px-4 py-2 bg-gray-200 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default WalletPopup;