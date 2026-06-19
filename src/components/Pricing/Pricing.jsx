import { FaCheck, FaTimes, FaGem } from "react-icons/fa";

const freeFeatures = [
  { label: "1 Active Job", included: true },
  { label: "Basic List Placement", included: true },
  { label: "Unlimited Job Applicants", included: false },
  { label: "Invite Anyone to Apply to Your Jobs", included: false },
];

const premiumFeatures = [
  { label: "Unlimited Job Posts", included: true },
  { label: "Instant Job Post Approval", included: true },
  { label: "Premium List Placement", included: true },
  { label: "Unlimited Job Applicants", included: true },
];

const Pricing = () => {
  return (
    <section className="relative w-full py-[80px] overflow-hidden bg-white">

      {/* Blue wave background — lower 55% */}
      <div
        className="absolute bottom-0 left-0 w-full h-[55%] bg-gradient-to-b from-[#1E3A8A] to-[#1E40AF]"
        style={{ clipPath: "ellipse(120% 60% at 50% 100%)" }}
      />

      <div className="relative z-10 max-w-[1140px] mx-auto px-6 lg:px-0">

        <h2 className="text-[#11152D] font-bold text-[40px] md:text-[48px] text-center mb-[60px]">
          Help Is One Click Away
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[860px] mx-auto">

          {/* FREE card */}
          <div className="bg-[#F0F4FF] rounded-[24px] p-8
                          shadow-[0_8px_40px_rgba(80,100,220,0.10)]
                          flex flex-col">
            <div className="bg-white rounded-[16px] p-6 mb-6">
              <p className="text-[#4B6BFB] text-[32px] font-bold leading-none">Free</p>
              <p className="text-[#73758B] text-[16px] mt-1">Basic</p>
            </div>

            <ul className="flex flex-col gap-3 flex-1">
              {freeFeatures.map((f, i) => (
                <li key={i} className="flex items-center gap-3">
                  {f.included ? (
                    <span className="w-5 h-5 flex items-center justify-center
                                     rounded-full bg-[#EEF2FF] text-[#4B6BFB]
                                     text-[10px] flex-shrink-0">
                      <FaCheck />
                    </span>
                  ) : (
                    <span className="w-5 h-5 flex items-center justify-center
                                     rounded-full bg-[#F3F4F6] text-[#C0C3D0]
                                     text-[10px] flex-shrink-0">
                      <FaTimes />
                    </span>
                  )}
                  <span className={`text-[15px] ${f.included ? "text-[#11152D]" : "text-[#C0C3D0]"}`}>
                    {f.label}
                  </span>
                </li>
              ))}
            </ul>

            <button className="mt-6 border-2 border-[#4B6BFB] text-[#4B6BFB]
                               rounded-[16px] w-full py-4 text-[16px] font-semibold
                               hover:bg-[#4B6BFB] hover:text-white transition-colors duration-200">
              Get Started
            </button>
          </div>

          {/* PREMIUM card */}
          <div className="bg-white rounded-[24px] p-8
                          shadow-[0_8px_40px_rgba(80,100,220,0.15)]
                          flex flex-col">
            <div className="inline-flex items-center gap-2
                            bg-[#EEF2FF] text-[#4B6BFB]
                            text-[13px] font-semibold
                            rounded-full px-4 py-1.5 mb-4 self-start">
              <FaGem className="text-[11px]" />
              Premium
            </div>

            <div className="flex items-end gap-2 mb-6">
              <span className="text-[48px] font-bold text-[#11152D] leading-none">$79.99</span>
              <span className="text-[16px] text-[#73758B] mb-1">Per Month</span>
            </div>

            <ul className="flex flex-col gap-3 flex-1">
              {premiumFeatures.map((f, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-5 h-5 flex items-center justify-center
                                   rounded-full bg-[#EEF2FF] text-[#4B6BFB]
                                   text-[10px] flex-shrink-0">
                    <FaCheck />
                  </span>
                  <span className="text-[15px] text-[#11152D]">{f.label}</span>
                </li>
              ))}
            </ul>

            <button className="mt-6 bg-[#1E3A8A] text-white rounded-[16px]
                               w-full py-4 text-[16px] font-semibold
                               hover:bg-[#1e40af] transition-colors duration-200">
              Get Started
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;
