import Link from 'next/link';
import { motion } from 'framer-motion';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A fully responsive e-commerce platform built with Next.js, Tailwind CSS, and Stripe for payments.",
      icon: "🛒",
      link: "/projects/ecommerce",
    },
    {
      id: 2,
      title: "AI-Powered Chatbot",
      description: "An AI chatbot integrated with OpenAI's GPT-4, designed for customer support and engagement.",
      icon: "🤖",
      link: "/projects/chatbot",
    },
    {
      id: 3,
      title: "Portfolio Builder",
      description: "A drag-and-drop portfolio builder for creatives, featuring real-time collaboration and cloud storage.",
      icon: "🎨",
      link: "/projects/portfolio-builder",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-[#F9EF19] via-[#fbcfe8] to-[#a78bfa] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 sm:py-24 lg:py-28 relative overflow-hidden">
      {/* Subtle Cloud Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="animate-clouds-projects">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 450 150"
            width="100%"
            height="100%"
            className="fill-yellow-200 dark:fill-gray-700 opacity-20"
          >
            <path d="M50,100 Q80,40 120,80 T180,90 Q220,50 260,90 T320,100 Q380,60 420,90 T450,100 H0 Q20,130 50,100 Z" />
          </svg>
        </div>
        <div className="animate-clouds-projects-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 120"
            width="100%"
            height="100%"
            className="fill-purple-200 dark:fill-gray-600 opacity-15"
          >
            <path d="M40,90 Q70,30 110,70 T160,80 Q200,40 240,80 T300,90 Q340,50 380,80 T400,90 H0 Q20,110 40,90 Z" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-8 transform hover:scale-105 transition-transform duration-300"
            style={{ fontFamily: '"Courier New", Courier, monospace' }}
          >
            Featured Projects
          </h2>
          <p
            className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: '"Courier New", Courier, monospace' }}
          >
            Discover some of the innovative solutions I’ve crafted, blending design and technology.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="relative p-6 bg-white dark:bg-gray-800 rounded-3xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl group overflow-hidden"
              whileHover={{ y: -5 }} // Slight lift on hover
              transition={{ duration: 0.3 }}
            >
              {/* Gradient Border Accent */}
              <div className="absolute inset-0 border-4 border-transparent rounded-3xl group-hover:border-t-[#F9EF19] group-hover:border-r-[#a78bfa] group-hover:border-b-[#fbcfe8] group-hover:border-l-[#F9EF19] transition-all duration-300"></div>

              <div className="relative z-10 text-5xl mb-6">{project.icon}</div>
              <h3
                className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-[#F9EF19] transition-colors duration-300"
                style={{ fontFamily: '"Courier New", Courier, monospace' }}
              >
                {project.title}
              </h3>
              <p
                className="text-gray-600 dark:text-gray-300 mb-6 text-base sm:text-lg leading-snug"
                style={{ fontFamily: '"Courier New", Courier, monospace' }}
              >
                {project.description}
              </p>
              <Link
                href={project.link}
                className="inline-flex items-center text-[#F9EF19] hover:text-[#d4c000] font-medium transition-all duration-300 group-hover:pl-2"
                style={{ fontFamily: '"Courier New", Courier, monospace' }}
              >
                Learn More
                <svg
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;