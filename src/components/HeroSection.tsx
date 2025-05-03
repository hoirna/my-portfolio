"use client";

import { useTheme } from "../context/ThemeContext";
import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  useTheme();
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const words = useMemo(
    () => [
      "Web Developer",
      "UI/UX Designer",
      "Creative Coder",
      "Problem Solver",
    ],
    []
  );

  // Blink cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 1500;

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
    <section className="relative py-24 sm:py-32 lg:py-40 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-[3%] bg-[url('/images/dot-pattern.svg')]" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-green-100/30 dark:bg-emerald-900/20 blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-emerald-100/30 dark:bg-green-900/20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 xl:gap-24">
          {/* Text content */}
          <div className="flex-1 max-w-2xl">
            <div className="mb-6">
              <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-green-100/80 dark:bg-green-900/50 text-green-700 dark:text-green-200 backdrop-blur-sm">
                Welcome to my portfolio
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              <span className="block">Hello, I&apos;m</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600 dark:from-green-400 dark:to-emerald-500">
                Seng Hoirna
              </span>
              <div className="h-16 sm:h-20 flex items-center mt-4">
                <span className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 font-medium">
                  I am a{" "}
                  <span className="relative">
                    <span className="typing-text inline-block min-w-[120px] text-gray-800 dark:text-gray-200 font-semibold">
                      {text}
                      {showCursor && (
                        <span className="cursor inline-block w-[2px] h-8 bg-green-500 dark:bg-green-400 ml-1 align-middle"></span>
                      )}
                    </span>
                  </span>
                </span>
              </div>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-lg leading-relaxed">
              I specialize in creating responsive, user-friendly web
              applications with modern technologies.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-8 py-3.5 font-medium rounded-full shadow-lg transition-all duration-300
                bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700
                text-white hover:shadow-green-500/30 transform hover:-translate-y-0.5"
              >
                Contact Me
              </Link>
              <Link
                href="/projects"
                className="px-8 py-3.5 font-medium rounded-full transition-all duration-300
                border-2 border-green-500 text-green-600 dark:text-green-400 hover:bg-green-500/10
                transform hover:-translate-y-0.5"
              >
                View Projects
              </Link>
            </div>
          </div>

          <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 flex-shrink-0 group">
            <div
              className={`absolute inset-0 rounded-full opacity-70 group-hover:opacity-100 
              bg-gradient-to-br from-green-400/30 to-emerald-600/30 dark:from-green-500/20 dark:to-emerald-700/20 
              blur-md group-hover:blur-lg transition-all duration-500`}
            ></div>

            <div className="relative z-10 w-full h-full overflow-hidden rounded-full border-4 border-white dark:border-gray-800 shadow-xl">
              <Image
                src="/images/mypicture.png"
                alt="Seng Hoirna - Professional Portfolio"
                width={320}
                height={320}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                priority
              />
            </div>

            <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-green-400/10 dark:bg-emerald-500/10 blur-sm"></div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .cursor {
          display: inline-block;
          animation: blink 0.9s ease infinite;
          vertical-align: middle;
          margin-left: 2px;
        }
       
        
      `}</style>
    </section>
  );
};

export default HeroSection;
