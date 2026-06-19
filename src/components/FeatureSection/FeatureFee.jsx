import RRLogo from "../../assets/images/Group 132.png";
import PayPal  from "../../assets/images/paypal.png";
import { FaCheck } from "react-icons/fa";

const memberFeatures = [
  "Up to 25 active job posts",
  "Premium Placement & Visibility",
  "Messaging anyone, unlimited",
  "Unlimited invites",
  "View all applicants",
  "Unlimited invites to jobseekers",
];

const FeatureFee = () => {
  return (
    <section className="w-full bg-white py-[100px] overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-6 lg:px-0">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px] lg:gap-[100px] items-center">

          {/* ── LEFT — illustration ─────────────────────────────── */}
          <div className="relative w-full max-w-[480px] mx-auto lg:mx-0">

            {/* Blue dot */}
            <div
              aria-hidden="true"
              className="absolute -top-3 -left-3 z-10
                         w-[22px] h-[22px] rounded-full
                         bg-gradient-to-br from-[#5BC8FF] to-[#1A5DC8]"
            />

            {/* Main membership card */}
            <div className="relative bg-white rounded-[32px]
                            shadow-[0_24px_80px_rgba(80,100,220,0.12)] p-8">

              {/* RR logo — top-right overlap */}
              <img
                src={RRLogo}
                alt="RemoteRecruit"
                className="absolute -top-5 -right-5
                           w-[80px] h-[80px] rounded-full object-contain z-20
                           shadow-[0_6px_20px_rgba(50,100,220,0.28)]"
              />

              <p className="text-[#73758B] text-[13px] font-medium mb-1">
                Your Membership Tier
              </p>
              <p className="text-[#4B6BFB] text-[28px] font-bold mb-5">
                Premium
              </p>

              <p className="text-[#C0C3D0] text-[11px] font-semibold tracking-widest uppercase mb-4">
                Features
              </p>

              <ul className="flex flex-col gap-3">
                {memberFeatures.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-[20px] h-[20px] flex-shrink-0
                                     rounded-full bg-[#EEF2FF]
                                     flex items-center justify-center">
                      <FaCheck className="text-[#4B6BFB] text-[10px]" />
                    </span>
                    <span className="text-[#11152D] text-[14px]">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Floating payment pill */}
            <div className="mt-5 flex items-center gap-4
                            bg-white rounded-[999px]
                            shadow-[0_8px_32px_rgba(80,100,220,0.13)]
                            px-5 py-3 max-w-[360px]">
              <img
                src={PayPal}
                alt="PayPal"
                className="w-[40px] h-[40px] object-contain flex-shrink-0"
              />
              <div>
                <p className="text-[#73758B] text-[12px]">Upcoming Payment In...</p>
                <p className="text-[#11152D] text-[15px] font-bold">14 Days — $79.99</p>
              </div>
            </div>

          </div>

          {/* ── RIGHT — text ────────────────────────────────────── */}
          <div className="flex flex-col items-start">

            <span className="inline-flex items-center
                             py-[7px] px-[20px] rounded-full
                             bg-[#C4EDFF] text-[#2F4668]
                             text-[14px] font-semibold mb-[20px]">
              Actually Fee Free
            </span>

            <h2 className="text-[#11152D] font-bold
                           text-[40px] md:text-[48px] lg:text-[56px]
                           leading-[1.1] mb-0">
              Fee-Free Forever
            </h2>

            <p className="text-[#73758B] font-normal
                          text-[16px] leading-[1.85]
                          max-w-[420px] mt-[28px]">
              We don&apos;t charge you fees and we don&apos;t put up paywalls.
              We&apos;re the bridge that connects job opportunities with the
              best candidates, with no middleman involved.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};

export default FeatureFee;
