"use client";
import "../style/header.css";



import React, { useState } from 'react';
import {  RiMenu2Line, RiCloseLine } from '@remixicon/react';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu when the burger icon is clicked
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

   

return (
  <header className="header">
    <span className="brand">Portfolio</span>

      {/* Menu */}
      <ul className={`menu ${isMenuOpen ? "show" : ""}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? (
          <RiCloseLine size={30} />
        ) : (
          <RiMenu2Line size={30} />
        )}
      </div>
  </header>
);
}

export default Header;
