import HeroBg from "../../assets/images/HERO.png";

const Hero = () => {
  return (
    /*
      Section
      ───────────────────────────────────────────────────────────────────
      h-[820px]       — exact hero height from spec (desktop)
      On smaller screens we let it scale down naturally with min-h so
      content is never clipped.
    */
    <section
      className="relative w-full overflow-hidden
                 h-auto min-h-[500px] md:h-[820px]"
      aria-labelledby="hero-heading"
    >

      {/*
        Background image
        ─────────────────────────────────────────────────────────────────
        absolute inset-0 w-full h-full → fills the section completely
        object-cover                   → scale to cover, no distortion
        object-[center_top]            → anchored at centre-top so the
                                         solid blue fills the top and
                                         the wave sits at the bottom
      */}
      <img
        src={HeroBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full
                   object-cover object-[center_top]
                   pointer-events-none select-none"
      />

      {/* Decorative faint circles — right side, matching Figma */}
      <div
        aria-hidden="true"
        className="absolute right-[8%] top-[28%]
                   w-72 h-72 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]
                   rounded-full border border-white/20 opacity-20"
      />
      <div
        aria-hidden="true"
        className="absolute right-[17%] top-[20%]
                   w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64
                   rounded-full border border-white/15 opacity-15"
      />

      {/*
        Content wrapper
        ─────────────────────────────────────────────────────────────────
        We position the content block absolutely so it is completely
        independent of the section padding and sits exactly where the
        Figma places it — vertically centred in the blue area above
        the wave (roughly 38–55% from top on an 820px section).

        On desktop (≥768px) we use absolute positioning pinned to the
        centre with a negative translate to achieve true centring, then
        nudge it up slightly with -translate-y-[8%] to account for the
        wave eating the bottom portion of the section.

        On mobile we fall back to normal flow with padding.
      */}
      <div
        className="
          relative z-10 w-full h-full
          flex flex-col items-center justify-center
          px-4 sm:px-8
          pt-28 pb-20
          md:pt-0 md:pb-0
        "
      >
        {/*
          Inner content cap
          ───────────────────────────────────────────────────────────────
          max-w-[960px] gives enough room for the 78px heading to sit on
          one line on a full 1440px desktop, and for the paragraph to
          render at max-w-[920px] inside it.
          mx-auto centres it.
          On the 820px tall section the wave occupies ~35% of the bottom,
          so the useful blue canvas is ~530px. We nudge the whole block
          up slightly with -mt-[40px] on desktop so it sits in the
          visual centre of the blue area.
        */}
        <div className="w-full max-w-[960px] mx-auto text-center md:-mt-[60px]">

          {/*
            Headline
            ─────────────────────────────────────────────────────────────
            Desktop spec:
              font-size    : 78px
              font-weight  : 700
              line-height  : 1.05
              letter-spacing: -0.03em
              color        : white
              single line  : whitespace-nowrap on md+

            Mobile: scale down gracefully
              text-[36px] sm:text-[48px] md:text-[78px]
          */}
          <h1
            id="hero-heading"
            className="text-white font-bold
                       text-[36px] sm:text-[48px] md:text-[78px]
                       leading-[1.05] tracking-[-0.03em]
                       md:whitespace-nowrap
                       mb-[36px]"
          >
            RemoteRecruit&rsquo;s Difference
          </h1>

          {/*
            Paragraph
            ─────────────────────────────────────────────────────────────
            Desktop spec:
              font-size  : 22px
              font-weight: 400
              line-height: 1.8
              color      : rgba(255,255,255,0.82)
              max-width  : 920px
              text-align : center

            At 22px font-size with max-w-[920px] and the given text, the
            copy breaks into exactly 4 lines on a 1440px desktop frame:

              Line 1: RemoteRecruit is connecting the world with an easy-to-use platform that lets
              Line 2: full-time, part-time, and freelance workers showcase their talents to
              Line 3: businesses that need them. With no paywalls, no fees, and no barriers, there's
              Line 4: nothing but you, your talents, and the next step in your career.

            On smaller screens max-w-[920px] naturally compresses and the
            text reflows — no overflow issues.
          */}
          <p
            className="text-[rgba(255,255,255,0.82)]
                       text-[18px] md:text-[22px]
                       font-normal leading-[1.8]
                       max-w-[920px] mx-auto text-center"
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
