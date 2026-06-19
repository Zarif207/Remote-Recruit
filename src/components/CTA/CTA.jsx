import { motion } from "framer-motion";
import CTAImg from "../../assets/images/CTA.png";
import { FaArrowRight } from "react-icons/fa";

/*
  Three distinct layouts:
  ─────────────────────────────────────────────────────────────
  Mobile  (<768px):       stacked — text then image, centred
  Tablet  (768–1279px):   two-column side-by-side, image | text
  Desktop (≥1280px):      original full-width with text overlaid
*/
const CTA = () => (
  <section className="w-full overflow-hidden">

    {/* ── MOBILE only (<768px) — stacked ──────────────────────── */}
    <div className="block md:hidden bg-[#EEF0FF] px-4 sm:px-6 py-12 sm:py-14">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-120 mx-auto text-center"
      >
        <p className="text-[#1E3E85] text-[13px] sm:text-[14px] font-semibold mb-2">
          Are you ready?
        </p>
        <h2 className="text-[#11142D] font-normal leading-[1.15] tracking-[-0.02em]
                       text-[24px] sm:text-[32px] mb-4">
          Help is only a few clicks away!
        </h2>
        <p className="text-[#6B7088] text-[13px] sm:text-[14px] leading-[1.75] mb-6">
          Click below to get set up super quickly and find help now!
        </p>
        <button type="button"
                className="inline-flex items-center gap-3 mx-auto
                           bg-[#C4EDFF] text-[#1B3B66] rounded-full
                           pl-2 pr-6 py-2 text-[13px] sm:text-[14px] font-semibold
                           hover:brightness-95 transition-all duration-200">
          <span className="w-9 h-9 rounded-full bg-[#51B4DA]
                           flex items-center justify-center shrink-0">
            <FaArrowRight className="text-white text-[11px]" />
          </span>
          Get Started
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        className="mt-8 overflow-hidden rounded-2xl max-w-120 mx-auto
                   shadow-[0_8px_40px_rgba(58,77,163,0.15)]"
      >
        <img src={CTAImg} alt="RemoteRecruit dashboard"
             className="w-full h-auto object-cover object-top-left select-none"
             draggable={false} />
      </motion.div>
    </div>

    {/* ── TABLET / SMALL LAPTOP (768px–1279px) — two column side by side ─── */}
    <div className="hidden md:flex xl:hidden bg-[#EEF0FF]
                    items-center gap-8 lg:gap-12
                    px-6 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-20">

      {/* Left — image */}
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-1/2 shrink-0 overflow-hidden rounded-2xl
                   shadow-[0_8px_40px_rgba(58,77,163,0.15)]"
      >
        <img src={CTAImg} alt="RemoteRecruit dashboard"
             className="w-full h-auto object-cover object-top-left select-none"
             draggable={false} />
      </motion.div>

      {/* Right — text */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="w-1/2 text-left"
      >
        <p className="text-[#1E3E85] text-[14px] lg:text-[15px] font-semibold mb-3">
          Are you ready?
        </p>
        <h2 className="text-[#11142D] font-normal leading-[1.1] tracking-[-0.02em]
                       text-[32px] md:text-[36px] lg:text-[46px] mb-4">
          Help is only a few clicks away!
        </h2>
        <p className="text-[#6B7088] text-[15px] lg:text-[17px] leading-[1.75] mb-6">
          Click below to get set up super quickly and find help now!
        </p>
        <button type="button"
                className="inline-flex items-center gap-3
                           bg-[#C4EDFF] text-[#1B3B66] rounded-full
                           pl-2 pr-7 py-2 text-[15px] font-semibold
                           hover:brightness-95 transition-all duration-200">
          <span className="w-10 h-10 rounded-full bg-[#51B4DA]
                           flex items-center justify-center shrink-0">
            <FaArrowRight className="text-white text-[12px]" />
          </span>
          Get Started
        </button>
      </motion.div>
    </div>

    {/* ── DESKTOP (≥1280px) — original full-width overlaid ────── */}
    <div className="hidden xl:block relative w-full">
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
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
        className="absolute right-[18%] top-1/2 -translate-y-1/2
                   w-[38%] max-w-110 text-left"
      >
        <p className="text-[#1E3E85] text-base font-semibold mb-3">Are you ready?</p>
        <h2 className="text-[#11142D] font-normal text-[44px] 2xl:text-[60px]
                       leading-[1.05] tracking-[-0.02em]">
          Help is only a few clicks away!
        </h2>
        <p className="text-[#6B7088] text-[17px] 2xl:text-[20px] leading-[1.8] mt-7">
          Click below to get set up super quickly and find help now!
        </p>
        <button type="button"
                className="mt-9 inline-flex items-center gap-4
                           bg-[#C4EDFF] text-[#1B3B66] rounded-full
                           pl-2 pr-8 py-2 text-base font-semibold
                           hover:brightness-95 transition-all duration-200 cursor-pointer">
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