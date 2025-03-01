import { motion } from "framer-motion";
import Link from "next/link";

const AboutSection = () => {
  const cards = [
    {
      title: "FRONTEND",
      skills: ["HTML", "CSS", "Tailwind CSS", "Next JS", "JavaScript/TypeScript"],
    },
    {
      title: "BACKEND",
      skills: ["Node JS", "Express JS", "Docker", "SQL"],
    },
    {
      title: "TOOLS & TECH",
      skills: ["Git & GitHub", "Figma", "VS Code", "Canva"],
    },
    {
      title: "CLOUD SERVER",
      skills: ["AWS", "Vercel"],
    },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Subtle Cloud Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="animate-clouds-about">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 450 150"
            width="100%"
            height="100%"
            className="fill-blue-200 dark:fill-gray-700 opacity-20"
          >
            <path d="M50,100 Q80,40 120,80 T180,90 Q220,50 260,90 T320,100 Q380,60 420,90 T450,100 H0 Q20,130 50,100 Z" />
          </svg>
        </div>
        <div className="animate-clouds-about-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 120"
            width="100%"
            height="100%"
            className="fill-purple-200 dark:fill-gray-600 opacity-15"
          >
            <path d="M40,90 Q70,30 110,70 T160,80 Q200,40 240,80 T300,90 Q340,50 380,80 T400,90 H0 Q20,110 40,90 Z" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }} // Triggers when in viewport
          viewport={{ once: true }} // Runs only once
          transition={{ duration: 0.7 }}
        >
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-8 transform hover:scale-105 transition-transform duration-300 ease-in-out"
            style={{ fontFamily: '"Courier New", Courier, monospace' }}
          >
            About Me
          </h2>

          <motion.p
            className="mt-4 text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{ fontFamily: '"Courier New", Courier, monospace' }}
          >
            I am Seng Hoirna, a passionate full-stack developer dedicated to crafting seamless and scalable web experiences. I specialize in building high-performance applications using modern technologies like{" "}
            <span className="text-blue-500 dark:text-blue-400 font-semibold">Next.js</span>,{" "}
            <span className="text-blue-500 dark:text-blue-400 font-semibold">React</span>, and{" "}
            <span className="text-blue-500 dark:text-blue-400 font-semibold">Tailwind CSS</span>. My mission is to create web solutions that are both visually stunning and user-friendly.
          </motion.p>

          <motion.div
            className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" // Adjusted grid for better fit
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            {cards.map((card, index) => (
              <motion.div
                key={index}
                className="relative perspective-1000 group"
                whileHover={{ scale: 1.05, rotateY: 5 }} // Subtle hover tilt
                transition={{ duration: 0.3 }}
              >
                <div className="flip-card w-full h-64 sm:h-72"> {/* Fixed height for consistency */}
                  <div className="flip-card-inner w-full h-full absolute transition-transform duration-600 transform-style-preserve-3d group-hover:rotate-y-180">
                    <div className="flip-card-front bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col justify-center items-center border border-gray-200 dark:border-gray-700">
                      <h3
                        className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white"
                        style={{ fontFamily: '"Courier New", Courier, monospace' }}
                      >
                        {card.title}
                      </h3>
                    </div>
                    <div className="flip-card-back bg-gradient-to-br from-pink-500 to-red-500 text-white p-6 rounded-xl shadow-lg flex flex-col justify-center items-center transform rotate-y-180">
                      <ul className="space-y-2 text-center">
                        {card.skills.map((skill) => (
                          <li
                            key={skill}
                            className="text-base sm:text-lg"
                            style={{ fontFamily: '"Courier New", Courier, monospace' }}
                          >
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-12 flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Link
              href="/Contact"
              className="relative inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold text-lg rounded-lg shadow-xl overflow-hidden group"
              style={{ fontFamily: '"Courier New", Courier, monospace' }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10">Contact Me</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;