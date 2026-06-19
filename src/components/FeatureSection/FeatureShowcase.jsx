import ShowcaseImg from "../../assets/images/showcase.png";

const FeatureShowcase = () => (
  <section className="w-full bg-white pt-[60px] pb-0 lg:pt-[100px] overflow-hidden">
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-[500px_620px] items-center gap-x-[100px] gap-y-12 lg:gap-y-[60px]">

        <div className="flex flex-col items-start">
          <span
            className="inline-flex items-center px-5 py-2.5 rounded-full
                       bg-[#CFEFFF] text-[#1B3B66] text-[14px] font-bold mb-7"
          >
            Custom Profile
          </span>

          <h2
            className="text-[#11142D] font-normal
                       text-[32px] sm:text-[40px] lg:text-[52px]
                       leading-[1.15] tracking-[-0.01em]"
          >
            Showcase Your Talents
          </h2>

          <p
            className="mt-7 max-w-[480px] w-full text-[#6B7088] text-[17px]
                       leading-[1.85] font-normal"
          >
            Personalize your profile with everything that makes you unique.
            Add an introductory video and other media for a personal touch
            that stands out to employers and candidates.
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src={ShowcaseImg}
            alt="Custom profile showcase"
            className="w-full max-w-[620px] h-auto object-contain select-none"
            draggable={false}
          />
        </div>

      </div>
    </div>
  </section>
);

export default FeatureShowcase;
