import Link from 'next/link';
import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite'; // Heart icon
import { motion } from 'framer-motion'; // For animation

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/About' },
    { text: 'Skills', path: '/Skill' },
    { text: 'Projects', path: '/Projects' },
    { text: 'Contact', path: '/Contact' },
  ];

  // Heart animation variants
  const heartVariants = {
    rest: { scale: 1 },
    hover: {
      scale: [1, 1.2, 1],
      transition: {
        repeat: Infinity,
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <header
      className={`fixed w-full ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      } shadow-md z-50 font-sans`}
    >
      <Toolbar className="flex justify-between items-center w-full max-w-7xl mx-auto px-4 py-3">
        <Typography
          variant="h6"
          component="div"
          className="text-xl font-bold tracking-tight flex items-center"
        >
          <Link href="/" passHref>
            <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
              SENG HOIRNA
            </span>
          </Link>
          <motion.div
            variants={heartVariants}
            initial="rest"
            animate="rest"
            whileHover="hover"
            className="ml-2 mb-1 "
          >
            <FavoriteIcon
              sx={{
                color: theme === 'dark' ? '#ff6b6b' : '#ff4444', // Slightly lighter red for visibility
                fontSize: '1.5rem', // Adjust size as needed
              }}
            />
          </motion.div>
        </Typography>

        {/* Desktop Navbar */}
        <div className="hidden md:flex gap-8 items-center text-lg font-medium tracking-wide">
          {navItems.map((item) => (
            <Link href={item.path} key={item.text}>
              <span
                className={`relative inline-block px-1 py-2 group transition-all duration-300 ease-in-out ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}
              >
                {item.text}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out ${
                    theme === 'dark' ? 'bg-white' : 'bg-gray-900'
                  }`}
                />
              </span>
            </Link>
          ))}
          <IconButton
            onClick={toggleTheme}
            className="ml-4"
            aria-label="toggle-theme"
            sx={{ color: theme === 'dark' ? 'white' : 'black' }}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </IconButton>
        </div>

        {/* Mobile Navbar */}
        <div className="md:hidden flex items-center gap-2">
          <IconButton
            onClick={toggleTheme}
            aria-label="toggle-theme"
            sx={{ color: theme === 'dark' ? 'white' : 'black' }}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </IconButton>
          <IconButton
            edge="end"
            aria-label="menu"
            onClick={() => setIsOpen(!isOpen)}
            sx={{ color: theme === 'dark' ? 'white' : 'black' }}
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </div>
      </Toolbar>

      {/* Drawer (Mobile Menu) */}
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <List
          className={`w-64 h-full ${
            theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
          } font-medium`}
        >
          {navItems.map((item) => (
            <Link href={item.path} key={item.text}>
              <span onClick={() => setIsOpen(false)}>
                <ListItem
                  component="div"
                  sx={{ py: 1.5 }}
                  className="group transition-all duration-300 ease-in-out"
                >
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      className: `${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      } text-lg tracking-wide relative inline-block`,
                      sx: { fontFamily: 'Roboto, sans-serif' },
                    }}
                  />
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out ${
                      theme === 'dark' ? 'bg-white' : 'bg-gray-900'
                    }`}
                  />
                </ListItem>
              </span>
            </Link>
          ))}
        </List>
      </Drawer>
    </header>
  );
};

export default Navbar;