import { motion } from "framer-motion";
import FeeImg from "../../assets/images/Group 136@2x.png";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut", delay } },
});

const FeatureFee = () => (
  <section className="w-full bg-white overflow-hidden py-[40px] lg:py-0">
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-[620px_500px] items-center gap-x-[100px] gap-y-12 lg:gap-y-[60px]">

        {/* LEFT — illustration */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex justify-center lg:justify-start order-2 lg:order-1"
        >
          <img src={FeeImg} alt="Fee-Free Premium membership illustration"
               className="w-full max-w-[620px] h-auto object-contain select-none"
               draggable={false} />
        </motion.div>

        {/* RIGHT — text */}
        <motion.div
          variants={fadeUp(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-start order-1 lg:order-2"
        >
          <span className="inline-flex items-center px-5 py-2.5 rounded-full
                           bg-[#CFEFFF] text-[#1B3B66] text-[14px] font-bold mb-7">
            Actually Fee Free
          </span>

          <h2 className="text-[#11142D] font-normal
                         text-[32px] sm:text-[40px] lg:text-[52px]
                         leading-[1.15] tracking-[-0.01em]">
            Fee-Free Forever
          </h2>

          <p className="mt-7 max-w-[480px] w-full text-[#6B7088] text-[17px] leading-[1.85] font-normal">
            We don&apos;t charge you fees and we don&apos;t put up paywalls.
            We&apos;re the bridge that connects job opportunities with the best
            candidates, with no middleman involved.
          </p>
        </motion.div>

      </div>
    </div>
  </section>
);

export default FeatureFee;
