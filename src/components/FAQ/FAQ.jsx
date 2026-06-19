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
  <section className="w-full bg-white pt-[140px] pb-0">
    <div className="max-w-[850px] mx-auto px-6 lg:px-0">

      <h2 className="text-[#11142D] font-bold
                     text-[36px] md:text-[48px]
                     text-center leading-[1.08] mb-[64px]">
        Common Questions
      </h2>

      <div className="flex flex-col">
        {faqs.map((item, i) => (
          <div key={i}
               className="pb-[40px] mb-[40px] border-b border-[#E8EAF0] last:border-b-0 last:pb-0 last:mb-0">
            <h3 className="text-[#11142D] font-bold text-[22px] leading-snug">
              {item.question}
            </h3>
            <p className="text-[#6B7088] text-[18px] leading-[1.9] mt-[14px]">
              {item.answer}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-[56px]">
        <button className="border-2 border-[#4B6BFB] text-[#4B6BFB]
                           rounded-full px-[36px] py-[14px]
                           text-[16px] font-semibold
                           hover:bg-[#4B6BFB] hover:text-white
                           transition-all duration-200 cursor-pointer">
          More Questions
        </button>
      </div>

    </div>
  </section>
);

export default FAQ;
