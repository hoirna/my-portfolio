import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  const { theme } = useTheme();

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-60 pb-36 sm:pt-72 sm:pb-48 lg:pt-80 lg:pb-56 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Cloud SVGs */}
      <div className="animate-clouds">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          width="100%"
          height="100%"
          className={theme === "light" ? "fill-orange-500" : "fill-white"}
        >
          <circle cx="30" cy="30" r="20" opacity="0.5" />
          <circle cx="60" cy="30" r="20" opacity="0.5" />
          <circle cx="45" cy="25" r="20" opacity="0.5" />
        </svg>
      </div>

      <div className="animate-clouds-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          width="100%"
          height="100%"
          className={theme === "light" ? "fill-orange-500" : "fill-white"}
        >
          <circle cx="40" cy="40" r="20" opacity="0.4" />
          <circle cx="70" cy="40" r="20" opacity="0.4" />
          <circle cx="55" cy="35" r="20" opacity="0.4" />
        </svg>
      </div>

      <div className="animate-clouds-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          width="100%"
          height="100%"
          className={theme === "light" ? "fill-orange-500" : "fill-white"}
        >
          <circle cx="30" cy="30" r="20" opacity="0.5" />
          <circle cx="60" cy="30" r="20" opacity="0.5" />
          <circle cx="45" cy="25" r="20" opacity="0.5" />
        </svg>
      </div>

      <div className="animate-clouds-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          width="100%"
          height="100%"
          className={theme === "light" ? "fill-orange-500" : "fill-white"}
        >
          <circle cx="40" cy="40" r="20" opacity="0.6" />
          <circle cx="70" cy="40" r="20" opacity="0.6" />
          <circle cx="55" cy="35" r="20" opacity="0.6" />
        </svg>
      </div>

      {/* Sun/Moon SVG with spinning effect */}
      <div className="absolute top-0 mx-24 mt-24 left-0 flex justify-center items-center opacity-80 spin">
        {theme === "dark" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            width="150"
            height="200"
          >
            <circle cx="50" cy="50" r="30" fill="#f0f0f0" />
            <circle cx="60" cy="30" r="10" fill="#e0e0e0" />
            <circle cx="40" cy="40" r="5" fill="#c0c0c0" />
            <circle cx="35" cy="65" r="6" fill="#d0d0d0" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            width="150"
            height="200"
          >
            <circle cx="50" cy="50" r="25" fill="#FFD700" />
            {Array.from({ length: 12 }).map((_, i) => (
              <line
                key={i}
                x1="50"
                y1="10"
                x2="50"
                y2="0"
                stroke="#FFA500"
                strokeWidth="3"
                transform={`rotate(${i * 30} 50 50)`}
              />
            ))}
          </svg>
        )}
      </div>

      {/* Stars (only for dark mode) */}
      {theme === "dark" && (
        <div className="stars">
          {Array.from({ length: 100 }).map((_, index) => (
            <div
              key={index}
              className="star"
              style={{
                top: `${Math.random() * 100}vh`,
                left: `${Math.random() * 100}vw`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
              }}
            />
          ))}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between text-center lg:text-left gap-12">
          <div className="max-w-3xl">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white"
              style={{ fontFamily: '"Courier New", Courier, monospace' }} // Applied to h1
            >
              <span className="typing-effect">
                Hi, I am <span className="text-[#80ff80]">SENG HOIRNA.</span>
              </span>
            </h1>
            <p
              className={`mt-4 text-lg sm:text-xl lg:text-2xl font-medium ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
              style={{ fontFamily: '"Courier New", Courier, monospace' }} // Applied to p
            >
              A passionate{" "}
              <span
                className={`font-semibold ${
                  theme === "dark" ? "text-[#80ff80]" : "text-[#00ff00]"
                }`}
              >
                Web Developer
              </span>{" "}
              crafting modern, responsive digital experiences.
            </p>
            <div className="mt-8">
              <Link
                href="/Contact"
                className={`inline-block px-8 py-4 font-semibold rounded-full shadow-lg transition duration-300 ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-[#00ff00] to-[#80ff80] text-gray-900 hover:from-[#00cc00] hover:to-[#66cc66]"
                    : "bg-gradient-to-r from-[#00ff00] to-[#80ff80] text-white hover:from-[#00cc00] hover:to-[#66cc66]"
                }`}
                style={{ fontFamily: '"Courier New", Courier, monospace' }} // Applied to button
              >
                Hire Me
              </Link>
            </div>
          </div>

          {/* Profile Picture with Circular Hover Effect */}
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            className="relative w-[250px] sm:w-[300px] lg:w-[350px] h-[250px] sm:h-[300px] lg:h-[350px] mx-auto rounded-full overflow-hidden"
          >
            {/* Gradient background */}
            <div
              className={`absolute inset-4 rounded-full bg-gradient-to-br ${
                theme === "dark"
                  ? "from-gray-800/50 to-indigo-900/50"
                  : "from-orange-100/50 to-indigo-200/50"
              } shadow-inner`}
            />

            {/* Hover effect */}
            <motion.div
              className={`absolute inset-0 rounded-md border-3 ${
                theme === "dark" ? "border-[#80ff80]" : "border-[#00ff00]"
              } opacity-0`}
              whileHover={{ scale: 1.1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            {/* Profile Image */}
            <Image
              src="/images/profile.png"
              alt="Seng Hoirna's Profile Picture"
              width={350}
              height={350}
              className={`relative z-10 object-cover w-full h-full rounded-full border-4 ${
                theme === "dark" ? "border-[#80ff80]" : "border-[#00ff00]"
              } shadow-2xl transition-all duration-300 ease-in-out`}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;