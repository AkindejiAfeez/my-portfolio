"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Machine Learning",
    title: "Facial Recognition Attendance System",
    description:
      "A Python-based facial recognition system designed to automate attendance marking by identifying faces using advanced computer vision libraries such as OpenCV. This system ensures accurate and efficient attendance tracking for classrooms or workplaces.",
    stack: [
      { name: "Python" },
      { name: "OpenCV" },
      { name: "Machine Learning" },
    ],
    image: "/assets/facialreg.png",
    live: "",
    github: "https://github.com/AkindejiAfeez?tab=repositories",
    target: "_blank",
  },
  {
    num: "02",
    category: "Frontend",
    title: "Admin Dashboard",
    description:
      "A sleek and interactive admin dashboard built with React JSX and SCSS, featuring data visualization, user management, and customizable widgets for monitoring and controlling application metrics.",
    stack: [{ name: "React" }, { name: "JSX" }, { name: "SCSS" }],
    image: "/assets/admin.png",
    live: "",
    github: "https://github.com/AkindejiAfeez?tab=repositories",
    target: "_blank",
  },
  {
    num: "03",
    category: "Full Stack",
    title: "E-commerce Website",
    description:
      "An e-commerce application developed using Flutter, enabling users to browse products, add items to a cart, and make secure payments. The app focuses on seamless UI/UX and integrates a robust backend for order processing.",
    stack: [{ name: "Flutter" }, { name: "Dart" }, { name: "Firebase" }],
    image: "/assets/tripguide.png",
    live: "",
    github: "https://github.com/AkindejiAfeez?tab=repositories",
    target: "_blank",
  },
  {
    num: "04",
    category: "Frontend",
    title: "Real Estate App",
    description:
      "A real estate application built with Flutter that allows users to explore property listings, view detailed information, and contact agents. The app delivers an intuitive experience and features search and filter functionality for convenience.",
    stack: [{ name: "Flutter" }, { name: "Dart" }, { name: "Firebase" }],
    image: "/assets/realestate.png",
    live: "",
    github: "https://github.com/AkindejiAfeez?tab=repositories",
    target: "_blank",
  },
  {
    num: "05",
    category: "Frontend",
    title: "Fitbit, Nutrition, and Home Workout Website",
    description:
      "A fitness-focused website built with React and Tailwind CSS that provides users with personalized workout routines, nutrition plans, and activity tracking. The platform emphasizes a modern design and easy navigation for a holistic fitness experience.",
    stack: [{ name: "React" }, { name: "Tailwind CSS" }, { name: "APIs" }],
    image: "/assets/ATRIUM.png",
    live: "",
    github: "https://github.com/AkindejiAfeez?tab=repositories",
    target: "_blank",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update projects state based on current slide index
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div
            className="w-full xl:w-[50%] xl:h-[460px] flex flex-col
                    xl:justify-between order-2 xl:order-none"
          >
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2
                className="text-[42px] font-bold leading-none text-white 
                            group-hover:text-accent transition-all duration-500 capitalize"
              >
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        className="w-[70px] h-[70px] rounded-full
                                        bg-white/5 flex justify-center items-center group"
                      >
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github link */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        className="w-[70px] h-[70px] rounded-full
                                        bg-white/5 flex justify-center items-center group"
                      >
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
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
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image src={project.image} fill alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none "
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
