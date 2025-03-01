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
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`py-16 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl sm:text-4xl font-bold text-center mb-10"
          style={{ fontFamily: '"Courier New", Courier, monospace' }} // Applied to h2
        >
          My <span className={theme === 'dark' ? 'text-[#80ff80]' : 'text-[#00ff00]'}>Skills</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col items-center p-4 rounded-lg ${
                theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
              } transition-all duration-300`}
            >
              <span
                className="text-lg font-semibold mb-2"
                style={{ fontFamily: '"Courier New", Courier, monospace' }} // Applied to skill names
              >
                {skill.name}
              </span>
              <div className="w-full bg-gray-300 rounded-full h-1.5">
                <motion.div
                  className={`h-1.5 rounded-full ${
                    theme === 'dark' ? 'bg-[#80ff80]' : 'bg-[#00ff00]'
                  }`}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;