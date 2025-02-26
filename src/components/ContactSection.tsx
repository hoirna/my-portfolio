import Link from 'next/link';

const ContactSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#F9EF19] via-[#fbcfe8] to-[#a78bfa] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-8 leading-tight">
          Let&apos;s Connect
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
          Feel free to reach out if you&apos;d like to collaborate, discuss a project, or just say hi! I&apos;d love to hear from you.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center px-8 py-4 bg-[#F9EF19] text-gray-900 font-bold rounded-full shadow-lg hover:bg-[#d4c000] transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#fbcfe8] focus:ring-opacity-50"
        >
          Get in Touch
          <svg
            className="w-5 h-5 ml-3"
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
        </Link>
      </div>
    </section>
  );
};

export default ContactSection;
