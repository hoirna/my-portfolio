"use client";

import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  const { theme } = useTheme();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/hoirna",
      icon: <GitHubIcon className="w-6 h-6" />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/seng-hoirna-353752343/",
      icon: <LinkedInIcon className="w-6 h-6" />,
    },
    {
      name: "Twitter",
      url: "https://x.com",
      icon: <TwitterIcon className="w-6 h-6" />,
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=100016305190362",
      icon: <FacebookIcon className="w-6 h-6" />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/hoirna_/",
      icon: <InstagramIcon className="w-6 h-6" />,
    },
  ];

  return (
    <footer
      className={`py-12 sm:py-16 lg:py-20 relative overflow-hidden font-sans ${
        theme === "dark"
          ? "bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300"
          : "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700"
      }`}
    >
      {/* Subtle Cloud Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="animate-clouds-footer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 450 150"
            width="100%"
            height="100%"
            className="fill-gray-300 dark:fill-gray-700 opacity-15"
          >
            <path d="M50,100 Q80,40 120,80 T180,90 Q220,50 260,90 T320,100 Q380,60 420,90 T450,100 H0 Q20,130 50,100 Z" />
          </svg>
        </div>
        <div className="animate-clouds-footer-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 120"
            width="100%"
            height="100%"
            className="fill-gray-200 dark:fill-gray-600 opacity-10"
          >
            <path d="M40,90 Q70,30 110,70 T160,80 Q200,40 240,80 T300,90 Q340,50 380,80 T400,90 H0 Q20,110 40,90 Z" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Social Media Links */}
          <motion.div
            className="flex space-x-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-1.5 rounded-full transition-all duration-300 ${
                  theme === "dark"
                    ? "text-gray-300 hover:text-white hover:bg-gray-700"
                    : "text-gray-700 hover:text-black hover:bg-gray-300"
                }`}
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.2 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.p
            className="text-sm sm:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            © {new Date().getFullYear()} Seng Hoirna. All rights reserved.
          </motion.p>

          {/* Footer Links */}
          <motion.div
            className="flex space-x-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <a
              href="/privacy-policy"
              className={`transition-colors duration-300 text-sm sm:text-base ${
                theme === "dark"
                  ? "text-gray-300 hover:text-[#80ff80]"
                  : "text-gray-700 hover:text-[#00ff00]"
              }`}
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className={`transition-colors duration-300 text-sm sm:text-base ${
                theme === "dark"
                  ? "text-gray-300 hover:text-[#80ff80]"
                  : "text-gray-700 hover:text-[#00ff00]"
              }`}
            >
              Terms of Service
            </a>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
