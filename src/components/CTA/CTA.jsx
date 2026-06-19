import FindWork from "../../assets/images/Find Work.png";
import { FaArrowRight } from "react-icons/fa";

const CTA = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#EEF0FF] to-[#E0E8FF] py-[100px] overflow-hidden">

      {/* Decorative circles — CSS only */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-[400px] h-[400px] rounded-full bg-[#4B6BFB] opacity-5" />
      <div className="pointer-events-none absolute bottom-10 right-16 w-[200px] h-[200px] rounded-full bg-[#4B6BFB] opacity-[0.08]" />

      <div className="relative z-10 max-w-[1140px] mx-auto px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-center">

          {/* LEFT — dashboard image */}
          <div className="relative flex justify-center order-2 lg:order-1">
            {/* Gold decorative circle */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-[60px] h-[60px] rounded-full bg-[#F5C242] z-10 shadow-[0_8px_24px_rgba(245,194,66,0.4)]" />
            <img
              src={FindWork}
              alt="Find Work dashboard"
              className="w-full max-w-[520px] rounded-[24px]
                         shadow-[0_24px_80px_rgba(58,77,163,0.18)]
                         relative z-0"
            />
          </div>

          {/* RIGHT — text + button */}
          <div className="order-1 lg:order-2">
            <p className="text-[#4B6BFB] text-[16px] font-semibold mb-3">
              Are you ready?
            </p>
            <h2 className="text-[#11152D] font-bold
                           text-[36px] md:text-[42px] lg:text-[48px]
                           leading-[1.1] max-w-[420px]">
              Help is only a few clicks away!
            </h2>
            <p className="text-[#73758B] text-[16px] leading-[1.8] mt-5 max-w-[380px]">
              Click Below to get set up super quickly and find help now!
            </p>
            <button className="mt-8 flex items-center gap-3
                               bg-[#4B6BFB] text-white rounded-full
                               px-8 py-4 text-[16px] font-semibold
                               hover:bg-[#3a57e8] transition-colors duration-200">
              Get Started
              <FaArrowRight />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;
