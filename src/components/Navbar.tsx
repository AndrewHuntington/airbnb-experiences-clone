import React from 'react';
import logo from '../assets/airbnb-logo.png';

export default function Navbar() {
  return (
    <div className=" pl-7 pt-5 h-[70px] shadow-[0px_2.98256px_7.4564px_rgba(0,0,0,0.1)]">
      <img src={logo} alt="logo" />
    </div>
  );
}
