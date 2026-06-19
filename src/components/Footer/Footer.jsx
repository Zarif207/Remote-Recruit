import Logo   from "../../assets/images/Logo.png";
import RRLogo from "../../assets/images/Group 132.png";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaSnapchatGhost } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialIcons = [
  { Icon: FaFacebookF,      label: "Facebook"  },
  { Icon: FaInstagram,      label: "Instagram" },
  { Icon: FaXTwitter,       label: "X"         },
  { Icon: FaTwitter,        label: "Twitter"   },
  { Icon: FaLinkedinIn,     label: "LinkedIn"  },
  { Icon: FaSnapchatGhost,  label: "Snapchat"  },
];

const Footer = () => {
  return (
    <footer className="relative w-full bg-gradient-to-b from-[#1E3A8A] to-[#1A3070]
                        py-[80px] overflow-hidden">

      {/* Decorative circles — CSS only */}
      <div className="pointer-events-none absolute -top-40 -left-40
                      w-[500px] h-[500px] rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -top-24 -right-24
                      w-[400px] h-[400px] rounded-full border border-white/10" />

      <div className="relative z-10 max-w-[1140px] mx-auto px-6 lg:px-0">

        {/* Logo left — social right */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">

          <img src={Logo} alt="RemoteRecruit" className="w-[160px] h-auto object-contain" />

          <div className="flex items-center gap-3 flex-wrap justify-center">
            {socialIcons.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-[38px] h-[38px] rounded-full
                           bg-white/10 flex items-center justify-center
                           text-white text-[15px]
                           hover:bg-white/20 transition-colors duration-200"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 mb-10" />

        {/* RR logo centered */}
        <div className="flex justify-center">
          <img
            src={RRLogo}
            alt="RR"
            className="w-[60px] h-[60px] rounded-full object-contain"
          />
        </div>

        <p className="text-center text-white/40 text-[13px] mt-6">
          © {new Date().getFullYear()} RemoteRecruit. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
