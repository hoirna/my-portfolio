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
      {/* Kazuha-inspired Clouds */}
      <div className="animate-clouds">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 450 150"
          width="100%"
          height="100%"
          className={theme === "light" ? "fill-orange-300" : "fill-gray-200"}
        >
          <path
            d="M50,100 Q80,40 120,80 T180,90 Q220,50 260,90 T320,100 Q380,60 420,90 T450,100 H0 Q20,130 50,100 Z M100,110 Q140,70 180,100 T240,110 Q280,80 320,110 Z"
            opacity="0.7"
          />
        </svg>
      </div>

      <div className="animate-clouds-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 400 120"
          width="100%"
          height="100%"
          className={theme === "light" ? "fill-orange-200" : "fill-gray-300"}
        >
          <path
            d="M40,90 Q70,30 110,70 T160,80 Q200,40 240,80 T300,90 Q340,50 380,80 T400,90 H0 Q20,110 40,90 Z M80,100 Q120,60 160,90 T220,100 Z"
            opacity="0.6"
          />
        </svg>
      </div>

      <div className="animate-clouds-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 420 135"
          width="100%"
          height="100%"
          className={theme === "light" ? "fill-orange-400" : "fill-gray-100"}
        >
          <path
            d="M50,95 Q80,35 130,75 T190,85 Q230,45 270,85 T330,95 Q370,55 400,85 T420,95 H0 Q20,115 50,95 Z M110,105 Q150,65 190,95 T250,105 Z"
            opacity="0.5"
          />
        </svg>
      </div>

      <div className="animate-clouds-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 480 165"
          width="100%"
          height="100%"
          className={theme === "light" ? "fill-orange-500" : "fill-gray-400"}
        >
          <path
            d="M60,115 Q90,55 140,95 T200,105 Q240,65 290,105 T350,115 Q400,75 440,105 T480,115 H0 Q30,145 60,115 Z M120,125 Q160,85 210,115 T270,125 Z"
            opacity="0.8"
          />
        </svg>
      </div>

      <div className="animate-clouds-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 180"
          width="100%"
          height="100%"
          className={theme === "light" ? "fill-orange-300" : "fill-gray-200"}
        >
          <path
            d="M70,130 Q100,60 150,100 T220,110 Q260,70 310,110 T380,120 Q430,80 470,110 T500,120 H0 Q30,150 70,130 Z M130,140 Q170,90 230,120 T290,140 Z"
            opacity="0.65"
          />
        </svg>
      </div>

      <div className="animate-clouds-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 460 140"
          width="100%"
          height="100%"
          className={theme === "light" ? "fill-orange-400" : "fill-gray-300"}
        >
          <path
            d="M50,100 Q80,40 130,80 T190,90 Q230,50 280,90 T340,100 Q390,60 430,90 T460,100 H0 Q20,120 50,100 Z M110,110 Q150,70 200,100 T260,110 Z"
            opacity="0.7"
          />
        </svg>
      </div>

      {/* Enhanced Sun/Moon SVG with Glow */}
      <div className="sun-moon-glow">
        {theme === "dark" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 120 120"
            width="180" // Slightly smaller for better balance
            height="180"
          >
            <circle cx="60" cy="60" r="40" fill="#f0f0f0" />
            <circle cx="75" cy="45" r="12" fill="#e0e0e0" opacity="0.8" />
            <circle cx="50" cy="55" r="8" fill="#d0d0d0" opacity="0.7" />
            <circle cx="45" cy="75" r="10" fill="#c0c0c0" opacity="0.6" />
            <circle cx="60" cy="60" r="45" fill="none" stroke="#f0f0f0" strokeWidth="5" opacity="0.3" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 120 120"
            width="180" // Slightly smaller for better balance
            height="180"
          >
            <circle cx="60" cy="60" r="35" fill="#FFD700" />
            {Array.from({ length: 16 }).map((_, i) => (
              <line
                key={i}
                x1="60"
                y1="20"
                x2="60"
                y2="10"
                stroke="#FFA500"
                strokeWidth="4"
                transform={`rotate(${i * 22.5} 60 60)`}
              />
            ))}
            <circle cx="60" cy="60" r="40" fill="none" stroke="#FFD700" strokeWidth="5" opacity="0.4" />
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20"> {/* Increased z-index */}
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between text-center lg:text-left gap-12">
          <div className="max-w-3xl">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white"
              style={{ fontFamily: '"Courier New", Courier, monospace' }}
            >
              <span className="typing-effect">
                Hi, I am <span className="text-[#80ff80]">SENG HOIRNA.</span>
              </span>
            </h1>
            <p
              className={`mt-4 text-lg sm:text-xl lg:text-2xl font-medium ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
              style={{ fontFamily: '"Courier New", Courier, monospace' }}
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
                style={{ fontFamily: '"Courier New", Courier, monospace' }}
              >
                Hire Me
              </Link>
            </div>
          </div>

          {/* Profile Picture */}
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
            className="relative w-[250px] sm:w-[300px] lg:w-[350px] h-[250px] sm:h-[300px] lg:h-[350px] mx-auto rounded-full overflow-hidden"
          >
            <div
              className={`absolute inset-4 rounded-full bg-gradient-to-br ${
                theme === "dark"
                  ? "from-gray-800/50 to-indigo-900/50"
                  : "from-orange-100/50 to-indigo-200/50"
              } shadow-inner`}
            />
            <motion.div
              className={`absolute inset-0 rounded-md border-3 ${
                theme === "dark" ? "border-[#80ff80]" : "border-[#00ff00]"
              } opacity-0`}
              whileHover={{ scale: 1.1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <Image
              src="/images/mypicture.png"
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