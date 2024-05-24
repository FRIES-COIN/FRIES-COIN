import { useState } from 'react';
import { FRIES_COIN_backend } from 'declarations/FRIES-COIN-backend';

function App() {
  const [greeting, setGreeting] = useState('');
 
  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    FRIES_COIN_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  return (
    <main>
      <h1 className="text-center my-8 text-red-500 text-xl font-bold">FRIES COIN Starter</h1>
     <div className="flex items-center justify-center">
       <img src="/logo2.svg" alt="DFINITY logo" />
     </div> 
      <br />
      <br />
      <form action="#" onSubmit={handleSubmit} className="flex flex-col max-w-[400px] gap-4 mx-auto">
        <label htmlFor="name" className="text-center">Enter your name: &nbsp;</label>
        <input id="name" alt="Name" type="text" className="border-1 p-4 rounded bg-gray-200 mx-4 text-black font-semibold" />
        <button type="submit" className="bg-orange-500 text-white p-4 rounded shadow-md ">Click Me!</button>
      </form>
      <section id="greeting">{greeting}</section>
    </main>
  );
}

export default App;
