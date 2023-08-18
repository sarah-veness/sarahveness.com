import { useState, useEffect, useRef } from 'react';

interface TypewriterProps {
  text: string;
  delay: number;
}

const Typewriter = ({ text, delay }: TypewriterProps) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const typewriterRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    const container = typewriterRef.current?.parentElement; // Get the container element

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);

        // Scroll the container to keep the bottom visible
        if (container) {
          container.scrollTop = container.scrollHeight;
        }
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <pre ref={typewriterRef}>{currentText}</pre>;
};

export default Typewriter;
