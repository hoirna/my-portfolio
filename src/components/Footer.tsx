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
      className={`py-8 ${
        theme === 'dark'
          ? 'bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300'
          : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Social Media Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {link.icon}
              </a>
            ))}
          </div>
          {/* Copyright Text */}
          <p className="text-sm sm:text-base">
            © {new Date().getFullYear()} Seng Hoirna. All rights reserved.
          </p>
          {/* Optional: Additional Links */}
          <div className="flex space-x-4">
            <a
              href="/privacy-policy"
              className={`transition-colors duration-300 text-sm sm:text-base ${
                theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className={`transition-colors duration-300 text-sm sm:text-base ${
                theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;