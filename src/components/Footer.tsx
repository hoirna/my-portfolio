'use client';

import { useTheme } from '@/context/ThemeContext';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  const { theme } = useTheme();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/hoirna',
      icon: <GitHubIcon className="w-6 h-6" />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/seng-hoirna-353752343/',
      icon: <LinkedInIcon className="w-6 h-6" />,
    },
    {
      name: 'Twitter',
      url: 'https://x.com',
      icon: <TwitterIcon className="w-6 h-6" />,
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=100016305190362',
      icon: <FacebookIcon className="w-6 h-6" />,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/hoirna_/',
      icon: <InstagramIcon className="w-6 h-6" />,
    },
  ];

  return (
    <footer
      className={`py-12 sm:py-16 lg:py-20 relative font-sans ${
        theme === 'dark'
          ? 'bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300'
          : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700'
      } backdrop-blur-md bg-opacity-80`}
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
          transform: translateY(30px);
          animation: fadeIn 0.7s ease-out forwards;
        }
        .social-links {
          opacity: 0;
          animation: fadeIn 0.6s ease-out 0.3s forwards;
        }
        .copyright {
          opacity: 0;
          animation: fadeIn 0.6s ease-out 0.5s forwards;
 Reduces unnecessary repetition in the footer links section */}
        .footer-links {
          opacity: 0;
          animation: fadeIn 0.6s ease-out 0.7s forwards;
        }
        .social-link {
          transition: all 0.3s ease;
        }
        .social-link:hover {
          transform: scale(1.15);
          background-color: ${theme === 'dark' ? 'rgb(55, 65, 81)' : 'rgb(209, 213, 219)'};
          color: ${theme === 'dark' ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'};
        }
        .footer-link {
          transition: color 0.3s ease;
        }
        .footer-link:hover {
          color: ${theme === 'dark' ? '#80ff80' : '#00ff00'};
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-8 fade-in">
          <div className="flex space-x-8 social-links">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`social-link p-1.5 rounded-full ${
                  theme === 'dark'
                    ? 'text-gray-100'
                    : 'text-gray-700'
                }`}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm sm:text-base copyright">
            © {new Date().getFullYear()} Seng Hoirna. All rights reserved.
          </p>

          {/* Footer Links */}
          <div className="flex space-x-6 footer-links">
            <a
              href="/Privacy"
              className={`footer-link text-sm sm:text-base ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;