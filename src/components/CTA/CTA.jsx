import { motion } from "framer-motion";
import CTAImg from "../../assets/images/CTA.png";
import { FaArrowRight } from "react-icons/fa";

const CTA = () => (
  <section className="relative w-full overflow-hidden">
    <div className="relative w-full">

      {/* Background image */}
      <motion.img
        src={CTAImg}
        alt="RemoteRecruit dashboard"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="block w-full h-auto select-none object-contain"
        draggable={false}
      />

      {/* Text overlay */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
        className="px-4 py-10 text-center
                   sm:px-[5vw]
                   lg:absolute lg:right-[18%] lg:top-1/2 lg:-translate-y-1/2
                   lg:w-[38%] lg:max-w-[440px] lg:px-0 lg:py-0 lg:text-left"
      >
        <p className="text-[#1E3E85] text-base font-semibold mb-3">
          Are you ready?
        </p>

        <h2 className="text-[#11142D] font-normal
                       text-[28px] sm:text-[36px] lg:text-[60px]
                       leading-[1.05] tracking-[-0.02em]">
          Help is only a few clicks away!
        </h2>

        <p className="text-[#6B7088] text-[16px] sm:text-[18px] lg:text-[20px]
                      leading-[1.8] mt-5 lg:mt-7">
          Click below to get set up super quickly and find help now!
        </p>

        <button
          type="button"
          className="mt-7 lg:mt-9 inline-flex items-center gap-4
                     bg-[#C4EDFF] text-[#1B3B66]
                     rounded-full pl-2 pr-8 py-2
                     text-base font-semibold
                     hover:brightness-95 transition-all duration-200 cursor-pointer
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B3B66]"
        >
          <span className="w-11 h-11 rounded-full bg-[#51B4DA]
                           flex items-center justify-center shrink-0">
            <FaArrowRight className="text-white text-sm" />
          </span>
          Get Started
        </button>
      </motion.div>
    </div>
  </section>
);

export default CTA;
