import Link from 'next/link';

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
    <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 transform hover:scale-105 transition-transform duration-300">
            My Projects
          </h2>
          <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore some of the innovative projects I have built using cutting-edge technologies.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="text-4xl mb-4 text-gray-900 dark:text-white">{project.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{project.description}</p>
              <Link
                href={project.link}
                className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500 font-semibold transition-colors duration-300"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;