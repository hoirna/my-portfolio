import { useTheme } from "@/context/ThemeContext"; // Adjust path as needed
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  const { theme } = useTheme();

  const skillCategories = {
    Frontend: {
      Language: ["HTML", "CSS", "Tailwind CSS"],
      Framework: ["Next.js, Vue 3"],
      Design: ["Figma, Canvax"],
    },
    Backend: {
      Language: ["Node.js", "JavaScript"],
      Framework: ["Express.js, TypeScript"],
      Extra: ["Docker, Directus, SQL Database"],
    },
  };

  const educationBackground = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Royal University of Phnom Penh",
      duration: "2020 - 2024",
      description: "Graduated with honors, specializing in computer Science.",
    },
    {
      degree: "Bachelor Degree in English ",
      institution: "Panha Chiet University",
      duration: "2020 - 2024",
      description: "Graduated with honors, specializing in English.",
    },
    {
      degree: "High School Diploma",
      institution: "Hun Sen Phum Tmei High School",
      duration: "2014 - 2020",
      description: "Focused on mathematics and programming fundamentals.",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const nameVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      y: -3,
      textShadow: "0 0 15px rgba(79, 70, 229, 0.8)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
        yoyo: Infinity,
        repeatDelay: 0.5,
      },
    },
  };

  const skillCardVariants = {
    rest: { scale: 1, y: 0, boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" },
    hover: {
      scale: 1.05,
      y: -5,
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const educationCardVariants = {
    rest: { scale: 1, opacity: 0.9 },
    hover: {
      scale: 1.02,
      opacity: 1,
      boxShadow: "0 10px 25px rgba(79, 70, 229, 0.3)",
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <main
      className={`min-h-screen py-24 px-6 sm:px-12 lg:px-24 ${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-900 via-indigo-950 to-black text-white"
          : "bg-gradient-to-br from-indigo-50 via-white to-purple-100 text-gray-900"
      } transition-colors duration-500`}
    >
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto text-center relative"
      >
        {/* Background Effect */}
        <div
          className={`absolute inset-0 -z-10 ${
            theme === "dark"
              ? "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-transparent to-transparent"
              : "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-200/40 via-transparent to-transparent"
          } blur-3xl scale-125 opacity-70`}
        />

        {/* Profile Image */}
        <motion.div
          variants={itemVariants}
          className="w-40 h-40 sm:w-52 mt-12 sm:h-52 mx-auto mb-12 rounded-full overflow-hidden border-4 border-indigo-500 dark:border-indigo-400 shadow-2xl transition-all duration-500 hover:scale-110 hover:rotate-3 relative z-10"
          whileHover={{ boxShadow: "0 0 30px rgba(79, 70, 229, 0.7)" }}
        >
          <Image
            src="/images/mypicture.png" // Ensure this matches the exact path and case
            alt="Seng Hoirna"
            className="w-full h-full object-cover"
            width={300}
            height={300}
            priority
            onError={() => console.log("Image failed to load")} // Add for debugging
          />
        </motion.div>

        {/* Heading with Animated Name */}
        <motion.h1
          variants={itemVariants}
          className={`text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-10 bg-clip-text text-transparent ${
            theme === "dark"
              ? "bg-gradient-to-r from-indigo-400 via-cyan-300 to-purple-500"
              : "bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800"
          } tracking-tight drop-shadow-xl`}
          style={{ fontFamily: '"Courier New", Courier, monospace' }} // Applied to h1
        >
          My Profile{" "}

        </motion.h1>

        {/* Introduction */}
        <motion.p
          variants={itemVariants}
          className={`text-lg sm:text-xl lg:text-2xl mb-16 max-w-4xl mx-auto leading-relaxed ${
            theme === "dark" ? "text-gray-200" : "text-gray-800"
          } font-medium`}
          style={{ fontFamily: '"Courier New", Courier, monospace' }} // Applied to p
        >
          Hello! I’m{" "}
          <span className="text-green-600 font-bold">
            Seng Hoirna
          </span>
         
    
          , a dedicated full-stack developer with a passion for building
          innovative, user-focused web solutions. I love turning ideas into
          reality with clean code and creative design.
        </motion.p>

        {/* Skills Section */}
        <motion.div variants={itemVariants} className="mb-20 relative z-10">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 bg-clip-text text-transparent ${
              theme === "dark"
                ? "bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-500"
                : "bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-700"
            } drop-shadow-lg`}
            style={{ fontFamily: '"Courier New", Courier, monospace' }} // Applied to h2
          >
            Core Competencies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skillCategories).map(
              ([category, subCategories]) => (
                <motion.div
                  key={category}
                  className={`p-8 rounded-3xl ${
                    theme === "dark"
                      ? "bg-gray-800/80 border border-gray-700/50"
                      : "bg-white/80 border border-indigo-200/50"
                  } shadow-xl backdrop-blur-md transition-all duration-300`}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 12px 25px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  <h3
                    className={`text-2xl sm:text-3xl font-semibold mb-8 bg-clip-text text-transparent ${
                      theme === "dark"
                        ? "bg-gradient-to-r from-indigo-300 to-cyan-400"
                        : "bg-gradient-to-r from-indigo-600 to-purple-600"
                    }`}
                    style={{ fontFamily: '"Courier New", Courier, monospace' }} // Applied to h3
                  >
                    {category}
                  </h3>
                  <div className="space-y-8">
                    {Object.entries(subCategories).map(
                      ([subCategory, skills]) => (
                        <div key={subCategory}>
                          <h4
                            className={`text-xl sm:text-2xl font-medium mb-6 ${
                              theme === "dark"
                                ? "text-gray-300"
                                : "text-gray-700"
                            }`}
                            style={{
                              fontFamily: '"Courier New", Courier, monospace',
                            }} // Applied to h4
                          >
                            {subCategory}
                          </h4>
                          <div className="flex flex-wrap justify-center gap-4">
                            {Array.isArray(skills) ? (
                              skills.map((skill, index) => (
                                <motion.div
                                  key={index}
                                  variants={skillCardVariants}
                                  initial="rest"
                                  whileHover="hover"
                                  className={`py-3 px-6 rounded-full text-center font-medium cursor-pointer ${
                                    theme === "dark"
                                      ? "bg-gradient-to-br from-indigo-600 to-purple-700 text-white"
                                      : "bg-gradient-to-br from-indigo-400 to-purple-500 text-white"
                                  } shadow-md`}
                                  style={{
                                    fontFamily:
                                      '"Courier New", Courier, monospace',
                                  }} // Applied to skill tags
                                >
                                  {skill}
                                </motion.div>
                              ))
                            ) : (
                              <p
                                className="text-red-500"
                                style={{
                                  fontFamily:
                                    '"Courier New", Courier, monospace',
                                }} // Applied to error message
                              >
                                Error: Invalid skills data
                              </p>
                            )}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </motion.div>
              )
            )}
          </div>
        </motion.div>

        {/* Education Background */}
        <motion.div variants={itemVariants} className="mb-20 relative z-10">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 bg-clip-text text-transparent ${
              theme === "dark"
                ? "bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-500"
                : "bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-700"
            } drop-shadow-lg`}
            style={{ fontFamily: '"Courier New", Courier, monospace' }} // Applied to h2
          >
            Education Background
          </h2>
          <div className="space-y-10 max-w-4xl mx-auto">
            {educationBackground.map((edu, index) => (
              <motion.div
                key={index}
                variants={educationCardVariants}
                initial="rest"
                whileHover="hover"
                className={`relative p-6 rounded-2xl ${
                  theme === "dark"
                    ? "bg-gray-800/80 border-l-4 border-indigo-400"
                    : "bg-white/80 border-l-4 border-indigo-500"
                } shadow-lg transition-all duration-300`}
              >
                <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-indigo-500 dark:bg-indigo-400" />
                <h3
                  className={`text-xl sm:text-2xl font-semibold ${
                    theme === "dark" ? "text-indigo-300" : "text-indigo-600"
                  }`}
                  style={{ fontFamily: '"Courier New", Courier, monospace' }} // Applied to h3
                >
                  {edu.degree}
                </h3>
                <p
                  className={`text-lg font-medium ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                  style={{ fontFamily: '"Courier New", Courier, monospace' }} // Applied to institution/duration
                >
                  {edu.institution} | {edu.duration}
                </p>
                <p
                  className={`text-base mt-2 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                  style={{ fontFamily: '"Courier New", Courier, monospace' }} // Applied to description
                >
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Snapshot */}
        <motion.div variants={itemVariants} className="mb-20">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 bg-clip-text text-transparent ${
              theme === "dark"
                ? "bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-500"
                : "bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-700"
            } drop-shadow-lg`}
            style={{ fontFamily: '"Courier New", Courier, monospace' }} // Applied to h2
          >
            Professional Journey
          </h2>
          <p
            className={`text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed ${
              theme === "dark" ? "text-gray-200" : "text-gray-800"
            } font-medium`}
            style={{ fontFamily: '"Courier New", Courier, monospace' }} // Applied to p
          >
            I’m{" "}
            <motion.span
              variants={nameVariants}
              initial="visible"
              whileHover="hover"
              className={`font-bold text-indigo-500 dark:text-indigo-300 cursor-pointer inline-block ${
                theme === "dark"
                  ? "hover:bg-gradient-to-r hover:from-cyan-400 hover:via-purple-400 hover:to-indigo-500"
                  : "hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-cyan-600"
              }`}
              style={{ fontFamily: '"Courier New", Courier, monospace' }} // Applied to nested span
            >
              Seng Hoirna
            </motion.span>
            , and with over a year of experience in the tech industry, I’ve
            delivered high-quality frontends and scalable backends. My mission
            is to craft solutions that are both functional and visually
            stunning.
          </p>
        </motion.div>

        {/* Call-to-Action */}
        <motion.div variants={itemVariants} className="text-center">
          <Link
            href="/contact"
            className={`inline-flex items-center px-10 py-4 ${
              theme === "dark"
                ? "bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700"
                : "bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800"
            } text-white text-lg font-semibold rounded-full shadow-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(79,70,229,0.8)]`}
            style={{ fontFamily: '"Courier New", Courier, monospace' }} // Applied to Link
          >
            Let’s Build Something Epic
            <motion.svg
              className="w-6 h-6 ml-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              animate={{ x: [0, 6, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
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
