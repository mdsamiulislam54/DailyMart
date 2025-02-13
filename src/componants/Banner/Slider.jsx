import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import { useDarkMode } from "../ContextApi/DarkModeApi";

const Slider = () => {
  const { darkMode } = useDarkMode();
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/SliderBanner.json"); // Ensure the file is inside `public/`
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.log("Error loading slider images:", error);
      }
    };
    fetchData();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  const heading = images[currentIndex]?.heading || "";
  const discountMatch = heading.match(/(\d+%)/); // Finds any number followed by %
  const discountText = discountMatch ? discountMatch[0] : ""; // Extracted percentage
  const headingParts = heading.split(discountText);

  return (
    <div className="relative">
      {images.length > 0 ? (
        <div className="relative">
          <img
            className="w-full h-[70vh] object-cover"
            src={images[currentIndex].images}
            alt="Slider"
          />

          <motion.div
          key={currentIndex}
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute top-2/12 left-[172px] w-5/12 flex flex-col items-start gap-10 "
          >
               <h3 className="text-3xl tracking-wider font-medium text-gray-600">
              {images[currentIndex].title}
            </h3>
            <h1 className="text-5xl leading-18 text-gray-600 ">
              {headingParts[0]}
              <span className="text-accent font-bold text-6xl">{discountText}</span>
              {headingParts[1]}
            </h1>
            <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="bg-primary text-white px-6 py-3 rounded-lg shadow-lg"
    >
      {images[currentIndex].btntext}
    </motion.button>
          </motion.div>
          
        </div>
      ) : (
        <div>No images available</div>
      )}

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 w-full flex justify-between items-center px-10 transform -translate-y-1/2">
        <button onClick={prevSlide}>
          <IoIosArrowDropleftCircle
            size={40}
            className={`hover:cursor-pointer hover:text-primary ${
              darkMode ? "text-text" : ""
            }`}
          />
        </button>
        <button onClick={nextSlide}>
          <IoIosArrowDroprightCircle
            size={40}
            className={`hover:cursor-pointer hover:text-primary ${
              darkMode ? "text-text" : ""
            }`}
          />
        </button>
      </div>

      {/* Dots (Indicators) */}
      <div className="absolute bottom-5 w-full flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index
                ? "bg-secondary"
                : "border border-secondary"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
