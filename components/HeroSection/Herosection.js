"use client";

import React, { useState, useEffect } from "react";
import "./HeroSection.css";

const HeroSection = () => {
  const images = [
    "/assets/hero1.jpg",
    "/assets/hero2.jpg",
    "/assets/hero3.jpg",
  ]; // Absolute paths from the public directory
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval); // Cleanup interval
  }, [images.length]);

  return (
    <div
      className="hero"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className="hero-text">
        <h1>You Can Never Go Wrong With Our Quality</h1>
        <p>
          Integer id ipsum eu massa pretium pulvinar non vitae massa donec ut
          dignissim. Metus aenean vulputate ex sed sem aliquet dapibus. Mauris
          imperdiet.
        </p>
        <div className="hero-buttons">
          <button className="discover-btn">Discover More</button>
          <button className="play-video-btn">Play Video</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
