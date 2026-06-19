import { motion } from "framer-motion";
import HeroBg from "../../assets/images/HERO.png";

const Hero = () => (
  <section
    className="relative w-full overflow-hidden
               min-h-[420px] sm:min-h-[520px] md:h-[820px]"
    aria-labelledby="hero-heading"
  >
    <img src={HeroBg} alt="" aria-hidden="true"
         className="absolute inset-0 w-full h-full
                    object-cover object-[center_top]
                    pointer-events-none select-none" />

    {/* Decorative circles — hidden on mobile */}
    <div aria-hidden="true"
         className="hidden md:block absolute right-[8%] top-[28%]
                    w-80 h-80 lg:w-[400px] lg:h-[400px]
                    rounded-full border border-white/20 opacity-20" />
    <div aria-hidden="true"
         className="hidden md:block absolute right-[17%] top-[20%]
                    w-56 h-56 lg:w-64 lg:h-64
                    rounded-full border border-white/15 opacity-15" />

    <div className="relative z-10 w-full h-full
                    flex flex-col items-center justify-center
                    px-4 sm:px-6
                    pt-20 pb-14 sm:pt-24 sm:pb-16 md:pt-0 md:pb-0">

      <div className="w-full max-w-[960px] mx-auto text-center md:-mt-[60px]">

        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-white font-bold
                     text-[28px] sm:text-[40px] md:text-[78px]
                     leading-[1.1] md:leading-[1.05]
                     tracking-[-0.02em] md:tracking-[-0.03em]
                     md:whitespace-nowrap
                     mb-4 sm:mb-5 md:mb-[36px]"
        >
          RemoteRecruit&rsquo;s Difference
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="text-[rgba(255,255,255,0.82)]
                     text-[15px] sm:text-[17px] md:text-[22px]
                     font-normal leading-[1.7] md:leading-[1.8]
                     max-w-[340px] sm:max-w-[560px] md:max-w-[920px]
                     mx-auto text-center"
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
