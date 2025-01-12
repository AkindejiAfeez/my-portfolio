"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  const size = 300; // Base size for mobile
  const xlSize = 400; // Base size for desktop
  const circleRadius = size / 2 - 10; // Calculate radius for the circle
  const xlCircleRadius = xlSize / 2 - 10;

  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className={`w-[${size}px] h-[${size}px] xl:w-[${xlSize}px] xl:h-[${xlSize}px] mix-blend-lighten absolute`}
        >
          <Image
            src="/assets/photo.png"
            priority
            quality={100}
            fill
            alt=""
            className="object-cover rounded-full" // Ensure it's circular
          />
        </motion.div>

        <motion.svg
          className={`w-[${size}px] xl:w-[${xlSize}px] h-[${size}px] xl:h-[${xlSize}px]`}
          fill="transparent"
          viewBox={`0 0 ${xlSize} ${xlSize}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx={xlSize / 2}
            cy={xlSize / 2}
            r={xlCircleRadius}
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
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
};

export default Photo;
