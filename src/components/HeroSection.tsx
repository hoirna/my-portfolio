import { useTheme } from '../context/ThemeContext'; 
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  const { theme } = useTheme(); 

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-44 pb-22 sm:pt-54 sm:pb-24 lg:pt-56 lg:pb-28 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Cloud SVGs */}
      <div className={`absolute mt-8 top-10 left-1/4 w-[500px] h-[400px] opacity-50 animate-clouds ${theme === 'light' ? 'fill-orange-500' : 'fill-white'}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          width="100%"
          height="100%"
        >
          <circle cx="30" cy="30" r="20" />
          <circle cx="60" cy="30" r="20" />
          <circle cx="45" cy="25" r="20" />
        </svg>
      </div>
      
      <div className={`absolute mt-8 top-20 right-1/4 w-[250px] h-[150px] opacity-40 animate-clouds-2 ${theme === 'light' ? 'fill-orange-500' : 'fill-white'}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          width="100%"
          height="100%"
        >
          <circle cx="40" cy="40" r="20" />
          <circle cx="70" cy="40" r="20" />
          <circle cx="55" cy="35" r="20" />
        </svg>
      </div>

      {/* Sun/Moon SVG with spinning effect */}
      <div className="absolute top-0 mx-6 mt-16 left-0 flex justify-center items-center opacity-100 spin">
        {theme === 'dark' ? (
          // Moon SVG for dark mode
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="150" height="200">
            <circle cx="50" cy="50" r="30" fill="#2C3E50" />
            <circle cx="60" cy="30" r="10" fill="#34495E" />
            <circle cx="40" cy="40" r="5" fill="#7F8C8D" />
            <circle cx="35" cy="65" r="6" fill="#BDC3C7" />
          </svg>
        ) : (
          // Sun SVG for light mode
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="150" height="200">
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
      {theme === 'dark' && (
        <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none stars">
          {Array.from({ length: 100 }).map((_, index) => (
            <div
              key={index}
              className="star"
              style={{
                position: 'absolute',
                top: `${Math.random() * 100}vh`,
                left: `${Math.random() * 100}vw`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
              }}
            ></div>
          ))}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between text-center lg:text-left gap-8">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              <span className="typing-effect">
                Hi, I am <span className="text-[#80ff80]">SENG HOIRNA</span>
              </span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300">
              A passionate <span className="font-semibold text-[#00ff00]">Web Developer</span> building modern and responsive web applications.
            </p>
            <div className="mt-8">
              <Link
                href="/projects"
                className="inline-block px-6 py-3 bg-[#00ff00] text-white font-semibold rounded-lg hover:bg-[#00b300] transition duration-300"
              >
                  Hire Me
              </Link>
            </div>
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/images/profile.png"
              alt="Seng Hoirna's Profile Picture"
              width={400}
              height={400}
              className="rounded-full shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
