"use client";

import { useState, useEffect } from "react";

interface TypewriterProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetween?: number;
}

export default function Typewriter({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetween = 1500,
}: TypewriterProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        // Current full text from the array
        const fullText = texts[currentTextIndex];

        // If deleting
        if (isDeleting) {
          setCurrentText(fullText.substring(0, currentText.length - 1));
        } else {
          // If typing
          setCurrentText(fullText.substring(0, currentText.length + 1));
        }

        // If completed typing the full text
        if (!isDeleting && currentText === fullText) {
          // Wait before starting to delete
          setTimeout(() => setIsDeleting(true), delayBetween);
        }
        // If deleted completely
        else if (isDeleting && currentText === "") {
          setIsDeleting(false);
          // Move to the next text
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    currentText,
    currentTextIndex,
    isDeleting,
    texts,
    typingSpeed,
    deletingSpeed,
    delayBetween,
  ]);

  return (
    <span className="inline-block">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
}
