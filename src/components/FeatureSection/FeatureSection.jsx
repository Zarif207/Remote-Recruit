import FindWork  from "../../assets/images/Find Work.png";
import RRLogo    from "../../assets/images/Group 132.png";
import AvatarGru from "../../assets/images/20170315-ShowbizInsider-DespicableMe-696x464-696x430.png";

/* ─── Candidate pill card ──────────────────────────────────────────── */
const CandidateCard = ({ avatar, avatarAlt, role, roleColor, name, className }) => (
  <div className={`absolute z-30 flex items-center w-[440px] h-[88px]
                   bg-white rounded-[999px]
                   shadow-[0_12px_40px_rgba(80,100,220,0.13)]
                   overflow-hidden ${className}`}>
    <div className="shrink-0 w-[88px] h-[88px] rounded-full overflow-hidden
                    ring-[3px] ring-[#F5C542]">
      <img src={avatar} alt={avatarAlt}
           className="w-full h-full object-cover object-top" />
    </div>
    <div className="flex flex-col pl-[18px]">
      <span className={`text-[14px] font-semibold leading-tight ${roleColor}`}>{role}</span>
      <span className="text-[#11152D] text-[20px] font-semibold leading-snug mt-[2px]">{name}</span>
    </div>
  </div>
);

/* ─── Right illustration (scaled responsively) ─────────────────────── */
const IllustrationGlobalReach = () => (
  /* outer: clamps the rendered size so layout isn't blown out */
  <div className="relative
                  w-[308px] h-[370px]
                  sm:w-[380px] sm:h-[456px]
                  md:w-[440px] md:h-[528px]
                  lg:w-[560px] lg:h-[672px]
                  mx-auto lg:mx-0 overflow-visible">
    {/* inner: always native 560×672, scaled from top-left */}
    <div className="absolute top-0 left-0 w-[560px] h-[672px] origin-top-left
                    scale-[0.55] sm:scale-[0.679] md:scale-[0.786] lg:scale-[1]">

      {/* Blue dot */}
      <div aria-hidden="true"
           className="absolute top-[16px] left-[36px] z-10
                      w-[24px] h-[24px] rounded-full
                      bg-gradient-to-br from-[#5BC8FF] to-[#1A5DC8]" />

      {/* White outer card */}
      <div className="absolute top-[48px] left-0 z-0
                      w-[560px] h-[380px] rounded-[36px]
                      bg-gradient-to-br from-white to-[#EEF2FF]
                      shadow-[0_24px_80px_rgba(80,100,220,0.12),0_4px_16px_rgba(80,100,220,0.06)]">
        {/* Dashboard image */}
        <img src={FindWork} alt="Find Work dashboard"
             className="absolute top-[20px] left-[20px]
                        w-[calc(100%-40px)] h-auto
                        object-cover rounded-[20px]
                        shadow-[0_4px_16px_rgba(80,100,200,0.08)]" />
      </div>

      {/* RR logo — right edge of white card */}
      <div className="absolute top-[240px] right-[-52px] z-20
                      w-[120px] h-[120px] rounded-full overflow-hidden
                      shadow-[0_10px_36px_rgba(50,100,220,0.35)]">
        <img src={RRLogo} alt="RemoteRecruit" className="w-full h-full object-cover" />
      </div>

      {/* Card 1 — Felonious Gru */}
      <CandidateCard
        avatar={AvatarGru} avatarAlt="Felonious Gru"
        role="Python Developer" roleColor="text-[#2B4FCC]"
        name="Felonious Gru"
        className="top-[388px] left-[-48px]"
      />

      {/* Card 2 — Mel Muselphiem */}
      <CandidateCard
        avatar={AvatarGru} avatarAlt="Mel Muselphiem"
        role="Front End Wizard" roleColor="text-[#3EC6F2]"
        name="Mel Muselphiem"
        className="top-[500px] left-[32px]"
      />
    </div>
  </div>
);

const FeatureSection = () => (
  <section className="w-full bg-white pt-[140px] pb-0 overflow-hidden">
    <div className="max-w-[1140px] mx-auto px-6 lg:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-start">

        {/* LEFT — text */}
        <div className="flex flex-col items-start pt-[48px]">
          <span className="inline-flex items-center py-[7px] px-[20px] rounded-full
                           bg-[#C4EDFF] text-[#2F4668] text-[14px] font-semibold mb-[24px]">
            Global Reach
          </span>
          <h2 className="text-[#11142D] font-bold
                         text-[32px] sm:text-[40px] lg:text-[56px]
                         leading-[1.15] lg:leading-[1.08] tracking-[-0.02em] w-full mb-0">
            The First Fully Global Job Board, Anywhere, Ever
          </h2>
          <p className="text-[#6B7088] font-normal text-[18px] leading-[1.9]
                        max-w-[460px] mt-[28px]">
            RemoteRecruit connects candidates with opportunities around the world.
            With today&rsquo;s remote-first workforce, you need to be able to find
            the best jobs and the best people for them, wherever they may be.
          </p>
        </div>

        {/* RIGHT — layered illustration */}
        <div className="flex justify-center lg:justify-end">
          <IllustrationGlobalReach />
        </div>

      </div>
    </div>
  </section>
);

export default FeatureSection;
