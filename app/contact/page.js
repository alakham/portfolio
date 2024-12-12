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
import { booking } from "@/lib/actions";
import { motion } from "framer-motion";
import Head from "next/head";
import { useState } from "react";
import toast from "react-hot-toast";

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
  // States for form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    service: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle select changes
  const handleSelectChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      service: value,
    }));
  };

  // Form submission
  const handleSubmit = async (formData) => {
    try {
      await booking(formData);
      toast.success(
        "Thank you for your message! We will get back to you shortly."
      );
    } catch (error) {
      toast.error("Failed to send the message. Please try again.");
    } finally {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        service: "",
      });
    }
  };

  return (
    <>
      <Head>
        <title> Contact</title>
        <meta
          name="Contact"
          content="Get in touch with me for collaborations, inquiries, or more information."
        />
      </Head>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="py-6"
      >
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-[1rem] mx-2">
            {/* form */}
            <div className="xl:w-[58%] order-2 xl:order-none">
              <form
                action={handleSubmit}
                className="flex flex-col gap-4 p-4 bg-primary-800 rounded-xl"
              >
                <h3 className="text-3xl text-accent-400">
                  Let&apos;s work together
                </h3>
                <p className="text-white/60">
                  Explore opportunities to collaborate and create impactful web
                  solutions. Let&apos;s build something amazing together.
                </p>
                {/* input */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <Input
                    type="text"
                    placeholder="Firstname"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  <Input
                    type="text"
                    placeholder="Lastname"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                {/* select */}
                <Select
                  name="service"
                  onValueChange={(value) => handleSelectChange(value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="Web Developement">
                        Web Developement
                      </SelectItem>
                      <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                      <SelectItem value="SEO">SEO</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {/* textarea */}
                <Textarea
                  className="h-[8rem]"
                  placeholder="Short description of your message"
                  type="textaera"
                  name="message"
                  value={formData.Textarea}
                  onChange={handleChange}
                />
                {/* Btn */}
                <Button size="md" className="max-w-40">
                  Let&apos;s Collaborate!
                </Button>
              </form>
            </div>
            {/* info */}
            <div className="flex items-center order-1 mb-8 xl:mb-0 xl:ml-[4rem] xl:order-none">
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center gap-6">
                      <div className="h-[3rem] w-[3rem] xl:w-[5rem] xl:h-[5rem] bg-primary-900 text-accent-400 rounded-md flex items-center justify-center">
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
    </>
  );
}

export default Page;
