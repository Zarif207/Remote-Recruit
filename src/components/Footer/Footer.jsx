import Background from "../../assets/images/Background.png";
import Logo from "../../assets/images/Logo.png";
import RRIcon from "../../assets/images/RR Icon Logo.png";
import ActiveIcon from "../../assets/images/Active Icon.svg";
import InactiveIcon from "../../assets/images/Active Icon (1).svg";
import PremiumTag from "../../assets/images/Premium Tag.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaSnapchatGhost,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { scrollToTop } from "../../utils/scrollToTop";

const freeFeatures = [
  { label: "1 Active Job", ok: true },
  { label: "Basic List Placement", ok: true },
  { label: "Unlimited Job Applicants", ok: false },
  { label: "Invite Anyone to Apply to Your Jobs", ok: false },
];

const premiumFeatures = [
  "Unlimited Job Posts",
  "Instant Job Post Approval",
  "Premium List Placement",
  "Unlimited Job Applicants",
];

const socialLinks = [
  { Icon: FaFacebookF, label: "Facebook", url: "https://www.facebook.com" },
  { Icon: FaInstagram, label: "Instagram", url: "https://www.instagram.com" },
  { Icon: FaXTwitter, label: "X", url: "https://x.com" },
  { Icon: FaTwitter, label: "Twitter", url: "https://twitter.com" },
  { Icon: FaLinkedinIn, label: "LinkedIn", url: "https://www.linkedin.com" },
  { Icon: FaSnapchatGhost, label: "Snapchat", url: "https://www.snapchat.com" },
];

function SocialBtn({ Icon, label, url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 shrink-0 items-center justify-center
                 rounded-full bg-white/15 hover:bg-white/30 transition-colors duration-200
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
    >
      <Icon className="text-[14px] text-white" />
    </a>
  );
}

const Footer = () => (
  <section className="relative w-full overflow-hidden bg-white">

    <h2
      className="text-[#11142D] font-normal text-[32px] sm:text-[40px] md:text-[48px]
                 leading-[1.08] text-center pt-20 sm:pt-28 lg:pt-20
                 mb-8 sm:mb-10 lg:mb-14 px-4"
    >
      Help Is One Click Away
    </h2>

    <div
      className="relative z-30 max-w-[1140px] mx-auto px-4 lg:px-6
                 -mb-[100px] sm:-mb-[140px] md:-mb-[180px] lg:-mb-[220px]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-stretch">

        {/* Free */}
        <div
          className="flex flex-col sm:flex-row bg-white rounded-[20px] p-6 sm:p-8
                     shadow-[0_16px_56px_rgba(17,20,45,0.10)]"
        >
          <div
            className="flex flex-col items-center justify-center
                       bg-[#EEF2FF] rounded-[14px]
                       w-full sm:min-w-[140px] sm:w-auto px-4 py-5 sm:mr-6 shrink-0 mb-5 sm:mb-0"
          >
            <p className="text-[#4B6BFB] text-[36px] font-bold leading-none">Free</p>
            <p className="text-[#6B7088] text-[16px] mt-2">Basic</p>
          </div>

          <div className="flex flex-col flex-1 min-w-0">
            <ul className="flex flex-col gap-4 flex-1">
              {freeFeatures.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <img
                    src={f.ok ? ActiveIcon : InactiveIcon}
                    alt=""
                    aria-hidden="true"
                    className="w-[20px] h-[20px] shrink-0 mt-0.5"
                  />
                  <span
                    className={`text-[15px] leading-snug break-words ${
                      f.ok ? "text-[#11152D]" : "text-[#C8CCDA]"
                    }`}
                  >
                    {f.label}
                  </span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="group relative overflow-hidden mt-6 w-full h-[56px]
                         rounded-[14px] border-2 border-[#1A3585] bg-white
                         text-[#1A3585] text-[16px] font-bold
                         transition-all duration-500 hover:border-transparent
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A3585]"
            >
              <span
                className="absolute inset-0 bg-gradient-to-r from-[#3471A9] to-[#23488C]
                           opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                Get Started
              </span>
            </button>
          </div>
        </div>

        {/* Premium */}
        <div
          className="flex flex-col sm:flex-row bg-white rounded-[20px] p-6 sm:p-8
                     shadow-[0_16px_56px_rgba(17,20,45,0.12)]"
        >
          <div
            className="relative flex flex-col items-center justify-center
                       bg-[#EEF2FF] rounded-[14px]
                       w-full sm:min-w-[140px] sm:w-auto px-4 py-5 sm:mr-6 shrink-0 mb-5 sm:mb-0"
          >
            <img
              src={PremiumTag}
              alt="Premium"
              className="absolute -top-4 left-1/2 -translate-x-1/2
                         h-[34px] w-auto object-contain"
            />
            <p className="text-[#1A3585] text-[34px] font-bold leading-none mt-3">$79.99</p>
            <p className="text-[#6B7088] text-[14px] mt-2">Per Month</p>
          </div>

          <div className="flex flex-col flex-1 min-w-0">
            <ul className="flex flex-col gap-4 flex-1">
              {premiumFeatures.map((label, i) => (
                <li key={i} className="flex items-start gap-3">
                  <img
                    src={ActiveIcon}
                    alt=""
                    aria-hidden="true"
                    className="w-[20px] h-[20px] shrink-0 mt-0.5"
                  />
                  <span className="text-[15px] text-[#11152D] leading-snug break-words">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="mt-6 w-full h-[56px] text-white rounded-[14px] text-[16px] font-bold
                         bg-gradient-to-r from-[#3471A9] to-[#23488C]
                         hover:brightness-110 transition-all duration-300
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Get Started
            </button>
          </div>
        </div>

      </div>
    </div>

    <footer className="relative z-10 w-full pt-[60px] sm:pt-[80px] lg:pt-[250px]">

      <img
        src={Background}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-top
                   select-none pointer-events-none"
        draggable={false}
      />

      <div
        className="relative flex flex-col items-center w-full
                   pt-[80px] sm:pt-[100px] lg:pt-[120px] pb-8 lg:pb-5 px-4 sm:px-6 lg:px-10"
      >

        <div
          className="mx-auto flex w-full max-w-[1140px] flex-col items-center gap-6
                     md:flex-row md:justify-between md:gap-4"
        >
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="RemoteRecruit home — scroll to top"
            className="shrink-0 cursor-pointer bg-transparent border-0 p-0
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
          >
            <img
              src={Logo}
              alt="RemoteRecruit"
              className="h-auto w-[150px] object-contain lg:w-[160px]"
            />
          </button>

          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {socialLinks.map(({ Icon, label, url }) => (
              <SocialBtn key={label} Icon={Icon} label={label} url={url} />
            ))}
          </div>
        </div>

        <div className="mt-8 sm:mt-10 lg:mt-14 w-full max-w-[1140px] border-t border-white/20" />

        <div className="mt-6 lg:mt-8 flex flex-col items-center">
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="RemoteRecruit — scroll to top"
            className="cursor-pointer bg-transparent border-0 p-0
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
          >
            <img
              src={RRIcon}
              alt="RemoteRecruit"
              className="h-7 w-9 object-contain lg:h-8 lg:w-10"
            />
          </button>
        </div>

      </div>
    </footer>
  </section>
);

export default Footer;
