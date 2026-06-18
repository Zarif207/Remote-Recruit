import HeroBg from "../../assets/images/HERO.png";

/**
 * Hero
 *
 * Background: HERO.png (existing asset — wave + gradient baked in).
 * Content:    heading + paragraph, centered horizontally, pushed down
 *             below the navbar with enough top padding to match Figma.
 */
const Hero = () => {
  return (
    <section
      className="relative w-full overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* ── Background image ────────────────────────────────────────────
          object-cover  → fills the section without stretching
          object-top    → keeps the blue sky area at the top; wave anchors
                          to the bottom naturally
          pointer-events-none + select-none → purely decorative
      ─────────────────────────────────────────────────────────────── */}
      <img
        src={HeroBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-[center_20%]
                   pointer-events-none select-none"
      />

      {/* ── Decorative circles ──────────────────────────────────────────
          Faint ring circles on the right side — match Figma.
          No fill; border-only at very low opacity so they never compete
          with text readability.
      ─────────────────────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute right-[8%] top-[25%]
                   w-80 h-80 lg:w-[420px] lg:h-[420px]
                   rounded-full border border-white/20 opacity-25"
      />
      <div
        aria-hidden="true"
        className="absolute right-[16%] top-[18%]
                   w-52 h-52 lg:w-72 lg:h-72
                   rounded-full border border-white/15 opacity-20"
      />

      {/* ── Content ─────────────────────────────────────────────────────
          Outer wrapper: full width, horizontal padding mirrors the navbar.
          px-8 lg:px-12 keeps left/right edges aligned with the navbar logo
          and actions above it.

          pt-52 md:pt-56 lg:pt-60
            Navbar is ~90px tall (logo 40px + py-7 ~28px top/bottom).
            We need ~150–180px of extra breathing room below it to match
            the Figma vertical position of the heading.

          pb-56 md:pb-64 lg:pb-72
            Generous bottom padding lets the wave image show fully beneath
            the text without any clipping.
      ─────────────────────────────────────────────────────────────── */}
      <div
        className="relative z-10 w-full
                   px-8 lg:px-12
                   pt-52 md:pt-56 lg:pt-[290px]
                   pb-56 md:pb-64 lg:pb-72"
      >
        {/* ── Inner content cap ───────────────────────────────────────
            max-w-[1200px] from the spec — wider than the previous max-w-3xl
            (~768px) so heading has room and paragraph fills ~900px.
            mx-auto centres within the padded wrapper.
        ─────────────────────────────────────────────────────────────── */}
        <div className="max-w-[1200px] mx-auto text-center">

          {/* ── Heading ─────────────────────────────────────────────────
              text-[48px] sm:text-[60px] lg:text-[72px]
                Explicit pixel sizes guarantee we hit 72 px on desktop
                regardless of the Tailwind scale step rounding.

              leading-[1.1]
                Tight line-height from the spec — the heading should feel
                compact and strong.

              font-bold (700) matches the Figma weight.

              whitespace-nowrap lg:whitespace-nowrap
                Prevents the heading from wrapping to two lines on desktop
                viewport widths. It is allowed to wrap on small screens
                (removed on <lg so it doesn't overflow on tablet/mobile).

              tracking-tight
                Slight negative letter-spacing for a polished display feel.
          ─────────────────────────────────────────────────────────────── */}
          <h1
            id="hero-heading"
            className="text-white font-bold tracking-tight leading-[1.1]
                       text-[48px] sm:text-[60px] lg:text-[68px]
                       lg:whitespace-nowrap
                       mb-8"
          >
            RemoteRecruit&rsquo;s Difference
          </h1>

          {/* ── Paragraph ───────────────────────────────────────────────
              max-w-[900px]
                Spec value. Previously max-w-xl (~560 px) caused 6–8 line
                wrapping; 900 px produces ~4 lines as intended.

              text-white/80
                Slightly dimmed white — matches Figma opacity on the copy.

              text-[17px] lg:text-[18px]
                Slightly larger than default text-base (16 px) to match
                the Figma body copy scale.

              leading-[1.7]
                Spec value — noticeably more open than leading-relaxed (1.625).

              mx-auto + text-center
                Centres the block and the text within it.
          ─────────────────────────────────────────────────────────────── */}
          <p
            className="text-white/80 text-[17px] lg:text-[18px]
                       leading-[1.7] max-w-[920px] mx-auto text-center"
          >
            RemoteRecruit is connecting the world with an easy-to-use platform
            that lets full-time, part-time, and freelance workers showcase their
            talents to businesses that need them. With no paywalls, no fees, and
            no barriers, there&rsquo;s nothing but you, your talents, and the
            next step in your career.
          </p>

        </div>
      </div>
    </section>
  );
};

export default Hero;
