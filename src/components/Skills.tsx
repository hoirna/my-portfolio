'use client';

import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript } from 'react-icons/si';

const skillsData = [
  { name: 'HTML', level: 90, icon: <FaHtml5 /> },
  { name: 'CSS', level: 85, icon: <FaCss3Alt /> },
  { name: 'JavaScript', level: 88, icon: <FaJs /> },
  { name: 'Next.js', level: 85, icon: <SiNextdotjs /> },
  { name: 'TypeScript', level: 80, icon: <SiTypescript /> },
  { name: 'Node.js', level: 75, icon: <FaNodeJs /> },
];

const SkillsSection = () => {
  const { theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="SkillsSection"
      className={`py-20 sm:py-28 lg relative overflow-hidden font-sans ${
        theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'
      }`}
    >
      <div className="fixed inset-0 pointer-events-none">
        <div
          className={`absolute inset-0 bg-[size:90px_90px] bg-[linear-gradient(to_right,rgba(16,185,129,0.4)_2px,transparent_2px),linear-gradient(to_bottom,rgba(16,185,129,0.4)_2px,transparent_2px)] opacity-35 dark:opacity-25 animate-gridPulse ${
            theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-400/5'
          }`}
        ></div>
        <div
          className={`absolute inset-0 bg-gradient-to-b from-transparent ${
            theme === 'dark' ? 'to-gray-950/30' : 'to-gray-100/30'
          }`}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span
            className={`text-sm font-medium px-4 py-1 rounded-full ${
              theme === 'dark'
                ? 'bg-emerald-900/20 text-emerald-400'
                : 'bg-emerald-100 text-emerald-700'
            }`}
          >
            Experience
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold">
            Proficient{' '}
            <span className={theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'}>
              Skills
            </span>
          </h2>
          <p
            className={`max-w-2xl mx-auto mt-4 text-lg ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            My technical toolkit includes modern web technologies that I&rsquo;ve mastered through
            years of hands-on experience.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillsData.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className={`group relative p-6 rounded-xl border ${
                theme === 'dark'
                  ? 'bg-gray-800/50 border-gray-700 hover:border-emerald-400/30'
                  : 'bg-gray-50 border-gray-200 hover:border-emerald-500/30'
              } transition-all duration-300 hover:shadow-lg ${
                theme === 'dark' ? 'hover:shadow-emerald-900/20' : 'hover:shadow-emerald-100'
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <span
                  className={`text-2xl ${
                    theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'
                  }`}
                >
                  {skill.icon}
                </span>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>

              <div className="flex items-center justify-between mb-2">
                <span
                  className={`text-sm font-medium ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}
                >
                  Proficiency
                </span>
                <span
                  className={`text-sm font-bold ${
                    theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'
                  }`}
                >
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
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2, delay: 0.2, type: 'spring' }}
                  viewport={{ once: true }}
                  className={`h-full rounded-full ${
                    theme === 'dark'
                      ? 'bg-gradient-to-r from-emerald-500 to-emerald-400'
                      : 'bg-gradient-to-r from-emerald-600 to-emerald-400'
                  }`}
                />
              </div>

              <div
                className={`absolute inset-0 -z-10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-emerald-900/20 to-gray-800'
                    : 'bg-gradient-to-br from-emerald-100/50 to-gray-50'
                }`}
              ></div>
            </motion.div>
          ))}
        </motion.div>

        <div
          className={`mt-16 pt-16 border-t ${
            theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
          }`}
        >
          <div className="max-w-4xl mx-auto">
            <h3
              className={`text-2xl font-semibold mb-6 ${
                theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
              }`}
            >
              Continuous Learning Journey
            </h3>
            <p
              className={`text-lg ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Technology evolves rapidly, and I&rsquo;m committed to staying at the forefront. I
              regularly update my skills through courses, certifications, and hands-on projects to
              ensure I deliver cutting-edge solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
