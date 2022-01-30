import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import { cardData } from './data/cardData';

import './App.css';

function App() {
  const cards = cardData.map((card) => (
    <Card
      key={card.id}
      coverImg={card.coverImg}
      rating={card.stats.rating}
      reviewCount={card.stats.reviewCount}
      location={card.location}
      title={card.title}
      price={card.price}
    />
  ));
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className=" max-w-xl mx-auto">
        <section>
          <Hero />
        </section>
        <section className="flex justify-between pl-9 pt-12">{cards}</section>
      </div>
    </>
  );
}

export default App;
