import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import React from "react";
import "./StatsSection.css";

function StatsSection() {

  // use to bypass the eslint error 
  motion.create(StatsSection);

  const [count, setCount] = useState({
    project: 0,
    clients: 0,
    experience: 0,
  });

  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || hasAnimated) return;

      const top = sectionRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (top < windowHeight * 0.9) { // section is mostly visible
        setHasAnimated(true);

        const targets = { project: 500, clients: 300, experience: 10 };
        const speed = 40;

        const interval = setInterval(() => {
          setCount((prev) => {
            const updated = { ...prev };
            let done = true;

            Object.keys(targets).forEach((key) => {
              if (prev[key] < targets[key]) {
                updated[key] = Math.min(
                  prev[key] + Math.ceil(targets[key] / 100),
                  targets[key]
                );
                done = false;
              }
            });

            if (done) clearInterval(interval);
            return updated;
          });
        }, speed);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // also check immediately in case section is already visible

    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasAnimated]);

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
    <section className="stats" ref={sectionRef}>
      <motion.h2
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
      >Our Achievements</motion.h2>
      <motion.div className="stats-grid" 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{once : true, amount:0.5}}
      >
        <motion.div className="stat-card" variants={cardVariants}>
          <h3>{count.project}+</h3>
          <p>Trips Completed</p>
        </motion.div>
        <motion.div className="stat-card" variants={cardVariants}>
          <h3>{count.clients}+</h3>
          <p>Happy Tourist</p>
        </motion.div>
        <motion.div className="stat-card" variants={cardVariants}>
          <h3>{count.experience}+</h3>
          <p>Years of Experience</p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default StatsSection;
