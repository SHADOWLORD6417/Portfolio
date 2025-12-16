import React, { useEffect, useState } from "react";

const ScrollToTopArrow: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show arrow if scrolled below 1 viewport height (adjust as needed)
      setShow(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return show ? (
    <button
      onClick={scrollToTop}
      className="fixed right-8 bottom-8 z-[1000] bg-white dark:bg-black rounded-full shadow-lg p-3 border-none cursor-pointer transition-colors"
      aria-label="Scroll to top"
    >
      <svg
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-black dark:text-white"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  ) : null;
};

export default ScrollToTopArrow;