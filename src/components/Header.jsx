import { useState } from 'react';
import logoPic from '../assets/images/logo.png';
import { DropDownService } from './DropDownService';
import {easeInOut, motion} from 'framer-motion';
import './Header.css';

export function Header() {
  const [dropDown, setDropDown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // for mobile hamburger

  // just to avoid eslint error 
  motion.create(Header);

  return (
    <motion.header className="main-header"
      initial={{opacity :0 , y : -100}}
      animate ={{opacity :1  ,y : 0}}
      transition={{duration : 0.7 , ease:easeInOut}}
    >
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
          <motion.input type="text" placeholder="Search..."
            initial={{scale:0.2 , opacity:0.2}}
            animate={{scale:1 , opacity:1}}
            transition={{duration:1.5 }}
          />
          <motion.button
            initial={{scale:0.2 , opacity:0.2}}
            animate={{scale:1, opacity:1}}
            transition={{duration :1.5}}
          >
            <i className="search-icon hgi hgi-stroke hgi-search-01"></i>
          </motion.button>
        </div>

        <motion.div className="auth-buttons"
          initial={{x:100 , opacity:0}}
          animate={{x :1 , opacity:1}}
          transition={{duration:1.5 , ease:easeInOut}}
        >
          <button className="signin-btn">Location</button>
          <button className="signup-btn">Sign In</button>
        </motion.div>
      </div>
    </motion.header>
  );
}
