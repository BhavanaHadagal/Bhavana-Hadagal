import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { RiTwitterXFill } from "react-icons/ri";

const contactItems = [
  {
    icon: <MdEmail size={18} />,
    label: "Email",
    value: "bhavanahadagal@gmail.com",
    href: "mailto:bhavanahadagal@gmail.com",
  },
  {
    icon: <IoCallOutline size={18} />,
    label: "Phone",
    value: "8792076718",
    href: "tel:8792076718",
  },
];

const socialLinks = [
  {
    icon: <FaGithub size={20} />,
    href: "https://github.com/BhavanaHadagal",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin size={20} />,
    href: "https://www.linkedin.com/in/bhavana-hadagal-999010399/",
    label: "LinkedIn",
  },
  {
    icon: <RiTwitterXFill size={20} />,
    href: "https://x.com/bhavana3421",
    label: "Twitter / X",
  },
];

const Contact = () => {
  return (
    <div className="w-full min-h-screen bg-black flex items-center justify-center px-6 py-16">
      <div className="max-w-3xl w-full">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-extrabold text-3xl bg-gradient-to-b from-[#FF8660] to-[#D5491D] bg-clip-text text-transparent">
            CONTACT
          </h2>
          <p className="text-gray-400 text-sm mt-2 tracking-wide">
            Let&apos;s work together — reach out anytime
          </p>
          <div className="mx-auto mt-4 h-[2px] w-16 rounded-full bg-gradient-to-r from-[#FF8660] to-[#D5491D]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left — bio */}
          <div className="flex flex-col gap-6">
            <p className="text-gray-400 text-sm leading-relaxed">
              Full Stack Developer who loves building clean, responsive apps and
              working across both front-end and back-end technologies. Enjoys
              solving problems, learning new tools, and creating smooth,
              user-friendly experiences.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-3">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl border border-white/5 bg-white/5 hover:border-[#FF8660]/40 hover:bg-white/[0.07] transition-all duration-200 group"
                >
                  <span className="text-[#FF8660] group-hover:scale-110 transition-transform duration-200">
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-xs text-gray-500">{item.label}</p>
                    <p className="text-sm text-gray-200">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — social links */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#FF8660] mb-1">
              Find me on
            </p>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl border border-white/5 bg-white/5 hover:border-[#FF8660]/40 hover:bg-white/[0.07] transition-all duration-200 group"
              >
                <span className="text-[#FF8660] group-hover:scale-110 transition-transform duration-200">
                  {link.icon}
                </span>
                <span className="text-sm text-gray-300">{link.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Footer line */}
        <p className="text-center text-gray-600 text-xs mt-14">
          &copy; {new Date().getFullYear()} Bhavana Hadagal. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Contact;