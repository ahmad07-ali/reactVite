import React, { useState, useEffect } from "react";
import { FiChevronUp } from "react-icons/fi";

const ScrollUp = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollPercent(scrolled);
      setShowScroll(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showScroll && (
      <div
        onClick={scrollTop}
        className="fixed bottom-[50px] right-[10px] cursor-pointer z-50"
      >
        <div
          className="relative w-[20px] h-[20px] flex items-center justify-center rounded-full bg-primary text-danger shadow-2xl hover:scale-105 transition-all duration-300"
        >
          <svg
            className="absolute top-100 right-0 w-[40px] h-[40px] transform -rotate-90"
            viewBox="0 0 36 36"
          >
            <path
              className="text-danger-foreground"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              strokeDasharray="100"
              strokeDashoffset={100 - scrollPercent}
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <FiChevronUp className="w-[20px] h-[20px] z-[10]" />
        </div>
      </div>
    )
  );
};

export default ScrollUp;
