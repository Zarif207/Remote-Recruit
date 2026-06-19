import ProfileBanner from "../../assets/images/Rectangle 103.png";
import ProfileAvatar  from "../../assets/images/Mask Group (1).png";
import AvatarGru      from "../../assets/images/20170315-ShowbizInsider-DespicableMe-696x464-696x430.png";
import { FaPlay } from "react-icons/fa";

const skillTags = ["Python Dev", "Javascript", "Front End", "Back End", "IOS Development", "+12"];

const FeatureShowcase = () => {
  return (
    <section className="w-full bg-white py-[100px] overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-6 lg:px-0">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px] lg:gap-[100px] items-center">

          {/* ── LEFT — text ─────────────────────────────────────── */}
          <div className="flex flex-col items-start">

            <span className="inline-flex items-center
                             py-[7px] px-[20px] rounded-full
                             bg-[#C4EDFF] text-[#2F4668]
                             text-[14px] font-semibold mb-[20px]">
              Custom Profile
            </span>

            <h2 className="text-[#11152D] font-bold
                           text-[40px] md:text-[48px]
                           leading-[1.1] mb-0">
              Showcase Your Talents
            </h2>

            <p className="text-[#73758B] font-normal
                          text-[16px] leading-[1.85]
                          max-w-[420px] mt-[28px]">
              Personalize your profile with everything that makes you unique.
              Add an introductory video and other media for a personal touch
              that stands out to employers and candidates.
            </p>

          </div>

          {/* ── RIGHT — profile card illustration ───────────────── */}
          <div className="relative w-full max-w-[500px] mx-auto lg:mx-0">

            {/* Blue dot — top-left */}
            <div
              aria-hidden="true"
              className="absolute top-[-10px] left-[-6px] z-20
                         w-[18px] h-[18px] rounded-full
                         bg-gradient-to-br from-[#5BC8FF] to-[#1A5DC8]"
            />

            {/* Floating avatar — right side overlapping card */}
            <div className="absolute top-[60px] right-[-28px] z-20
                            w-[80px] h-[80px] rounded-full overflow-hidden
                            ring-[3px] ring-[#F5C542]
                            shadow-[0_6px_20px_rgba(50,100,220,0.20)]">
              <img src={AvatarGru} alt="Floating profile"
                   className="w-full h-full object-cover object-top" />
            </div>

            {/* Main profile card */}
            <div className="bg-white rounded-[32px]
                            shadow-[0_24px_80px_rgba(80,100,220,0.12)]
                            overflow-hidden">

              {/* Banner */}
              <div className="relative">
                <img
                  src={ProfileBanner}
                  alt="Profile banner"
                  className="w-full h-[140px] object-cover"
                />

                {/* Jobs completed badge */}
                <span className="absolute top-4 left-4
                                 bg-white text-[#11152D] text-[11px] font-semibold
                                 rounded-full px-3 py-1
                                 shadow-[0_2px_10px_rgba(0,0,0,0.12)]">
                  102 Jobs Completed!
                </span>

                {/* Avatar + play button — overlapping banner */}
                <div className="absolute -bottom-7 left-6 z-10">
                  <div className="relative w-[60px] h-[60px]">
                    <img
                      src={ProfileAvatar}
                      alt="User avatar"
                      className="w-[60px] h-[60px] rounded-full object-cover
                                 ring-[3px] ring-white"
                    />
                    <div className="absolute inset-0 flex items-center justify-center
                                    rounded-full bg-black/30">
                      <FaPlay className="text-white text-[11px] ml-0.5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div className="px-6 pt-12 pb-6">
                <div className="flex flex-wrap gap-2">
                  {skillTags.map((tag, i) => (
                    <span key={i}
                          className="bg-[#EEF2FF] text-[#4B6BFB]
                                     text-[12px] font-medium
                                     rounded-full px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating review pill */}
            <div className="mt-5 flex items-center gap-3
                            bg-white rounded-[999px]
                            shadow-[0_8px_32px_rgba(80,100,220,0.13)]
                            px-4 py-3 max-w-[300px]">
              <img src={ProfileAvatar} alt="Client"
                   className="w-[38px] h-[38px] rounded-full object-cover flex-shrink-0" />
              <div>
                <p className="text-[#0FA9A9] text-[11px] font-semibold leading-tight">
                  Past Client Feedback
                </p>
                <p className="text-[#11152D] text-[13px] font-bold leading-snug">
                  Best Developer Ever!
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
