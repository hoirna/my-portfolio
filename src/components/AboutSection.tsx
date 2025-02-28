import { motion } from "framer-motion";

const AboutSection = () => {
  const cards = [
    {
      title: "FRONTEND",
      skills: ["HTML","CSS", "Tailwind CSS", "Next JS", "JavaScript/TypeScript"],
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
      <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-400 opacity-40 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <motion.div
          className="text-center relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-8 transform hover:scale-110 transition-transform duration-300 ease-in-out">
            About Me
          </h2>

          <motion.p
            className="mt-4 text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            I am Seng Hoirna, a passionate full-stack developer dedicated to
            crafting seamless and scalable web experiences. I specialize in
            building high-performance applications using modern technologies
            like{" "}
            <span className="text-blue-500 dark:text-blue-400 font-semibold">
              Next.js
            </span>
            ,{" "}
            <span className="text-blue-500 dark:text-blue-400 font-semibold">
              React
            </span>
            , and{" "}
            <span className="text-blue-500 dark:text-blue-400 font-semibold">
              Tailwind CSS
            </span>
            . My mission is to create web solutions that are not only visually
            stunning but also deliver top-notch user experiences.
          </motion.p>

          <motion.div
            className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            {cards.map((card, index) => (
              <div key={index} className="relative perspective-1000">
                <div className="flip-card w-full h-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
                  <div className="flip-card-inner w-full h-full absolute transition-all duration-600 transform-style-preserve-3d">
                    <div className="flip-card-front bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl transform hover:scale-105 hover:shadow-2xl transition-all duration-300 flex flex-col justify-center">
                      <ul className="text-gray-600 dark:text-gray-300 space-y-3">
                        {card.skills.map((skill) => (
                          <li key={skill} className="text-lg">
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flip-card-back bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-xl p-8 flex justify-center items-center flex-col shadow-lg transform rotate-y-180 transition-all duration-300">
                      <h3 className="text-2xl sm:text-3xl font-semibold">
                        {card.title}
                      </h3>
                      <p className="text-lg mt-2">Explore More</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="mt-16 flex justify-center space-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold text-lg rounded-lg shadow-xl hover:scale-110 transform transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;