"use client";

import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Head from "next/head";
import { FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";

export default function Contact() {
  const { theme } = useTheme();

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
      icon: <FaGithub className="w-8 h-8" />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/seng-hoirna-353752343/",
      icon: <FaLinkedin className="w-8 h-8" />,
    },
    {
      name: "Telegram",
      url: "https://t.me/senghoirna", // Updated placeholder; replace with your actual Telegram handle
      icon: <FaTelegramPlane className="w-8 h-8" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("Error: EmailJS configuration is missing.");
      console.error("Missing EmailJS environment variables.");
      setTimeout(() => setStatus(""), 3000);
      return;
    }

    try {
      const Semiconductor = await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      console.log("EmailJS Success:", Semiconductor.text);
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("EmailJS Error:", error.message);
        setStatus(`Error: ${error.message}. Please try again.`);
      } else {
        console.error("Unknown EmailJS Error:", error);
        setStatus("An unexpected error occurred. Please try again.");
      }
    }

    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <>
      <Head>
        <title>Contact | My Portfolio</title>
        <meta
          name="description"
          content="A showcase of my technical skills and expertise."
        />
      </Head>
      <main
        className={`min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden ${
          theme === "dark"
            ? "bg-gray-950 text-gray-100"
            : "bg-gray-100 text-gray-900"
        } transition-colors duration-500 relative`}
      >
        <div className="fixed inset-0 pointer-events-none">
          <div
            className={`absolute inset-0 bg-grid-pattern bg-[length:96px_96px] opacity-3 ${
              theme === "dark" ? "bg-gray-800/5" : "bg-gray-400/5"
            }`}
          ></div>
          <div
            className={`absolute inset-0 bg-gradient-to-b from-transparent ${
              theme === "dark" ? "to-gray-950/30" : "to-gray-100/30"
            }`}
          ></div>
        </div>
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto relative z-10"
        >
          <motion.h1
            variants={itemVariants}
            className={`text-5xl sm:text-6xl lg:text-5xl mt-14 font-bold text-center mb-6 bg-clip-text text-transparent ${
              theme === "dark"
                ? "bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"
                : "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"
            } animate-text`}
          >
            Let’s Connect
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className={`text-lg sm:text-xl ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            } text-center mb-12 max-w-xl mx-auto`}
          >
            Drop me a message or ping me on socials—I’m all ears for new ideas
            and collabs!
          </motion.p>
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
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className={`block text-left ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  } mb-2 font-medium`}
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
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className={`block text-left ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  } mb-2 font-medium`}
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
                />
              </div>
              <button
                type="submit"
                className={`w-full px-6 py-3 ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600"
                    : "bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600"
                } text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform `}
              >
                Send Now
              </button>
              {status && (
                <p
                  className={`mt-4 text-center ${
                    status.includes("success")
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {status}
                </p>
              )}
            </form>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12 text-center">
            <h2
              className={`text-2xl sm:text-3xl font-bold mb-6 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              } drop-shadow-md`}
            >
              OR 
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
                    theme === "dark"
                      ? "text-gray-300 hover:text-cyan-400"
                      : "text-gray-700 hover:text-indigo-500"
                  } transition-colors duration-300 drop-shadow-md`}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.section>
      </main>
    </>
  );
}