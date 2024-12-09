"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import "swiper/css";
import { SwiperSlide, Swiper } from "swiper/react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import SlideBtns from "../_components/SlideBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "krimo samb",
    description:
      "Explore the artistry of Krimo Samb at krimosamb.com. A portfolio of captivating photography that celebrates moments, emotions, and creativity.",
    stack: [
      {
        name: "html 5",
      },
      {
        name: "css 3",
      },
      {
        name: "javascript",
      },
    ],
    image: "/krimo.png",
    live: "https://krimosamb.com",
    github: "",
  },
  {
    num: "02",
    category: "frontend",
    title: "sakho consultancy",
    description:
      "Empowering organizations with authentic, inclusive strategies. Visit sakhoconsultancy.com to explore services in equity, diversity, and neurodiversity advocacy.",
    stack: [
      {
        name: "react.js",
      },
      {
        name: "Tailwind.css",
      },
      {
        name: "styled component",
      },
    ],
    image: "/maymouna.png",
    live: "https://sakhoconsultancy.com",
    github: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "react fast food",
    description:
      "A dynamic React application that allows users to browse menus, customize orders, and seamlessly place fast food orders online. Designed for ease of use and optimized for a smooth ordering experience.",
    stack: [
      {
        name: "react js",
      },
      {
        name: "tailwind.css",
      },
      {
        name: "redux",
      },
    ],
    image: "/pizza.png",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "fullstack",
    title: "Oasis cabins management",
    description:
      "A full-stack application to manage cabin bookings, equipped with a modern user interface.",
    stack: [
      {
        name: "react js",
      },
      {
        name: "tailwind.css",
      },
      {
        name: "react query",
      },
      {
        name: "supabase",
      },
    ],
    image: "/cabins.png",
    live: "https://wild-cabins.vercel.app/dashboard",
    github: "",
  },
  {
    num: "05",
    category: "fullstack",
    title: "Oasis cabins website",
    description:
      "A beautiful, responsive website for Oasis Cabins, featuring booking integration and dynamic content.",
    stack: [
      {
        name: "next js",
      },
      {
        name: "tailwind.css",
      },
      {
        name: "supabase",
      },
    ],
    image: "/oasis.png",
    live: "https://oasis-camp.vercel.app/",
    github: "",
  },
  {
    num: "06",
    category: "fullstack",
    title: "My portfolio",
    description:
      "A modern, responsive portfolio showcasing my skills in web development, featuring and interactive projects.",
    stack: [
      {
        name: "next js",
      },
      {
        name: "tailwind.css",
      },
      {
        name: "chadcn",
      },
    ],
    image: "/portfolio.png",
    live: "https://makha.vercel.app/",
    github: "",
  },
];

function Page() {
  const [project, setProject] = useState(projects[0]);

  function handleSlideChange(swiper) {
    // get current swipe
    const currIndex = swiper.activeIndex;
    // set the current project index

    setProject(projects[currIndex]);
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="flex flex-col justify-center my-2 lg:my-0"
    >
      <div className="container mx-auto mt-[2rem] xl:mt-0">
        <div className="flex flex-col items-center justify-center xl:gap-[2rem] xl:flex-row mx-4">
          <div className="w-full xl:w-[50%] flex flex-col  xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[2rem] h-[50%]">
              {/* project num */}
              <div className="font-extrabold leading-none text-transparent text-outline text-8xl text-accent-400">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[3rem] font-bold leading-none group-hover:text-accent-400 transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stacks */}
              <ul className="flex ga-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent-400">
                      {item.name}
                      {index !== project.stack.length - 1 && (
                        <span>,&nbsp;</span>
                      )}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/30"></div>
              {/* button */}
              <div className="flex items-center gap-4">
                {/* live project  button */}
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[3rem] h-[3rem] rounded-full flex justify-center items-center group bg-primary-800 ">
                        <BsArrowUpRight className="text-3xl text-primary-100 group-hover:text-accent-500" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project  button */}
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[3rem] h-[3rem] rounded-full flex justify-center items-center group bg-primary-800 ">
                        <BsGithub className="text-3xl text-primary-100 group-hover:text-accent-500" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] xl:mt-[3rem] mt-[1rem]">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              className="mb-4"
              onSlideChange={handleSlideChange}
            >
              {projects.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className=" xl:h-[28rem] h-[15rem] flex items-center justify-center bg-primary-800 w-full">
                      {/* overlay  */}
                      <div className="absolute top-0 bottom-0 z-10 w-full h-full bg-black/10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={item.image}
                          alt={`Project ${item.num}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* buttons */}
              <SlideBtns
                containerStyle="flex gap-2 right-0 bottom-[calc(50%_-_22px)] absolute lg:static w-full z-50 justify-between xl:justify-end  pt-2"
                btnStyle="bg-accent-400 text-primary-900 hover:bg-accent-500 text-[1rem] w-[1.5rem] h-[1.5rem] justify-center items-center flex transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Page;
