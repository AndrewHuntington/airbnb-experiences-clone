import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import { cardData } from './data/cardData';

import './App.css';

function App() {
  const cards = cardData.map((card) => <Card key={card.id} data={card} />);
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className=" max-w-xl mx-auto">
        <section>
          <Hero />
        </section>
        <section className="flex flex-nowrap gap-5 overflow-x-auto overflow-y-hidden pl-9 pt-12">
          {cards}
        </section>
      </div>
    </>
  );
}

export default App;
