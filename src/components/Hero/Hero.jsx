import { motion } from "framer-motion";
import HeroBg from "../../assets/images/HERO.png";

const Hero = () => (
  <section
    className="relative w-full overflow-hidden
               min-h-[520px] sm:min-h-[600px] md:min-h-[700px] lg:h-[820px]"
    aria-labelledby="hero-heading"
  >
    {/* Background */}
    <img src={HeroBg} alt="" aria-hidden="true"
         className="absolute inset-0 w-full h-full object-cover object-[center_top]
                    pointer-events-none select-none" />

    {/* Decorative circles — tablet+ only */}
    <div aria-hidden="true"
         className="hidden md:block absolute right-[6%] top-[24%]
                    w-64 h-64 lg:w-[400px] lg:h-[400px]
                    rounded-full border border-white/20 opacity-20" />
    <div aria-hidden="true"
         className="hidden md:block absolute right-[15%] top-[16%]
                    w-44 h-44 lg:w-64 lg:h-64
                    rounded-full border border-white/15 opacity-15" />

    {/* Content — pt accounts for fixed navbar (~60px) */}
    <div className="relative z-10 w-full h-full
                    flex flex-col items-center justify-center
                    px-5 sm:px-8 lg:px-12
                    pt-[88px] pb-16
                    sm:pt-[96px] sm:pb-20
                    md:pt-[100px] md:pb-24
                    lg:pt-0 lg:pb-0">

      <div className="w-full max-w-[920px] mx-auto text-center lg:-mt-[60px]">

        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 28, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-white font-bold leading-[1.1] tracking-[-0.02em]
                     text-[26px]
                     sm:text-[38px]
                     md:text-[48px]
                     lg:text-[78px] lg:tracking-[-0.03em] lg:leading-[1.05] lg:whitespace-nowrap
                     mb-4 sm:mb-5 md:mb-6 lg:mb-[36px]
                     w-full break-words"
        >
          RemoteRecruit&rsquo;s Difference
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="text-[rgba(255,255,255,0.82)] font-normal text-center mx-auto
                     text-[13px] leading-[1.65]   max-w-[280px]
                     sm:text-[15px] sm:leading-[1.75] sm:max-w-[460px]
                     md:text-[16px] md:leading-[1.8]  md:max-w-[560px]
                     lg:text-[22px] lg:leading-[1.8]  lg:max-w-[920px]"
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
