import Container from "../common/Container";

/**
 * Hero
 * Full-viewport section with a deep-blue gradient background.
 * Decorative blurred circles give the section visual depth without
 * adding external assets.
 *
 * Headline: "RemoteRecruit's Difference"
 * Sub-copy, badge, and CTA buttons follow a modern SaaS pattern.
 */
const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1A40A8]"
      aria-labelledby="hero-heading"
    >
      {/* ── Background gradient overlay ── */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#1A3FA6] via-[#204CBA] to-[#2B5CE6]"
        aria-hidden="true"
      />

      {/* ── Decorative blurred blobs ── */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full bg-white/5 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 -right-24 w-[420px] h-[420px] rounded-full bg-sky-400/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-blue-600/10 blur-[80px]"
      />

      {/* ── Content ── */}
      <Container className="relative z-10">
        <div className="text-center max-w-4xl mx-auto px-2">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-sky-300 animate-pulse" aria-hidden="true" />
            <span className="text-sky-200 text-sm font-medium tracking-wide">
              Hiring, Reimagined for Remote Teams
            </span>
          </div>

          {/* Main heading */}
          <h1
            id="hero-heading"
            className="text-white font-extrabold leading-tight tracking-tight
                       text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            RemoteRecruit&rsquo;s{" "}
            <span className="text-sky-300">Difference</span>
          </h1>

          {/* Sub-heading */}
          <p className="mt-6 text-white/70 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            The all-in-one platform that connects top global talent with
            forward-thinking remote-first companies — faster, smarter, and
            without the overhead.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#signup"
              className="w-full sm:w-auto inline-flex items-center justify-center
                         bg-sky-400 hover:bg-sky-300 text-white font-semibold
                         px-8 py-3.5 rounded-full text-base
                         transition-all duration-200 hover:scale-105 active:scale-95
                         shadow-lg shadow-sky-500/30
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Get Started Free
            </a>
            <a
              href="#features"
              className="w-full sm:w-auto inline-flex items-center justify-center
                         bg-white/10 hover:bg-white/20 backdrop-blur-sm
                         border border-white/25 text-white font-semibold
                         px-8 py-3.5 rounded-full text-base
                         transition-all duration-200 hover:scale-105 active:scale-95
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              See How It Works
            </a>
          </div>

          {/* Social proof */}
          <p className="mt-8 text-white/40 text-sm">
            Trusted by <span className="text-white/70 font-medium">2,400+</span> remote teams worldwide
          </p>
        </div>
      </Container>

      {/* ── Bottom fade into white/next section ── */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white/5 to-transparent"
      />
    </section>
  );
};

export default Hero;
