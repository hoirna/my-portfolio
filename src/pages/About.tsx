import { useTheme } from "@/context/ThemeContext"; // Adjust path as needed
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  const { theme } = useTheme();

  const skillCategories = {
    Frontend: ["HTML", "CSS", "Vue 3", "Next.js", "Tailwind CSS"],
    Backend: ["Node.js", "TypeScript", "SQL"],
    DevOps: ["Docker", "AWS", "Vercel"],
    "Tools & Platforms": ["Directus"],
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const skillCardVariants = {
    rest: { scale: 1, rotate: 0, boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)" },
    hover: {
      scale: 1.1,
      rotate: 2,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <main
      className={`min-h-screen py-20 px-6 sm:px-10 lg:px-20 ${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-900 via-indigo-950 to-black text-white"
          : "bg-gradient-to-br from-indigo-50 via-white to-purple-100 text-gray-900"
      } transition-colors duration-500 overflow-hidden`}
    >
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto text-center relative"
      >
        {/* Cool Background Effect */}
        <div
          className={`absolute inset-0 -z-10 ${
            theme === "dark"
              ? "bg-gradient-to-r from-indigo-900/20 to-purple-900/20"
              : "bg-gradient-to-r from-indigo-200/20 to-purple-200/20"
          } blur-3xl rounded-full transform scale-150 opacity-50`}
        />

        {/* Profile Image */}
        <motion.div
          variants={itemVariants}
          className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-10 rounded-full overflow-hidden border-4 border-indigo-500 dark:border-indigo-400 shadow-lg transition-transform duration-500 hover:scale-110 hover:rotate-3 relative z-10"
          whileHover={{ boxShadow: "0 0 20px rgba(79, 70, 229, 0.5)" }}
        >
          <Image
            src="/images/Mypic.png"
            alt="Seng Hoirna"
            className="w-full h-full object-cover"
            width={300}
            height={300}
            priority
          />
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className={`text-5xl sm:text-6xl font-extrabold mb-6 bg-clip-text text-transparent ${
            theme === "dark"
              ? "bg-gradient-to-r from-indigo-400 to-purple-500"
              : "bg-gradient-to-r from-indigo-600 to-purple-700"
          } tracking-tight drop-shadow-md`}
        >
          About Me
        </motion.h1>

        {/* Introduction */}
        <motion.p
          variants={itemVariants}
          className={`text-lg sm:text-xl mb-12 max-w-3xl mx-auto leading-relaxed ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          } font-medium`}
        >
          Hey there! I’m{" "}
          <span className="font-bold text-indigo-500 dark:text-indigo-400 drop-shadow-sm">
            Seng Hoirna
          </span>
          , a tech wizard obsessed with building slick, scalable web apps. I mix code with creativity to craft experiences that pop and perform.
        </motion.p>

        {/* Skills Section */}
        <motion.div variants={itemVariants} className="mb-16 relative z-10">
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-10 bg-clip-text text-transparent ${
              theme === "dark"
                ? "bg-gradient-to-r from-cyan-400 to-purple-500"
                : "bg-gradient-to-r from-indigo-600 to-purple-600"
            } drop-shadow-md`}
          >
            Core Competencies
          </h2>
          <div className="space-y-12">
            {Object.entries(skillCategories).map(([category, skills]) => (
              <motion.div
                key={category}
                className={`p-6 rounded-2xl backdrop-blur-md ${
                  theme === "dark"
                    ? "bg-gray-800/50 border border-gray-700/50"
                    : "bg-white/50 border border-indigo-200/50"
                } shadow-lg transition-all duration-300 hover:shadow-xl`}
                whileHover={{ scale: 1.02 }}
              >
                <h3
                  className={`text-2xl font-semibold mb-6 bg-clip-text text-transparent ${
                    theme === "dark"
                      ? "bg-gradient-to-r from-indigo-400 to-cyan-400"
                      : "bg-gradient-to-r from-indigo-600 to-purple-600"
                  }`}
                >
                  {category}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      variants={skillCardVariants}
                      initial="rest"
                      whileHover="hover"
                      className={`py-3 px-5 rounded-xl text-center font-medium cursor-pointer ${
                        theme === "dark"
                          ? "bg-gradient-to-br from-indigo-600 to-purple-700 text-white"
                          : "bg-gradient-to-br from-indigo-400 to-purple-500 text-white"
                      } shadow-md transition-all duration-300`}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Snapshot */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-6 bg-clip-text text-transparent ${
              theme === "dark"
                ? "bg-gradient-to-r from-cyan-400 to-purple-500"
                : "bg-gradient-to-r from-indigo-600 to-purple-600"
            } drop-shadow-md`}
          >
            Professional Journey
          </h2>
          <p
            className={`text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            } font-medium`}
          >
            With over a year of diving deep into code, I’ve tackled everything from jaw-dropping frontends to rock-solid backends. My mission? To ship digital magic that sparks joy and solves problems.
          </p>
        </motion.div>

        {/* Call-to-Action */}
        <motion.div variants={itemVariants} className="text-center">
          <Link
            href="/contact"
            className={`inline-flex items-center px-8 py-4 ${
              theme === "dark"
                ? "bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700"
                : "bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800"
            } text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(79,70,229,0.5)]`}
          >
            Let’s Build Something Epic
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
      </motion.section>
    </main>
  );
}