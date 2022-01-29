import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

import './App.css';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="max-w-xl mx-auto">
        <section>
          <Hero />
        </section>
        <section></section>
      </div>
    </>
  );
}

export default App;
