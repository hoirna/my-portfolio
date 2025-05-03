import Link from 'next/link';
import { motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#F9EF19] via-[#fbcfe8] to-[#a78bfa] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 sm:py-24 lg:py-28 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-8">
            Let’s Connect
          </h2>

          <motion.p
            className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Feel free to reach out if you’d like to collaborate, discuss a project, or just say hi! I’d love to hear from you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Link
              href="/contact"
              className="relative inline-flex items-center px-8 py-4 bg-[#F9EF19] text-gray-900 font-bold rounded-full shadow-lg overflow-hidden group focus:outline-none focus:ring-4 focus:ring-[#fbcfe8] focus:ring-opacity-50"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#d4c000] to-[#F9EF19] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10 flex items-center">
                Get in Touch
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
