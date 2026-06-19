import { useState, useEffect, useRef } from "react";
import Logo from "../../assets/images/Logo.png";
import { scrollToTop } from "../../utils/scrollToTop";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onOutsideClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", onOutsideClick);
    return () => document.removeEventListener("mousedown", onOutsideClick);
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      ref={navRef}
      className={`sticky top-0 left-0 w-full z-[9999] transition-shadow duration-300 ${
        scrolled ? "shadow-[0_4px_24px_rgba(0,0,0,0.18)] bg-[#0d1f4e]/95 backdrop-blur-sm" : ""
      }`}
    >
      <div className="w-full pl-4 pr-4 sm:pl-8 sm:pr-8 lg:pl-12 lg:pr-12">
        <nav
          className="flex items-center justify-between pt-8 pb-4"
          aria-label="Main navigation"
        >
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="RemoteRecruit home — scroll to top"
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded shrink-0 cursor-pointer bg-transparent border-0 p-0"
          >
            <img
              src={Logo}
              alt="RemoteRecruit logo"
              className="w-[130px] sm:w-[150px] h-auto object-contain"
            />
          </button>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="#signin"
              className="text-white font-medium hover:opacity-75
                         transition-opacity duration-200 text-[16px]
                         focus-visible:outline-none focus-visible:ring-2
                         focus-visible:ring-white rounded px-1"
            >
              Sign In
            </a>

            <a
              href="#signup"
              className="flex items-center justify-center
                         w-[106px] h-[52px] rounded-[18px]
                         bg-[#63C7E9] hover:brightness-110 hover:scale-[1.03]
                         active:scale-95 text-white text-[16px] font-medium
                         transition-all duration-200
                         focus-visible:outline-none focus-visible:ring-2
                         focus-visible:ring-white"
            >
              Sign Up
            </a>
          </div>

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
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center
                          ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300
                          ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center
                          ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
            />
          </button>
        </nav>
      </div>

      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 top-[72px] z-40 bg-black/40"
          aria-hidden="true"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`md:hidden fixed top-[72px] left-0 right-0 z-50
                    bg-[#0d1f4e]/98 backdrop-blur-sm
                    transition-all duration-300 ease-in-out
                    ${menuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          <a
            href="#signin"
            className="text-white text-[16px] font-medium hover:opacity-75
                       transition-opacity duration-200
                       focus-visible:outline-none focus-visible:ring-2
                       focus-visible:ring-white rounded px-1 py-1"
            onClick={() => setMenuOpen(false)}
          >
            Sign In
          </a>
          <a
            href="#signup"
            className="flex items-center justify-center
                       w-[106px] h-[44px] rounded-[18px]
                       bg-[#63C7E9] text-white text-[16px] font-medium
                       transition-all duration-200 hover:brightness-110
                       focus-visible:outline-none focus-visible:ring-2
                       focus-visible:ring-white"
            onClick={() => setMenuOpen(false)}
          >
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
