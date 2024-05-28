import { useState } from "react";
import { FRIES_COIN_backend } from "declarations/FRIES-COIN-backend";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Tokenomics from "./components/Tokenomics";
import Roadmap from "./components/Roadmap";
import Buy from "./components/BuyNow";
import FAQ from "./components/FAQ";
import Footer from "./components/footer";
function App() {
  const [greeting, setGreeting] = useState("");

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
      <div className="mx-auto my-0 max-w-[1140px]">
        <Hero />
        <About />
        <Tokenomics />
        <Roadmap />
        <Buy />
        <FAQ />
      </div>

      <Footer />
    </main>
  );
}

export default App;
