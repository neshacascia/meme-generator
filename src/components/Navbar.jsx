import React from 'react';
import navLogo from '../assets/troll-face.png';

export default function Navbar() {
  return (
    <nav>
      <img className="nav-logo" src={navLogo} />
      <h2>Meme Generator</h2>
    </nav>
  );
}
