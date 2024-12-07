"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+221) 77 142 04 31",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "makha2007@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Adress",
    description: "Dakar, Senegal",
  },
];

function Page() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-[1.8rem] mx-2">
          {/* form */}
          <div className="xl:w-[58%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-8 bg-primary-800 rounded-xl">
              <h3 className="text-3xl text-accent-400">
                Let&apos;s work together
              </h3>
              <p className="text-white/60">
                Vous pouvez adapter cette approche à d&apos;autres breakpoints
                si vous souhaitez que l&apos;élément devienne absolu{" "}
              </p>
              {/* input */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Input type="firstName" placeholder="Firstname" />
                <Input type="lastName" placeholder="Lastname" />
                <Input type="Email" placeholder="Email address" />
                <Input type="Phone" placeholder="Phone number" />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web">Web Developement</SelectItem>
                    <SelectItem value="design">UI/UX Design</SelectItem>
                    <SelectItem value="seo">SEO</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                className="h-[8rem]"
                placeholder="Short description of your message"
              />
              {/* Btn */}
              <Button size="md" className="max-w-40">
                Send Message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex items-center order-1 mb-8 xl:mb-0 xl:ml-[4rem] xl:order-none">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="h-[2rem] w-[2rem] xl:w-[4rem] xl:h-[4rem] bg-primary-900 text-accent-400 rounded-md flex items-center justify-center">
                      <div className="text-[1.80rem]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Page;
