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
        Desktop nav rail
        ─────────────────────────────────────────────────────────────────
        pl-12  = 48px left  (logo 48px from left edge — spec)
        pr-12  = 48px right (right items 48px from right edge — spec)
        pt-8   = 32px top   (navbar 32px from top — spec)
        pb-4   keeps the row a natural height without extra bottom gap
      */}
      <div className="w-full pl-4 pr-4 sm:pl-8 sm:pr-8 lg:pl-12 lg:pr-12">
        <nav
          className="flex items-center justify-between pt-8 pb-4"
          aria-label="Main navigation"
        >

          {/* ── Logo ────────────────────────────────────────────────────
              w-[150px] — spec value (was 145px, reduced to 150px per spec)
              h-auto    — preserves aspect ratio, no distortion
          ──────────────────────────────────────────────────────────── */}
          <a
            href="/"
            aria-label="RemoteRecruit home"
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded shrink-0"
          >
            <img
              src={Logo}
              alt="RemoteRecruit logo"
              className="w-[150px] h-auto object-contain"
            />
          </a>

          {/* ── Desktop: Sign In + Sign Up ────────────────────────────
              gap-4 gives tight spacing between the two items matching
              the Figma — they sit close together on the right.
          ──────────────────────────────────────────────────────────── */}
          <div className="hidden md:flex items-center gap-4">

            {/*
              Sign In
              · text-[16px] font-medium — spec
              · No background, plain white text link
              · hover:opacity-75 = subtle interaction
            */}
            <a
              href="#signin"
              className="text-white font-medium hover:opacity-75
                         transition-opacity duration-200 text-[16px]
                         focus-visible:outline-none focus-visible:ring-2
                         focus-visible:ring-white rounded px-1"
            >
              Sign In
            </a>

            {/*
              Sign Up button
              · w-[106px] h-[52px]    — exact spec dimensions
              · rounded-[18px]        — spec border-radius (not fully pill)
              · bg-[#63C7E9]          — teal from Figma
              · text-[16px] font-medium — spec
              · flex + center         — text centred inside fixed box
            */}
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

          {/* ── Mobile hamburger ─────────────────────────────────────── */}
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
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center
                              ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300
                              ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center
                              ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </nav>
      </div>

      {/* ── Mobile drawer ────────────────────────────────────────────── */}
      <div
        id="mobile-menu"
        role="region"
        aria-label="Mobile navigation"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
                    ${menuOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-6 pb-6 flex flex-col gap-4">
          <a
            href="#signin"
            className="text-white text-[16px] font-medium hover:opacity-75
                       transition-opacity duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Sign In
          </a>
          <a
            href="#signup"
            className="flex items-center justify-center
                       w-[106px] h-[44px] rounded-[18px]
                       bg-[#63C7E9] text-white text-[16px] font-medium
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
