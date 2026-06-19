import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../assets/images/Logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setMenuOpen(false);
    };
    if (menuOpen) document.addEventListener("mousedown", onOutside);
    return () => document.removeEventListener("mousedown", onOutside);
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-[9999]
                  transition-all duration-300 ease-in-out
                  ${scrolled
                    ? "bg-gradient-to-r from-[#3066A1]/95 to-[#275293]/95 backdrop-blur-md shadow-lg"
                    : "bg-transparent"}`}
    >
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <nav className={`flex items-center justify-between transition-all duration-300
                         ${scrolled ? "py-3" : "py-4 sm:py-5"}`}>

          {/* Logo */}
          <button onClick={scrollToTop}
                  className="cursor-pointer bg-transparent border-0 p-0 shrink-0">
            <img src={Logo} alt="RemoteRecruit"
                 className={`object-contain transition-all duration-300
                             ${scrolled ? "w-[110px] sm:w-[130px]" : "w-[120px] sm:w-[150px]"}`} />
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#signin"
               className="text-white text-[16px] font-medium hover:opacity-80 transition-opacity duration-200">
              Sign In
            </a>
            <a href="#signup"
               className="h-[44px] px-7 rounded-[16px] flex items-center justify-center
                          bg-[#63C7E9] text-white font-semibold
                          hover:brightness-110 transition-all duration-300">
              Sign Up
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className={`w-6 h-[2px] bg-white transition-all duration-300 origin-center
                              ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`w-6 h-[2px] bg-white transition-all duration-300
                              ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`w-6 h-[2px] bg-white transition-all duration-300 origin-center
                              ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </nav>
      </div>

      {/* Mobile backdrop */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div key="bd"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            onClick={() => setMenuOpen(false)} />
        )}
      </AnimatePresence>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div key="menu"
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}
            className="md:hidden fixed top-[60px] left-0 w-full z-50
                       bg-gradient-to-r from-[#3066A1] to-[#275293] backdrop-blur-md">
            <div className="flex flex-col px-6 py-5 gap-4">
              <a href="#signin" onClick={() => setMenuOpen(false)}
                 className="text-white text-[16px] font-medium hover:opacity-75 transition-opacity">
                Sign In
              </a>
              <a href="#signup" onClick={() => setMenuOpen(false)}
                 className="w-[120px] h-[44px] rounded-[16px] bg-[#63C7E9]
                            text-white font-medium flex items-center justify-center
                            hover:brightness-110 transition-all duration-200">
                Sign Up
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
