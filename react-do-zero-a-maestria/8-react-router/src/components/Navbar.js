import "./Navbar.css";

import React from 'react';
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav>
        {/* não se usa tag a no react */}
        <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link>
    </nav>
  )
}

export default Navbar