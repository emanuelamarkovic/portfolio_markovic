import React from "react";
import { motion } from "framer-motion";

const quote = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      steggerChildren: 0.08,
    },
  },
};

const singleWord = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
};

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = "",
}) => {
  const capitalizeWords = (str: string) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const capitalizedText = capitalizeWords(text);

  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden">
      <motion.h1
        className={`inline-block w-full text-dark font-bold text-7xl ${className}`}
        style={{ letterSpacing: "-0.1em" }}
        variants={quote}
        // initial="initial"
        // animate="animate"
      >
        {capitalizedText.split("").map((char, index) => (
          <motion.span
            key={char + "-" + index}
            className="inline-block"
            variants={singleWord}
            initial="initial"
            animate="animate"
          >
            {char}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
