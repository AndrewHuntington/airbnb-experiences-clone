import React from 'react';
import logo from '../assets/airbnb-logo.png';

export default function Navbar() {
  return (
    <nav className="h-[70px] pl-7 pt-5 shadow-[0px_2.98256px_7.4564px_rgba(0,0,0,0.1)]">
      <img className="h-[25px]" src={logo} alt="logo" />
    </nav>
  );
}
