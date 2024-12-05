import Link from "next/link";
import Navigation from "./Navigation";
import MobileNav from "./MobileNav";
import Button from "./Button";

function Header() {
  return (
    <header className="px-4 py-2 border-b border-primary-900 md:px-8 md:py-3">
      <div className="flex items-center justify-between mx-auto ">
        <h1>
          <Link className="text-3xl font-semibold" href="/">
            Makha<span className="text-accent-600">.</span>
          </Link>
        </h1>
        {/* desktop nav */}
        <div className="items-center hidden gap-8 lg:flex">
          <Navigation />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>
        {/* mobile nav */}
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

export default Header;
