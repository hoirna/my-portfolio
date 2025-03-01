import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";

export default function Projects() {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  const projects = [
    {
      id: 1,
      title: "AI FARM Robotics Factory Website",
      description: "A sleek, scalable e-commerce solution with Next.js, Tailwind CSS, and Stripe.",
      image: "/images/Image01.jpg",
      link: "/projects/ecommerce",
      tags: ["Next.js", "Tailwind CSS", "Typescript"],
      accentColor:
        theme === "dark" ? "bg-gradient-to-br from-indigo-600 to-purple-700" : "bg-gradient-to-br from-indigo-400 to-purple-500",
    },
    {
      id: 2,
      title: "AI-Powered Chatbot",
      description: "A cutting-edge chatbot powered by GPT-4 for seamless customer interaction.",
      image: "/images/Image02.jpg",
      link: "/projects/chatbot",
      tags: ["OpenAI", "Node.js", "React"],
      accentColor:
        theme === "dark" ? "bg-gradient-to-br from-teal-500 to-cyan-600" : "bg-gradient-to-br from-teal-300 to-cyan-400",
    },
    {
      id: 3,
      title: "Portfolio Builder",
      description: "A vibrant drag-and-drop tool for creatives with real-time collaboration.",
      image: "/images/Image03.jpg",
      link: "/projects/portfolio-builder",
      tags: ["TypeScript", "Next.js", "Tailwind CSS", "Vercel"],
      accentColor:
        theme === "dark" ? "bg-gradient-to-br from-pink-600 to-orange-600" : "bg-gradient-to-br from-pink-400 to-orange-400",
    },
  ];

  // Duplicate projects for seamless looping
  const extendedProjects = [...projects, ...projects];
  const scrollDistance = `-${projects.length * 33.33}%`; // Total distance for one loop

  // Control animation with useAnimation
  useEffect(() => {
    if (isHovered) {
      // Smoothly stop the animation
      controls.stop();
    } else {
      // Start infinite scrolling
      controls.start({
        x: scrollDistance,
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: projects.length * 5, // 5 seconds per project
            ease: "linear",
          },
        },
      });
    }
  }, [isHovered, controls, projects.length, scrollDistance]);

  const cardVariants = {
    hover: {
      scale: 1.03,
      boxShadow: theme === "dark" ? "0 0 20px rgba(255,255,255,0.4)" : "0 0 20px rgba(0,0,0,0.25)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <main
      className={`min-h-screen py-20 px-6 sm:px-10 lg:px-20 ${
        theme === "dark"
          ? "bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white"
          : "bg-gradient-to-b from-gray-100 via-white to-gray-200 text-gray-900"
      } transition-colors duration-500 overflow-hidden`}
    >
      <section className="max-w-7xl mt-8 mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`text-4xl sm:text-6xl lg:text-7xl font-extrabold text-center mb-4 bg-clip-text text-transparent ${
            theme === "dark"
              ? "bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500"
              : "bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-700"
          }`}
          style={{ fontFamily: '"Courier New", Courier, monospace' }} // Applied to h1
        >
          My Projects
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className={`text-lg sm:text-xl ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          } text-center mb-16 max-w-2xl mx-auto`}
          style={{ fontFamily: '"Courier New", Courier, monospace' }} // Applied to p
        >
          A showcase of innovation and craftsmanship, endlessly scrolling for your inspiration.
        </motion.p>

        {/* Endless Scroll Container */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6" // Space between cards
            animate={controls} // Controlled by useAnimation
            initial={{ x: 0 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {extendedProjects.map((project, index) => (
              <motion.div
                key={`${project.id}-${index}`} // Unique key for duplicated items
                variants={cardVariants}
                whileHover="hover"
                className={`flex-shrink-0 w-[90%] sm:w-[45%] lg:w-[30%] ${project.accentColor} rounded-3xl shadow-xl overflow-hidden transition-all duration-500`}
              >
                {/* Image */}
                <div className="relative w-full h-full sm:h-[200px] lg:h-[250px] group">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-300"
                    width={600}
                    height={400}
                    priority={index < projects.length} // Priority for first set of projects
                  />
                  <motion.div
                    className={`absolute inset-0 ${theme === "dark" ? "bg-black/40" : "bg-gray-900/20"}`}
                    initial={{ opacity: 0.5 }}
                    whileHover={{ opacity: 0.2 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 relative z-10">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        className={`px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium ${
                          theme === "dark" ? "bg-white/20 text-white" : "bg-gray-200 text-gray-800"
                        } rounded-full backdrop-blur-sm`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 + tagIndex * 0.1, duration: 0.3 }}
                        style={{ fontFamily: '"Courier New", Courier, monospace' }} // Applied to tags
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  <h2
                    className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 drop-shadow-md"
                    style={{ fontFamily: '"Courier New", Courier, monospace' }} // Applied to h2
                  >
                    {project.title}
                  </h2>
                  <p
                    className="text-xs sm:text-sm lg:text-base text-gray-100 mb-4 drop-shadow-sm"
                    style={{ fontFamily: '"Courier New", Courier, monospace' }} // Applied to description
                  >
                    {project.description}
                  </p>
                  <Link
                    href={project.link}
                    className={`inline-flex items-center px-4 py-2 ${
                      theme === "dark"
                        ? "bg-white/20 hover:bg-white/30 text-white"
                        : "bg-gray-900/20 hover:bg-gray-900/30 text-gray-900"
                    } font-semibold rounded-full shadow-md transition-all duration-300 text-sm sm:text-base`}
                    style={{ fontFamily: '"Courier New", Courier, monospace' }} // Applied to Link
                  >
                    Explore
                    <motion.svg
                      className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 6, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </motion.svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}