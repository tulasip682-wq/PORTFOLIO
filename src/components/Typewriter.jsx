import React, { useState, useEffect } from 'react';

const Typewriter = ({ words, typingSpeed = 100, deletingSpeed = 50, delayBetweenWords = 1500 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentFullWord = words[currentWordIndex];

    if (isDeleting) {
      // Deleting text
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
      }, deletingSpeed);
    } else {
      // Typing text
      timer = setTimeout(() => {
        setCurrentText((prev) => currentFullWord.slice(0, prev.length + 1));
      }, typingSpeed);
    }

    // If typing finished, wait and start deleting
    if (!isDeleting && currentText === currentFullWord) {
      timer = setTimeout(() => setIsDeleting(true), delayBetweenWords);
    } 
    // If deleting finished, go to the next word
    else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords]);

  return (
    <span className="relative">
      <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
        {currentText}
      </span>
      <span className="ml-1 w-1 h-5 sm:h-7 bg-blue-400 inline-block animate-ping absolute bottom-1.5" />
    </span>
  );
};

export default Typewriter;
