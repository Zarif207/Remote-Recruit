import { motion } from "framer-motion";

const faqs = [
  {
    question: "Do I have to sign a long-term contract?",
    answer:
      "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90's, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party",
  },
  {
    question: "Can I pay for a whole year?",
    answer:
      "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage",
  },
  {
    question: "What if I need help?",
    answer:
      "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90's, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party",
  },
];

const FAQ = () => (
  <section className="w-full bg-white py-[60px] md:py-[80px] lg:py-[120px]">
    <div className="max-w-[850px] mx-auto px-4 sm:px-6">

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-[#11142D] font-normal tracking-[-0.01em] leading-[1.15]
                   text-[26px] sm:text-[34px] md:text-[42px] lg:text-[52px]
                   text-left mb-8 md:mb-10 lg:mb-14"
      >
        Common Questions
      </motion.h2>

      <div className="flex flex-col divide-y divide-[#F0F2F8]">
        {faqs.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
            className="py-6 md:py-8"
          >
            <h3 className="text-[#11142D] font-normal leading-snug
                           text-[17px] sm:text-[19px] md:text-[21px]">
              {item.question}
            </h3>
            <p className="text-[#6B7088] leading-[1.85] mt-3 break-words
                          text-[14px] sm:text-[15px] md:text-[16px]">
              {item.answer}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.button
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        type="button"
        className="mt-8 md:mt-10 lg:mt-14
                   border border-[#C4EDFF] text-[#1B3B66] bg-white
                   rounded-xl px-7 sm:px-9 py-3 sm:py-3.5
                   text-[14px] sm:text-base font-semibold
                   hover:bg-[#C4EDFF]/20 transition-all duration-200 cursor-pointer"
      >
        More Questions
      </motion.button>

    </div>
  </section>
);

export default FAQ;
