import React from "react";
import { motion } from "framer-motion";
import "./FeaturesSection.css";

export function FeaturesSection() {

  // use to bypass the eslint error 
  motion.create(FeaturesSection);

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="features">
      <motion.h2 className="feature-head"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{duration :1 , ease : "linear"}}
      >
        Everything You Needed to Explore the World
      </motion.h2>
      <br />
      <motion.div
        className="feature-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        transition={{duration :1 , ease : "linear"}}
      >
        <motion.div className="feature-card" variants={cardVariants}>
          <i className="bi bi-camera feature-icon"></i>
          <h3>Photo Recognition</h3>
          <p>Simply Upload a photo and our AI instantly identifies monuments with 99.9% accuracy.</p>
        </motion.div>

        <motion.div className="feature-card" variants={cardVariants}>
          <i className="bi bi-bag-heart feature-icon"></i>
          <h3>Personal Collection</h3>
          <p>Save your Favorite Monuments and create personalized travel collections.</p>
        </motion.div>

        <motion.div className="feature-card" variants={cardVariants}>
          <i className="bi bi-info-circle feature-icon"></i>
          <h3>Rich Information</h3>
          <p>Discover fascinating stories, historical facts, and cultural significance behind each monument.</p>
        </motion.div>

        <motion.div className="feature-card" variants={cardVariants}>
          <i className="bi bi-geo-alt feature-icon"></i>
          <h3>Smart Routes</h3>
          <p>Get optimized travel routes and discover nearby hotels and restaurants.</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
