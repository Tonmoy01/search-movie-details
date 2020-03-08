import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar navbar-dark bg-dark mb-5">
      <span className="navbar-brand h1 mb-0">
        <Link to="/" className="navbar-brand">
          <i className="fas fa-video"></i> Movie Searching
        </Link>
      </span>
    </nav>
  );
};

export default Nav;
