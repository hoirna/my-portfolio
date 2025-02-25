const AboutSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 transform hover:scale-105 transition-transform duration-300">
            About Me
          </h2>
          <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            I am a full-stack developer with expertise in building scalable and user-friendly web applications. I love working with modern technologies like{" "}
            <span className="text-blue-500 dark:text-blue-400 font-semibold">Next.js</span>,{" "}
            <span className="text-blue-500 dark:text-blue-400 font-semibold">React</span>, and{" "}
            <span className="text-blue-500 dark:text-blue-400 font-semibold">Tailwind CSS</span>.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition-colors duration-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-600 transition-colors duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;