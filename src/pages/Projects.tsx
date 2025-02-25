import Image from "next/image";
export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A fully responsive e-commerce platform built with Next.js, Tailwind CSS, and Stripe for payments.",
      image: "/ecommerce.jpg", // Replace with your image path
      link: "/projects/ecommerce",
    },
    {
      id: 2,
      title: "AI-Powered Chatbot",
      description: "An AI chatbot integrated with OpenAI's GPT-4, designed for customer support and engagement.",
      image: "/chatbot.jpg", // Replace with your image path
      link: "/projects/chatbot",
    },
    {
      id: 3,
      title: "Portfolio Builder",
      description: "A drag-and-drop portfolio builder for creatives, featuring real-time collaboration and cloud storage.",
      image: "/portfolio-builder.jpg", // Replace with your image path
      link: "/projects/portfolio-builder",
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-black dark:text-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 transform hover:scale-105 transition-transform duration-300">
          My Projects
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-8">
          Here are some of the projects I’ve worked on:
        </p>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700 relative overflow-hidden"
            >
              {/* Project Image */}
              <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  width={500}
                  height={55}
                />
              </div>

              {/* Project Title */}
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h2>

              {/* Project Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>

              {/* Learn More Link */}
              <a
                href={project.link}
                className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500 font-semibold transition-colors duration-300"
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
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}