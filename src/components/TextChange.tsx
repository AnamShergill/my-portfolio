"use client";
import React, { useState, useEffect } from "react";

const TextChange = () => {
  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (isFinished) return; // Stop if animation is finished

    const intervalId = setInterval(() => {
      setCurrentText("Hi, I am Anam".substring(0, endValue));

      setEndValue((prev) => prev + 1);

      // Stop once the text is fully typed
      if (endValue >= "Hi, I am Anam".length) {
        setIsFinished(true);
      }
    }, 150);

    return () => clearInterval(intervalId); // Cleanup interval
  }, [endValue, isFinished]);

  return <div className="transition ease duration-300">{currentText}</div>;
};

export default TextChange;
