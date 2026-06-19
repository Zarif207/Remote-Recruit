import ProfileBanner from "../../assets/images/Rectangle 103.png";
import ProfileAvatar  from "../../assets/images/Mask Group (1).png";
import AvatarGru      from "../../assets/images/20170315-ShowbizInsider-DespicableMe-696x464-696x430.png";
import { FaPlay } from "react-icons/fa";

const skillTags = ["Python Dev", "Javascript", "Front End", "Back End", "IOS Development", "+12"];

/* ─── Right illustration ──────────────────────────────────────────── */
const ShowcaseIllustration = () => (
  <div className="relative
                  w-[286px] h-[330px]
                  sm:w-[352px] sm:h-[406px]
                  md:w-[418px] md:h-[482px]
                  lg:w-[540px] lg:h-[622px]
                  mx-auto lg:mx-0 overflow-visible">
    <div className="absolute top-0 left-0 w-[540px] h-[622px] origin-top-left
                    scale-[0.53] sm:scale-[0.652] md:scale-[0.774] lg:scale-[1]">

      {/* Blue dot — top-left */}
      <div aria-hidden="true"
           className="absolute top-[10px] left-[46px] z-10
                      w-[20px] h-[20px] rounded-full
                      bg-gradient-to-br from-[#5BC8FF] to-[#1A5DC8]" />

      {/* Floating avatar — right side */}
      <div className="absolute top-[64px] right-[-20px] z-30
                      w-[84px] h-[84px] rounded-full overflow-hidden
                      ring-[3px] ring-[#F5C542]
                      shadow-[0_6px_24px_rgba(50,100,220,0.22)]">
        <img src={AvatarGru} alt="Profile"
             className="w-full h-full object-cover object-top" />
      </div>

      {/* Main profile card */}
      <div className="absolute top-[30px] left-[30px] z-0
                      w-[460px] rounded-[28px] overflow-hidden
                      bg-white shadow-[0_20px_60px_rgba(80,100,220,0.12)]">

        {/* Banner */}
        <div className="relative">
          <img src={ProfileBanner} alt="Profile banner"
               className="w-full h-[150px] object-cover" />

          {/* Jobs badge */}
          <span className="absolute top-[14px] left-[14px]
                           bg-white text-[#11152D] text-[11px] font-semibold
                           rounded-full px-[10px] py-[4px]
                           shadow-[0_2px_10px_rgba(0,0,0,0.12)]">
            102 Jobs Completed!
          </span>

          {/* Avatar + play */}
          <div className="absolute -bottom-[30px] left-[20px] z-10">
            <div className="relative w-[64px] h-[64px]">
              <img src={ProfileAvatar} alt="User avatar"
                   className="w-[64px] h-[64px] rounded-full object-cover ring-[3px] ring-white" />
              <div className="absolute inset-0 flex items-center justify-center
                              rounded-full bg-black/30">
                <FaPlay className="text-white text-[12px] ml-[2px]" />
              </div>
            </div>
          </div>
        </div>

        {/* Card body */}
        <div className="px-[20px] pt-[44px] pb-[20px]">
          <div className="flex flex-wrap gap-[8px]">
            {skillTags.map((tag, i) => (
              <span key={i}
                    className="bg-[#EEF2FF] text-[#4B6BFB]
                               text-[12px] font-semibold rounded-full px-[12px] py-[5px]">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Floating review pill */}
      <div className="absolute bottom-[30px] left-[10px] z-30
                      flex items-center gap-[12px]
                      bg-white rounded-[999px]
                      shadow-[0_8px_32px_rgba(80,100,220,0.13)]
                      px-[14px] py-[12px] w-[300px]">
        <img src={ProfileAvatar} alt="Client"
             className="w-[42px] h-[42px] rounded-full object-cover shrink-0" />
        <div>
          <p className="text-[#0FA9A9] text-[11px] font-semibold leading-tight">
            Past Client Feedback
          </p>
          <p className="text-[#11152D] text-[14px] font-bold leading-snug">
            Best Developer Ever!
          </p>
        </div>
      </div>

    </div>
  </div>
);

const FeatureShowcase = () => (
  <section className="w-full bg-white pt-[160px] pb-0 overflow-hidden">
    <div className="max-w-[1140px] mx-auto px-6 lg:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-start">

        {/* LEFT — text */}
        <div className="flex flex-col items-start pt-[48px]">
          <span className="inline-flex items-center py-[7px] px-[20px] rounded-full
                           bg-[#C4EDFF] text-[#2F4668] text-[14px] font-semibold mb-[24px]">
            Custom Profile
          </span>
          <h2 className="text-[#11142D] font-bold
                         text-[32px] sm:text-[40px] lg:text-[56px]
                         leading-[1.15] lg:leading-[1.08] tracking-[-0.02em] mb-0">
            Showcase Your Talents
          </h2>
          <p className="text-[#6B7088] font-normal text-[18px] leading-[1.9]
                        max-w-[460px] mt-[28px]">
            Personalize your profile with everything that makes you unique.
            Add an introductory video and other media for a personal touch
            that stands out to employers and candidates.
          </p>
        </div>

        {/* RIGHT — illustration */}
        <div className="flex justify-center lg:justify-end">
          <ShowcaseIllustration />
        </div>

      </div>
    </div>
  </section>
);

export default FeatureShowcase;
