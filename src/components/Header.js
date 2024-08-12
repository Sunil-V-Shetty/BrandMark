// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="brandmark">
        <span className="brand">Brand</span>
        <span className="mark">Mark</span>
      </div>
      <nav className="nav-links">
        <a href="#tools">Tools</a>
        <a href="#pricing">Pricing</a>
        <a href="#support">Support</a>
        <a href="#login">Login</a>
      </nav>
    </header>
  );
};

export default Header;
