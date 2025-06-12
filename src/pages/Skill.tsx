"use client";

import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import Head from "next/head";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiGit,
  SiFigma,
  SiTailwindcss,
} from "react-icons/si";

const skillsData = [
  {
    name: "HTML",
    level: 85,
    description: "Building semantic, accessible web structures with HTML5",
    icon: SiHtml5,
  },
  {
    name: "CSS",
    level: 85,
    description: "Creating responsive layouts with Tailwind and animations",
    icon: SiCss3,
  },
  {
    name: "JavaScript",
    level: 70,
    description: "Crafting dynamic interfaces with ES6+ and modern APIs",
    icon: SiJavascript,
  },
  {
    name: "Node.js",
    level: 65,
    description: "Developing scalable backend APIs and services",
    icon: SiNodedotjs,
  },
  {
    name: "TypeScript",
    level: 86,
    description: "Ensuring robust, type-safe codebases",
    icon: SiTypescript,
  },
  {
    name: "Next.js",
    level: 85,
    description: "Optimizing SSR and SSG for fast, SEO-friendly apps",
    icon: SiNextdotjs,
  },
  {
    name: "Tailwind CSS",
    level: 85,
    description: "Streamlining responsive design with utility-first CSS",
    icon: SiTailwindcss,
  },
  {
    name: "Git",
    level: 90,
    description: "Mastering version control for team collaboration",
    icon: SiGit,
  },
  {
    name: "Figma",
    level: 85,
    description: "Designing intuitive UI/UX prototypes and wireframes",
    icon: SiFigma,
  },
];

const Skills = () => {
  const { theme } = useTheme();

  return (
    <>
      <Head>
        <title>Skills | Seng Hoirna</title>
      </Head>
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
      <section
        className={`min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden ${
          theme === "dark"
            ? "bg-gray-950 text-gray-100"
            : "bg-gray-100 text-gray-900"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-4 mt-20">
              My{" "}
              <span
                className={`bg-clip-text text-transparent bg-gradient-to-r ${
                  theme === "dark"
                    ? "from-green-400 to-emerald-500"
                    : "from-green-500 to-emerald-600"
                }`}
              >
                Skills
              </span>
            </h1>
            <p
              className={`text-base sm:text-lg max-w-2xl mx-auto ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Discover the technologies I specialize in and my proficiency
              levels
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {skillsData.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                  }}
                  className={`p-6 rounded-xl border group ${
                    theme === "dark"
                      ? "bg-gray-800/50 border-gray-700"
                      : "bg-white border-gray-200"
                  } transition-shadow duration-300`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`${
                        theme === "dark" ? "text-green-400" : "text-emerald-600"
                      } transition-colors duration-300 group-hover:text-emerald-500`}
                    >
                      <Icon className="w-10 h-10" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{skill.name}</h3>
                      <p
                        className={`text-sm ${
                          theme === "dark" ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {skill.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span
                        className={`text-xs font-medium ${
                          theme === "dark" ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        Proficiency
                      </span>
                      <span
                        className={`text-sm font-mono ${
                          theme === "dark"
                            ? "text-green-400"
                            : "text-emerald-600"
                        } group-hover:text-emerald-500`}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className={`w-full h-3 rounded-full overflow-hidden ${
                        theme === "dark" ? "bg-gray-700" : "bg-gray-200"
                      }`}
                      role="progressbar"
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`Proficiency in ${skill.name}: ${skill.level}%`}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1.5,
                          delay: index * 0.1,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className={`h-full rounded-full ${
                          theme === "dark"
                            ? "bg-gradient-to-r from-green-400 to-emerald-500"
                            : "bg-gradient-to-r from-green-500 to-emerald-600"
                        } group-hover:bg-gradient-to-r group-hover:from-emerald-500 group-hover:to-cyan-500 transition-all duration-300`}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className={`mt-16 p-6 rounded-xl border ${
              theme === "dark"
                ? "bg-gray-800/50 border-gray-700"
                : "bg-white border-gray-200"
            }`}
          >
            <h2
              className={`text-2xl font-semibold mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Lifelong Learning
            </h2>
            <p
              className={`text-base ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              } mb-4`}
            >
              I’m dedicated to mastering new technologies through hands-on
              projects, open-source contributions, and staying updated with
              industry trends.
            </p>
            <div
              className={`text-sm px-3 py-1.5 rounded-full inline-block font-medium ${
                theme === "dark"
                  ? "bg-emerald-900/30 text-green-400"
                  : "bg-emerald-100 text-emerald-600"
              }`}
            >
              Currently exploring: Advanced TypeScript Patterns & React Query
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Skills;
