import { useTheme } from "@/context/ThemeContext";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaFigma,
  FaReact,
  FaVuejs,
  FaAngular,
  FaPython,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";
import { SiNextdotjs, SiTypescript } from "react-icons/si";

const skillsData = [
  { name: "HTML", level: 85, icon: <FaHtml5 /> },
  { name: "CSS", level: 85, icon: <FaCss3Alt /> },
  { name: "JavaScript", level: 70, icon: <FaJs /> },
  { name: "Next.js", level: 85, icon: <SiNextdotjs /> },
  { name: "TypeScript", level: 80, icon: <SiTypescript /> },
  { name: "Figma", level: 75, icon: <FaFigma /> },
];

const sliderIcons = [
  { name: "React", icon: <FaReact /> },
  { name: "Vue 3", icon: <FaVuejs /> },
  { name: "Angular", icon: <FaAngular /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Git", icon: <FaGitAlt /> },
];
const SkillsSection = () => {
  const { theme } = useTheme();

  return (
    <section
      id="SkillsSection"
      className="relative py-20 sm:py-28 lg:py-20 font-sans overflow-hidden"
    >
      <style jsx>{`
        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes progress {
          from {
            width: 0;
          }
          to {
            width: var(--progress-width);
          }
        }
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-16.67%); /* 100% / 6 sets */
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
        .card-item:nth-child(4) {
          animation-delay: 0.6s;
        }
        .card-item:nth-child(5) {
          animation-delay: 0.7s;
        }
        .card-item:nth-child(6) {
          animation-delay: 0.8s;
        }
        .progress-bar {
          width: 0;
          animation: progress 1.2s ease-out 0.5s forwards;
        }
        .card {
          transition: all 0.3s ease;
        }
        .card:hover {
          border-color: ${theme === "dark"
            ? "rgba(52, 211, 153, 0.3)"
            : "rgba(16, 185, 129, 0.3)"};
          box-shadow: ${theme === "dark"
            ? "0 4px 20px rgba(16, 185, 129, 0.2)"
            : "0 4px 20px rgba(16, 185, 129, 0.1)"};
        }
        .card:hover .card-bg {
          opacity: 1;
        }
        .card-bg {
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .slider-container {
          width: 100%;
          overflow: hidden;
          position: relative;
        }
        .slider-container::before,
        .slider-container::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 150px; /* Wider smoke for a more dramatic SpaceX effect */
          z-index: 10;
          pointer-events: none;
        }
        .slider-track {
          display: flex;
          width: max-content;
          animation: slide 60s linear infinite;
        }

        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%); /* Move by half of the content width */
          }
        }

        .slider-item {
          flex: 0 0 auto;
          transition: transform 0.3s ease;
        }
      `}</style>
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[size:100px_100px] bg-[linear-gradient(to_right,rgba(16,185,129,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.15)_1px,transparent_1px)] animate-gridPulse" />
        <div
          className={`absolute inset-0 bg-gradient-to-b from-transparent ${
            theme === "dark" ? "to-gray-950/30" : "to-gray-100/30"
          }`}
        ></div>
      </div>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 fade-in">
          <span
            className={`text-sm font-medium px-4 py-1 rounded-full ${
              theme === "dark"
                ? "bg-emerald-900/20 text-emerald-400"
                : "bg-emerald-100 text-emerald-700"
            }`}
          >
            Experience
          </span>
          <h2 className="text-4xl py-3 sm:text-5xl lg:text-6xl font-semibold">
            <span
              className={theme === "dark" ? "text-gray-100" : "text-gray-900"}
            >
              Proficient{" "}
            </span>
            <span
              className={
                theme === "dark" ? "text-emerald-400" : "text-emerald-600"
              }
            >
              Skills
            </span>
          </h2>
          <p
            className={`max-w-2xl mx-auto mt-4 text-lg ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            My technical toolkit includes modern web technologies that I’ve
            mastered through years of hands-on experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill) => (
            <div
              key={skill.name}
              className={`card relative p-6 rounded-xl border ${
                theme === "dark"
                  ? "bg-gray-800/50 border-gray-700"
                  : "bg-gray-50 border-gray-200"
              } card-item`}
              style={
                {
                  ["--progress-width" as never]: `${skill.level}%`,
                } as React.CSSProperties
              }
            >
              <div className="flex items-center gap-4 mb-4">
                <span
                  className={`text-2xl ${
                    theme === "dark" ? "text-emerald-400" : "text-emerald-600"
                  }`}
                >
                  {skill.icon}
                </span>
                <h3
                  className={`text-xl font-medium ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  {skill.name}
                </h3>
              </div>

              <div className="flex items-center justify-between mb-3">
                <span
                  className={`text-sm font-medium ${
                    theme === "dark" ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Proficiency
                </span>
                <span
                  className={`text-sm font-bold ${
                    theme === "dark" ? "text-emerald-400" : "text-emerald-600"
                  }`}
                >
                  {skill.level}%
                </span>
              </div>

              <div
                className={`w-full h-2 rounded-full overflow-hidden ${
                  theme === "dark" ? "bg-gray-700" : "bg-gray-200"
                }`}
              >
                <div
                  className={`h-full rounded-full progress-bar ${
                    theme === "dark"
                      ? "bg-gradient-to-r from-emerald-500 to-emerald-400"
                      : "bg-gradient-to-r from-emerald-600 to-emerald-400"
                  }`}
                />
              </div>

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
        <div className="mt-24">
          <div className="text-center mb-8 fade-in">
            <h3
              className={`text-3xl font-semibold ${
              theme === "dark" ? "text-gray-200" : "text-gray-800"
              }`}
            >
              Technologies I Used to Know
            </h3>
            <p
              className={`mt-2 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Technologies most used, including frameworks, languages, and tools that shaped journey.
            </p>
          </div>
          <div className="slider-container w-full overflow-hidden relative">
            <div className="slider-track flex">
              {[
                ...sliderIcons,
                ...sliderIcons,
                ...sliderIcons,
                ...sliderIcons,
              ].map((skill, index) => (
                <div
                  key={`${skill.name}-${index}`}
                  className="slider-item shrink-0"
                >
                  <div className="px-12">
                    <span
                      className={`text-7xl ${
                        theme === "dark"
                          ? "text-emerald-400"
                          : "text-emerald-600"
                      }`}
                    >
                      {skill.icon}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className={`mt-16 pt-16 bo ${
            theme === "dark" ? "border-gray-800" : "border-gray-200"
          }`}
        >
          <div className="max-w-4xl mx-auto">
            <h3
              className={`text-2xl font-semibold mb-6 ${
                theme === "dark" ? "text-gray-200" : "text-gray-800"
              }`}
            >
              Continuous Learning Journey
            </h3>
            <p
              className={`text-lg ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Technology evolves rapidly, and I’m committed to staying at the
              forefront. I regularly update my skills through courses,
              certifications, and hands-on projects to ensure I deliver
              cutting-edge solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
