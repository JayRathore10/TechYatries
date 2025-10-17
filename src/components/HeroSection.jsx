import React from "react";
import "./HeroSection.css";
import bgImage from '../assets/images/hero-bg.png';
function HeroSection() {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>
          Discover the World's{" "}
          <span className="highlight">Hidden Treasures</span>
        </h1>
        <p
          style={{fontWeight : "bold"}}
        >
          Upload photos, recognize monuments instantly, and unlock rich cultural
          stories. Your personal guide to heritage sites worldwide.
        </p>
        <div className="hero-buttons">
          <button className="btn upload-btn">
            <i className="hgi hgi-stroke hgi-upload-04"></i>
            &nbsp;Upload Moments</button>
          <button className="btn explore-btn">
              <i className="search-icon hgi hgi-stroke hgi-search-01"></i>
              &nbsp;Explore Monuments</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;