"use client";
import React, { useState, useEffect } from "react";

const TextChange = () => {
  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(0);
  const [textIndex, setTextIndex] = useState(0); // Index to track the current text in the array
  const texts = ["Hi, I am Anam Shergill.", "Welcome to my portfolio!", "I love coding.", "Let's build something amazing!"];

  const targetText = texts[textIndex];

  // Determine which emoji to append based on the current text
  const getEmojiForText = (text: string): string => {
    switch (text) {
      case "I love coding.":
        return " ❤️";
      case "Let's build something amazing!":
        return " 🛠️";
      case "Welcome to my portfolio!":
        return " 🌐";
      default:
        return "";
    }
  };

  useEffect(() => {
    if (endValue >= targetText.length) {
    
      const timeoutId = setTimeout(() => {
        setEndValue(0); // Reset the text typing
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length); // Move to the next text, looping back to the first text
      }, 1000); // 2-second gap after text finishes

      return () => clearTimeout(timeoutId); // Cleanup timeout
    }

    // Typing animation
    const intervalId = setInterval(() => {
      setCurrentText(targetText.substring(0, endValue + 1)); 
      setEndValue((prev) => prev + 1); 
    }, 150); 

    return () => clearInterval(intervalId); // Cleanup interval
  }, [endValue, targetText, textIndex]); // Re-run when endValue, targetText, or textIndex changes

  // Check if the text is finished typing and then add the emoji
  const emoji = endValue >= targetText.length ? getEmojiForText(targetText) : "";

  return (
    <div className="transition ease duration-300">
      {currentText}{emoji} {/* Append emoji only after text is fully typed */}
    </div>
  );
};

export default TextChange;
