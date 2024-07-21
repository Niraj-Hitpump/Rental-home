import React, { useState, useEffect, useRef } from 'react';

const FlashingText = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentClassIndex, setCurrentClassIndex] = useState(0);
  const typingIntervalRef = useRef(null);
  const clearingTimeoutRef = useRef(null);

  useEffect(() => {
    const classes = ['Lower class', 'Middle class', 'High class'];
    let charIndex = 0;
    let currentText = '';

    const typeText = () => {
      currentText += classes[currentClassIndex][charIndex];
      setDisplayText(currentText);
      charIndex += 1;

      if (charIndex >= classes[currentClassIndex].length) {
        clearInterval(typingIntervalRef.current);
        clearTimeout(clearingTimeoutRef.current);
        clearingTimeoutRef.current = setTimeout(() => {
          setDisplayText('');
          currentText = '';
          setCurrentClassIndex((prev) => (prev + 1) % classes.length);
          charIndex = 0;
          typingIntervalRef.current = setInterval(typeText, 100);
        }, 2000); // Delay before switching to the next word
      }
    };

    typingIntervalRef.current = setInterval(typeText, 100);

    return () => {
      if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
      if (clearingTimeoutRef.current) clearTimeout(clearingTimeoutRef.current);
    };
  }, [currentClassIndex]);

  return (
    <div className="flex h-16 text-2xl md:text-4xl mt-3">
      <p className="mb-0 text-center font-medium text-black">
        {displayText}
      </p>
    </div>
  );
};

export default FlashingText;
