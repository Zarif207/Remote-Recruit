import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../assets/images/Logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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
      className={`
        fixed top-0 left-0 w-full z-[9999]
        transition-all duration-300 ease-in-out
        ${scrolled
          ? "bg-white shadow-md"
          : "bg-transparent"
        }
      `}
    >
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <nav
          className={`flex items-center justify-between transition-all duration-300 ease-in-out
                      ${scrolled ? "py-3" : "py-5 sm:py-6"}`}
          aria-label="Main navigation"
        >

          {/* Logo */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="RemoteRecruit home"
            className="cursor-pointer bg-transparent border-0 p-0 shrink-0
                       focus-visible:outline-none focus-visible:ring-2
                       focus-visible:ring-white rounded"
          >
            <img
              src={Logo}
              alt="RemoteRecruit logo"
              className={`h-auto object-contain transition-all duration-300 ease-in-out
                          ${scrolled ? "w-[120px]" : "w-[130px] sm:w-[145px]"}`}
            />
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#signin"
              className={`font-medium text-[16px] hover:opacity-75
                          transition-all duration-300 ease-in-out
                          focus-visible:outline-none focus-visible:ring-2
                          focus-visible:ring-white rounded px-1
                          ${scrolled ? "text-[#11142D]" : "text-white"}`}
            >
              Sign In
            </a>
            <a
              href="#signup"
              className={`flex items-center justify-center
                          w-[106px] rounded-[18px]
                          bg-[#63C7E9] hover:brightness-110 hover:scale-[1.03]
                          active:scale-95 text-white text-[16px] font-medium
                          transition-all duration-300 ease-in-out
                          focus-visible:outline-none focus-visible:ring-2
                          focus-visible:ring-white
                          ${scrolled ? "h-[40px]" : "h-[48px] sm:h-[52px]"}`}
            >
              Sign Up
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center
                       w-10 h-10 gap-[5px]
                       focus-visible:outline-none focus-visible:ring-2
                       focus-visible:ring-white rounded"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className={`block w-6 h-0.5 transition-all duration-300 origin-center
                              ${scrolled ? "bg-[#11142D]" : "bg-white"}
                              ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-6 h-0.5 transition-all duration-300
                              ${scrolled ? "bg-[#11142D]" : "bg-white"}
                              ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 origin-center
                              ${scrolled ? "bg-[#11142D]" : "bg-white"}
                              ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </nav>
      </div>

      {/* Mobile backdrop */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 top-[60px] z-40 bg-black/40"
            aria-hidden="true"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="drawer"
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden fixed top-[60px] left-0 right-0 z-50
                       bg-[#0d1f4e]/98 backdrop-blur-sm"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              <a
                href="#signin"
                className="text-white text-[16px] font-medium hover:opacity-75
                           transition-opacity duration-200 rounded px-1 py-1"
                onClick={() => setMenuOpen(false)}
              >
                Sign In
              </a>
              <a
                href="#signup"
                className="inline-flex items-center justify-center
                           w-[106px] h-[44px] rounded-[18px]
                           bg-[#63C7E9] text-white text-[16px] font-medium
                           transition-all duration-200 hover:brightness-110"
                onClick={() => setMenuOpen(false)}
              >
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
