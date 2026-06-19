import { motion } from "framer-motion";
import Illustration from "../../assets/images/Group 136.png";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut", delay } },
});

const FeatureSection = () => (
  <section className="w-full bg-white pt-[60px] pb-[60px] lg:pt-[100px] lg:pb-[100px] overflow-hidden">
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-[500px_620px] items-center gap-y-12 lg:gap-y-0 gap-x-[100px]">

        {/* LEFT */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="lg:-ml-[30px]"
        >
          <span className="inline-flex items-center px-5 py-2.5 rounded-full
                           bg-[#CFEFFF] text-[#1B3B66] text-[14px] font-bold mb-7">
            Global Reach
          </span>

          <h2 className="max-w-[480px] w-full text-[#11142D]
                         text-[32px] sm:text-[40px] lg:text-[52px]
                         font-normal leading-[1.15] tracking-[-0.01em]">
            <span className="block">The First Fully Global Job</span>
            <span className="block">Board, Anywhere, Ever</span>
          </h2>

          <p className="mt-7 max-w-[480px] w-full text-[#6B7088] text-[17px] leading-[1.85] font-normal">
            RemoteRecruit connects candidates with opportunities around the
            world. With today&rsquo;s remote-first workforce, you need to be
            able to find the best jobs and the best people for them,
            wherever they may be.
          </p>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          variants={fadeUp(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <img src={Illustration} alt="RemoteRecruit platform"
               className="w-full max-w-[620px] h-auto object-contain select-none"
               draggable={false} />
        </motion.div>

      </div>
    </div>
  </section>
);

export default FeatureSection;
