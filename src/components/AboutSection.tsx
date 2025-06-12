import { useTheme } from "@/context/ThemeContext";
import { FaCode, FaServer, FaLightbulb } from "react-icons/fa";

const AboutSection = () => {
  const { theme } = useTheme();

  return (
    <section
      id="about"
      className="relative py-24 sm:py-24 lg:py-40 font-sans bg-white dark:bg-gray-900"
      aria-labelledby="about-heading"
    >
         <div className="fixed inset-0 pointer-events-none z-0">
          <div
            className="absolute inset-0 bg-[size:100px_100px] bg-[linear-gradient(to_right,rgba(16,185,129,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.3)_1px,transparent_1px)]"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-b from-transparent ${
              theme === "dark" ? "to-gray-950" : "to-gray-50"
            }`}
          ></div>
        </div>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <header className="text-center mb-">
          <span
            className={`text-sm font-medium px-4 py-1 rounded-full ${
              theme === "dark"
                ? "bg-emerald-900/20 text-emerald-400"
                : "bg-emerald-100 text-emerald-700"
            }`}
          >
            My Journey
          </span>
          <h2
            id="about-heading"
            className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Me
            </span>
          </h2>
        </header>

        <div className="flex flex-col lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Who I Am
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I&apos;m{" "}
                <strong className="font-semibold text-gray-800 dark:text-gray-100">
                  Seng Hoirna
                </strong>
                , a junior web developer passionate about crafting responsive,
                efficient, and user-friendly websites. With a strong foundation
                in both frontend and backend technologies, I thrive on learning
                and solving problems.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I’ve contributed to projects using Vue 3, Tailwind CSS, Next.js,
                Node.js, and Directus during my time at{" "}
                <strong className="font-semibold text-gray-800 dark:text-gray-100">
                  AI FARM Co., Ltd
                </strong>
                . I’m always eager to explore new technologies and push myself
                beyond my comfort zone.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                My Approach
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-blue-100/20 dark:bg-blue-900/20">
                    <FaCode className="text-xl text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                      Practical Coding
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      I build scalable and performant apps using technologies
                      like Next.js, TypeScript, and Postgres, while keeping the
                      code clean and easy to maintain.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-purple-100/20 dark:bg-purple-900/20">
                    <FaServer className="text-xl text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                      Headless CMS Experience
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      My experience with Directus and API integration allows me
                      to manage content flexibly and deliver powerful frontend
                      experiences.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-amber-100/20 dark:bg-amber-900/20">
                    <FaLightbulb className="text-xl text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                      Always Learning
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      I dedicate time weekly to exploring tools like Docker,
                      enhancing UI/UX, and learning how to optimize applications
                      for better user performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Beyond Code
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                When I&apos;m not at my desk building applications, you&apos;ll
                find me:
              </p>
              <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-emerald-500">•</span>
                  <span>
                    Mentoring junior developers and contributing to open source
                    projects
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-emerald-500">•</span>
                  <span>Exploring new hiking trails and photography</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-emerald-500">•</span>
                  <span>Experimenting with IoT and smart home automation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-emerald-500">•</span>
                  <span>
                    Reading about psychology and human-computer interaction
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Why Work With Me?
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I bring more than just technical skills to the table. With
                freelance and company experience in AI FARM, I know how to adapt
                to fast-paced environments and align with business goals.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                My colleagues describe me as a fast learner, a dependable team
                member, and someone who’s always looking for ways to improve
                both personally and professionally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
