import RRLogo from "../../assets/images/Group 132.png";
import PayPal  from "../../assets/images/paypal.png";
import { FaCheck } from "react-icons/fa";

const features = [
  "Up to 25 active job posts",
  "Premium Placement & Visibility",
  "Messaging anyone, unlimited",
  "Unlimited invites",
  "View all applicants",
  "Unlimited invites to jobseekers",
];

/* ─── Left illustration ─────────────────────────────────────────────
   Composition is built natively at 520px wide and scaled on mobile.
   All shapes are CSS — only RRLogo and PayPal icons are images.
 ──────────────────────────────────────────────────────────────────── */
const FeeIllustration = () => (
  <div className="relative
                  w-[286px] h-[352px]
                  sm:w-[364px] sm:h-[448px]
                  md:w-[416px] md:h-[512px]
                  lg:w-[520px] lg:h-[640px]
                  mx-auto lg:mx-0 overflow-visible">
    <div className="absolute top-0 left-0 w-[520px] h-[640px] origin-top-left
                    scale-[0.55] sm:scale-[0.70] md:scale-[0.80] lg:scale-[1]">

      {/* Blue dot */}
      <div aria-hidden="true"
           className="absolute top-[14px] left-[14px] z-10
                      w-[24px] h-[24px] rounded-full
                      bg-gradient-to-br from-[#5BC8FF] to-[#1A5DC8]" />

      {/* Main membership card */}
      <div className="absolute top-[40px] left-[30px] z-0
                      w-[460px] rounded-[32px] bg-white
                      shadow-[0_24px_80px_rgba(80,100,220,0.13)] p-[36px]">

        {/* RR logo — right-top overlap */}
        <div className="absolute -top-[28px] right-[40px] z-20
                        w-[88px] h-[88px] rounded-full overflow-hidden
                        shadow-[0_8px_28px_rgba(50,100,220,0.32)]">
          <img src={RRLogo} alt="RemoteRecruit" className="w-full h-full object-cover" />
        </div>

        <p className="text-[#A0A3B0] text-[13px] font-medium mb-[6px]">Your Membership Tier</p>
        <p className="text-[#4B6BFB] text-[26px] font-bold mb-[22px]">Premium</p>

        <p className="text-[#C0C3D0] text-[11px] font-semibold tracking-[0.12em] uppercase mb-[16px]">
          Features
        </p>

        <ul className="flex flex-col gap-[14px]">
          {features.map((f, i) => (
            <li key={i} className="flex items-center gap-[12px]">
              <span className="w-[20px] h-[20px] shrink-0 rounded-full
                               bg-[#EEF2FF] flex items-center justify-center">
                <FaCheck className="text-[#4B6BFB] text-[9px]" />
              </span>
              <span className="text-[#11152D] text-[14px] leading-snug">{f}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Payment pill / strip at bottom */}
      <div className="absolute bottom-[30px] left-[10px] z-10
                      flex items-center gap-[14px]
                      bg-white rounded-[999px]
                      shadow-[0_12px_40px_rgba(80,100,220,0.15)]
                      px-[18px] py-[14px] w-[340px]">
        <img src={PayPal} alt="PayPal"
             className="w-[38px] h-[38px] object-contain shrink-0" />
        <div>
          <p className="text-[#A0A3B0] text-[12px] leading-tight">Upcoming Payment In...</p>
          <p className="text-[#11152D] text-[15px] font-bold leading-snug">14 Days - $79.99</p>
        </div>
      </div>

    </div>
  </div>
);

const FeatureFee = () => (
  <section className="w-full bg-white pt-[160px] pb-0 overflow-hidden">
    <div className="max-w-[1140px] mx-auto px-6 lg:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-start">

        {/* LEFT — illustration */}
        <div className="flex justify-center lg:justify-start">
          <FeeIllustration />
        </div>

        {/* RIGHT — text */}
        <div className="flex flex-col items-start pt-[64px]">
          <span className="inline-flex items-center py-[7px] px-[20px] rounded-full
                           bg-[#C4EDFF] text-[#2F4668] text-[14px] font-semibold mb-[24px]">
            Actually Fee Free
          </span>
          <h2 className="text-[#11142D] font-bold
                         text-[32px] sm:text-[40px] lg:text-[56px]
                         leading-[1.15] lg:leading-[1.08] tracking-[-0.02em] mb-0">
            Fee-Free Forever
          </h2>
          <p className="text-[#6B7088] font-normal text-[18px] leading-[1.9]
                        max-w-[460px] mt-[28px]">
            We don&apos;t charge you fees and we don&apos;t put up paywalls.
            We&apos;re the bridge that connects job opportunities with the best
            candidates, with no middleman involved.
          </p>
        </div>

      </div>
    </div>
  </section>
);
export default FeatureFee;

