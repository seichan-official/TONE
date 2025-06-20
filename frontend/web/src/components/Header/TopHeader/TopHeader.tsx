import React from "react";
import { Link } from 'react-router-dom';
import './TopHeader.css';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src="" alt="" />
      </Link>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/login">
              <img src="" alt="" />
            </Link>
          </li>
          <li>
            <Link to="/signin">
              <img src="" alt="" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;