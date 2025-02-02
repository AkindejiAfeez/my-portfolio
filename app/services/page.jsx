"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Delivering high-performance, scalable, and visually appealing websites tailored to your business needs using the latest technologies and industry best practices.",
    href: "https://github.com/AkindejiAfeez?tab=repositories",
    target: "_blank",
  },
  {
    num: "02",
    title: "Mobile App Development",
    description:
      "Creating intuitive and feature-rich mobile applications designed to provide seamless user experiences across iOS and Android platforms.",
    href: "https://github.com/AkindejiAfeez?tab=repositories",
    target: "_blank",
  },
  {
    num: "03",
    title: "Web Design",
    description:
      "Crafting engaging and user-friendly web designs that ensure aesthetic appeal, usability, and brand consistency for a powerful online presence.",
    href: "https://github.com/AkindejiAfeez?tab=repositories",
    target: "_blank",
  },
  {
    num: "04",
    title: "Cloud Integration",
    description:
      "Providing seamless cloud integration services to optimize workflows, enhance collaboration, and ensure secure access to resources from anywhere.",
    href: "https://github.com/AkindejiAfeez?tab=repositories",
    target: "_blank",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div
                    className="text-5xl font-extrabold text-outline 
                                    text-transparent group-hover:text-outline-hover transition-all duration-500"
                  >
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full
                                    bg-white group-hover:bg-accent transition-all duration-500 flex
                                    justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2
                  className="text-[42px] font-bold leading-none text-white
                                group-hover:text-accent transition-all duration-500"
                >
                  {service.title}
                </h2>

                <p className="text-white/60">{service.description}</p>

                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
