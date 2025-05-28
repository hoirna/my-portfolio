'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

const AboutSection = () => {
  const { theme } = useTheme();

  const cards = [
    {
      title: 'Frontend',
      skills: ['Vue 3', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'REST APIs'],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
          />
        </svg>
      ),
      color: 'from-purple-500 to-fuchsia-500',
    },
    {
      title: 'Tools',
      skills: ['Docker', 'GitHub/GitLab', 'Vercel'],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      color: 'from-amber-500 to-orange-500',
    },
    {
      title: 'UI/UX',
      skills: ['Figma', 'Canva', 'Wireframing'],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
      color: 'from-emerald-500 to-teal-500',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative py-20 sm:py-28 lg:py-32 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div
          className={`absolute inset-0 bg-[size:90px_90px] bg-[linear-gradient(to_right,rgba(59,130,246,0.4)_2px,transparent_2px),linear-gradient(to_bottom,rgba(59,130,246,0.4)_2px,transparent_2px)] opacity-25 dark:opacity-15 animate-gridPulse ${
            theme === 'dark' ? 'bg-gray-800/5' : 'bg-gray-400/5'
          }`}
        ></div>
        <div
          className={`absolute inset-0 bg-gradient-to-b from-transparent ${
            theme === 'dark' ? 'to-gray-950/30' : 'to-gray-100/30'
          }`}
        ></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-blue-100/30 dark:bg-blue-900/20 blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-purple-100/30 dark:bg-purple-900/20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Me</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            I&rsquo;m <span className="font-semibold text-gray-800 dark:text-gray-200">Seng Hoirna</span>, a full-stack developer with expertise in building modern web applications. I combine technical skills with creative problem-solving to deliver exceptional digital experiences. My approach focuses on clean code, intuitive interfaces, and scalable architecture.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {cards.map((card, index) => (
            <motion.div key={index} variants={item} whileHover={{ y: -5 }} className="group">
              <div className={`h-full bg-gradient-to-br ${card.color} p-0.5 rounded-xl shadow-lg`}>
                <div className="h-full bg-white dark:bg-gray-900 rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 group-hover:bg-opacity-90">
                  <div className={`mb-4 p-3 rounded-lg bg-gradient-to-br ${card.color} text-white`}>{card.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{card.title}</h3>
                  <ul className="space-y-2 flex-1">
                    {card.skills.map((skill, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-400 font-medium">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-700 hover:to-purple-700"
          >
            Let&rsquo;s Work Together
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
