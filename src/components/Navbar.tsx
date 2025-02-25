import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      document.documentElement.classList.add(storedTheme);
    } else {
      document.documentElement.classList.add('light');
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.classList.toggle('light', theme !== 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <AppBar position="fixed" color="default" className="w-full">
      <Toolbar className="flex justify-between items-center w-full max-w-7xl mx-auto px-4">
        <Typography variant="h6" component="div" className="text-lg font-bold">
          <Link href="/" passHref>
            My Portfolio
          </Link>
        </Typography>

        <div className="hidden md:flex gap-6 items-center">
          {['Home', 'About', 'Projects', 'Contact'].map((text) => (
            <Link href={`/${text}`} passHref key={text}>
              <Button color="inherit">{text}</Button>
            </Link>
          ))}
          <IconButton onClick={toggleTheme} className="ml-4">
            {theme === 'light' ? '🌙' : '☀️'}
          </IconButton>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <IconButton onClick={toggleTheme}>
            {theme === 'light' ? '🌙' : '☀️'}
          </IconButton>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </div>
      </Toolbar>

      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <List className="w-64">
          {['Home', 'About', 'Projects', 'Contact'].map((text) => (
            <Link href={`/${text}`} passHref key={text}>
              <ListItem component="a">
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
