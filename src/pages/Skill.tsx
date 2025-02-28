import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';
import Head from 'next/head';

const skillsData = [
  { name: 'HTML', level: 75, description: 'Semantic markup and structure' },
  { name: 'CSS', level: 75, description: 'Styling, Tailwind CSS, animations' },
  { name: 'JavaScript', level: 65, description: 'Dynamic functionality, ES6+' },
  { name: 'Next.js', level: 85, description: 'Server-side rendering, static sites' },
  { name: 'Node.js', level: 75, description: 'Backend development, APIs' },
  { name: 'TypeScript', level: 70, description: 'Type-safe JavaScript' },
  { name: 'Git', level: 80, description: 'Version control, collaboration' },
];

const Skills = () => {
  const { theme } = useTheme();

  return (
    <>
      <Head>
        <title>Skills | My Portfolio</title>
        <meta name="description" content="A showcase of my technical skills and expertise." />
      </Head>
      <section
        className={`min-h-screen pt-24 pb-12 ${
          theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-12"
          >
            My <span className={theme === 'dark' ? 'text-[#80ff80]' : 'text-[#00ff00]'}>Skills</span>
          </motion.h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillsData.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 rounded-lg shadow-lg ${
                  theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                } transition-all duration-300`}
              >
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <p className="text-sm mb-4 opacity-75">{skill.description}</p>
                <div className="w-full bg-gray-300 rounded-full h-2.5">
                  <motion.div
                    className={`h-2.5 rounded-full ${
                      theme === 'dark' ? 'bg-[#80ff80]' : 'bg-[#00ff00]'
                    }`}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
                <p className="text-right text-sm mt-1">{skill.level}%</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;