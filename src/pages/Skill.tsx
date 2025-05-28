import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';
import {
  FiCode,
  FiCpu,
  FiLayers,
  FiMonitor,
  FiServer,
  FiGitBranch,
  FiPenTool,
  FiType,
} from 'react-icons/fi';

const skillsData = [
  { name: 'HTML', level: 95, description: 'Semantic markup and accessibility best practices', icon: <FiLayers className="w-5 h-5" /> },
  { name: 'CSS', level: 90, description: 'Modern layouts, animations, and Tailwind expertise', icon: <FiMonitor className="w-5 h-5" /> },
  { name: 'JavaScript', level: 88, description: 'ES6+ features and functional programming', icon: <FiCode className="w-5 h-5" /> },
  { name: 'React', level: 87, description: 'Component-based architecture and hooks', icon: <FiCpu className="w-5 h-5" /> },
  { name: 'Node.js', level: 85, description: 'Building scalable backend services and APIs', icon: <FiServer className="w-5 h-5" /> },
  { name: 'TypeScript', level: 86, description: 'Type-safe development and interfaces', icon: <FiType className="w-5 h-5" /> },
  { name: 'Git', level: 92, description: 'Version control and team collaboration', icon: <FiGitBranch className="w-5 h-5" /> },
  { name: 'Figma', level: 85, description: 'UI/UX design and prototyping', icon: <FiPenTool className="w-5 h-5" /> },
];

const Skills = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden ${
        theme === 'dark' ? 'bg-gray-950 text-gray-100' : 'bg-gray-100 text-gray-900'
      }`}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            My{' '}
            <span
              className={`bg-clip-text text-transparent bg-gradient-to-r ${
                theme === 'dark' ? 'from-emerald-400 to-cyan-400' : 'from-emerald-600 to-cyan-600'
              }`}
            >
              Skills
            </span>
          </h1>
          <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Technologies I work with and my proficiency level in each
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -5,
                boxShadow:
                  theme === 'dark'
                    ? '0 10px 25px rgba(16, 185, 129, 0.15)'
                    : '0 10px 25px rgba(5, 150, 105, 0.1)',
              }}
              className={`p-6 rounded-xl border transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-gray-800/50 border-gray-700 hover:border-emerald-400/30'
                  : 'bg-white border-gray-200 hover:border-emerald-400/50'
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`p-3 rounded-lg ${
                    theme === 'dark' ? 'bg-emerald-900/30 text-emerald-400' : 'bg-emerald-100 text-emerald-600'
                  }`}
                >
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {skill.description}
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className={`text-xs font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Proficiency
                  </span>
                  <span className={`text-sm font-mono ${theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'}`}>
                    {skill.level}%
                  </span>
                </div>
                <div
                  className={`w-full h-2 rounded-full overflow-hidden ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                  }`}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{
                      duration: 1.5,
                      delay: index * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`h-full rounded-full ${
                      theme === 'dark'
                        ? 'bg-gradient-to-r from-emerald-400 to-cyan-400'
                        : 'bg-gradient-to-r from-emerald-500 to-cyan-500'
                    }`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className={`mt-16 p-6 rounded-xl ${
            theme === 'dark' ? 'bg-gray-800/50 border border-gray-700' : 'bg-white border border-gray-200'
          }`}
        >
          <h2 className={`text-2xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Continuous Learning
          </h2>
          <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
            I&apos;m constantly expanding my skill set through personal projects, online courses,
            and staying updated with the latest industry trends.
          </p>
          <div
            className={`text-sm px-3 py-1.5 rounded-full inline-block ${
              theme === 'dark' ? 'bg-emerald-900/30 text-emerald-400' : 'bg-emerald-100 text-emerald-700'
            }`}
          >
            Currently learning: Advanced TypeScript Patterns
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;