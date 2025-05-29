"use client";

import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

const AboutSection = () => {
  useTheme();

  const cards = [
    {
      title: "Front-end",
      skills: ["Vue 3", "Next.js", "TypeScript", "Tailwind CSS"],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Back-end",
      skills: ["Node.js", "Express", "Directus"],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
          />
        </svg>
      ),
      color: "from-purple-500 to-fuchsia-500",
    },
    {
      title: "Tools",
      skills: ["Docker", "GitHub/GitLab", "Vercel"],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      color: "from-amber-500 to-orange-500",
    },
    {
      title: "UI/UX",
      skills: ["Figma", "Canva"],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
      color: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section className="relative py-20 sm:py-28 lg:py-20 font-sans overflow-hidden">
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
          animation: fadeIn 0.8s ease-out forwards;
        }
        .fade-in-delay {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeIn 0.8s ease-out 0.4s forwards;
        }
        .card {
          transition: all 0.3s ease;
        }
        .card:hover {
          transform: translateY(-8px);
        }
        .card:hover .card-gradient {
          opacity: 1;
        }
        .card-gradient {
          position: absolute;
          inset: 0;
          border-radius: 0.75rem;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }
        .card-item {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeIn 0.5s ease-out forwards;
          position: relative;
        }
        .card-item:nth-child(1) {
          animation-delay: 0s;
        }
        .card-item:nth-child(2) {
          animation-delay: 0.1s;
        }
        .card-item:nth-child(3) {
          animation-delay: 0.2s;
        }
        .card-item:nth-child(4) {
          animation-delay: 0.3s;
        }
        .link-hover {
          transition: all 0.3s ease;
        }
        .link-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
        .glow {
          opacity: 0.3;
          transition: opacity 1s ease-out;
        }
        .glow-loaded {
          opacity: 0.3;
        }
      `}</style>
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[size:100px_100px] bg-[linear-gradient(to_right,rgba(16,185,129,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.15)_1px,transparent_1px)] animate-gridPulse" />
      </div>

      <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-blue-100/30 dark:bg-blue-900/20 blur-3xl glow glow-loaded"></div>
      <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-purple-100/30 dark:bg-purple-900/20 blur-3xl glow glow-loaded"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Me
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            I&apos;m{" "}
            <span className="font-semibold text-gray-800 dark:text-gray-200">
              Seng Hoirna
            </span>
            , a full-stack developer with expertise in building modern web
            applications. I combine technical skills with creative
            problem-solving to deliver exceptional digital experiences. My
            approach focuses on clean code, intuitive interfaces, and scalable
            architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div key={index} className="card card-item">
              <div
                className={`card-gradient bg-gradient-to-br ${card.color} blur-md`}
              ></div>
              <div
                className={`h-full bg-gradient-to-br ${card.color} p-0.5 rounded-xl shadow-lg`}
              >
                <div className="h-full bg-white dark:bg-gray-900 rounded-xl p-6 flex flex-col items-center text-center relative z-10">
                  <div
                    className={`mb-4 p-3 rounded-lg bg-gradient-to-br ${card.color} text-white`}
                  >
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {card.title}
                  </h3>
                  <ul className="space-y-2 flex-1">
                    {card.skills.map((skill, i) => (
                      <li
                        key={i}
                        className="text-gray-600 dark:text-gray-400 font-medium"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center fade-in-delay">
          <Link
            href="/Contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-xl hover:bg-gradient-to-r hover:from-green-600 hover:to-emerald-700"
          >
            Let&apos;s Work Together
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
