import { useState, useEffect, useRef } from "react";
import Logo from "../../assets/images/Logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

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

  return (
    <header ref={navRef} className="absolute top-0 left-0 w-full z-50">
      {/*
        Using a full-bleed inner div instead of the shared Container so we can
        control horizontal padding independently from the rest of the page.
        px-8 lg:px-12 gives the tighter edge-to-content gap visible in Figma
        while still being responsive.
      */}
      {/* max-w-[1440px] caps the navbar rail; px-12 = 48 px on desktop */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <nav
          className="flex items-center justify-between pt-8 pb-4"
          aria-label="Main navigation"
        >
          {/* ── Logo ──────────────────────────────────────────────────────
              w-[200px] puts the logo at ~200 px wide on desktop.
              h-auto preserves the original aspect ratio — no cropping.
              Previously h-10 (40 px tall) made it appear tiny.
          ─────────────────────────────────────────────────────────────── */}
          <a
            href="/"
            aria-label="RemoteRecruit home"
            className="mt-[15px] ml-[20px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
          >
            <img
              src={Logo}
              alt="RemoteRecruit logo"
              className="w-[145px] h-auto object-contain"
            />
          </a>

          {/* ── Desktop actions ───────────────────────────────────────────
              gap-5 keeps Sign In and Sign Up visually close together on
              the right side without too much separation.
          ─────────────────────────────────────────────────────────────── */}
          <div className="hidden md:flex items-center gap-5">
            {/*
              Sign In: text-base (16 px) to balance the larger logo.
              font-medium matches the Figma weight.
            */}
            <a
              href="#signin"
              className="text-white text-base font-medium hover:opacity-80
                         transition-opacity duration-200
                         focus-visible:outline-none focus-visible:ring-2
                         focus-visible:ring-white rounded px-1"
            >
              Sign In
            </a>

            {/*
              Sign Up button:
              - bg-[#63C7E9]  → exact teal from the spec
              - w-[100px] h-[48px] → spec dimensions
              - rounded-full  → full pill
              - flex items-center justify-center → centres text inside fixed dimensions
              - font-medium (500) matches Figma weight
              - hover:brightness-110 + hover:scale-105 = lift interaction
            */}
            <a
              href="#signup"
              className="flex items-center justify-center
                         w-[100px] h-[48px] rounded-full
                         bg-[#63C7E9] hover:brightness-110 hover:scale-105 active:scale-95
                         text-white text-base font-medium
                         transition-all duration-200
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Sign Up
            </a>
          </div>

          {/* ── Mobile hamburger ──────────────────────────────────────── */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px]
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
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

      {/* ── Mobile slide-down drawer ─────────────────────────────────── */}
      <div
        id="mobile-menu"
        role="region"
        aria-label="Mobile navigation"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
                    ${menuOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-8 pb-6 flex flex-col gap-4">
          <a
            href="#signin"
            className="text-white text-sm font-medium hover:opacity-80 transition-opacity duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Sign In
          </a>
          <a
            href="#signup"
            className="flex items-center justify-center
                       w-[100px] h-[44px] rounded-full
                       bg-[#63C7E9] text-white text-sm font-medium
                       transition-all duration-200 hover:brightness-110"
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
