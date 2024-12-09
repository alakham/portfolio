"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub, FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const socials = [
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/makha-diakhate-5aa702226/",
  },
  { icon: <FaGithub />, path: "https://github.com/alakham" },
  { icon: <FaTwitter />, path: "https://x.com/citizen_221" },
];

function Socials({ containerStyle, iconStyle }) {
  return (
    <div className={containerStyle}>
      {socials.map((social, index) => {
        return (
          <Link key={index} href={social.path} className={iconStyle}>
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
}

export default Socials;
