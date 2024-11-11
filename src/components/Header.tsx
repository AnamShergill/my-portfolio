"use client";
import "../style/header.css";



import React, { useState } from 'react';
import {  RiMenu2Line } from '@remixicon/react';


function Header() {
  const [menu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

   // For testing, set it to true

return (
  <header className="header">
    <span className="brand">Portfolio</span>

    <ul className={`menu ${menu ? "block" : "hidden"}`}>
      <a href="#About"><li className="menu-item">About</li></a>
      <a href="#Skills"><li className="menu-item">Skills</li></a>
      <a href="#Projects"><li className="menu-item">Projects</li></a>
      <a href="#Footer"><li className="menu-item">Contact</li></a>
    </ul>

    <RiMenu2Line
      size={30}
      className="menu-toggle"
      onClick={() => setShowMenu(!showMenu)} // Toggle the menu
    />
  </header>
);
}

export default Header;
