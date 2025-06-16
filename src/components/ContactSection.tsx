"use client";

import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

const ContactSection = () => {
  const { theme } = useTheme();

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-28 lg:py-20 font-sans overflow-hidden"
    >
      <style jsx>{`
        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scaleIn {
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeIn 0.6s ease-out forwards;
        }
        .fade-in-delay {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeIn 0.6s ease-out 0.3s forwards;
        }
        .scale-in {
          opacity: 0;
          transform: scale(0.95);
          animation: scaleIn 0.6s ease-out 0.5s forwards;
        }
        .button-hover {
          transition: all 0.3s ease;
        }
        .button-hover:hover .gradient-overlay {
          opacity: 1;
        }
        .gradient-overlay {
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .button-hover:hover .arrow {
          transform: translateX(4px);
        }
        .arrow {
          transition: transform 0.3s ease;
        }
        .button-hover:hover {
          border-color: ${theme === "dark"
            ? "rgba(52, 211, 153, 0.6)"
            : "rgba(16, 185, 129, 0.6)"};
          color: ${theme === "dark" ? "rgb(110, 231, 183)" : "rgb(4, 120, 87)"};
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center fade-in">
          <span
            className={`text-sm font-medium px-4 py-1 rounded-full ${
              theme === "dark"
                ? "bg-emerald-900/20 text-emerald-400"
                : "bg-emerald-100 text-emerald-700"
            }`}
          >
            GET IN TOUCH
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-6 mb-6">
            <span
              className={theme === "dark" ? "text-gray-100" : "text-gray-900"}
            >
              Let‘s{" "}
            </span>
            <span
              className={
                theme === "dark" ? "text-emerald-400" : "text-emerald-600"
              }
            >
              Connect
            </span>
          </h2>

          <p
            className={`max-w-2xl mx-auto text-lg ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            } mb-10 fade-in-delay`}
          >
            Have a project in mind or want to discuss opportunities? I‘m
            currently available for freelance work and collaborations.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 scale-in">
            <Link
              href="/Contact"
              className="relative inline-flex items-center justify-center px-8 py-4 rounded-full font-medium transition-all duration-300 overflow-hidden bg-emerald-600 text-white hover:bg-emerald-700 hover:scale-105"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-400 pointer-events-none"></span>
              <span className="relative z-10 flex items-center">
                Contact Me
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
              </span>
            </Link>

            <Link
              href="mailto:mrrhorna168@gmail.com"
              className={`relative inline-flex items-center justify-center px-8 py-4 rounded-full font-medium transition-all duration-300 border ${
                theme === "dark"
                  ? "border-emerald-400/30 text-emerald-400 bg-emerald-400/10 hover:bg-emerald-400/20"
                  : "border-emerald-600/30 text-emerald-600 bg-emerald-600/10 hover:bg-emerald-600/20"
              }`}
            >
              Email Directly
            </Link>
          </div>

          <div className="mt-12 gap-4">
            <p
              className={`text-sm ${
                theme === "dark" ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Alternatively, connect with me on{" "}
              <a
                href="https://www.linkedin.com/in/seng-hoirna-353752343/"
                 target="_blank"
                rel="noopener noreferrer"
                className={`hover:underline ${
                  theme === "dark" ? "text-emerald-400" : "text-emerald-600"
                }`}
              >
                LinkedIn
              </a>{" "}
              or{" "}
              <a
                href="https://github.com/hoirna"
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:underline ${
                  theme === "dark" ? "text-emerald-400" : "text-emerald-600"
                }`}
              >
                GitHub
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
