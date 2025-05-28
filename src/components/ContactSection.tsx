'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

const ContactSection = () => {
  const { theme } = useTheme();

  return (
    <section
      id="contact"
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
          className="text-center"
        >
          <span
            className={`text-sm font-medium px-4 py-1 rounded-full ${
              theme === 'dark' ? 'bg-emerald-900/20 text-emerald-400' : 'bg-emerald-100 text-emerald-700'
            }`}
          >
            GET IN TOUCH
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-6 mb-6">
            Let&apos;s <span className={theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'}>Connect</span>
          </h2>

          <motion.p
            className={`max-w-2xl mx-auto text-lg ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            } mb-10`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Have a project in mind or want to discuss opportunities? I&apos;m currently available for freelance work and collaborations.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Link
              href="/contact"
              className={`relative inline-flex items-center justify-center px-8 py-4 rounded-full font-medium transition-all duration-300 overflow-hidden group ${
                theme === 'dark'
                  ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
                  : 'bg-emerald-600 hover:bg-emerald-500 text-white'
              }`}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10 flex items-center">
                Contact Me
                <svg
                  className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </Link>

            <Link
              href="mailto:hello@example.com"
              className={`relative inline-flex items-center justify-center px-8 py-4 rounded-full font-medium transition-all duration-300 border ${
                theme === 'dark'
                  ? 'border-emerald-400/30 hover:border-emerald-400/60 text-emerald-400 hover:text-emerald-300'
                  : 'border-emerald-600/30 hover:border-emerald-600/60 text-emerald-600 hover:text-emerald-700'
              }`}
            >
              Email Directly
            </Link>
          </motion.div>

          <div
            className={`mt-16 pt-16 border-t ${
              theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
            }`}
          >
            <p
              className={`text-sm ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`}
            >
              Alternatively, connect with me on{' '}
              <a
                href="https://linkedin.com"
                className={`hover:underline ${
                  theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'
                }`}
              >
                LinkedIn
              </a>{' '}
              or{' '}
              <a
                href="https://github.com"
                className={`hover:underline ${
                  theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'
                }`}
              >
                GitHub
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
