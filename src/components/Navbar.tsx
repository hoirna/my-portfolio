import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Set the theme on initial load from localStorage (if it's set)
  useEffect(() => {
    if (localStorage.getItem('theme')) {
      document.documentElement.classList.add(localStorage.getItem('theme') as string);
    } else {
      // Default to light theme if none is stored
      document.documentElement.classList.add('light');
    }
  }, []);

  useEffect(() => {
    // Toggle class on root element when theme changes
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-white">
              My Portfolio
            </Link>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="font-medium hidden md:flex md:space-x-8 md:items-center">
            <Link href="/" className="text-gray-800 dark:text-white hover:text-blue-500">
              Home
            </Link>
            <Link href="/About" className="text-gray-800 dark:text-white hover:text-blue-500">
              About
            </Link>
            <Link href="/Projects" className="text-gray-800 dark:text-white hover:text-blue-500">
              Projects
            </Link>
            <Link href="/Contact" className="text-gray-800 dark:text-white hover:text-blue-500">
              Contact
            </Link>
          </div>
          
          {/* Theme Toggle (Top Right) */}
          <button
  onClick={toggleTheme}
  className="absolute right-4 p-4 text-2xl rounded-full focus:outline-none"
>
  {theme === 'light' ? '🌙' : '☀️'}
</button>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block text-gray-800 dark:text-white hover:text-blue-500">
              Home
            </Link>
            <Link href="/about" className="block text-gray-800 dark:text-white hover:text-blue-500">
              About
            </Link>
            <Link href="/projects" className="block text-gray-800 dark:text-white hover:text-blue-500">
              Projects
            </Link>
            <Link href="/contact" className="block text-gray-800 dark:text-white hover:text-blue-500">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
