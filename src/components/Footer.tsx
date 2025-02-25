import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/yourusername",
      icon: <GitHubIcon className="text-white w-6 h-6" />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      icon: <LinkedInIcon className="text-white w-6 h-6" />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/yourusername",
      icon: <TwitterIcon className="text-white w-6 h-6" />,
    },
    {
      name: "Facebook",
      url: "https://facebook.com/yourusername",
      icon: <FacebookIcon className="text-white w-6 h-6" />,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/yourusername",
      icon: <InstagramIcon className="text-white w-6 h-6" />,
    },
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 py-8">
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
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>
          {/* Copyright Text */}
          <p className="text-gray-300 text-sm sm:text-base">
            &copy; {new Date().getFullYear()} [Seng Hoirna]. All rights reserved.
          </p>
          {/* Optional: Additional Links */}
          <div className="flex space-x-4">
            <a
              href="/privacy-policy"
              className="text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-base"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-base"
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
