import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';

const skillsData = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 85 },
  { name: 'JavaScript', level: 88 },
  { name: 'React', level: 87 },
  { name: 'Next.js', level: 85 },
  { name: 'Node.js', level: 75 },
];

const Skills = () => {
  const { theme } = useTheme();

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }} // Triggers when in viewport
      viewport={{ once: true }} // Runs only once
      transition={{ duration: 0.7 }}
      className={`py-16 sm:py-20 lg:py-24 relative overflow-hidden ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      {/* Subtle Cloud Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="animate-clouds-skills">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 450 150"
            width="100%"
            height="100%"
            className={`fill-gray-200 dark:fill-gray-700 opacity-15`}
          >
            <path d="M50,100 Q80,40 120,80 T180,90 Q220,50 260,90 T320,100 Q380,60 420,90 T450,100 H0 Q20,130 50,100 Z" />
          </svg>
        </div>
        <div className="animate-clouds-skills-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 120"
            width="100%"
            height="100%"
            className={`fill-gray-300 dark:fill-gray-600 opacity-10`}
          >
            <path d="M40,90 Q70,30 110,70 T160,80 Q200,40 240,80 T300,90 Q340,50 380,80 T400,90 H0 Q20,110 40,90 Z" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 transform hover:scale-105 transition-transform duration-300"
          style={{ fontFamily: '"Courier New", Courier, monospace' }}
        >
          My <span className={theme === 'dark' ? 'text-[#80ff80]' : 'text-[#00ff00]'}>Skills</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col items-center p-4 sm:p-6 rounded-xl shadow-md ${
                theme === 'dark'
                  ? 'bg-gray-800 hover:bg-gray-700'
                  : 'bg-gray-100 hover:bg-gray-200'
              } transition-all duration-300 group`}
            >
              <span
                className="text-lg sm:text-xl font-semibold mb-3 group-hover:text-[#80ff80] transition-colors duration-300"
                style={{ fontFamily: '"Courier New", Courier, monospace' }}
              >
                {skill.name}
              </span>
              <div className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-2 overflow-hidden">
                <motion.div
                  className={`h-2 rounded-full ${
                    theme === 'dark'
                      ? 'bg-gradient-to-r from-[#00ff00] to-[#80ff80]'
                      : 'bg-gradient-to-r from-[#00cc00] to-[#00ff00]'
                  }`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: index * 0.1, ease: 'easeOut' }}
                  style={{
                    boxShadow: theme === 'dark' ? '0 0 8px rgba(128, 255, 128, 0.5)' : '0 0 8px rgba(0, 255, 0, 0.5)',
                  }}
                />
              </div>
              <span
                className="text-sm mt-2 text-gray-500 dark:text-gray-400"
                style={{ fontFamily: '"Courier New", Courier, monospace' }}
              >
                {skill.level}%
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;