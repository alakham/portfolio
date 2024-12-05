"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub, FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaLinkedinIn />, path: "/google.com" },
  { icon: <FaGithub />, path: "/google.com" },
  { icon: <FaTwitter />, path: "/google.com" },
  { icon: <FaFacebook />, path: "/google.com" },
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
