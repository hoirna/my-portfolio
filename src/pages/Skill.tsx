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
  SiTailwindcss
} from "react-icons/si";

const skillsData = [
  {
    name: "HTML",
    level: 85,
    description: "Semantic markup and accessibility best practices",
    icon: SiHtml5,
  },
  {
    name: "CSS",
    level: 85,
    description: "Modern layouts, animations, and Tailwind expertise",
    icon: SiCss3,
  },
  {
    name: "JavaScript",
    level: 70,
    description: "ES6+ features and functional programming",
    icon: SiJavascript,
  },
  {
    name: "Node.js",
    level: 65,
    description: "Building scalable backend services and APIs",
    icon: SiNodedotjs,
  },
  {
    name: "TypeScript",
    level: 86,
    description: "Type-safe development and interfaces",
    icon: SiTypescript,
  },
  {
    name: "Next.js",
    level: 85,
    description: "Server-side rendering and static site generation",
    icon: SiNextdotjs,
  },
  {
   name: "Tailwind CSS",
   level: 85,
   description:"Responsiveness with better style",
   icon: SiTailwindcss,
  },
  {
    name: "Git",
    level: 90,
    description: "Version control and team collaboration",
    icon: SiGit,
  },
  {
    name: "Figma",
    level: 85,
    description: "UI/UX design and prototyping",
    icon: SiFigma,
  },
];

const Skills = () => {
  const { theme } = useTheme();

  return (
    <>
      <Head>
        <title>Skill | My Portfolio</title>
        <meta
          name="description"
          content="A showcase of my technical skills and expertise."
        />
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
        className={`min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 ${
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              My{" "}
              <span
                className={`bg-clip-text text-transparent bg-gradient-to-r ${
                  theme === "dark"
                    ? "from-emerald-400 to-cyan-400"
                    : "from-emerald-600 to-cyan-600"
                }`}
              >
                Skills
              </span>
            </h1>
            <p
              className={`text-lg max-w-2xl mx-auto ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Technologies I work with and my proficiency level in each
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={`p-6 rounded-xl ${
                    theme === "dark" ? "bg-gray-800/50" : "bg-white"
                  }`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`${
                        theme === "dark"
                          ? "text-emerald-400"
                          : "text-emerald-600"
                      }`}
                    >
                      <Icon className="w-8 h-8" />
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
                            ? "text-emerald-400"
                            : "text-emerald-600"
                        }`}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className={`w-full h-2 rounded-full overflow-hidden ${
                        theme === "dark" ? "bg-gray-700" : "bg-gray-200"
                      }`}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className={`h-full rounded-full ${
                          theme === "dark"
                            ? "bg-gradient-to-r from-emerald-400 to-cyan-400"
                            : "bg-green-500"
                        }`}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className={`mt-16 p-6 rounded-xl ${
              theme === "dark"
                ? "bg-gray-800/50 border border-gray-700"
                : "bg-white border border-gray-200"
            }`}
          >
            <h2
              className={`text-2xl font-semibold mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Continuous Learning
            </h2>
            <p
              className={`${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              } mb-4`}
            >
              I&#39;m constantly expanding my skill set through personal
              projects, online courses, and staying updated with the latest
              industry trends.
            </p>
            <div
              className={`text-sm px-3 py-1.5 rounded-full inline-block ${
                theme === "dark"
                  ? "bg-emerald-900/30 text-emerald-400"
                  : "bg-emerald-100 text-emerald-700"
              }`}
            >
              Currently learning: Advanced TypeScript Patterns
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Skills;