'use client'

import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiAward } from "react-icons/fi";
import Head from "next/head";

export default function About() {
  const { theme } = useTheme();

  const educationBackground = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Royal University of Phnom Penh",
      duration: "2021 - 2024",
      description: "Graduated with honors, specializing in Software Engineering and Web Technologies.",
      icon: <FiAward className="w-6 h-6 text-emerald-500" />,
      logo: "/images/rupp_logo.png"
    },
    {
      degree: "Bachelor Degree in English",
      institution: "Panha Chiet University",
      duration: "2021 - 2024",
      description: "Graduated with honors, specializing in English Literature and Technical Communication.",
      icon: <FiAward className="w-6 h-6 text-emerald-500" />,
      logo: "/images/pcu_logo.png" 
    },
    {
      degree: "High School Diploma",
      institution: "Hun Sen Phum Tmei High School",
      duration: "2017 - 2020",
      description: "Focused on advanced mathematics, physics, and robotics fundamentals.",
      icon: <FiAward className="w-6 h-6 text-emerald-500" />,
      logo: "/images/hs_logo.jpg"
    },
  ];

  const experience = [
    {
      role: "Junior Web Developer",
      company: "AI FARM CO., LTD.",
      duration: "2025 - Present",
      responsibilities: [
        "Developed and maintained responsive web applications using Next.js and Node.js",
        "Implemented APIs with Headless CMS Directus and PostgresDB",
        "Collaborated with designers to implement UI/UX improvements",
        "Optimized application performance reducing load times by 40%"
      ],
      logo: "/images/ai_farm.jpg"
    },
    {
      role: "Intern Web Development",
      company: "AI FARM CO., LTD.",
      duration: "2024 - 2025",
      responsibilities: [
        "Learn and Developed a small project",
        "Using: Vue 3, Node.Js, Tailwind CSS and Directus build a responsive",
        "Design a UX/UI using Figma"
      ],
      logo: "/images/ai_farm.jpg" 
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.2
      } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1] 
      },
    },
  };

  const cardHoverVariants = {
    hover: {
      y: -8,
      boxShadow: theme === "dark" 
        ? "0 15px 30px rgba(16, 185, 129, 0.15)" 
        : "0 15px 30px rgba(5, 150, 105, 0.1)",
      transition: { 
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <>
      <Head>
        <title>About | My Portfolio</title>
        <meta name="description" content="A showcase of my education and professional experience." />
      </Head>
      <main
        className={`min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden ${
          theme === "dark" ? "bg-gray-950 text-gray-100" : "bg-gray-100 text-gray-900"
        }`}
      >
        <div className="fixed inset-0 pointer-events-none">
          <div
            className={`absolute inset-0 bg-grid-pattern bg-[length:35px_35px] opacity-3 ${
              theme === "dark" ? "bg-gray-800/5" : "bg-gray-400/5"
            }`}
          ></div>
          <div
            className={`absolute inset-0 bg-gradient-to-b from-transparent ${
              theme === "dark" ? "to-gray-950/30" : "to-gray-100/30"
            }`}
          ></div>
        </div>

        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto relative z-10"
        >
          <div className="text-center mt-12 mb-24">
            <motion.div
              variants={itemVariants}
              className="w-40 h-40 sm:w-48 sm:h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-emerald-500 shadow-lg relative group"
            >
              <Image
                src="/images/mypics.png"
                alt="Seng Hoirna"
                width={200}
                height={200}
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-emerald-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r ${
                theme === "dark" 
                  ? "from-emerald-400 to-emerald-600" 
                  : "from-emerald-600 to-emerald-800"
              }`}
            >
              About Me
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className={`text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              I&apos;m <span className="font-semibold text-emerald-500">Seng Hoirna</span>, 
              a passionate full-stack developer with expertise in modern web technologies. 
              I specialize in building performant, accessible, and visually appealing 
              digital experiences that solve real-world problems.
            </motion.p>
          </div>

          <motion.div variants={itemVariants} className="mb-28">
            <motion.div variants={itemVariants} className="text-center mb-16">
              <motion.span
                variants={itemVariants}
                className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${
                  theme === "dark" 
                    ? "bg-emerald-900/30 text-emerald-400" 
                    : "bg-emerald-100 text-emerald-700"
                }`}
              >
                ACADEMIC BACKGROUND
              </motion.span>
              <motion.h2
                variants={itemVariants}
                className={`text-3xl sm:text-4xl font-bold mb-4 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Education & Qualifications
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className={`text-lg max-w-2xl mx-auto ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                My formal education and continuous learning journey that shaped my technical expertise.
              </motion.p>
            </motion.div>

            <div className="relative max-w-4xl mx-auto">
              <div className={`absolute left-8 top-0 h-full w-0.5 ${
                theme === "dark" ? "bg-gray-700" : "bg-gray-200"
              }`}></div>
              
              <div className="space-y-10">
                {educationBackground.map((edu, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative pl-20"
                  >
                    <div className={`absolute left-0 w-6 h-6 rounded-full flex items-center justify-center ${
                      theme === "dark" ? "bg-gray-800 border-2 border-emerald-500" : "bg-white border-2 border-emerald-400"
                    }`}>
                      {edu.icon}
                    </div>
                    
                    <motion.div
                      whileHover="hover"
                      variants={cardHoverVariants}
                      className={`p-6 rounded-xl flex items-start gap-4 ${
                        theme === "dark" 
                          ? "bg-gray-800/50 backdrop-blur-sm border border-gray-700" 
                          : "bg-white border border-gray-100 shadow-sm"
                      }`}
                    >
                      <Image
                        src={edu.logo}
                        alt={`${edu.institution} logo`}
                        width={48}
                        height={48}
                        className={`flex-shrink-0 rounded-lg object-contain ${
                          theme === "dark" ? "bg-gray-700 p-1" : "bg-gray-200 p-1"
                        }`}
                      />
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
                          <h3 className={`text-xl font-semibold ${
                            theme === "dark" ? "text-emerald-400" : "text-emerald-600"
                          }`}>
                            {edu.degree}
                          </h3>
                          <span className={`text-sm mt-1 sm:mt-0 ${
                            theme === "dark" ? "text-gray-400" : "text-gray-500"
                          }`}>
                            {edu.duration}
                          </span>
                        </div>
                        <h4 className={`text-lg font-medium ${
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}>
                          {edu.institution}
                        </h4>
                        <p className={`mt-3 ${
                          theme === "dark" ? "text-gray-400" : "text-gray-600"
                        }`}>
                          {edu.description}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-28">
            <motion.div variants={itemVariants} className="text-center mb-16">
              <motion.span
                variants={itemVariants}
                className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${
                  theme === "dark" 
                    ? "bg-emerald-900/30 text-emerald-400" 
                    : "bg-emerald-100 text-emerald-700"
                }`}
              >
                PROFESSIONAL JOURNEY
              </motion.span>
              <motion.h2
                variants={itemVariants}
                className={`text-3xl sm:text-4xl font-bold mb-4 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Work Experience
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className={`text-lg max-w-2xl mx-auto ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                My professional journey and the companies I‘ve contributed to.
              </motion.p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={{ ...itemVariants, ...cardHoverVariants }}
                  whileHover="hover"
                  className={`p-8 rounded-2xl ${
                    theme === "dark" 
                      ? "bg-gray-800/50 backdrop-blur-sm border border-gray-700" 
                      : "bg-white border border-gray-100 shadow-sm"
                  }`}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      width={48}
                      height={48}
                      className={`flex-shrink-0 rounded-lg object-contain ${
                        theme === "dark" ? "bg-gray-700 p-1" : "bg-gray-200 p-1"
                      }`}
                    />
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                        <div>
                          <h3 className={`text-xl font-semibold ${
                            theme === "dark" ? "text-white" : "text-gray-900"
                          }`}>
                            {exp.role}
                          </h3>
                          <h4 className={`text-lg ${
                            theme === "dark" ? "text-emerald-400" : "text-emerald-600"
                          }`}>
                            {exp.company}
                          </h4>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          theme === "dark" 
                            ? "bg-emerald-900/40 text-emerald-300" 
                            : "bg-emerald-100 text-emerald-700"
                        }`}>
                          {exp.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 pl-16">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className={`flex-shrink-0 mt-1.5 mr-3 ${
                          theme === "dark" ? "text-emerald-400" : "text-emerald-600"
                        }`}>
                          •
                        </span>
                        <span className={`${
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="text-center mb-20"
          >
            <motion.div
              variants={itemVariants}
              className={`p-8 rounded-2xl ${
                theme === "dark" 
                  ? "bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700" 
                  : "bg-gradient-to-br from-gray-50 to-white border border-gray-200"
              }`}
            >
              <motion.h2
                variants={itemVariants}
                className={`text-3xl sm:text-4xl font-bold mb-6 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Let‘s Build Something Amazing
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className={`text-lg max-w-2xl mx-auto mb-8 ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Have a project in mind or want to discuss potential opportunities? 
                I&apos;d love to hear from you.
              </motion.p>
              <motion.div variants={itemVariants}>
                <Link
                  href="/contact"
                  className={`group inline-flex items-center px-8 py-4 rounded-full font-medium text-lg ${
                    theme === "dark"
                      ? "bg-emerald-600 hover:bg-emerald-500 text-white"
                      : "bg-emerald-600 hover:bg-emerald-500 text-white"
                  } transition-all duration-300 shadow-lg hover:shadow-emerald-500/20`}
                >
                  Get In Touch
                  <FiArrowRight className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>
      </main>
    </>
  );
}
