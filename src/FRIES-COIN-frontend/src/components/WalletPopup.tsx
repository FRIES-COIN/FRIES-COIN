import React, { useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';

interface WalletPopupProps {
  onClose: () => void;
}

const WalletPopup: React.FC<WalletPopupProps> = ({ onClose }) => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<'success' | 'error' | null>(null);

  const connectPlugWallet = async () => {
    setIsConnecting(true);
    setConnectionStatus(null);

    const canisterId = "br5f7-7uaaa-aaaaa-qaaca-cai";
    const whitelist = [canisterId];
    const host = "http://127.0.0.1:4943/";
    const onConnectionUpdate = () => {
      console.log("Session data is: ", window.ic.plug.sessionManager.sessionData);
    };

    try {
      const publicKey = await window.ic.plug.requestConnect({
        whitelist,
        host,
        onConnectionUpdate,
        timeout: 5000,
      });
      console.log(`The connected user's public key is:`, publicKey);
      setConnectionStatus('success');
      setTimeout(() => {
        setConnectionStatus(null)
      }, 3000)
    } catch (e) {
      console.log(e);
      setConnectionStatus('error');
      setTimeout(() => {
        setConnectionStatus(null)
      }, 3000)
    } finally {
      setIsConnecting(false);
    }
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
        <h2 className="text-xl font-bold mb-4 text-center">Choose a Wallet</h2>
        <div className="flex justify-between mb-4">
          <button
            className={`px-4 py-2 bg-blue-500 text-white rounded transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-lg ${
              isConnecting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={connectPlugWallet}
            disabled={isConnecting}
          >
            {isConnecting ? 'Connecting...' : 'Plug Wallet'}
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-lg">
            NFiD
          </button>
        </div>
        {isConnecting && (
          <div className="mt-4 flex flex-col items-center justify-center">
            <p className="text-gray-500 mb-2">Accept the request connection</p>
            <ThreeDots color="#4fa94d" height={80} width={80} />
          </div>
        )}
        {connectionStatus === 'success' && (
          <div className="mt-4 flex flex-col items-center justify-center">
            <p className="text-green-500 font-bold">Connection successful!</p>
          </div>
        )}
        {connectionStatus === 'error' && (
          <div className="mt-4 flex flex-col items-center justify-center">
            <p className="text-red-500 font-bold">Connection failed. Please try again.</p>
          </div>
        )}
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