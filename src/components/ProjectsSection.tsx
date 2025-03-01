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
    <section className="bg-gradient-to-br from-[#F9EF19] via-[#fbcfe8] to-[#a78bfa] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center">
          <h2
            className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-8 leading-tight"
            style={{ fontFamily: '"Courier New", Courier, monospace' }} // Applied to h2
          >
            Featured Projects
          </h2>
          <p
            className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
            style={{ fontFamily: '"Courier New", Courier, monospace' }} // Applied to p
          >
            Discover some of the innovative solutions I’ve crafted, blending design and technology.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl border-t-4 border-[#F9EF19]"
            >
              <div className="text-5xl mb-6">{project.icon}</div>
              <h3
                className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
                style={{ fontFamily: '"Courier New", Courier, monospace' }} // Applied to h3
              >
                {project.title}
              </h3>
              <p
                className="text-gray-600 dark:text-gray-300 mb-6"
                style={{ fontFamily: '"Courier New", Courier, monospace' }} // Applied to project description
              >
                {project.description}
              </p>
              <Link
                href={project.link}
                className="inline-flex items-center text-[#F9EF19] hover:text-[#d4c000] font-medium transition-colors"
                style={{ fontFamily: '"Courier New", Courier, monospace' }} // Applied to Link
              >
                Learn More
                <svg
                  className="w-5 h-5 ml-2"
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
    </section>
  );
};

export default ProjectsSection;