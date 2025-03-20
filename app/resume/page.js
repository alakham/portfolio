"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaMedal } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiStyledcomponents,
  SiRedux,
} from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipTrigger,
  TooltipProvider,
  TooltipContent,
} from "@radix-ui/react-tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Head from "next/head";

// (Data remains the same)
// about
const aboutData = {
  title: "About me",
  description:
    "Passionate about creating impactful solutions, I specialize in delivering innovative and inclusive experiences.",
  // Info
  infos: [
    {
      fieldName: "Name",
      fieldValue: "Makha Diakhate",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+221) 77 142 04 31",
    },
    {
      fieldName: "Experience",
      fieldValue: "2 Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Senegalese",
    },
    {
      fieldName: "Email",
      fieldValue: "makha2007@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "French, English, Wolof",
    },
  ],
};

// experience
const experience = {
  icon: "badge",
  title: "My experience",
  description:
    "With a rich background in developing tailored solutions, I bring years of experience in building engaging and effective projects for diverse clients.",
  items: [
    {
      company: "Freelance",
      position: "Front-End Developer",
      duration: "January 2024 - Now",
    },
    {
      company: "WuribaProduction",
      position: "Production Director and Social Media Manager",
      duration: "Janv 2021 - Dec 2023",
    },
    {
      company: "Rapidos, Delivery Company",
      position: "Logistic Team Leader",
      duration: "Janv 2019 - Dec 2020",
    },
    {
      company: "Town Hall of Wakhinane Nimzatt (Guédiawaye) ",
      position: "IT Specialist and Trainer",
      duration: "Janv 2016 - Dec 2019",
    },
  ],
};

// education
const education = {
  icon: "badge",
  title: "My education",
  description:
    "I have continuously pursued education and development to enhance my technical skills and stay updated with industry trends. Here's a summary of my recent qualifications.",
  items: [
    {
      institution: "UDEMY (Online Course)",
      degree: "TypeSript Certification",
      duration: "2025",
    },
    {
      institution: "UDEMY (Online Course)",
      degree: "React & Next.js Certification",
      duration: "2024",
    },
    {
      institution: "UDEMY (Online Course)",
      degree: "JavaScript Certification",
      duration: "2024",
    },
    {
      institution: "GOMYCODE (Online Course)",
      degree: "Introduction to Web Development Certification",
      duration: "2023",
    },
  ],
};

// skills
const skills = {
  title: "My Skills",
  description:
    "I am proficient in a wide range of technologies that empower me to build modern, responsive, and dynamic web applications. Below is a list of my key skills: ",
  skillsList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <BiLogoTypescript />,
      name: "TypeSript",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiRedux />,
      name: "redux",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind css",
    },
    {
      icon: <SiStyledcomponents />,
      name: "style component",
    },
  ],
};

function Page() {
  return (
    <>
      <Head>
        <title> Resume</title>
        <meta
          name="Projects"
          content="Explore my professional resume detailing my skills, experiences, and accomplishments."
        />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="flex items-center justify-center "
      >
        <div className="container py-2 mx-auto">
          <Tabs
            defaultValue="experience"
            className="flex flex-col  gap-4 xl:gap-[3rem] xl:flex-row"
          >
            <TabsList className="flex flex-col  mx-auto xl:mx-0 gap-3 xl:gap-[1.75rem] mt-[4rem] xl:mt-0">
              <TabsTrigger value="experience">experience</TabsTrigger>
              <TabsTrigger value="education">education</TabsTrigger>
              <TabsTrigger value="skills">skills</TabsTrigger>
              <TabsTrigger value="about">about me</TabsTrigger>
            </TabsList>
            <div className="w-full">
              {/* experience */}
              <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-3 text-center xl:text-left mt-[4rem]">
                  <h3 className="text-3xl font-bold">{experience.title}</h3>
                  <p className="max-w-[37rem] text-white/60 mx-auto xl:mx-0">
                    {experience.description}
                  </p>
                  <ScrollArea className="">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[2rem]">
                      {experience.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#1B2631] h-auto min-h-[8rem] py-6 px-3 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          >
                            <span className="text-accent-300">
                              {item.duration}
                            </span>
                            <h3 className="text-xl max-w-[20rem] min-h-[3rem] text-center lg:text-left">
                              {item.position}
                            </h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[0.3rem] h-[0.3rem] bg-accent-400 rounded-full"></span>
                              <p className="text-white/60">{item.company}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              {/* education */}
              <TabsContent value="education" className="w-full">
                <div className="flex flex-col  gap-[1rem] text-center xl:text-left mt-[4rem]">
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                  <p className="max-w-[40rem] text-white/60 mx-auto xl:mx-0">
                    {education.description}
                  </p>
                  <ScrollArea className="">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[2rem]">
                      {education.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-primary-900 h-auto min-h-[8rem] py-6 px-3 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          >
                            <span className="text-accent-300">
                              {item.duration}
                            </span>
                            <h3 className="text-xl max-w-[20rem] min-h-[3rem] text-center lg:text-left">
                              {item.degree}
                            </h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[0.3rem] h-[0.3rem] bg-accent-400 rounded-full"></span>
                              <p className="text-white/60">
                                {item.institution}
                              </p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>

              {/* skills */}
              <TabsContent value="skills" className="w-full">
                <div className="flex flex-col gap-[2rem] mx-5 lg:mx-0">
                  <div className="flex flex-col gap-[2rem] text-center xl:text-left mt-[4rem]">
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                    <p className="max-w-[48rem] text-white/60 mx-auto xl:mx-0">
                      {skills.description}
                    </p>
                  </div>

                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[2rem] gap-4">
                    {skills.skillsList.map((skill, index) => (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full bg-primary-900 h-[8rem] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl transition-all duration-300 group-hover:text-accent-400">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>

              {/* about */}
              <TabsContent
                value="about"
                className="w-full text-center xl:text-left mt-[5rem]"
              >
                <div className="flex flex-col gap-[2rem]">
                  <h3 className="text-4xl font-bold">{aboutData.title}</h3>
                  <p className="max-w-[40rem] text-white/60 mx-auto xl:mx-0">
                    {aboutData.description}
                  </p>

                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 gap-12 max-w-[40rem] mx-auto xl:mx-0">
                    {aboutData.infos.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="flex items-center justify-center gap-[1.5rem] xl:justify-start"
                        >
                          <span className="text-white/60">
                            {item.fieldName}
                          </span>
                          <span className="text-lg">{item.fieldValue}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>
    </>
  );
}

export default Page;
