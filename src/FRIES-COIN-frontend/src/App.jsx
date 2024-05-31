import { useState } from "react";
// import { FRIES_COIN_backend } from "declarations/FRIES-COIN-backend";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Tokenomics from "./components/Tokenomics";
import Roadmap from "./components/Roadmap";
import Buy from "./components/BuyNow";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import WalletPopup from "./components/WalletPopup";
import PurchaseFriesPopup from "./components/PurchaseFries";

function App() {
  const [greeting, setGreeting] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [showPurchasePopUp, setshowPurchasePopUp] = useState(false);

  const handleConnectWallet = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handlePurchasePopup = () => {
    setshowPurchasePopUp(true);
  };

  const closePurchasePopup = () => {
    setshowPurchasePopUp(false);
  };

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    FRIES_COIN_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  return (
    <main className="bg-[#041c32] pb-12 md:pb-0">
      <Navbar />
      {showPopup && (
        <WalletPopup
          onClose={handleClosePopup}
          handlePurchasePopup={handlePurchasePopup}
        />
      )}
      {showPurchasePopUp && <PurchaseFriesPopup onClose={closePurchasePopup} />}
      <div className="mx-auto my-0 max-w-[1140px]">
        <Hero handleConnectWallet={handleConnectWallet} />
        <About handleConnectWallet={handleConnectWallet} />
        <Tokenomics />
        <Roadmap />
        <Buy handleConnectWallet={handleConnectWallet} />
        <FAQ />
      </div>

      <Footer />
    </main>
  );
}

export default App;
