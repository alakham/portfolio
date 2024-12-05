"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaMedal } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiStyledcomponents,
  SiRedux,
} from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipTrigger,
  TooltipProvider,
  TooltipContent,
} from "@radix-ui/react-tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// about
const aboutData = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
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
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
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
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  items: [
    {
      institution: "UDEMY (Online Course)",
      degree: "React & Next.js Certifications",
      duration: "2024",
    },
    {
      institution: "UDEMY (Online Course)",
      degree: "JavaScript Certificationsr",
      duration: "2024",
    },
    {
      institution: "GOMYCODE (Online Course)",
      degree: "Web Development Certification",
      duration: "2023",
    },
  ],
};

// skills
const skills = {
  title: "My Skills",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex justify-center items-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="Experience"
          className="flex flex-col xl:flex-row gap-[4rem]"
        >
          <TabsList className="flex flex-col max-w-[20rem] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">experience</TabsTrigger>
            <TabsTrigger value="education">education</TabsTrigger>
            <TabsTrigger value="skills">skills</TabsTrigger>
            <TabsTrigger value="about">about me</TabsTrigger>
          </TabsList>
          <div className="w-full ">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[1.75rem] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[37rem] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[25rem]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[2rem] mx-5">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#1B2631] h-[11.5] py-6 px-3 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
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
              <div className="flex flex-col gap-[1.75rem] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[37rem] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[25rem]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[2rem] mx-5">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-primary-900 h-[11.5] py-6 px-3 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent-300">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[20rem] min-h-[3rem] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[0.3rem] h-[0.3rem] bg-accent-400 rounded-full"></span>
                            <p className="text-white/60">{item.institution}</p>
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
                <div className="flex flex-col gap-[2rem] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[48rem] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <div className="relative max-h-[23rem] overflow-y-auto">
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
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[2rem]">
                <h3 className="text-4xl font-bold">{aboutData.title}</h3>
                <p className="max-w-[40rem] text-white/60 mx-auto xl:mx-0">
                  {aboutData.description}
                </p>

                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 gaap-12 max-w-[40rem] mx-auto xl:mx-0">
                  {aboutData.infos.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center gap-4 xl:justify-start"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
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
  );
}

export default Page;
