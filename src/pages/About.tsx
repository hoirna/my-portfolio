import Image from "next/image";
export default function About() {
  const skills = [
    "JavaScript (ES6+)",
    "React.js",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "TypeScript",
    "Python",
    "SQL",
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-black dark:text-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Profile Image */}
        <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-6 overflow-hidden rounded-full shadow-lg">
          <Image
            src="/profile.jpg" // Replace with your profile image path
            alt="Seng Hoirna"
            className="w-full h-full object-cover"
            width={500}
            height={500}
          />
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 transform hover:scale-105 transition-transform duration-300">
          About Me
        </h1>

        {/* Introduction */}
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Hi, I’m <span className="font-semibold text-blue-600 dark:text-blue-400">Seng Hoirna</span>, a software developer with a passion for creating innovative and user-friendly solutions. I specialize in building modern web applications using cutting-edge technologies.
        </p>

        {/* Skills Section */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Skills</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Call-to-Action Button */}
        <div className="mt-8">
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Let’s Work Together
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
}