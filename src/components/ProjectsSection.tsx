'use client';

import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';

const ProjectsSection = () => {
  const { theme } = useTheme();

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A fully responsive e-commerce platform built with Next.js, Tailwind CSS, and Stripe for payments.',
      icon: '🛒',
      link: '/projects/ecommerce',
      tags: ['Next.js', 'Tailwind', 'Stripe'],
    },
    {
      id: 2,
      title: 'AI-Powered Chatbot',
      description: "An AI chatbot integrated with OpenAI's GPT-4, designed for customer support and engagement.",
      icon: '🤖',
      link: '/projects/chatbot',
      tags: ['AI', 'OpenAI', 'WebSockets'],
    },
    {
      id: 3,
      title: 'Portfolio Builder',
      description: 'A drag-and-drop portfolio builder for creatives, featuring real-time collaboration and cloud storage.',
      icon: '🎨',
      link: '/projects/portfolio-builder',
      tags: ['React', 'Firebase', 'Drag&Drop'],
    },
  ];

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
      id="projects"
      className={`py-20 sm:py-28 lg:py-32 relative overflow-hidden font-sans ${
        theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'
      }`}
    >
      <div className="fixed inset-0 pointer-events-none">
        <div
          className={`absolute inset-0 bg-[size:90px_90px] bg-[linear-gradient(to_right,rgba(16,185,129,0.4)_2px,transparent_2px),linear-gradient(to_bottom,rgba(16,185,129,0.4)_2px,transparent_2px)] opacity-25 dark:opacity-15 animate-gridPulse ${
            theme === 'dark' ? 'bg-gray-800/5' : 'bg-gray-400/5'
          }`}
        ></div>
        <div
          className={`absolute inset-0 bg-gradient-to-b from-transparent ${
            theme === 'dark' ? 'to-gray-950/30' : 'to-gray-100/30'
          }`}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span
            className={`text-sm font-medium px-4 py-1 rounded-full ${
              theme === 'dark' ? 'bg-emerald-900/20 text-emerald-400' : 'bg-emerald-100 text-emerald-700'
            }`}
          >
            SHOWCASE
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-6">
            Featured <span className={theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'}>Projects</span>
          </h2>
          <p
            className={`max-w-2xl mx-auto mt-4 text-lg ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Discover innovative solutions I&lsquo;ve crafted, blending cutting-edge technology with elegant design.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`group relative p-6 rounded-xl border ${
                theme === 'dark'
                  ? 'bg-gray-800/50 border-gray-700 hover:border-emerald-400/30'
                  : 'bg-gray-50 border-gray-200 hover:border-emerald-500/30'
              } transition-all duration-300 hover:shadow-lg ${
                theme === 'dark' ? 'hover:shadow-emerald-900/20' : 'hover:shadow-emerald-100'
              } h-full flex flex-col`}
            >
              <div className="flex items-center gap-4 mb-6">
                <span
                  className={`text-3xl ${theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'}`}
                >
                  {project.icon}
                </span>
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>

              <p
                className={`flex-grow mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
              >
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs font-medium px-2 py-1 rounded ${
                      theme === 'dark' ? 'bg-emerald-900/30 text-emerald-300' : 'bg-emerald-100 text-emerald-700'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href={project.link}
                className={`inline-flex items-center mt-auto font-medium transition-colors duration-300 ${
                  theme === 'dark' ? 'text-emerald-400 hover:text-emerald-300' : 'text-emerald-600 hover:text-emerald-500'
                }`}
              >
                View project
                <svg
                  className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>

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
              More Projects Available
            </h3>
            <p
              className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
            >
              I&lsquo;ve worked on numerous other projects across different domains. Feel free to explore my GitHub or contact me for case studies and detailed walkthroughs of my work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
