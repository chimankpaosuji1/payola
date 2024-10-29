// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="flex justify-between items-center p-5 bg-blue-600 text-white">
    <Link to="/" className="text-xl font-bold">PAYOLA</Link>
    <div>
      <Link to="/login" className="px-4">Login</Link>
      <Link to="/register" className="px-4">Register</Link>
    </div>
  </nav>
);

export default Navbar;
