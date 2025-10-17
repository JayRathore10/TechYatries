import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>TechYatries</h2>
          <p>
            Innovating for the future — your smart destination for digital
            transformation and growth.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: jitendraahirwar73891@gmail.com</p>
          <p>Phone: +91 73891 34098</p>
          <div className="social-icons">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="https://x.com/Jit7389">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/jitendra_a7389/">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/jitendra-ahirwar-6564b7305/">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} TechYatries. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;