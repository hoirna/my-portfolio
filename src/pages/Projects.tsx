'use client'

import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { FiArrowRight, FiExternalLink, FiGithub } from "react-icons/fi";
import Head from "next/head";

export default function Projects() {
  const { theme } = useTheme();
  const [, setIsHovered] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3], [80, 0]);

  const projects = [
    {
      id: 1,
      title: "AI FARM ROBOTICS",
      description: "A modern, responsive company website for an agricultural robotics business, featuring AI integration and built for scalability and high performance.",
      image: "/images/Image01.jpg",
      link: "http://139.59.230.143:3000/",
      github: "",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Directus"],
      accentColor: "from-indigo-500 to-purple-600",
      textColor: "text-white",
    },
    {
      id: 2,
      title: "My Portfilio",
      description: "An intuitive drag-and-drop tool for creating stunning professional portfolios with real-time previews.",
      image: "/images/Image02.jpg",
      link: "/",
      github: "",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      accentColor: "from-pink-500 to-rose-600",
      textColor: "text-white",
    },
    {
      id: 3,
      title: "School E-commerce",
      description: "A simple e-commerce platform built with vanilla technologies.",
      image: "/images/Image03.jpg",
      link: "",
      github: "",
      tags: ["HTML", "CSS", "JavaScript"],
      accentColor: "from-green-500 to-lime-600",
      textColor: "text-black",
    },
  ];

  const extendedProjects = [...projects, ...projects];

  const cardVariants = {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
    hover: {
      y: -6,
      boxShadow:
        theme === "dark"
          ? "0 12px 24px -6px rgba(255, 255, 255, 0.2)"
          : "0 12px 24px -6px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3, ease: [0.25, 0.8, 0.25, 1] },
    },
  };

  const tagVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.08,
        duration: 0.3,
        ease: [0.25, 0.8, 0.25, 1],
      },
    }),
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2, ease: [0.25, 0.8, 0.25, 1] },
    },
    tap: { scale: 0.95 },
  };

  return (
     <>
    <Head>
        <title>Projects | Seng Hoirna</title>
      </Head>
    <main
      className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 overflow-hidden ${
        theme === "dark" ? "bg-gray-950 text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="fixed inset-0 pointer-events-none">
        <div
          className={`absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-3 ${
            theme === "dark" ? "bg-gray-800/5" : "bg-gray-400/5"
          }`}
        ></div>
        <div
          className={`absolute inset-0 bg-gradient-to-b from-transparent ${
            theme === "dark" ? "to-gray-950/30" : "to-gray-100/30"
          }`}
        ></div>
      </div>

      <section className="max-w-6xl mx-auto mt-24 relative z-10" ref={ref}>
        <motion.div style={{ opacity, y }} className="text-center mb-12">
          <motion.h1
            className={`text-4xl sm:text-5xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent ${
              theme === "dark"
                ? "bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
                : "bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600"
            }`}
          >
            My Projects
          </motion.h1>
          <motion.p
            className={`text-base sm:text-lg max-w-2xl mx-auto leading-relaxed ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            A curated showcase of innovative projects blending design, technology, and creativity.
          </motion.p>
        </motion.div>

        <div
          className="relative overflow-hidden py-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex gap-3 carousel will-change-transform">
            {extendedProjects.map((project, index) => (
              <motion.div
                key={`${project.id}-${index}`}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className={`flex-shrink-0 w-[80%] sm:w-[35%] lg:w-[25%] rounded-2xl overflow-hidden bg-gradient-to-br ${project.accentColor} ${project.textColor} shadow-md`}
              >
                <div className="relative h-40 sm:h-44 lg:h-48 w-full group">
                  <Image
                    src={project.image}
                    alt={project.title ?? "Project image"}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    sizes="(max-width: 768px) 80vw, (max-width: 1200px) 35vw, 25vw"
                    priority={index < 2}
                  />
                  <div
                    className={`absolute inset-0 transition-all duration-300 ${
                      theme === "dark" ? "bg-black/30 group-hover:bg-black/10" : "bg-black/20 group-hover:bg-black/5"
                    }`}
                  />
                </div>

                <div className="p-3 sm:p-4">
                  <div className="flex flex-wrap gap-1 mb-2">
                    {project.tags.map((tag, i) => (
                      <motion.span
                        key={i}
                        custom={i}
                        initial="hidden"
                        animate="visible"
                        variants={tagVariants}
                        className={`px-1.5 py-0.5 text-[9px] font-medium rounded-full backdrop-blur-sm ${
                          theme === "dark" ? "bg-white/10" : "bg-white/15"
                        }`}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold mb-1 tracking-tight">{project.title}</h3>
                  <p className="text-[10px] sm:text-[11px] opacity-85 mb-3 leading-tight">{project.description}</p>

                  <div className="flex gap-1.5">
                    <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                      <Link
                        href={project.link}
                        className={`flex items-center px-2.5 py-1 rounded-full text-[10px] font-medium ${
                          theme === "dark"
                            ? "bg-white/10 hover:bg-white/20"
                            : "bg-white/15 hover:bg-white/25"
                        } transition-colors duration-200 shadow-sm`}
                      >
                        View
                        <FiExternalLink className="ml-1 w-2.5 h-2.5" />
                      </Link>
                    </motion.div>
                    {project.github && (
                      <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                        <Link
                          href={project.github}
                          className={`flex items-center px-2.5 py-1 rounded-full text-[10px] font-medium ${
                            theme === "dark"
                              ? "bg-white/10 hover:bg-white/20"
                              : "bg-white/15 hover:bg-white/25"
                          } transition-colors duration-200 shadow-sm`}
                        >
                          Code
                          <FiGithub className="ml-1 w-2.5 h-2.5" />
                        </Link>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
        >
          <h2
            className={`text-xl sm:text-2xl font-bold mb-5 tracking-tight ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Let&apos;s Build Something Extraordinary
          </h2>
          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Link
              href="/Contact"
              className={`inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold ${
                theme === "dark"
                  ? "bg-emerald-600 hover:bg-emerald-500 text-white"
                  : "bg-emerald-600 hover:bg-emerald-500 text-white"
              } transition-all duration-300 shadow-lg hover:shadow-emerald-500/20 group`}
            >
              Get In Touch
              <FiArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
    </>
  );
}
