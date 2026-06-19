import CTAImg from "../../assets/images/CTA.png";
import { FaArrowRight } from "react-icons/fa";

const CTA = () => (
  <section className="relative w-screen max-w-none">
    <div className="relative w-full max-w-none">
      <img
        src={CTAImg}
        alt="RemoteRecruit dashboard"
        className="block w-full max-w-none h-auto select-none"
        draggable={false}
      />

      {/* Text overlaid on the right side of CTA.png */}
      <div
        className="px-[5vw] py-10
                   lg:absolute lg:right-[7%] lg:top-1/2 lg:-translate-y-1/2
                   lg:w-[38%] lg:max-w-[440px] lg:px-0 lg:py-0"
      >
        <p className="text-[#4B6BFB] text-base font-semibold mb-3">
          Are you ready?
        </p>

        <h2
          className="text-[#11142D] font-extrabold
                     text-[36px] lg:text-[64px]
                     leading-[1.05] tracking-[-0.02em]"
        >
          Help is only a few clicks away!
        </h2>

        <p className="text-[#6B7088] text-[18px] lg:text-[20px] leading-[1.8] mt-7">
          Click below to get set up super quickly and find help now!
        </p>

        <button
          type="button"
          className="mt-9 inline-flex items-center gap-4
                     bg-[#C4EDFF] text-[#1B3B66]
                     rounded-full pl-2 pr-8 py-2
                     text-base font-semibold
                     hover:brightness-95 transition-all duration-200 cursor-pointer"
        >
          <span
            className="w-11 h-11 rounded-full bg-[#2F4668]
                       flex items-center justify-center shrink-0"
          >
            <FaArrowRight className="text-white text-sm" />
          </span>
          Get Started
        </button>
      </div>
    </div>
  </section>
);

export default CTA;
