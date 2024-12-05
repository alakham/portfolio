import Image from "next/image";
import makha from "@/public/makha.png";
import Link from "next/link";
import GetInTouch from "./GetInTouch";

function Presentation() {
  return (
    <div className="flex flex-col items-center text-base sm:text-sm md:text-lg lg:text-xl gap-x-8 gap-y-10 lg:flex-row lg:gap-x-24 lg:gap-y-20">
      <div className="space-y-4 text-center lg:text-left">
        <header className="text-accent-300">
          <p className="text-base sm:text-sm md:text-lg lg:text-xl">
            Makha Diakhate
          </p>
        </header>
        <h1 className="text-2xl sm:text-xl md:text-3xl lg:text-4xl">
          Hey! I&apos;m Makha Diakhate
          <br />
          <span className="text-accent-200">Front-end Developer</span>
        </h1>
        <p className="text-base sm:text-sm md:text-sm lg:text-xl">
          Passionate about building intuitive, user-friendly websites
          <br /> and creating seamless digital experiences. Let&apos;s bring
          your ideas to life!
        </p>
        <GetInTouch />
      </div>
      <div className="flex justify-center">
        <Image
          src={makha}
          alt="Makha Image"
          width={300}
          height={200}
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Presentation;
