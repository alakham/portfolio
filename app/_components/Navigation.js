"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "projects",
    path: "/projects",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`${
            link.path === pathname
              ? "text-accent-400 border-b-accent-400 border-b-2"
              : ""
          } capitalize font-medium transition-all hover:text-accent-400 text-base xl:text-lg`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}

export default Navigation;
