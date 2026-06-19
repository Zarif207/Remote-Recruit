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
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.15 },
  }),
};

const FeatureRow = ({ label, ok }) => (
  <li className="flex items-start gap-[10px]">
    <img src={ok ? ActiveIcon : InactiveIcon} alt="" aria-hidden="true"
         className="w-[18px] h-[18px] shrink-0 mt-[2px]" />
    <span className={`text-[14px] leading-snug ${ok ? "text-[#11152D]" : "text-[#C8CCDA]"}`}>
      {label}
    </span>
  </li>
);

const Pricing = () => (
  <section className="relative z-10 w-full bg-white
                      pt-[60px] md:pt-[80px]
                      pb-[120px] md:pb-[160px] lg:pb-[200px]">

    <motion.h2
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="text-[#11142D] font-bold
                 text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px]
                 leading-[1.08] text-center mb-8 md:mb-12 px-4"
    >
      Help Is One Click Away
    </motion.h2>

    <div className="relative z-20 max-w-[880px] mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 items-stretch">

        {/* FREE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={0}
          whileHover={{ y: -6, transition: { duration: 0.25 } }}
          className="flex flex-col sm:flex-row bg-white rounded-[20px] p-6 sm:p-8
                     shadow-[0_16px_56px_rgba(17,20,45,0.10)] cursor-default"
        >
          <div className="flex flex-row sm:flex-col items-center justify-center
                          bg-[#EEF2FF] rounded-[14px]
                          px-6 py-4 sm:py-5
                          sm:min-w-[120px] lg:min-w-[130px]
                          mb-5 sm:mb-0 sm:mr-5 shrink-0 gap-3 sm:gap-0">
            <p className="text-[#4B6BFB] text-[32px] sm:text-[34px] font-bold leading-none">
              Free
            </p>
            <p className="text-[#6B7088] text-[14px] sm:text-[15px] sm:mt-1.5">Basic</p>
          </div>
          <div className="flex flex-col flex-1 min-w-0">
            <ul className="flex flex-col gap-3 flex-1">
              {freeFeatures.map((f, i) => <FeatureRow key={i} {...f} />)}
            </ul>
            <button type="button"
                    className="mt-5 sm:mt-6 w-full h-[48px] sm:h-[52px]
                               border-2 border-[#4B6BFB] text-[#4B6BFB]
                               rounded-[14px] text-[14px] sm:text-[15px] font-semibold
                               hover:bg-[#4B6BFB] hover:text-white
                               transition-colors duration-200">
              Get Started
            </button>
          </div>
        </motion.div>

        {/* PREMIUM */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={1}
          whileHover={{ y: -6, transition: { duration: 0.25 } }}
          className="flex flex-col bg-white rounded-[20px] p-6 sm:p-8
                     shadow-[0_16px_56px_rgba(17,20,45,0.12)] cursor-default"
        >
          <img src={PremiumTag} alt="Premium"
               className="h-[24px] sm:h-[26px] w-auto object-contain self-start mb-4" />
          <div className="flex flex-col sm:flex-row flex-1">
            <div className="flex flex-row sm:flex-col items-center justify-center
                            bg-[#F4F7FF] rounded-[14px]
                            px-6 py-4 sm:py-5
                            sm:min-w-[120px] lg:min-w-[130px]
                            mb-5 sm:mb-0 sm:mr-5 shrink-0 gap-3 sm:gap-0">
              <p className="text-[#11142D] text-[28px] sm:text-[32px] font-bold leading-none">
                $79.99
              </p>
              <p className="text-[#6B7088] text-[13px] sm:mt-1">Per Month</p>
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <ul className="flex flex-col gap-3 flex-1">
                {premiumFeatures.map((label, i) => (
                  <FeatureRow key={i} label={label} ok={true} />
                ))}
              </ul>
              <button type="button"
                      className="mt-5 sm:mt-6 w-full h-[48px] sm:h-[52px]
                                 bg-[#1A3585] text-white
                                 rounded-[14px] text-[14px] sm:text-[15px] font-semibold
                                 hover:brightness-110 transition-all duration-200">
                Get Started
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  </section>
);

export default Pricing;
