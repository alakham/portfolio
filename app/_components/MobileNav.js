"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Button from "./Button";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Resume",
    path: "/resume",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex items-center justify-center overflow-y-auto">
        <CiMenuFries className="text-[2rem] text-primary-100" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-20 text-2xl text-center mb-7">
          <Link href="/" className="text-3xl font-semibold">
            <h1>
              Makha <span className=" text-accent-300">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col items-center justify-center gap-4">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              onClick={handleLinkClick}
              className={`${
                link.path === pathname
                  ? "text-accent-400 border-b-accent-400 border-b-2 block"
                  : ""
              } capitalize font-medium transition-all duration-300 hover:text-accent-400 text-lg`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
