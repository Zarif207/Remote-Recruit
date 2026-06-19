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
    <footer className="relative w-full bg-[#111638] pt-[120px] pb-[60px] overflow-hidden">

      {/* Decorative circles — CSS only */}
      <div className="pointer-events-none absolute -top-40 -left-40
                      w-[500px] h-[500px] rounded-full border border-white/5" />
      <div className="pointer-events-none absolute -top-24 -right-24
                      w-[400px] h-[400px] rounded-full border border-white/5" />
      <div className="pointer-events-none absolute bottom-[-100px] left-[20%]
                      w-[300px] h-[300px] rounded-full border border-white/5" />

      <div className="relative z-10 max-w-[1140px] mx-auto px-6 lg:px-0">

        {/* Bottom row containing Logo (left), Small logo & Copyright (center), Socials (right) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-12 md:mt-24">

          {/* Bottom-left: RemoteRecruit logo */}
          <div className="flex items-center justify-center md:justify-start shrink-0">
            <img src={Logo} alt="RemoteRecruit" className="w-[160px] h-auto object-contain" />
          </div>

          {/* Center bottom: Small floating logo & Copyright */}
          <div className="flex flex-col items-center justify-center gap-4">
            <img
              src={RRLogo}
              alt="RR"
              className="w-[48px] h-[48px] rounded-full object-contain shadow-[0_8px_24px_rgba(0,0,0,0.2)]"
            />
            <p className="text-center text-white/50 text-[14px]">
              © {new Date().getFullYear()} RemoteRecruit. All rights reserved.
            </p>
          </div>

          {/* Bottom-right: Social icons */}
          <div className="flex items-center gap-3 flex-wrap justify-center md:justify-end">
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

      </div>
    </footer>
  );
};

export default Footer;
