import "./Navbar.css";

import React from 'react';
import { NavLink } from "react-router-dom";


function Navbar() {
  return (
    <nav>
        {/* não se usa tag a no react */}
        {/* Link ativo */}
        <NavLink to="/" className={({isActive}) => (isActive ? 'esta-ativo' : 'nao-ativo')} end>Home</NavLink>
        <NavLink to="/about">Sobre</NavLink>
    </nav>
  )
}

export default Navbar