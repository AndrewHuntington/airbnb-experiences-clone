import React from 'react';
import heroImage from '../assets/photo-grid.png';

export default function Hero() {
  return (
    <>
      <div className="mt-7">
        <img
          className="max-w-[396px] mx-auto"
          src={heroImage}
          alt="various images of people doing interesting things"
        />
      </div>
      <div className="ml-9 mt-8">
        <h1 className="text-4xl font-semibold">Online Experiences</h1>
        <p className="mt-4 max-w-xs font-light text-base text-[#222222]">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </>
  );
}
