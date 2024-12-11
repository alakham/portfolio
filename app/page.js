"use client";

import Button from "./_components/Button";
import { FiDownload } from "react-icons/fi";
import Socials from "./_components/Socials";
import Photo from "./_components/Photo";
import Stats from "./_components/Stats";
import Head from "next/head";

export default function Page() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="Contact"
          content="Welcome to my website! Discover my expertise, services, and latest projects."
        />
      </Head>

      <section className="h-auto p-4">
        <div className="flex items-center justify-center w-full">
          <div className="flex flex-col items-center justify-between gap-12 pt-6 xl:mt-20 xl:mb-8 xl:flex-row xl:items-center">
            <div className="order-2 text-center xl:text-left lg:order-none">
              <span className="text-xl">Software Developer</span>
              <h1 className=" h1">
                Hello I&apos;m <br />
                <span className="text-accent-400 whitespace-nowrap">
                  Makha Diakhate
                </span>
              </h1>
              <p className="max-w-[31.25rem] mb-5 text-white/80 text-lg xl:text-xl">
                Passionate about building intuitive, user-friendly websites and
                creating seamless digital experiences. Let&apos;s bring your
                ideas to life!
              </p>
              <div className="flex flex-col items-center gap-8 lg:flex-row">
                <Button>
                  <a
                    href="/assets/Makha_Diakhate.pdf"
                    download="Makha Diakhate"
                    className="flex items-center"
                  >
                    <span>Download CV</span>
                    <FiDownload className="my-auto ml-1" />
                  </a>
                </Button>
                <div className="mb-8 lg:mb-0">
                  <Socials
                    containerStyle="flex gap-2"
                    iconStyle="w-9 h-9 text-accent-400 hover:text-accent-100 flex justify-center items-center text-center hover:text-accent-100 hover:bg-accent-400 transition-all duration:500 border rounded-full border-accent-400 text-based"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center order-1 xl:order-none">
              <Photo />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full mt-7">
          <Stats />
        </div>
      </section>
    </>
  );
}
