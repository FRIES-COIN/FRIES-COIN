declare global {
  interface Window {
    ic: any;
  }
}

import React, { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { connectNFIDWallet, isNFIDWalletConnected, disconnectNFIDWallet } from '../util/nfidWallet';

interface WalletPopupProps {
  onClose: () => void;
  handlePurchasePopup: () => void;
}

const WalletPopup: React.FC<WalletPopupProps> = ({
  onClose,
  handlePurchasePopup,
}) => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<
    "success" | "error" | null
  >(null);
  const [walletType, setWalletType] = useState<'plug' | 'nfid' | null>(null);

  const connectPlugWallet = async () => {
    setIsConnecting(true);
    setConnectionStatus(null);
    setWalletType("plug");

    const canisterId ="bd3sg-teaaa-aaaaa-qaaba-cai";
    const whitelist = [canisterId];
    const host = "http://127.0.0.1:4943/";
    const onConnectionUpdate = () => {
      console.log(
        
        "Session data is: ",
       
        (window as any).ic?.plug?.sessionManager?.sessionData
      
      );
    };

    try {
      const publicKey = await (window as any).ic.plug.requestConnect({
        whitelist,
        host,
        onConnectionUpdate,
        timeout: 5000,
      });
      console.log(`The connected user's public key is:`, publicKey);
      setConnectionStatus("success");
      setTimeout(() => {
        setConnectionStatus(null);
      }, 3000);
      handlePurchasePopup();
    } catch (e) {
      console.log(e);
      setConnectionStatus("error");
      setTimeout(() => {
        setConnectionStatus(null);
      }, 3000);
    } finally {
      setIsConnecting(false);
    }
  };

  const connectNFIDWalletHandler = async () => {
    setIsConnecting(true);
    setConnectionStatus(null);
    setWalletType('nfid');

    try {
      const principal = await connectNFIDWallet();
      if (principal) {
        console.log(`The connected user's principal is:`, principal);
        setConnectionStatus('success');
        setTimeout(() => {
          setConnectionStatus(null);
        }, 3000);
        handlePurchasePopup();
      } else {
        setConnectionStatus('error');
        setTimeout(() => {
          setConnectionStatus(null);
        }, 3000);
      }
    } catch (error) {
      console.error('Error connecting to NFID wallet:', error);
      setConnectionStatus("error");
      setTimeout(() => {
        setConnectionStatus(null);
      }, 3000);
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <div
      // className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 backdrop-blur"
      onClick={onClose}
    >
      <div
        className="bg-[#041c32] p-8 rounded-lg z-10 w-96"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl text-gray-300 font-bold mb-4 text-center">
          Choose a Wallet
        </h2>
        <div className="flex justify-between mb-4">
          <button
            className={`bg-[#ffd543] text-[#041c32] font-semibold font-rem hover:text-white py-2 px-4 rounded-lg hover:bg-transparent border-2 border-[#ffd543] duration-300 transition-all  hover:scale-105 hover:shadow-lg ${
              isConnecting ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={connectPlugWallet}
            disabled={isConnecting}
          >
            {isConnecting && walletType === 'plug' ? "Connecting..." : "Plug Wallet"}
          </button>
          <button
            className={`bg-[#ffd543] text-[#041c32] font-semibold text-lg font-rem md:text-xl hover:text-white py-2 px-4 rounded-lg hover:bg-transparent border-2 border-[#ffd543] transition duration-300 ${
              isConnecting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={connectNFIDWalletHandler}
            disabled={isConnecting}
          >
            {isConnecting && walletType === 'nfid' ? 'Connecting...' : 'NFID Wallet'}
          </button>
        </div>
        {isConnecting && (
          <div className="mt-4 flex flex-col items-center justify-center">
            <p className="text-gray-500 mb-2">Accept the request connection</p>
            <ThreeDots color="#4fa94d" height={80} width={80} />
          </div>
        )}
        {connectionStatus === "success" && (
          <div className="mt-4 flex flex-col items-center justify-center">
            <p className="text-green-500 font-bold">Connection successful!</p>
          </div>
        )}
        {connectionStatus === "error" && (
          <div className="mt-4 flex flex-col items-center justify-center">
            <p className="text-red-500 font-bold">
              Connection failed. Please try again.
            </p>
          </div>
        )}
        <div className="flex justify-center">
          <button
            className="mt-4 px-4 py-2 bg-gray-300 rounded"
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
