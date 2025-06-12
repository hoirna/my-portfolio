"use client";

import { useTheme } from "@/context/ThemeContext";
import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { FaVuejs, FaNode, FaGitAlt, FaFigma } from "react-icons/fa";
import {
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiDirectus,
} from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

const HeroSection = () => {
  const { theme } = useTheme();
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentName, setCurrentName] = useState("SENG Hoirna");
  const [nameIndex, setNameIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const words = useMemo(
    () => ["Web Developer", "UI/UX Designer", "Digital Creator"],
    []
  );
  const names = useMemo(() => ["SENG Hoirna", "សេង ហ័រណា"], []);

  const techIcons = [
    {
      name: "Vue.js",
      icon: <FaVuejs />,
      position: { top: "10%", left: "5%" },
      mobilePosition: { top: "5%", left: "5%" },
    },
    {
      name: "Directus",
      icon: <SiDirectus />,
      position: { top: "20%", right: "10%" },
      mobilePosition: { top: "15%", right: "5%" },
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
      position: { bottom: "25%", left: "5%" },
      mobilePosition: { bottom: "20%", left: "5%" },
    },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
      position: { top: "35%", left: "5%" },
      mobilePosition: { top: "25%", left: "5%" },
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      position: { bottom: "35%", right: "15%" },
      mobilePosition: { bottom: "30%", right: "5%" },
    },
    {
      name: "Node.js",
      icon: <FaNode />,
      position: { top: "60%", right: "5%" },
      mobilePosition: { top: "55%", right: "5%" },
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss />,
      position: { bottom: "10%", right: "25%" },
      mobilePosition: { bottom: "5%", right: "15%" },
    },
    {
      name: "Figma",
      icon: <FaFigma />,
      position: { bottom: "15%", left: "20%" },
      mobilePosition: { bottom: "10%", left: "15%" },
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
      position: { top: "50%", left: "10%" },
      mobilePosition: { top: "45%", left: "5%" },
    },
  ];

  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 1500;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const nameTimer = setInterval(() => {
      setNameIndex((prev) => (prev + 1) % names.length);
    }, 5000);
    return () => clearInterval(nameTimer);
  }, [names.length]);

  useEffect(() => {
    setCurrentName(names[nameIndex]);
  }, [nameIndex, names]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const handleTyping = () => {
      const currentWord = words[wordIndex];
      if (isPaused) {
        timer = setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, pauseTime);
        return;
      }
      if (!isDeleting) {
        if (text.length < currentWord.length) {
          setText(currentWord.substring(0, text.length + 1));
        } else {
          setIsPaused(true);
        }
      } else {
        if (text.length > 0) {
          setText(currentWord.substring(0, text.length - 1));
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };
    timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, isPaused, wordIndex, words]);

  const nameVariants = {
    initial: {
      x: 20,
      scale: 1,
      opacity: 0,
      textShadow: "0 0 0 rgba(16, 185, 129, 0)",
    },
    animate: {
      x: 0,
      scale: 1,
      opacity: 1,
      textShadow: [
        "0 0 0 rgba(16, 185, 129, 0)",
        "0 0 10px rgba(16, 185, 129, 0.3)",
        "0 0 20px rgba(16, 185, 129, 0.2)",
        "0 0 30px rgba(16, 185, 129, 0.1)",
      ],
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
        textShadow: {
          duration: 0.8,
          ease: "easeOut",
        },
      },
    },
    exit: {
      x: -20,
      scale: 0.95,
      opacity: 0,
      textShadow: "0 0 0 rgba(16, 185, 129, 0)",
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <>
      <Head>
        <title>Home | Seng Hoirna</title>
      </Head>
      <section className="relative py-12 sm:py-16 lg:py-24 font-sans">
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[size:100px_100px] bg-[linear-gradient(to_right,rgba(16,185,129,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.3)_1px,transparent_1px)]" />
          <div
            className={`absolute inset-0 bg-gradient-to-b from-transparent ${
              theme === "dark" ? "to-gray-950/10" : "to-gray-50/10"
            }`}
          ></div>
        </div>
        <div
          className={`absolute top-1/4 left-0 w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-emerald-200/40 dark:bg-emerald-900/20 blur-[60px] glow glow-loaded`}
        />
        <div
          className={`absolute bottom-1/4 right-0 w-48 h-48 sm:w-72 sm:h-72 rounded-full bg-green-200/40 dark:bg-green-900/20 blur-[60px] glow glow-loaded`}
        />
        <div className="max-w-6xl mt-16 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center justify-center gap-8 sm:gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            <div className="flex-1 max-w-3xl fade-in">
              <div className="text-3xl sm:text-5xl lg:text-5xl font-bold text-gray-00 dark:text-white mb-4 leading-tight">
                <span className="block mb-6">Hey! I&apos;m</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={nameIndex}
                    variants={nameVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600 dark:from-green-400 dark:to-emerald-500"
                    role="heading"
                    aria-level={3}
                    aria-label={`Name: ${currentName}`}
                    style={{
                      fontSize: "inherit",
                      willChange: "transform, opacity, text-shadow",
                    }}
                  >
                    {currentName}
                  </motion.span>
                </AnimatePresence>
              </div>
              <div className="h-12 sm:h-14 flex items-center">
                <span className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 font-medium">
                  I&apos;m skilled with{" "}
                  <span className="relative inline-flex items-center">
                    <span className="min-w-[150px] sm:min-w-[180px] text-gray-800 dark:text-gray-100 text-2xl font-semibold">
                      {text}
                      <span className="cursor inline-block w-[2px] h-6 sm:h-7 bg-emerald-500 ml-1 align-middle animate-pulse"></span>
                    </span>
                  </span>
                </span>
              </div>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md leading-relaxed">
                Crafting exceptional digital experiences with modern web
                technologies and thoughtful user-centered design.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="link-hover">
                  <Link
                    href="/Contact"
                    className="px-6 py-3 font-medium rounded-lg transition-all duration-300 bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white shadow-lg hover:shadow-emerald-500/30 flex items-center gap-2 text-base sm:text-lg"
                  >
                    <span>Get in touch</span>
                  </Link>
                </div>
                <div className="link-hover">
                  <Link
                    href="/Projects"
                    className="px-6 py-3 font-medium rounded-lg transition-all duration-300 border-2 border-emerald-600 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-600/10 dark:hover:bg-emerald-500/10 flex items-center gap-2 text-base sm:text-lg"
                  >
                    <span>View work</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 flex-shrink-0 group fade-in-delay">
              {techIcons.map((tech, index) => (
                <div
                  key={tech.name}
                  className="absolute z-20 cursor-pointer group/icon tech-icon animate-float transition-transform duration-300"
                  style={{
                    ...(isMobile ? tech.mobilePosition : tech.position),
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
                  <div className="relative">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white dark:bg-gray-800 shadow-lg border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center text-lg sm:text-xl md:text-2xl text-emerald-500 dark:text-emerald-400 backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 group-hover/icon:shadow-xl transition-all duration-300">
                      {tech.icon}
                    </div>
                    {!isMobile && (
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs sm:text-sm px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                        {tech.name}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              <div className="relative w-full h-full group">
                <div className="absolute inset-0 rounded-full opacity-70 group-hover:opacity-100 bg-gradient-to-br from-green-300/30 to-emerald-500/30 dark:from-green-400/20 dark:to-emerald-600/20 blur-md group-hover:blur-xl transition-all duration-500" />
                <div className="relative z-10 w-full h-full overflow-hidden rounded-full shadow-2xl border-4 border-white dark:border-gray-800">
                  <Image
                    src="/images/mypics.png"
                    alt="Seng Hoirna - Professional Portfolio"
                    fill
                    sizes="(max-width: 639px) 64vw, (max-width: 1023px) 80vw, 384px"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute inset-[-10px] rounded-full border-2 border-dashed border-emerald-400/50 dark:border-emerald-500/40 animate-rotate" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
