import { FaCheck, FaTimes, FaGem } from "react-icons/fa";

const freeFeatures = [
  { label: "1 Active Job",                          ok: true  },
  { label: "Basic List Placement",                  ok: true  },
  { label: "Unlimited Job Applicants",              ok: false },
  { label: "Invite Anyone to Apply to Your Jobs",   ok: false },
];

const premiumFeatures = [
  { label: "Unlimited Job Posts",                   ok: true  },
  { label: "Instant Job Post Approval",             ok: true  },
  { label: "Premium List Placement",                ok: true  },
  { label: "Unlimited Job Applicants",              ok: true  },
];

const Pricing = () => (
  <section className="relative w-full overflow-hidden bg-white pt-[180px] pb-0">

    {/*
      Deep Navy wave — occupies the lower portion of the section.
      clip-path creates the curved top edge visible in the design.
      This div also acts as the footer's background starting point
      (Pricing → Footer = 0px gap, they merge visually).
    */}
    <div
      aria-hidden="true"
      className="absolute bottom-0 left-0 w-full h-[52%] bg-[#111638]"
      style={{ clipPath: "ellipse(130% 55% at 50% 100%)" }}
    />

    <div className="relative z-10 max-w-[1140px] mx-auto px-6 lg:px-0 pb-[120px]">

      {/* Heading */}
      <h2 className="text-[#11142D] font-bold
                     text-[36px] md:text-[48px]
                     text-center leading-[1.08] mb-[64px]">
        Help Is One Click Away
      </h2>

      {/* Cards container — larger and equal height */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] max-w-[960px] mx-auto items-stretch">

        {/* ── FREE ── */}
        <div className="bg-white rounded-[24px] p-[40px]
                        shadow-[0_24px_64px_rgba(17,20,45,0.08)]
                        flex flex-col justify-between">
          <div>
            {/* Inner label card */}
            <div className="bg-[#EEF2FF] rounded-[16px] p-[24px] mb-[28px] text-center">
              <p className="text-[#4B6BFB] text-[36px] font-bold leading-none">Free</p>
              <p className="text-[#6B7088] text-[16px] mt-[6px]">Basic</p>
            </div>

            <ul className="flex flex-col gap-[16px]">
              {freeFeatures.map((f, i) => (
                <li key={i} className="flex items-center gap-[12px]">
                  {f.ok
                    ? <span className="w-[20px] h-[20px] shrink-0 rounded-full
                                       bg-[#EEF2FF] flex items-center justify-center">
                        <FaCheck className="text-[#4B6BFB] text-[9px]" />
                      </span>
                    : <span className="w-[20px] h-[20px] shrink-0 rounded-full
                                       bg-slate-100 flex items-center justify-center">
                        <FaTimes className="text-[#C0C3D0] text-[9px]" />
                      </span>
                  }
                  <span className={`text-[15px] ${f.ok ? "text-[#11152D] font-medium" : "text-[#C0C3D0]"}`}>
                    {f.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <button className="mt-[40px] w-full py-[16px]
                             border-2 border-[#4B6BFB] text-[#4B6BFB]
                             rounded-[16px] text-[16px] font-semibold
                             hover:bg-[#4B6BFB] hover:text-white
                             transition-colors duration-200 cursor-pointer">
            Get Started
          </button>
        </div>

        {/* ── PREMIUM ── */}
        <div className="bg-white rounded-[24px] p-[40px]
                        shadow-[0_24px_64px_rgba(17,20,45,0.12)]
                        flex flex-col justify-between">
          <div>
            {/* Badge & pricing */}
            <div className="flex items-center justify-between mb-[20px]">
              <div className="inline-flex items-center gap-[8px]
                              bg-[#EEF2FF] text-[#4B6BFB]
                              text-[13px] font-bold
                              rounded-full px-[16px] py-[6px]">
                <FaGem className="text-[11px]" />
                Premium
              </div>
            </div>

            {/* Price */}
            <div className="flex items-end gap-[8px] mb-[28px] pl-2">
              <span className="text-[48px] font-bold text-[#11142D] leading-none">$79.99</span>
              <span className="text-[16px] text-[#6B7088] mb-[4px]">Per Month</span>
            </div>

            <ul className="flex flex-col gap-[16px]">
              {premiumFeatures.map((f, i) => (
                <li key={i} className="flex items-center gap-[12px]">
                  <span className="w-[20px] h-[20px] shrink-0 rounded-full
                                   bg-[#EEF2FF] flex items-center justify-center">
                    <FaCheck className="text-[#4B6BFB] text-[9px]" />
                  </span>
                  <span className="text-[15px] text-[#11152D] font-medium">{f.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <button className="mt-[40px] w-full py-[16px]
                             bg-gradient-to-r from-[#4B6BFB] to-[#2B4FCC]
                             text-white rounded-[16px] text-[16px] font-semibold
                             hover:brightness-110 transition-all duration-200
                             shadow-[0_8px_24px_rgba(75,107,251,0.25)] cursor-pointer">
            Get Started
          </button>
        </div>

      </div>
    </div>
  </section>
);

export default Pricing;
