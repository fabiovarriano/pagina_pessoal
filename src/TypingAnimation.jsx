import React, { useEffect, useState } from 'react';
import './TypingAnimation.css';

const TypingAnimation = ({ texts, speed }) => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    let currentText = texts[index % texts.length];
    const interval = setInterval(() => {
      if (i < currentText.length) {
        setDisplayText((prevText) => prevText + currentText.charAt(i));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setDisplayText('');
          setIndex((prevIndex) => prevIndex + 1);
        }, 1000); // Delay before starting the next iteration
      }
    }, speed);

    return () => clearInterval(interval);
  }, [texts, index, speed]);

  return (
    <div className="typing-animation">
      {displayText}
      <span className="cursor"></span>
    </div>
  );
};

export default TypingAnimation;
