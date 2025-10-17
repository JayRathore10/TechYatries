import { useState } from 'react';
import logoPic from '../assets/images/logo.png';
import './Header.css';
import { DropDownService } from './DropDownService';

export function Header() {
  const [dropDown, setDropDown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // for mobile hamburger

  return (
    <header className="main-header">
      <div className="logo-sec">
        <img src={logoPic} className="logo-pic" alt="Logo" />
        <span className="logo">TechYatries</span>
      </div>

      {/* Hamburger button */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navbar */}
      <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li className="dropdown"
              onMouseEnter={() => setDropDown(true)}
              onMouseLeave={() => setDropDown(false)}
          >
            <a href="#" className="service">Services</a>
            {dropDown && <DropDownService />}
          </li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      <div className="right-section">
        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <button>
            <i className="search-icon hgi hgi-stroke hgi-search-01"></i>
          </button>
        </div>

        <div className="auth-buttons">
          <button className="signin-btn">Sign In</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </div>
    </header>
  );
}
