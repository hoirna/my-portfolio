import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Projects() {
  const { theme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "AI FARM Robotics Factory Website",
      description:
        "A sleek, scalable e-commerce solution with Next.js, Tailwind CSS, and Stripe for effortless payments.",
      image: "/images/Image01.jpg",
      link: "/projects/ecommerce",
      tags: ["Next.js", "Tailwind CSS", "Typescript"],
      accentColor:
        theme === "dark"
          ? "bg-gradient-to-br from-indigo-600 to-purple-700"
          : "bg-gradient-to-br from-indigo-400 to-purple-500",
    },
    {
      id: 2,
      title: "AI-Powered Chatbot",
      description:
        "A cutting-edge chatbot powered by OpenAI's GPT-4, built for next-level customer interaction.",
      image: "/images/Image02.jpg",
      link: "/projects/chatbot",
      tags: ["OpenAI", "Node.js", "React"],
      accentColor:
        theme === "dark"
          ? "bg-gradient-to-br from-teal-500 to-cyan-600"
          : "bg-gradient-to-br from-teal-300 to-cyan-400",
    },
    {
      id: 3,
      title: "Portfolio Builder",
      description:
        "A vibrant drag-and-drop tool for creatives with real-time collaboration and cloud syncing.",
      image: "/images/Image03.jpg",
      link: "/projects/portfolio-builder",
      tags: ["TypeScript", "Next.js", "Tailwind CSS" ,"Vercel"],
      accentColor:
        theme === "dark"
          ? "bg-gradient-to-br from-pink-600 to-orange-600"
          : "bg-gradient-to-br from-pink-400 to-orange-400",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, x: 100, scale: 0.95 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8 
      } 
    },
    exit: { 
      opacity: 0, 
      x: -100, 
      scale: 0.95,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8 
      } 
    },
  };

  const buttonVariants = {
    hover: { scale: 1.2, opacity: 1 },
    rest: { scale: 1, opacity: 0.7 },
  };

  const dotVariants = {
    active: { scale: 1.5, opacity: 1 },
    inactive: { scale: 1, opacity: 0.5 },
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <main
      className={`mt-16 min-h-screen py-16 px-6 sm:px-10 lg:px-20 ${
        theme === "dark"
          ? "bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white"
          : "bg-gradient-to-b from-gray-100 via-white to-gray-200 text-gray-900"
      } transition-colors duration-500 overflow-hidden`}
    >
      <section className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`text-5xl sm:text-6xl lg:text-7xl font-extrabold text-center mb-4 bg-clip-text text-transparent ${
            theme === "dark"
              ? "bg-gradient-to-r from-cyan-400 to-pink-500"
              : "bg-gradient-to-r from-indigo-600 to-purple-600"
          }`}
        >
          My Projects
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className={`text-lg sm:text-xl ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          } text-center mb-12 max-w-2xl mx-auto`}
        >
          Bold, innovative creations built with passion and precision.
        </motion.p>

        {/* Slider Container */}
        <div className="relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={`w-full max-w-md mx-auto ${projects[currentIndex].accentColor} rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 ${
                  theme === "dark"
                    ? "hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]"
                    : "hover:shadow-[0_0_25px_rgba(0,0,0,0.1)]"
                }`}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                {/* Image with Overlay */}
                <div className="relative w-full h-64 group">
                  <Image
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    width={600}
                    height={400}
                    priority
                  />
                  <motion.div
                    className={`absolute inset-0 ${
                      theme === "dark" ? "bg-black/40" : "bg-gray-900/20"
                    }`}
                    initial={{ opacity: 0.4 }}
                    whileHover={{ opacity: 0.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Content */}
                <motion.div 
                  className="p-6 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <div className="flex flex-wrap gap-2 mb-3">
                    {projects[currentIndex].tags.map((tag, index) => (
                      <motion.span
                        key={index}
                        className={`px-2 py-1 text-xs font-semibold ${
                          theme === "dark"
                            ? "bg-white/20 text-white"
                            : "bg-gray-200 text-gray-800"
                        } rounded-full backdrop-blur-sm`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2 drop-shadow-md">
                    {projects[currentIndex].title}
                  </h2>
                  <p className="text-sm text-gray-200 mb-4 drop-shadow-sm">
                    {projects[currentIndex].description}
                  </p>
                  <Link
                    href={projects[currentIndex].link}
                    className={`inline-flex items-center px-4 py-2 ${
                      theme === "dark"
                        ? "bg-white/10 hover:bg-white/20 text-white"
                        : "bg-gray-900/10 hover:bg-gray-900/20 text-gray-900"
                    } font-semibold rounded-full shadow-md transition-all duration-300`}
                  >
                    Dive In
                    <motion.svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </motion.svg>
                  </Link>
                </motion.div>
                {/* Moved decorative element to bottom-right */}
                <div
                  className={`absolute bottom-0 right-0 w-16 h-16 ${
                    theme === "dark" ? "bg-white/10" : "bg-gray-900/10"
                  } rounded-tl-full transform rotate-45 translate-x-8 translate-y-8`}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <motion.button
            onClick={handlePrev}
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full z-20 ${
              theme === "dark"
                ? "bg-gray-800 hover:bg-gray-700 text-white"
                : "bg-gray-200 hover:bg-gray-300 text-gray-900"
            } transition-colors duration-300`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
          <motion.button
            onClick={handleNext}
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full z-20 ${
              theme === "dark"
                ? "bg-gray-800 hover:bg-gray-700 text-white"
                : "bg-gray-200 hover:bg-gray-300 text-gray-900"
            } transition-colors duration-300`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 gap-3">
            {projects.map((_, index) => (
              <motion.div
                key={index}
                variants={dotVariants}
                animate={index === currentIndex ? "active" : "inactive"}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex
                    ? theme === "dark"
                      ? "bg-white"
                      : "bg-gray-900"
                    : theme === "dark"
                    ? "bg-gray-600"
                    : "bg-gray-400"
                }`}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}