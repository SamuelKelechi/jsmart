import React, { useState, useEffect } from "react";
import "./Slider.css";
import TextSlider from "./Slider"

const Slider = () => {
  const images = [
    "https://via.placeholder.com/1920x1080?text=Slide+1",
    "https://via.placeholder.com/1920x1080?text=Slide+2",
    "https://via.placeholder.com/1920x1080?text=Slide+3",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="carousel-slide"
            style={{ backgroundImage: `url(${image})` }}
          >

            <TextSlider />
          </div>
        ))}
      </div>
      <button className="carousel-control prev" onClick={goToPreviousSlide}>
        &#10094;
      </button>
      <button className="carousel-control next" onClick={goToNextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Slider;