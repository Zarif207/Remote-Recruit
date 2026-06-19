import { motion } from "framer-motion";
import HeroBg from "../../assets/images/HERO.png";

const Hero = () => (
  <section
    className="relative w-full overflow-hidden
               min-h-[480px] sm:min-h-[560px] md:min-h-[640px] lg:min-h-[760px] xl:h-[820px]"
    aria-labelledby="hero-heading"
  >
      <img
        src={HeroBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-[center_top]
                   pointer-events-none select-none"
      />

    {/* Decorative circles — tablet+ only */}
    <div
      aria-hidden="true"
      className="hidden md:block absolute right-[8%] top-[22%]
                 w-48 h-48 lg:w-72 lg:h-72 xl:w-[400px] xl:h-[400px]
                 rounded-full border border-white/20 opacity-20"
    />
    <div
      aria-hidden="true"
      className="hidden md:block absolute right-[18%] top-[14%]
                 w-32 h-32 lg:w-48 lg:h-48 xl:w-64 xl:h-64
                 rounded-full border border-white/15 opacity-15"
    />

    {/* Content — pt accounts for fixed navbar */}
    <div
      className="relative z-10 w-full h-full
                 flex flex-col items-center justify-center
                 px-5 sm:px-8 md:px-10 lg:px-12
                 pt-[140px] pb-16
                 sm:pt-[150px] sm:pb-20
                 md:pt-[160px] md:pb-16
                 lg:pt-[140px] lg:pb-20
                 xl:pt-0 xl:pb-0"
    >

      <div className="w-full max-w-[920px] mx-auto text-center xl:-mt-[60px]">

        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 28, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-white font-bold leading-[1.1] tracking-[-0.02em]
                     text-[26px]
                     sm:text-[36px]
                     md:text-[44px]
                     lg:text-[58px]
                     xl:text-[78px] xl:tracking-[-0.03em] xl:leading-[1.05] xl:whitespace-nowrap
                     mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-[36px]
                     w-full break-words"
        >
          RemoteRecruit&rsquo;s Difference
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="text-[rgba(255,255,255,0.82)] font-normal text-center mx-auto
                     text-[13px] leading-[1.65] max-w-[280px]
                     sm:text-[15px] sm:leading-[1.75] sm:max-w-[460px]
                     md:text-[16px] md:leading-[1.8] md:max-w-[600px]
                     lg:text-[18px] lg:leading-[1.8] lg:max-w-[720px]
                     xl:text-[22px] xl:leading-[1.8] xl:max-w-[920px]"
        >
          RemoteRecruit is connecting the world with an easy-to-use platform
          that lets full-time, part-time, and freelance workers showcase their
          talents to businesses that need them. With no paywalls, no fees, and
          no barriers, there&rsquo;s nothing but you, your talents, and the
          next step in your career.
        </motion.p>

      </div>
    </div>
  </section>
);

export default Hero;