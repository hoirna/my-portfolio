import Link from 'next/link';
import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/About' },
    { text: 'Projects', path: '/Projects' },
    { text: 'Contact', path: '/Contact' },
  ];

  return (
    <AppBar
  position="fixed"
  className={`w-full ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
>
  <Toolbar className="flex justify-between items-center w-full max-w-7xl mx-auto px-4">
    <Typography variant="h6" component="div" className="text-lg font-bold">
      <Link href="/" passHref>
        MY PORTFOLIO
      </Link>
    </Typography>

    {/* Desktop Navbar */}
    <div className="hidden md:flex gap-6 items-center text-lg font">
      {navItems.map((item) => (
        <Link href={item.path} key={item.text}>
          <span
            className={theme === 'dark' ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-gray-700'}
          >
            {item.text}
          </span>
        </Link>
      ))}
      <IconButton onClick={toggleTheme} className="ml-4" aria-label="toggle-theme">
        {theme === 'light' ? '🌙' : '☀️'}
      </IconButton>
    </div>

    {/* Mobile Navbar */}
    <div className="md:hidden flex items-center gap-2">
      <IconButton onClick={toggleTheme} aria-label="toggle-theme">
        {theme === 'light' ? '🌙' : '☀️'}
      </IconButton>
      <IconButton
        edge="end"
        aria-label="menu"
        onClick={() => setIsOpen(!isOpen)}
        className={theme === 'dark' ? 'text-white' : 'text-gray-900'}
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
    </div>
  </Toolbar>

  {/* Drawer (Mobile Menu) */}
  <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
    <List className={`w-64 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {navItems.map((item) => (
        <Link href={item.path} key={item.text}>
          <span onClick={() => setIsOpen(false)}>
            <ListItem component="div">
              <ListItemText primary={item.text} />
            </ListItem>
          </span>
        </Link>
      ))}
    </List>
  </Drawer>
</AppBar>

  );
};

export default Navbar;
