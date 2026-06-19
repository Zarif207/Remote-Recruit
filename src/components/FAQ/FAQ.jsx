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
  <section className="w-full bg-white py-[80px] lg:py-[120px]">
    <div className="max-w-[850px] mx-auto px-4 sm:px-6">

      <h2
        className="text-[#11142D] font-normal
                   text-[32px] sm:text-[40px] lg:text-[52px]
                   text-left leading-[1.15] tracking-[-0.01em]
                   mb-10 lg:mb-14"
      >
        Common Questions
      </h2>

      <div className="flex flex-col gap-8 lg:gap-12">
        {faqs.map((item, i) => (
          <div key={i}>
            <h3 className="text-[#11142D] font-normal text-[20px] sm:text-[22px] leading-snug">
              {item.question}
            </h3>
            <p className="text-[#6B7088] text-[16px] sm:text-[17px] leading-[1.85] mt-3 break-words">
              {item.answer}
            </p>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="mt-10 lg:mt-14 border border-[#C4EDFF] text-[#1B3B66]
                   bg-white rounded-xl px-9 py-3.5
                   text-base font-semibold
                   hover:bg-[#C4EDFF]/20 transition-all duration-200 cursor-pointer
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B3B66]"
      >
        More Questions
      </button>

    </div>
  </section>
);

export default FAQ;
