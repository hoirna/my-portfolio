"use client";

import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Head from "next/head";
import { FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Contact() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/hoirna",
      icon: <FaGithub className="w-7 h-7" />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/seng-hoirna-353752343/",
      icon: <FaLinkedin className="w-7 h-7" />,
    },
    {
      name: "Telegram",
      url: "https://t.me/S_Hoirna",
      icon: <FaTelegramPlane className="w-7 h-7" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
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
    setIsLoading(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("Error: EmailJS configuration is missing.");
      console.error("Missing EmailJS environment variables.");
      setIsLoading(false);
      setTimeout(() => setStatus(""), 3000);
      return;
    }

    const minLoadingTime = 5000;
    const startTime = Date.now();

    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      console.log("EmailJS Success:", response.text);

      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minLoadingTime - elapsedTime);

      await new Promise((resolve) => setTimeout(resolve, remainingTime));

      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error: unknown) {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minLoadingTime - elapsedTime);
      await new Promise((resolve) => setTimeout(resolve, remainingTime));

      if (error instanceof Error) {
        console.error("EmailJS Error:", error.message);
        setStatus(`Error: ${error.message}. Please try again.`);
      } else {
        console.error("Unknown EmailJS Error:", error);
        setStatus("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
      setTimeout(() => setStatus(""), 3000);
    }
  };

  return (
    <>
      <Head>
        <title>Contact | Seng Hoirna</title>
      </Head>
       <main
        className={`min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden ${
          theme === "dark" ? "bg-gray-950 text-gray-100" : "bg-gray-100 text-gray-900"
        }`}
      >
        <div className="fixed inset-0 pointer-events-none">
          <div
            className={`absolute inset-0 bg-grid-pattern bg-[length:35px_35px] opacity-3 ${
              theme === "dark" ? "bg-gray-800/5" : "bg-gray-400/5"
            }`}
          ></div>
          <div
            className={`absolute inset-0 bg-gradient-to-b from-transparent ${
              theme === "dark" ? "to-gray-950/30" : "to-gray-100/30"
            }`}
          ></div>
        </div>
        <style jsx>{`
          .loading-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            background: rgba(0, 0, 0, 0.4);
            z-index: 50;
          }
          .card-grid {
            background-image: linear-gradient(
                to right,
                ${theme === "dark"
                    ? "rgba(75, 85, 99, 0.1)"
                    : "rgba(209, 213, 219, 0.1)"}
                  1px,
                transparent 1px
              ),
              linear-gradient(
                to bottom,
                ${theme === "dark"
                    ? "rgba(75, 85, 99, 0.1)"
                    : "rgba(209, 213, 219, 0.1)"}
                  1px,
                transparent 1px
              );
            background-size: 40px 40px;
            background-position: center;
          }
        `}</style>

        {isLoading && (
          <div className="loading-overlay">
            <DotLottieReact
              src="https://lottie.host/e618b66b-ab16-4c73-bf23-23c93ff28a0d/hl0ZLsOANp.lottie"
              loop
              autoplay
              speed={1.5}
              style={{ width: "180px", height: "180px" }}
            />
          </div>
        )}

        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto mt-14 relative z-10"
        >
          <motion.h1
            variants={itemVariants}
            className={`text-4xl sm:text-5xl font-bold text-center mb-6 ${
              theme === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            Let’s Connect
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className={`text-lg ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            } text-center mb-10 max-w-md mx-auto`}
          >
            Drop me a message or connect via socials—I’m open to new ideas and
            collaborations!
          </motion.p>
          <motion.div
            variants={itemVariants}
            className={`${
              theme === "dark"
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-gray-200"
            } p-6 rounded-xl border w-full max-w-md mx-auto transition-colors duration-300 card-grid`}
          >
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className={`block text-sm font-medium ${
                    theme === "dark" ? "text-gray-200" : "text-gray-700"
                  } mb-1.5`}
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
                  className={`w-full px-3 py-2.5 rounded-md border ${
                    theme === "dark"
                      ? "bg-gray-700/50 text-gray-100 border-gray-600 focus:ring-blue-400"
                      : "bg-gray-50 text-gray-900 border-gray-300 focus:ring-blue-500"
                  } focus:outline-none focus:ring-2 transition-colors duration-200`}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium ${
                    theme === "dark" ? "text-gray-200" : "text-gray-700"
                  } mb-1.5`}
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
                  className={`w-full px-3 py-2.5 rounded-md border ${
                    theme === "dark"
                      ? "bg-gray-700/50 text-gray-100 border-gray-600 focus:ring-blue-400"
                      : "bg-gray-50 text-gray-900 border-gray-300 focus:ring-blue-500"
                  } focus:outline-none focus:ring-2 transition-colors duration-200`}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium ${
                    theme === "dark" ? "text-gray-200" : "text-gray-700"
                  } mb-1.5`}
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
                  className={`w-full px-3 py-2.5 rounded-md border ${
                    theme === "dark"
                      ? "bg-gray-700/50 text-gray-100 border-gray-600 focus:ring-blue-400"
                      : "bg-gray-50 text-gray-900 border-gray-300 focus:ring-blue-500"
                  } focus:outline-none focus:ring-2 transition-colors duration-200`}
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full px-4 py-2.5 ${
                  theme === "dark"
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-blue-500 hover:bg-blue-600"
                } text-white font-medium rounded-md transition-colors duration-200 ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? "Sending..." : "Send Now"}
              </button>
              {status && (
                <p
                  className={`mt-4 text-center text-sm ${
                    status.includes("success")
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {status}
                </p>
              )}
            </form>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-10 text-center">
            <h2
              className={`text-xl font-semibold mb-5 ${
                theme === "dark" ? "text-gray-200" : "text-gray-800"
              }`}
            >
              Or connect with me
            </h2>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${
                    theme === "dark"
                      ? "text-gray-300 hover:text-blue-400"
                      : "text-gray-600 hover:text-blue-500"
                  } transition-colors duration-200`}
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
