"use client";

import { useTheme } from "../context/ThemeContext";
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

const HeroSection = () => {
  const { theme } = useTheme();
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentName, setCurrentName] = useState("SENG Hoirna");
  const [nameIndex, setNameIndex] = useState(0);

  const words = useMemo(
    () => ["Web Developer", "UI/UX Designer", "Digital Creator"],
    []
  );
  const names = useMemo(() => ["SENG Hoirna", "សេង ហ័រណា"], []);

  const techIcons = [
    {
      name: "Vue.js",
      icon: <FaVuejs />,
      position: { top: "10%", left: "clamp(5%, 10vw, 15%)" },
    },
    {
      name: "Directus",
      icon: <SiDirectus />,
      position: { top: "20%", right: "clamp(5%, 10vw, 10%)" },
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
      position: { bottom: "25%", left: "clamp(5%, 10vw, 5%)" },
    },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
      position: { top: "35%", left: "clamp(5%, 10vw, 5%)" },
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      position: { bottom: "35%", right: "clamp(5%, 10vw, 15%)" },
    },
    {
      name: "Node.js",
      icon: <FaNode />,
      position: { top: "60%", right: "clamp(5%, 10vw, 5%)" },
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss />,
      position: { bottom: "10%", right: "clamp(5%, 10vw, 25%)" },
    },
    {
      name: "Figma",
      icon: <FaFigma />,
      position: { bottom: "15%", left: "clamp(15%, 10vw, 20%)" },
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
      position: { top: "50%", left: "clamp(5%, 5vw, 10%)" },
    },
  ];

  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 1500;

  useEffect(() => {
    const nameTimer = setInterval(() => {
      setNameIndex((prev) => {
        const newIndex = (prev + 1) % names.length;
        console.log("nameIndex:", newIndex, "currentName:", names[newIndex]);
        return newIndex;
      });
    }, 5000);
    return () => clearInterval(nameTimer);
  }, [names, names.length]);

  useEffect(() => {
    setCurrentName(names[nameIndex]);
  }, [nameIndex, names]);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];
      if (isPaused) {
        setTimeout(() => {
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
    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timer);
  }, [text, isDeleting, isPaused, wordIndex, words]);

  return (
    <>
      <Head>
        <title>Home | My Portfolio</title>
        <meta
          name="description"
          content="A showcase of my technical skills and expertise."
        />
      </Head>
      <section className="relative py-12 sm:py-16 lg:py-24 mb-1 font-sans">
        <style jsx>{`
          @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Khmer&display=swap");

          @keyframes float {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          @keyframes rotate {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          @keyframes nameSlideIn {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes smoothNameTransition {
            0% {
              opacity: 0;
              transform: translateY(15px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          .animate-rotate {
            animation: rotate 20s linear infinite;
          }
          .fade-in {
            opacity: 0;
            animation: fadeIn 0.8s ease-out forwards;
          }
          .fade-in-delay {
            opacity: 0;
            animation: fadeIn 0.8s ease-out 0.2s forwards;
          }
          .name-transition {
            font-family: "Noto Sans Khmer", Arial, sans-serif;
            display: block;
            width: 100%;
            overflow: visible;
            white-space: nowrap;
            color: #10b981;
            font-size: 3.5rem;
            animation: smoothNameTransition 0.5s ease-in-out forwards;
          }
          @keyframes fadeIn {
            to {
              opacity: 1;
            }
          }
          .tech-icon {
            transform: scale(0.8);
          }
          .tech-icon:hover {
            transform: scale(1.2) rotate(10deg);
          }
          @media (min-width: 640px) {
            .tech-icon {
              transform: scale(1);
            }
          }
          @media (max-width: 639px) {
            .tech-icon:hover {
              transform: scale(1.1);
            }
            .tech-icon div:last-child {
              display: none;
            }
          }
          .glow {
            opacity: 0.3;
            transform: scale(1);
            transition: opacity 2s ease-out;
          }
          .glow-loaded {
            opacity: 0.3;
            transform: scale(1);
          }
        `}</style>
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[size:100px_100px] bg-[linear-gradient(to_right,rgba(16,185,129,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.15)_1px,transparent_1px)] animate-gridPulse" />
          <div
            className={`absolute inset-0 bg-gradient-to-b from-transparent ${
              theme === "dark" ? "to-gray-950/30" : "to-gray-100/30"
            }`}
          ></div>
        </div>
        <div
          className={`absolute top-1/4 left-0 w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-emerald-200/40 dark:bg-emerald-900/20 blur-[60px] glow glow-loaded`}
        />
        <div
          className={`absolute bottom-1/4 right-0 w-48 h-48 sm:w-72 sm:h-72 rounded-full bg-green-200/40 dark:bg-green-900/20 blur-[60px] glow glow-loaded`}
        />
        <div className="max-w-6xl mt-6 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center justify-center gap-8 sm:gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            <div className="flex-1 max-w-2xl fade-in mt-16">
              <h1 className="text-3.5xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                <span className="block text-gray-600 dark:text-gray-400 text-lg sm:text-xl font-medium mb-2 py-2">
                  Hello, I&apos;m
                </span>
                <span
                  key={nameIndex}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600 dark:from-green-400 dark:to-emerald-500 block mb-3 name-transition"
                >
                  {currentName}
                </span>
                <div className="h-12 sm:h-16 flex items-center">
                  <span className="text-2xl sm:text-3xl text-gray-600 dark:text-gray-400 font-medium">
                    I’m skilled with{" "}
                    <span className="relative inline-flex items-center">
                      <span className="typing-text min-w-[200px] sm:min-w-[180px] text-gray-800 dark:text-gray-200 font-semibold">
                        {text}
                        <span className="cursor inline-block w-[3px] h-7 sm:h-9 bg-emerald-500 ml-1 align-middle animate-pulse"></span>
                      </span>
                    </span>
                  </span>
                </div>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-md leading-relaxed">
                Crafting exceptional digital experiences with modern web
                technologies and thoughtful user-centered design.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="link-hover">
                  <Link
                    href="/Contact"
                    className="px-6 py-3 font-medium rounded-lg transition-all duration-300 bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white shadow-lg hover:shadow-emerald-500/30 flex items-center gap-2 text-lg"
                  >
                    <span>Get in touch</span>
                  </Link>
                </div>
                <div className="link-hover">
                  <Link
                    href="/Projects"
                    className="px-6 py-3 font-medium rounded-lg transition-all duration-300 border-2 border-emerald-600 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-600/10 dark:hover:bg-emerald-500/10 flex items-center gap-2 text-lg"
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
                    ...tech.position,
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
                  <div className="relative">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white dark:bg-gray-800 shadow-lg border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center text-xl sm:text-2xl text-emerald-500 dark:text-emerald-400 backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 group-hover/icon:shadow-xl transition-all duration-300">
                      {tech.icon}
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                      {tech.name}
                    </div>
                  </div>
                </div>
              ))}
              <div className="absolute inset-0 rounded-full opacity-70 group-hover:opacity-100 bg-gradient-to-br from-green-400/30 to-emerald-600/30 dark:from-green-500/20 dark:to-emerald-700/20 blur-md group-hover:blur-xl transition-all duration-500" />
              <div className="relative z-10 w-full h-full overflow-hidden rounded-full border-4 border-white dark:border-gray-800 shadow-2xl">
                <Image
                  src="/images/mypics.png"
                  alt="Seng Hoirna - Professional Portfolio"
                  fill
                  sizes="(max-width: 639px) 64vw, (max-width: 1023px) 80vw, 384px"
                  className="object-cover "
                  priority
                />
              </div>
              <div className="absolute inset-[-8px] rounded-full border-2 border-dashed border-emerald-400/50 dark:border-emerald-500/40 animate-rotate" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;