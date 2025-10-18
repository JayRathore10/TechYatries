import React from "react";
import { motion } from "framer-motion";
import "./FeaturesSection.css";

export function FeaturesSection() {
  // to bypass the eslint error 
  motion.create(FeaturesSection);
  return (
    <section className="features">
      <motion.h2 className="feature-head"
        initial={{opacity:0 , x : -100}}
        whileInView={{opacity:1 , x : 0}}
        viewport={{once: true , amount:0.5}}
        transition={{duration:1}}
      >
        Everthing You Needed to Explore the world
      </motion.h2>
      <br />
      <div className="feature-grid">
        <div className="feature-card">
          <i className="bi bi-camera feature-icon"></i>
          <h3>Photo Recognition</h3>
          <p>
            Simiply Upload a photo and our AI instantly identifies monuments
            with 99.9% accuracy.
          </p>
        </div>
        <div className="feature-card">
          <i className="bi bi-bag-heart feature-icon"></i>
          <h3>Personal Collection</h3>
          <p>
            Save your Favorite Monuments and create personalized travel
            collections.
          </p>
        </div>
        <div className="feature-card">
          <i className="bi bi-info-circle feature-icon"></i>
          <h3>Rich Information</h3>
          <p>
            Discover fascinating stories, historical facts, and cultural
            significance behind each monument
          </p>
        </div>

        <div className="feature-card">
          <i className="bi bi-geo-alt feature-icon"></i>
          <h3>Smart Routes</h3>
          <p>
            Get optimized travel routes and discover nearby hotels and
            restaurants.
          </p>
        </div>
      </div>
    </section>
  );
}

