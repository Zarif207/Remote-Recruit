import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronUp } from "react-icons/fa";

/**
 * ScrollTop
 * Floating "back to top" button that appears once the user
 * scrolls more than 400px. Smoothly scrolls to the top on click.
 * Visible on all screen sizes, positioned bottom-right.
 */
const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-top"
          initial={{ opacity: 0, scale: 0.7, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 16 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={handleClick}
          aria-label="Scroll to top"
          type="button"
          className="fixed bottom-6 right-6 z-[9998]
                     w-11 h-11 rounded-full
                     bg-[#63C7E9] text-white
                     flex items-center justify-center
                     shadow-[0_4px_20px_rgba(99,199,233,0.5)]
                     hover:brightness-110 hover:scale-110
                     active:scale-95
                     transition-all duration-200
                     focus-visible:outline-none focus-visible:ring-2
                     focus-visible:ring-white focus-visible:ring-offset-2"
        >
          <FaChevronUp className="text-[14px]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollTop;
