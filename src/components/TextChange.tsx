"use client";
import React, { useState, useEffect } from "react";

const TextChange = () => {
  const texts = ["Hi, I am Anam"];
  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(0);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false); 

  useEffect(() => {
    
    if (isFinished) return;

    const intervalId = setInterval(() => {
      setCurrentText(texts[index].substring(0, endValue));

      if (isForward) {
        setEndValue((prev) => prev + 1);
      }

      if (endValue >= texts[index].length) {
        setIsFinished(true); 
      }
    }, 150);

    return () => clearInterval(intervalId); 
  }, [endValue, isForward, index, texts, isFinished]); 

  return <div className="transition ease duration-300">{currentText}</div>;
};

export default TextChange;
