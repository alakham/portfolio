"use client";

import Image from "next/image";
import { motion } from "framer-motion";

function Photo() {
  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.8, duration: 0.3, ease: "easeIn" },
        }}
        className="relative flex items-center justify-center"
      >
        {/* Circle SVG and Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.3, ease: "easeInOut" },
          }}
          className="relative flex items-center justify-center h-[18rem] w-[18rem] xl:h-[20rem] xl:w-[20rem] mix-blend-lighten"
        >
          {/* Image placed in the center */}
          <Image
            src="/photo1.png"
            priority
            quality={100}
            fill
            alt="Makha Diakhate"
            className="object-contain"
          />
        </motion.div>

        {/* Circle border animation */}
        <motion.svg
          className="absolute w-[18rem] h-[18rem] xl:w-[20rem] xl:h-[20rem]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#D2AF84"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 92", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}

export default Photo;
