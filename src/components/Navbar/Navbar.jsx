import { useState, useEffect, useRef } from "react";
import Container from "../common/Container";

/**
 * Navbar
 * – Desktop: logo left, Sign In link + Sign Up pill button right
 * – Mobile:  logo left, hamburger right → slide-down drawer with same links
 * – Positioned absolute over the Hero (z-50) so the hero fills the full
 *   viewport without a gap at the top.
 */
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const drawerRef = useRef(null);

  // Close drawer on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // Close drawer on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  const navLinks = (
    <>
      <a
        href="#signin"
        className="text-white/90 font-medium hover:text-white transition-colors duration-200"
        onClick={() => setMenuOpen(false)}
      >
        Sign In
      </a>
      <a
        href="#signup"
        className="inline-block bg-sky-400 hover:bg-sky-300 text-white font-semibold px-6 py-2.5 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        onClick={() => setMenuOpen(false)}
      >
        Sign Up
      </a>
    </>
  );

  return (
    <header className="absolute top-0 left-0 w-full z-50" ref={drawerRef}>
      <Container>
        <nav
          className="flex items-center justify-between py-5 md:py-7"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="/"
            className="text-white text-2xl md:text-3xl font-bold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
            aria-label="RemoteRecruit home"
          >
            RemoteRecruit
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7" role="list">
            {navLinks}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </nav>
      </Container>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        role="region"
        aria-label="Mobile navigation"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Container>
          <div className="flex flex-col gap-4 pb-6 pt-2">
            {navLinks}
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Navbar;
