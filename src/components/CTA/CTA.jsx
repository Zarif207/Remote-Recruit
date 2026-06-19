import FindWork from "../../assets/images/Find Work.png";
import { FaArrowRight } from "react-icons/fa";

const CTA = () => (
  <section className="relative w-full overflow-hidden bg-[#EEF0FF] pt-[180px] pb-0">

    {/* Decorative circles — top-right */}
    <div aria-hidden="true"
         className="pointer-events-none absolute -top-[120px] -right-[120px]
                    w-[520px] h-[520px] rounded-full
                    bg-[#C5D0FF] opacity-40" />
    <div aria-hidden="true"
         className="pointer-events-none absolute top-[60px] right-[80px]
                    w-[260px] h-[260px] rounded-full
                    bg-[#B8C8FF] opacity-30" />

    {/* Decorative circle — bottom-left */}
    <div aria-hidden="true"
         className="pointer-events-none absolute -bottom-[120px] -left-[120px]
                    w-[400px] h-[400px] rounded-full
                    bg-[#C5D0FF] opacity-30" />

    {/* Decorative circle — bottom-right */}
    <div aria-hidden="true"
         className="pointer-events-none absolute bottom-[40px] right-[120px]
                    w-[28px] h-[28px] rounded-full
                    bg-gradient-to-br from-[#5BC8FF] to-[#1A5DC8]" />

    <div className="relative z-10 max-w-[1140px] mx-auto px-6 lg:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-center">

        {/* LEFT — dashboard image */}
        <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">

          {/* Gold circle above dashboard */}
          <div aria-hidden="true"
               className="absolute -top-[32px] left-[50%] -translate-x-1/2
                          w-[64px] h-[64px] rounded-full
                          bg-[#F5C242]
                          shadow-[0_8px_28px_rgba(245,194,66,0.45)]
                          z-10" />

          <img
            src={FindWork}
            alt="Find Work dashboard"
            className="relative z-0 w-full max-w-[560px]
                       rounded-[24px]
                       shadow-[0_24px_80px_rgba(58,77,163,0.20)]"
          />
        </div>

        {/* RIGHT — text */}
        <div className="flex flex-col items-start order-1 lg:order-2">
          <p className="text-[#4B6BFB] text-[16px] font-semibold mb-[12px]">
            Are you ready?
          </p>
          <h2 className="text-[#11142D] font-bold
                         text-[32px] sm:text-[40px] lg:text-[56px]
                         leading-[1.15] lg:leading-[1.08] tracking-[-0.02em]
                         max-w-[460px] mb-0">
            Help is only a few clicks away!
          </h2>
          <p className="text-[#6B7088] text-[18px] leading-[1.9]
                        max-w-[400px] mt-[28px]">
            Click Below to get set up super quickly and find help now!
          </p>
          <button className="mt-[36px] inline-flex items-center gap-[12px]
                             bg-gradient-to-r from-[#4B6BFB] to-[#2B4FCC]
                             text-white font-semibold text-[16px]
                             rounded-full px-[32px] py-[16px]
                             hover:brightness-110 transition-all duration-200
                             shadow-[0_8px_28px_rgba(75,107,251,0.35)] cursor-pointer">
            <span className="w-[36px] h-[36px] rounded-full bg-white/20
                             flex items-center justify-center">
              <FaArrowRight className="text-[14px]" />
            </span>
            Get Started
          </button>
        </div>

      </div>
    </div>
  </section>
);

export default CTA;
