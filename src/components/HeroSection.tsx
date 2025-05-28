'use client';

import { useTheme } from '../context/ThemeContext';
import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Head from 'next/head';
import {
  FaVuejs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
} from 'react-icons/si';

const HeroSection = () => {
  const { theme } = useTheme();
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const words = useMemo(
    () => ['Web Developer', 'UI/UX Designer', 'Digital Creator'],
    []
  );

  const techIcons = [
    { name: 'Vue.js', icon: <FaVuejs />, position: { top: '10%', left: '15%' }, delay: 0 },
    { name: 'React', icon: <FaReact />, position: { top: '20%', right: '10%' }, delay: 0.5 },
    { name: 'Next.js', icon: <SiNextdotjs />, position: { bottom: '25%', left: '5%' }, delay: 1 },
    { name: 'JavaScript', icon: <SiJavascript />, position: { top: '35%', left: '5%' }, delay: 1.5 },
    { name: 'TypeScript', icon: <SiTypescript />, position: { bottom: '35%', right: '15%' }, delay: 2 },
    { name: 'Node.js', icon: <FaNodeJs />, position: { top: '60%', right: '5%' }, delay: 2.5 },
    { name: 'Tailwind', icon: <SiTailwindcss />, position: { bottom: '10%', right: '25%' }, delay: 3 },
    { name: 'Git', icon: <FaGitAlt />, position: { top: '50%', left: '-5%' }, delay: 3.5 },
  ];

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
    <>
      <Head>
        <title>Home | My Portfolio</title>
        <meta
          name="description"
          content="A showcase of my technical skills and expertise."
        />
      </Head>
      <section className={`relative py-20 sm:py-28 lg:py-32 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden`}>
        <div className="fixed inset-0 pointer-events-none">
          <div
            className={`absolute inset-0 bg-[size:90px_90px] bg-[linear-gradient(to_right,rgba(16,185,129,0.4)_2px,transparent_2px),linear-gradient(to_bottom,rgba(16,185,129,0.4)_2px,transparent_2px)] opacity-25 dark:opacity-15 animate-gridPulse ${
              theme === 'dark' ? 'bg-gray-800/5' : 'bg-gray-400/5'
            }`}
          ></div>
          <div
            className={`absolute inset-0 bg-gradient-to-b from-transparent ${
              theme === 'dark' ? 'to-gray-950/30' : 'to-gray-100/30'
            }`}
          ></div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-emerald-200/40 dark:bg-emerald-900/20 blur-[80px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: 'easeOut' }}
          className="absolute bottom-1/4 -right-20 w-72 h-72 rounded-full bg-green-200/40 dark:bg-green-900/20 blur-[80px]"
        />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 xl:gap-20">
            <div className="flex-1 max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                  <span className="block text-gray-600 dark:text-gray-400 text-lg sm:text-xl font-medium mb-2">
                    Hello, I&apos;m
                  </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-700 dark:from-green-500 dark:to-emerald-600 block mb-4">
                    Seng Hoirna
                  </span>
                  <div className="h-16 sm:h-20 flex items-center">
                    <span className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 font-medium">
                      I Passionate With{' '}
                      <span className="relative inline-flex items-center">
                        <span className="typing-text min-w-[180px] text-gray-800 dark:text-gray-200 font-semibold">
                          {text}
                          <span className="cursor inline-block w-[2px] h-8 bg-emerald-500 ml-1 align-middle animate-pulse"></span>
                        </span>
                      </span>
                    </span>
                  </div>
                </h1>

                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-lg leading-relaxed">
                  Crafting exceptional digital experiences with modern web technologies and thoughtful user-centered design.
                </p>

                <div className="flex flex-wrap gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href="/Contact"
                      className="px-8 py-3.5 font-medium rounded-lg transition-all duration-300 bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white shadow-lg hover:shadow-emerald-500/30 flex items-center gap-2"
                    >
                      <span>Get in touch</span>
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href="/Projects"
                      className="px-8 py-3.5 font-medium rounded-lg transition-all duration-300 border-2 border-emerald-600 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-600/10 dark:hover:bg-emerald-500/10 flex items-center gap-2"
                    >
                      <span>View work</span>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 flex-shrink-0 group"
            >
              {techIcons.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0, y: [0, -10, 0] }}
                  transition={{
                    delay: tech.delay,
                    duration: 0.8,
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      delay: index * 0.2
                    }
                  }}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="absolute z-20 cursor-pointer group/icon"
                  style={tech.position}
                >
                  <div className="relative">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white dark:bg-gray-800 shadow-lg border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center text-xl sm:text-2xl text-emerald-500 dark:text-emerald-400 backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 group-hover/icon:shadow-xl transition-all duration-300">
                      {tech.icon}
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                      {tech.name}
                    </div>
                  </div>
                </motion.div>
              ))}

              <div className="absolute inset-0 rounded-full opacity-70 group-hover:opacity-100 bg-gradient-to-br from-green-400/30 to-emerald-600/30 dark:from-green-500/20 dark:to-emerald-700/20 blur-md group-hover:blur-xl transition-all duration-500" />

              <div className="relative z-10 w-full h-full overflow-hidden rounded-full border-4 border-white dark:border-gray-800 shadow-2xl">
                <Image
                  src="/images/mypics.png"
                  alt="Seng Hoirna - Professional Portfolio"
                  width={384}
                  height={384}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-emerald-400/30 dark:border-emerald-500/20"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
