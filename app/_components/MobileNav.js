"use client";

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
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex items-center justify-center overflow-y-auto">
        <CiMenuFries className="text-[2rem] text-primary-100" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-10 text-2xl text-center">
          <Link href="/" className="text-4xl font-semibold">
            <h1>
              Makha <span className=" text-accent-300">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col items-center justify-center gap-4">
          {" "}
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`${
                link.path === pathname
                  ? "text-accent-400 border-b-accent-400 border-b-2 block"
                  : ""
              } capitalize font-medium transition-all hover:text-accent-400 text-lg`}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
