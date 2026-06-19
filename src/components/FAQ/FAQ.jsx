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

const FAQ = () => {
  return (
    <section className="w-full bg-white py-[100px]">
      <div className="max-w-[1140px] mx-auto px-6 lg:px-0">

        <h2 className="text-[#11152D] font-bold text-[40px] md:text-[48px] mb-[60px]">
          Common Questions
        </h2>

        <div>
          {faqs.map((item, index) => (
            <div
              key={index}
              className={index < faqs.length - 1 ? "pb-8 mb-8 border-b border-[#E8EAF0]" : ""}
            >
              <h3 className="text-[#11152D] font-bold text-[18px]">
                {item.question}
              </h3>
              <p className="text-[#73758B] text-[16px] leading-[1.8] mt-3">
                {item.answer}
              </p>
            </div>
          ))}
        </div>

        <button className="mt-[40px] border border-[#4B6BFB] text-[#4B6BFB]
                           rounded-[12px] px-8 py-3 text-[15px] font-semibold
                           hover:bg-[#4B6BFB] hover:text-white transition-colors duration-200">
          More Questions
        </button>

      </div>
    </section>
  );
};

export default FAQ;
