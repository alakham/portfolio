"use client";

import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Developement",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "",
  },
  {
    num: "03",
    title: "Logo Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "",
  },
];

function Page() {
  return (
    <section className=" flex flex-col items-center justify-center py-4 xl:py-0 mt-[2rem] lg:mt-[3rem] mx-3">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[3.5rem]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center flex-1 gap-6 group "
              >
                <div className="flex items-center justify-between w-full">
                  <div className="text-5xl font-extrabold text-transparent transition-all duration-500 text-outline group-hover:text-outline-hover">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[3rem] h-[3rem] bg-accent-300 rounded-full group-hover:bg-accent-500 transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-2xl text-primary-950" />
                  </Link>
                </div>
                <h2 className="text-[2.5rem] font-bold leading-none group-hover:text-accent-500 transition-all duration-500">
                  {service.title}
                </h2>
                <p className="text-white/60">{service.description}</p>
                <div className="w-full border-b border-white/20"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Page;
