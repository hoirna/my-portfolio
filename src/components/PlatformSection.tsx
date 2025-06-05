"use client";

import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

const PlatformSection = () => {
  const { theme } = useTheme();

  const aiPlatforms = [
    {
      id: 1,
      title: "Backend AI",
      description:
        "Automate API development, database optimization, and cloud infrastructure with AI-powered code generation and analysis.",
      icon: "⚙️",
      link: "https://chatgpt.com",
      tags: ["GPT-4 (Code)", "Claude (Analysis)", "Serverless"],
      recommendedFor: [
        "API scaffolding",
        "Database optimization",
        "Cloud architecture",
      ],
    },
    {
      id: 2,
      title: "Frontend AI",
      description:
        "Generate responsive components, fix CSS issues, and optimize React/Vue performance with AI-assisted development.",
      icon: "💻",
      link: "https://grok.com",
      tags: ["Grok (Real-time)", "Deepseek (Debugging)", "Tailwind"],
      recommendedFor: [
        "Component generation",
        "Performance tuning",
        "Accessibility fixes",
      ],
    },
    {
      id: 3,
      title: "UX/UI Design",
      description:
        "Transform wireframes into production-ready designs with AI-powered layout suggestions and accessibility compliance checks.",
      icon: "🎨",
      link: "https://claude.ai",
      tags: ["Claude (UX Writing)", "GPT-4 (Prototyping)", "Figma"],
      recommendedFor: [
        "Design system generation",
        "User flow optimization",
        "Microcopy suggestions",
      ],
    },
  ];

  return (
    <section
      id="ai-platforms"
      className="relative py-20 sm:py-28 lg:py-20 font-sans overflow-hidden"
    >
      <style jsx>{`
        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeIn 0.6s ease-out forwards;
        }
        .card-item {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeIn 0.5s ease-out forwards;
        }
        .card-item:nth-child(1) {
          animation-delay: 0.3s;
        }
        .card-item:nth-child(2) {
          animation-delay: 0.4s;
        }
        .card-item:nth-child(3) {
          animation-delay: 0.5s;
        }
        .card {
          transition: all 0.3s ease;
        }
        .card:hover {
          border-color: ${theme === "dark"
            ? "rgba(16, 185, 129, 0.3)"
            : "rgba(5, 150, 105, 0.3)"};
          box-shadow: ${theme === "dark"
            ? "0 4px 20px rgba(16, 185, 129, 0.2)"
            : "0 4px 20px rgba(5, 150, 105, 0.1)"};
        }
        .card:hover .card-bg {
          opacity: 1;
        }
        .card-bg {
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .card:hover .arrow {
          transform: translateX(4px);
        }
        .arrow {
          transition: transform 0.3s ease;
        }
        .use-case-badge {
          transition: all 0.2s ease;
        }
        .use-case-badge:hover {
          transform: translateY(-2px);
        }
      `}</style>
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 bg-[size:100px_100px] bg-[linear-gradient(to_right,rgba(16,185,129,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.3)_1px,transparent_1px)]"
          style={{
            backgroundColor:
              theme === "dark"
                ? "rgba(0, 0, 0, 0.9)"
                : "rgba(245, 245, 245, 0.9)",
          }}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-b from-transparent ${
            theme === "dark" ? "to-gray-950/10" : "to-gray-50/10"
          }`}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 fade-in">
          <span
            className={`text-sm font-medium px-4 py-1 rounded-full ${
              theme === "dark"
                ? "bg-emerald-900/20 text-emerald-400"
                : "bg-emerald-100 text-emerald-700"
            }`}
          >
            AI-DRIVEN DEVELOPMENT
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-6">
            <span
              className={theme === "dark" ? "text-gray-100" : "text-gray-900"}
            >
              {" "}
              Specialized
            </span>{" "}
            <span
              className={
                theme === "dark" ? "text-emerald-400" : "text-emerald-600"
              }
            >
              AI Solutions
            </span>
          </h2>
          <p
            className={`max-w-2xl mx-auto mt-4 text-lg ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Optimized AI recommendations for backend, frontend, and UX/UI
            development workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiPlatforms.map((platform) => (
            <div
              key={platform.id}
              className={`card relative p-6 rounded-xl border ${
                theme === "dark"
                  ? "bg-gray-800/50 border-gray-700"
                  : "bg-gray-50 border-gray-200"
              } card-item h-full flex flex-col`}
            >
              <div className="flex items-center gap-4 mb-6">
                <span
                  className={`text-3xl ${
                    theme === "dark" ? "text-emerald-400" : "text-emerald-600"
                  }`}
                >
                  {platform.icon}
                </span>
                <h3
                  className={`text-xl font-semibold ${
                    theme === "dark" ? " text-white " : "text-black"
                  }`}
                >
                  {platform.title}
                </h3>
              </div>

              <p
                className={`flex-grow mb-6 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {platform.description}
              </p>

              <div className="mb-6">
                <h4
                  className={`text-sm font-medium mb-2 ${
                    theme === "dark" ? "text-emerald-300" : "text-emerald-700"
                  }`}
                >
                  Recommended for:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {platform.recommendedFor.map((useCase) => (
                    <span
                      key={useCase}
                      className={`use-case-badge text-xs font-medium px-2 py-1 rounded ${
                        theme === "dark"
                          ? "bg-emerald-900/30 text-emerald-200"
                          : "bg-emerald-100 text-emerald-800"
                      }`}
                    >
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {platform.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs font-medium px-2 py-1 rounded ${
                      theme === "dark"
                        ? "bg-gray-700 text-emerald-300"
                        : "bg-gray-200 text-emerald-700"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link href={platform.link} passHref legacyBehavior>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center mt-auto font-medium transition-colors duration-300 ${
                    theme === "dark"
                      ? "text-emerald-400 hover:text-emerald-300"
                      : "text-emerald-600 hover:text-emerald-500"
                  }`}
                >
                  Explore solutions
                  <svg
                    className="arrow w-4 h-4 ml-2"
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
              </Link>

              <div
                className={`card-bg absolute inset-0 -z-10 rounded-xl ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-emerald-900/20 to-gray-800"
                    : "bg-gradient-to-br from-emerald-100/50 to-gray-50"
                }`}
              ></div>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 pt-16 border-t ${
            theme === "dark" ? "border-gray-800" : "border-gray-200"
          }`}
        >
          <div className="max-w-4xl mx-auto">
            <h3
              className={`text-2xl font-semibold mb-6 ${
                theme === "dark" ? "text-gray-200" : "text-gray-800"
              }`}
            >
              AI-Powered Development Workflow
            </h3>
            <p
              className={`text-lg mb-8 ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Each AI model is strategically selected for its strengths in
              specific development areas:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div
                className={`p-4 rounded-lg ${
                  theme === "dark" ? "bg-gray-800" : "bg-gray-100"
                }`}
              >
                <h4
                  className={`font-bold mb-2 ${
                    theme === "dark" ? "text-emerald-400" : "text-emerald-600"
                  }`}
                >
                  Backend
                </h4>
                <ul
                  className={`space-y-1 text-sm ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  <li>• GPT-4 for code generation</li>
                  <li>• Claude for architecture analysis</li>
                  <li>• Deepseek for debugging</li>
                </ul>
              </div>

              <div
                className={`p-4 rounded-lg ${
                  theme === "dark" ? "bg-gray-800" : "bg-gray-100"
                }`}
              >
                <h4
                  className={`font-bold mb-2 ${
                    theme === "dark" ? "text-emerald-400" : "text-emerald-600"
                  }`}
                >
                  Frontend
                </h4>
                <ul
                  className={`space-y-1 text-sm ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  <li>• Grok for real-time suggestions</li>
                  <li>• GPT-4 for component generation</li>
                  <li>• Claude for accessibility</li>
                </ul>
              </div>

              <div
                className={`p-4 rounded-lg ${
                  theme === "dark" ? "bg-gray-800" : "bg-gray-100"
                }`}
              >
                <h4
                  className={`font-bold mb-2 ${
                    theme === "dark" ? "text-emerald-400" : "text-emerald-600"
                  }`}
                >
                  UX/UI
                </h4>
                <ul
                  className={`space-y-1 text-sm ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  <li>• Claude for UX writing</li>
                  <li>• GPT-4 for prototyping</li>
                  <li>• Grok for design iterations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
