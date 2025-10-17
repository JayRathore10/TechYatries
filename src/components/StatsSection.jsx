import { useState, useEffect, useRef } from 'react';
import React from "react";
import "./StatsSection.css";

function StatsSection() {
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

  return (
    <section className="stats" ref={sectionRef}>
      <h2>Our Achievements</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>{count.project}+</h3>
          <p>Trips Completed</p>
        </div>
        <div className="stat-card">
          <h3>{count.clients}+</h3>
          <p>Happy Tourist</p>
        </div>
        <div className="stat-card">
          <h3>{count.experience}+</h3>
          <p>Years of Experience</p>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
