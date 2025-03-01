import { useTheme } from "@/context/ThemeContext"; // Adjust path as needed
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const { theme } = useTheme();

  // Define form data type
  interface FormData {
    name: string;
    email: string;
    message: string;
  }

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<string>("");

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/hoirna",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/seng-hoirna-353752343/",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Handle form submission with EmailJS
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    // Access environment variables
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    // Check if environment variables are available
    if (!serviceId || !templateId || !publicKey) {
      setStatus("Error: EmailJS configuration is missing.");
      console.error("Missing EmailJS environment variables.");
      setTimeout(() => setStatus(""), 3000);
      return;
    }

    try {
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      console.log("EmailJS Success:", result.text);
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("EmailJS Error:", error.message);
        setStatus(`Error: ${error.message}. Please try again.`);
      } else {
        console.error("Unknown EmailJS Error:", error);
        setStatus("An unexpected error occurred. Please try again.");
      }
    }

    // Clear status message after 3 seconds
    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <main
      className={`min-h-screen py-16 px-6 sm:px-10 lg:px-20 ${
        theme === "dark"
          ? "bg-gradient-to-tr from-black via-gray-900 to-indigo-900 text-white"
          : "bg-gradient-to-tr from-indigo-100 via-white to-purple-100 text-gray-900"
      } transition-colors duration-500 overflow-hidden relative`}
    >
      {/* Background Glow Effect */}
      <div
        className={`absolute inset-0 ${
          theme === "dark"
            ? "bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 animate-pulse"
            : "bg-gradient-to-br from-indigo-200/20 via-purple-200/20 to-pink-200/20"
        }`}
      />

      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto relative z-10"
      >
        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className={`text-5xl sm:text-6xl lg:text-7xl font-extrabold text-center mb-6 bg-clip-text text-transparent ${
            theme === "dark"
              ? "bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"
              : "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"
          } animate-text`}
          style={{ fontFamily: '"Courier New", Courier, monospace' }} // Applied to h1
        >
          Let’s Connect
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className={`text-lg sm:text-xl ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          } text-center mb-12 max-w-xl mx-auto`}
          style={{ fontFamily: '"Courier New", Courier, monospace' }} // Applied to p
        >
          Drop me a message or ping me on socials—I’m all ears for new ideas and collabs!
        </motion.p>

        {/* Contact Form */}
        <motion.div
          variants={itemVariants}
          className={`${
            theme === "dark"
              ? "bg-gray-800/80 border-gray-700/50"
              : "bg-white/80 border-gray-200/50"
          } backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-lg mx-auto border hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-shadow duration-500`}
        >
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className={`block text-left ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                } mb-2 font-medium`}
                style={{ fontFamily: '"Courier New", Courier, monospace' }} // Applied to label
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-lg ${
                  theme === "dark"
                    ? "bg-gray-900/50 text-white border-gray-600 focus:ring-cyan-400"
                    : "bg-gray-100/50 text-gray-900 border-gray-300 focus:ring-indigo-500"
                } border focus:outline-none focus:ring-2 transition-all duration-300`}
                style={{ fontFamily: '"Courier New", Courier, monospace' }} // Applied to input
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className={`block text-left ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                } mb-2 font-medium`}
                style={{ fontFamily: '"Courier New", Courier, monospace' }} // Applied to label
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-lg ${
                  theme === "dark"
                    ? "bg-gray-900/50 text-white border-gray-600 focus:ring-cyan-400"
                    : "bg-gray-100/50 text-gray-900 border-gray-300 focus:ring-indigo-500"
                } border focus:outline-none focus:ring-2 transition-all duration-300`}
                style={{ fontFamily: '"Courier New", Courier, monospace' }} // Applied to input
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className={`block text-left ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                } mb-2 font-medium`}
                style={{ fontFamily: '"Courier New", Courier, monospace' }} // Applied to label
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="What's on your mind?"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-lg ${
                  theme === "dark"
                    ? "bg-gray-900/50 text-white border-gray-600 focus:ring-cyan-400"
                    : "bg-gray-100/50 text-gray-900 border-gray-300 focus:ring-indigo-500"
                } border focus:outline-none focus:ring-2 transition-all duration-300`}
                style={{ fontFamily: '"Courier New", Courier, monospace' }} // Applied to textarea
              />
            </div>
            <button
              type="submit"
              className={`w-full px-6 py-3 ${
                theme === "dark"
                  ? "bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600"
                  : "bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600"
              } text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105`}
              style={{ fontFamily: '"Courier New", Courier, monospace' }} // Applied to button
            >
              Send It!
            </button>
            {status && (
              <p
                className={`mt-4 text-center ${
                  status.includes("success") ? "text-green-500" : "text-red-500"
                }`}
                style={{ fontFamily: '"Courier New", Courier, monospace' }} // Applied to status message
              >
                {status}
              </p>
            )}
          </form>
        </motion.div>

        {/* Social Media Links */}
        <motion.div variants={itemVariants} className="mt-12 text-center">
          <h2
            className={`text-2xl sm:text-3xl font-bold mb-6 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            } drop-shadow-md`}
            style={{ fontFamily: '"Courier New", Courier, monospace' }} // Applied to h2
          >
            Catch Me Online
          </h2>
          <div className="flex justify-center space-x-8">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className={`${
                  theme === "dark" ? "text-gray-300 hover:text-cyan-400" : "text-gray-700 hover:text-indigo-500"
                } transition-colors duration-300 drop-shadow-md`}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* Decorative Elements */}
      <div
        className={`absolute top-0 left-0 w-64 h-64 ${
          theme === "dark" ? "bg-cyan-500/10" : "bg-indigo-300/10"
        } rounded-full blur-3xl animate-float`}
      />
      <div
        className={`absolute bottom-0 right-0 w-72 h-72 ${
          theme === "dark" ? "bg-purple-500/10" : "bg-purple-300/10"
        } rounded-full blur-3xl animate-float-slow`}
      />
    </main>
  );
}