import { motion } from "framer-motion";
import ShowcaseImg from "../../assets/images/showcase.png";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut", delay } },
});

const FeatureShowcase = () => (
  <section className="w-full bg-white py-[60px] md:py-[80px] lg:py-[100px] overflow-hidden">
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-12 lg:gap-[80px]">

        {/* LEFT — text */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full lg:w-[480px] lg:shrink-0 text-center lg:text-left"
        >
          <span className="inline-flex items-center px-5 py-2 rounded-full
                           bg-[#CFEFFF] text-[#1B3B66] text-[13px] sm:text-[14px] font-bold
                           mb-5 sm:mb-6">
            Custom Profile
          </span>

          <h2 className="text-[#11142D] font-normal leading-[1.15] tracking-[-0.01em]
                         text-[28px] sm:text-[36px] md:text-[42px] lg:text-[52px]">
            Showcase Your Talents
          </h2>

          <p className="mt-5 sm:mt-6 text-[#6B7088] font-normal leading-[1.8]
                        text-[15px] sm:text-[16px] lg:text-[17px]
                        max-w-full lg:max-w-[460px] mx-auto lg:mx-0">
            Personalize your profile with everything that makes you unique.
            Add an introductory video and other media for a personal touch
            that stands out to employers and candidates.
          </p>
        </motion.div>

        {/* RIGHT — illustration */}
        <motion.div
          variants={fadeUp(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full flex justify-center lg:justify-end"
        >
          <img src={ShowcaseImg} alt="Custom profile showcase"
               className="w-full max-w-[340px] sm:max-w-[480px] md:max-w-[560px] lg:max-w-[620px]
                          h-auto object-contain select-none"
               draggable={false} />
        </motion.div>

      </div>
    </div>
  </section>
);

export default FeatureShowcase;
