"use client";

import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";

const services = [
  {
    num: "01",
    title: "Web Developement",
    description:
      "Build dynamic, responsive websites tailored to your business needs.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Create intuitive and engaging interfaces for exceptional user experiences.",
    href: "",
  },
  {
    num: "03",
    title: "Web Maintenance & Support",
    description:
      "Keep your website running smoothly with regular maintenance, security updates, and technical support for long-term stability and performance",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "Optimize your website to improve visibility and attract more traffic.",
    href: "",
  },
];

function Page() {
  return (
    <>
      <Head>
        <title> Services</title>
        <meta
          name="Contact"
          content="Discover the range of services I offer, including Web Development, SEO, UI/UX Design, and Web Maintenance & Support, tailored to meet your needs and drive results."
        />
      </Head>

      <section className=" flex flex-col items-center justify-center py-4 xl:py-0 mt-[3rem] lg:mt-[4rem] mx-3">
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
    </>
  );
}

export default Page;
