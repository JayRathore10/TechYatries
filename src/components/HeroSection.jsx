import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import "./HeroSection.css";
// import bgImageAlt from '../assets/images/indiaGate.jpg';
function HeroSection() {

  const [images, setImages] = useState([]);
  const [currIndex, setCurrIndex] = useState(0);

  const locations = [
    "Taj Mahal", "Goa Beach", "Kerala Backwaters",
    "Himachal Mountains", "Rajasthan Forts",
    "Varanasi Ghats", "Mysore Palace", "Andaman Islands",
    "Darjeeling Tea Gardens", "Sundarbans Mangroves"
  ];

  const apiKey = "iyAWLiH47sEeinuQWkA20QBM6XBum5UuxvXcyI3H-XA";

  useEffect(() => {
    const fetchImages = async () => {

      try {

        let allImages = [];
        for (let loc of locations) {
          const response = await axios.get(`https://api.unsplash.com/search/photos`, {
            params: {
              query: loc,
              per_page: 3,
            },
            headers: {
              Authorization: `Client-ID ${apiKey}`
            }
          })
          const url = response.data.results.map((img) => (
            img.urls.regular
          ))

          allImages = allImages.concat(url);
        }

        setImages(allImages);

      } catch (error) {
        console.log(error);
      }
    }
    fetchImages();
  }, []);

  useEffect(() => {
    if (images.length === 0) return;
    const interval = setInterval(() => {
      setCurrIndex((prev) => (
        (prev + 1) % images.length
      ))
    }, 4000);

    return () => { clearInterval(interval) }
  }, [images])

  const bgImage = images[currIndex] || "";
  // use to bypass the eslint error 
  motion.create(HeroSection);
  return (
    <motion.section
      className="hero-section"
      style={{
        backgroundImage: `url(${bgImage})`,
        // transition: `background-image 1s ease-in-out`
      }}
      key = {currIndex}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>
          Discover the World's{" "}
          <span className="highlight">Hidden Treasures</span>
        </h1>
        <p
          style={{ fontWeight: "bold" }}
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
    </motion.section>
  );
}

export default HeroSection;