import { motion } from "framer-motion";
import ActiveIcon   from "../../assets/images/Active Icon.svg";
import InactiveIcon from "../../assets/images/Active Icon (1).svg";
import PremiumTag   from "../../assets/images/Premium Tag.png";

const freeFeatures = [
  { label: "1 Active Job",                        ok: true  },
  { label: "Basic List Placement",                ok: true  },
  { label: "Unlimited Job Applicants",            ok: false },
  { label: "Invite Anyone to Apply to Your Jobs", ok: false },
];

const premiumFeatures = [
  "Unlimited Job Posts",
  "Instant Job Post Approval",
  "Premium List Placement",
  "Unlimited Job Applicants",
];

const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.15 },
  }),
};

/* Feature row — larger icon, bolder active text */
const FeatureRow = ({ label, ok }) => (
  <li className="flex items-center gap-3">
    <img src={ok ? ActiveIcon : InactiveIcon} alt="" aria-hidden="true"
         className="w-[22px] h-[22px] shrink-0" />
    <span className={`text-[15px] leading-snug
                      ${ok ? "text-[#11152D] font-semibold" : "text-[#B8BDC8] font-normal"}`}>
      {label}
    </span>
  </li>
);

const Pricing = () => (
  <section className="relative z-10 w-full bg-white
                      pt-[60px] md:pt-[80px]
                      pb-[120px] md:pb-[160px] lg:pb-[200px]">

    <motion.h2
      variants={fadeUp} initial="hidden"
      whileInView="visible" viewport={{ once: true, amount: 0.3 }}
      className="text-[#11142D] font-bold
                 text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px]
                 leading-[1.08] text-center mb-8 md:mb-12 px-4"
    >
      Help Is One Click Away
    </motion.h2>

    <div className="relative z-20 max-w-[880px] mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">

        {/* ── FREE CARD ─────────────────────────────────────────── */}
        <motion.div
          variants={fadeUp} initial="hidden"
          whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          custom={0}
          whileHover={{ y: -5, transition: { duration: 0.25 } }}
          className="flex flex-col bg-white rounded-[24px] p-6 sm:p-7
                     shadow-[0_8px_48px_rgba(17,20,45,0.10)] cursor-default"
        >
          {/* Top area: sub-box + feature list */}
          <div className="flex gap-5 flex-1">

            {/* Left sub-box — full height */}
            <div className="flex flex-col items-center justify-center
                            bg-[#E8EFFE] rounded-[18px]
                            min-w-[120px] w-[120px] sm:min-w-[140px] sm:w-[140px]
                            shrink-0 px-4 py-6">
              <p className="text-[#4B8BFF] text-[38px] sm:text-[40px] font-bold leading-none">
                Free
              </p>
              <p className="text-[#8A93B0] text-[16px] mt-2 font-medium">Basic</p>
            </div>

            {/* Feature list */}
            <ul className="flex flex-col justify-center gap-4 flex-1 py-2">
              {freeFeatures.map((f, i) => <FeatureRow key={i} {...f} />)}
            </ul>
          </div>

          {/* Button */}
          <button type="button"
                  className="mt-6 w-full h-[54px]
                             border-2 border-[#1A3585] text-[#1A3585]
                             rounded-full text-[16px] font-bold
                             hover:bg-[#1A3585] hover:text-white
                             transition-colors duration-250">
            Get Started
          </button>
        </motion.div>

        {/* ── PREMIUM CARD ──────────────────────────────────────── */}
        <motion.div
          variants={fadeUp} initial="hidden"
          whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          custom={1}
          whileHover={{ y: -5, transition: { duration: 0.25 } }}
          className="flex flex-col bg-white rounded-[24px] p-6 sm:p-7
                     shadow-[0_8px_48px_rgba(17,20,45,0.12)] cursor-default"
        >
          {/* Top area: sub-box + feature list */}
          <div className="flex gap-5 flex-1">

            {/* Left sub-box — badge + price */}
            <div className="flex flex-col items-center justify-start
                            bg-[#E8EFFE] rounded-[18px]
                            min-w-[120px] w-[120px] sm:min-w-[140px] sm:w-[140px]
                            shrink-0 px-4 pt-4 pb-6">
              {/* Premium badge */}
              <div className="flex items-center gap-2
                              bg-white rounded-full px-3 py-1.5 mb-4
                              shadow-[0_2px_10px_rgba(17,20,45,0.10)]">
                <img src={PremiumTag} alt="Premium gem"
                     className="w-[16px] h-[16px] object-contain" />
                <span className="text-[#11142D] text-[13px] font-bold">Premium</span>
              </div>
              <p className="text-[#4B8BFF] text-[34px] sm:text-[36px] font-bold leading-none text-center">
                $79.99
              </p>
              <p className="text-[#8A93B0] text-[14px] mt-2 font-medium">Per Month</p>
            </div>

            {/* Feature list */}
            <ul className="flex flex-col justify-center gap-4 flex-1 py-2">
              {premiumFeatures.map((label, i) => (
                <FeatureRow key={i} label={label} ok={true} />
              ))}
            </ul>
          </div>

          {/* Button */}
          <button type="button"
                  className="mt-6 w-full h-[54px]
                             bg-gradient-to-r from-[#1E3A8A] to-[#2B52B8]
                             text-white rounded-full text-[16px] font-bold
                             hover:brightness-110 transition-all duration-250">
            Get Started
          </button>
        </motion.div>

      </div>
    </div>
  </section>
);

export default Pricing;
