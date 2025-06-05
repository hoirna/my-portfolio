"use client";

import { useTheme } from "@/context/ThemeContext";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  const { theme } = useTheme();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/hofahrenheit",
      icon: <FaGithub className="w-5 h-5" />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/seng-hoirna-353752343/",
      icon: <FaLinkedin className="w-5 h-5" />,
    },
    {
      name: "Twitter",
      url: "https://x.com",
      icon: <FaTwitter className="w-5 h-5" />,
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=100016305190362",
      icon: <FaFacebook className="w-5 h-5" />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/hoirna_/",
      icon: <FaInstagram className="w-5 h-5" />,
    },
    {
      name: "Telegram",
      url: "https://t.me/S_hoirna",
      icon: <FaTelegramPlane className="w-5 h-5" />,
    },
  ];

  const footerLinks = [
    { name: "Privacy Policy", href: "/Privacy" },
    { name: "Contact", href: "/Contact" },
  ];

  return (
    <footer
      className={`py-12 border-t ${
        theme === "dark"
          ? "bg-gray-900 border-gray-800 text-gray-300"
          : "bg-gray-50 border-gray-200 text-gray-700"
      }`}
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
          animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .social-links {
          opacity: 0;
          animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
        }
        .copyright {
          opacity: 0;
          animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards;
        }
        .footer-links {
          opacity: 0;
          animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards;
        }
        .social-link {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .social-link:hover {
          transform: translateY(-2px);
          color: ${theme === "dark" ? "rgb(16, 185, 129)" : "rgb(5, 150, 105)"};
        }
        .footer-link {
          transition: color 0.2s ease;
          position: relative;
        }
        .footer-link:hover {
          color: ${theme === "dark" ? "rgb(16, 185, 129)" : "rgb(5, 150, 105)"};
        }
        .footer-link::after {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: ${theme === "dark"
            ? "rgb(16, 185, 129)"
            : "rgb(5, 150, 105)"};
          transition: width 0.3s ease;
        }
        .footer-link:hover::after {
          width: 100%;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 social-links mb-8">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`social-link p-2 rounded-full ${
                  theme === "dark"
                    ? "text-gray-400 hover:bg-gray-800"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
                aria-label={link.name}
              >
                {link.icon}
              </Link>
            ))}
          </div>

          <nav className="flex space-x-6 footer-links mb-8">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`footer-link text-sm font-medium ${
                  theme === "dark" ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <p
            className={`text-xs copyright text-center ${
              theme === "dark" ? "text-gray-500" : "text-gray-400"
            }`}
          >
            ©{new Date().getFullYear()} Seng Hoirna. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
