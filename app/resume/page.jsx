"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiFlutter } from "react-icons/si";

const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium iure sunt et nemo quisquam placeat fugiat.",

  info: [
    {
      fieldName: "Name",
      fieldValue: "Afeez Akindeji",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+234) 810 2667 505",
    },
    {
      fieldName: "Experience",
      fieldValue: "5 Years",
    },
    {
      fieldName: "Instagram",
      fieldValue: "iamyungfizz",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Nigerian",
    },
    {
      fieldName: "Email",
      fieldValue: "harpheez28@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "English",
    },
  ],
};

const experience = {
  icon: "",
  title: "My experience",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium iure sunt et nemo quisquam placeat fugiat.",
  items: [
    {
      company: "Bau Cyprus",
      Position: "Front-End Developer Intern",
      duration: "Summer 2023",
    },
    {
      company: "E-commerce Start-Up",
      Position: "Freelance Web Development",
      duration: "2022",
    },
    {
      company: "Center For AI Research",
      Position: "Developer AI ChatBot ",
      duration: "2023",
    },
    {
      company: "University College of Applied Science",
      Position: "Developer Smart Security System",
      duration: "2024",
    },
    {
      company: "Center For AI Research",
      Position: "Developer AI ChatBot ",
      duration: "2023",
    },
    {
      company: "University College of Applied Science",
      Position: "Developer Smart Security System",
      duration: "2024",
    },
    {
      company: "Center For AI Research",
      Position: "Developer AI ChatBot ",
      duration: "2023",
    },
    {
      company: "University College of Applied Science",
      Position: "Developer Smart Security System",
      duration: "2024",
    },
  ],
};

const education = {
  icon: "",
  title: "My experience",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium iure sunt et nemo quisquam placeat fugiat.",
  items: [
    {
      Institution: "BAU Cyprus University",
      degree: "B.sc Computer Engineering",
      duration: "2020 - 2024",
    },

    {
      Institution: "Udemy",
      degree: "Full Stack Web Development",
      duration: "2024",
    },
    {
      Institution: "Codeacademy",
      degree: "Front-End Web Development",
      duration: "2023",
    },
    {
      Institution: "Online Course",
      degree: "Back-End Web Development and APIs",
      duration: "2022",
    },
    {
      Institution: "Udemy",
      degree: "Full Stack Web Development",
      duration: "2024",
    },
    {
      Institution: "Codeacademy",
      degree: "Front-End Web Development",
      duration: "2023",
    },
    {
      Institution: "Online Course",
      degree: "Back-End Web Development and APIs",
      duration: "2022",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium iure sunt et nemo quisquam placeat fugiat.",
  skillList: [
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
      name: "Javascript",
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
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <SiFlutter />,
      name: "flutter.dart",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">

            {/* experience */}

            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto  xl:mx-0">
                {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li 
                        key={index} 
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-x flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px]
                          text-center lg:text-left">
                            {item.Position}
                            </h3>
                          <div className="flex items-center gap-3">

                            <span className="w-[6px] h-[6px] rounded-full
                          bg-accent"></span>
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


            <TabsContent value="education" className="w-full ">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto  xl:mx-0">
                {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li 
                        key={index} 
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-x flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px]
                          text-center lg:text-left">
                            {item.degree}
                            </h3>
                          <div className="flex items-center gap-3">

                            <span className="w-[6px] h-[6px] rounded-full
                          bg-accent"></span>
                            <p className="text-white/60">{item.Institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>  
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return ( 
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent
                            transition-all duration-300">
                              {skill.icon}
                              </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w[600px] text-white/60 mx-auto xl:mx-0">
                {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index}
                      className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
              
            </TabsContent>
            </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
