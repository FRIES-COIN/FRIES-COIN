import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
import Whitepaper from "./components/Whitepaper";
import Airdrops from "./components/Airdrops";
import Features from "./components/Features";
import DeveloperDocs from "./components/DeveloperDocs";
import Mascot from "./components/ui/Mascot";

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

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js').then((registration) => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, (error) => {
        console.log('ServiceWorker registration failed: ', error);
      });
    });
  }

  return (
    <Router>
      <main className="bg-[#041c32] pb-12 md:pb-0">
        <Navbar />
        {showPopup && (
          <WalletPopup
            onClose={handleClosePopup}
            handlePurchasePopup={handlePurchasePopup}
          />
        )}
        {showPurchasePopUp && (
          <PurchaseFriesPopup onClose={closePurchasePopup} />
        )}
        <div className="">
          <Routes>
            <Route
              path="/"
              element={
                <div className="mx-auto my-0 max-w-[1140px]">
                  <Hero handleConnectWallet={handleConnectWallet} />
                  <About />
                  {/* <Tokenomics /> */}
                  <Mascot />
                  {/* <Roadmap /> */}
                  <Buy handleConnectWallet={handleConnectWallet} />
                  <FAQ />
                </div>
              }
            />
            <Route path="/whitepaper" element={<Whitepaper />} />
            <Route path="/airdrops" element={<Airdrops />} />
            <Route path="/features" element={<Features />} />
            <Route path="/roadmap" element={<Roadmap />} />
          </Routes>
        </div>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
