import Link from "next/link";
import { useState } from "react"; // Removed unused useEffect
import { useTheme } from "@/context/ThemeContext";
import {
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // Fixed type

  const navItems = [
    { text: "HOME", path: "/" },
    { text: "ABOUT", path: "/About" },
    { text: "SKILLS", path: "/Skill" },
    { text: "PROJECTS", path: "/Projects" },
    { text: "CONTACT", path: "/Contact" },
  ];

  const containerVariants = {
    initial: {},
    hover: {
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const letterVariants = {
    initial: { y: 0 },
    hover: {
      y: [-2, 2, 0],
      transition: {
        duration: 0.3,
      },
    },
  };

  // Animation properties without color changes
  const motionProps = {
    initial: {
      scale: 1,
      rotate: 0,
      y: 0,
    },
    hover: {
      scale: 1.1,
      rotate: [0, 2, -2, 0],
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
        duration: 0.3,
        rotate: {
          duration: 0.4,
          repeat: 1,
        },
      },
    },
  };

  const name = "SENG HOIRNA";

  // Get letter color based on theme and hover state
  const getLetterColor = (index: number) => { // Added type
    if (theme === "dark") {
      return hoveredIndex === index ? "#6ee7b7" : "#ffffff";
    } else {
      return hoveredIndex === index ? "#16a34a" : "#111827";
    }
  };

  return (
    <header
      className={`fixed w-full ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } shadow-md z-50`}
    >
      <Toolbar className="flex justify-between items-center w-full max-w-7xl mx-auto px-4 py-3">
        <Typography
          variant="h6"
          component="div"
          style={{
            fontFamily: '"Courier New", Courier, monospace',
            fontSize: "1.875rem",
            fontWeight: 600,
          }}
        >
          <Link href="/" legacyBehavior>
            <a className="inline-block">
              <motion.div
                variants={containerVariants}
                initial="initial"
                whileHover="hover"
                className="inline-flex"
                style={{
                  textShadow: theme === "dark" ? "0px 0px 2px rgba(255,255,255,0.3)" : "none"
                }}
              >
                {name.split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    variants={letterVariants}
                    className="inline-block"
                    onMouseEnter={() => setHoveredIndex(index)} // No type error now
                    onMouseLeave={() => setHoveredIndex(null)} // No type error now
                  >
                    <motion.span
                      animate={{
                        ...motionProps.initial,
                        color: getLetterColor(index)
                      }}
                      whileHover={{
                        ...motionProps.hover,
                        color: theme === "dark" ? "#6ee7b7" : "#16a34a"
                      }}
                      style={{
                        color: getLetterColor(index),
                        transition: "color 0.3s ease"
                      }}
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  </motion.span>
                ))}
              </motion.div>
            </a>
          </Link>
        </Typography>

        {/* Desktop Navbar */}
        <div className="hidden md:flex gap-8 items-center text-lg font-semibold space-x-4 p-2">
          {navItems.map((item) => (
            <Link href={item.path} key={item.text} legacyBehavior>
              <a className="group">
                <span
                  className={`relative inline-block px-1 py-2 transition-all duration-300 ease-in-out ${
                    theme === "dark"
                      ? "text-white hover:text-green-400"
                      : "text-gray-900 hover:text-green-600"
                  }`}
                  style={{ fontFamily: '"Courier New", Courier, monospace' }} // Applied to nav items
                >
                  {item.text}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out ${
                      theme === "dark" ? "bg-green-400" : "bg-green-600"
                    }`}
                  />
                </span>
              </a>
            </Link>
          ))}
          <IconButton
            onClick={toggleTheme}
            className="ml-4"
            aria-label="toggle-theme"
            sx={{ color: theme === "dark" ? "white" : "black" }}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </IconButton>
        </div>

        {/* Mobile Navbar */}
        <div className="md:hidden flex items-center gap-2">
          <IconButton
            onClick={toggleTheme}
            aria-label="toggle-theme"
            sx={{ color: theme === "dark" ? "white" : "black" }}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </IconButton>
          <IconButton
            edge="end"
            aria-label="menu"
            onClick={() => setIsOpen(!isOpen)}
            sx={{ color: theme === "dark" ? "white" : "black" }}
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </div>
      </Toolbar>

      {/* Drawer (Mobile Menu) */}
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <List
          className={`w-64 h-full ${
            theme === "dark"
              ? "bg-gray-900 text-white"
              : "bg-white text-gray-900"
          } font-medium`}
        >
          {navItems.map((item) => (
            <Link href={item.path} key={item.text} legacyBehavior>
              <a onClick={() => setIsOpen(false)}>
                <ListItem
                  component="div"
                  sx={{ py: 1.5 }}
                  className={`hover:bg-opacity-10 ${
                    theme === "dark"
                      ? "hover:bg-green-400"
                      : "hover:bg-green-600"
                  }`}
                >
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      className: `${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      } text-lg tracking-wide`,
                      sx: { fontFamily: '"Courier New", Courier, monospace' }, // Applied to drawer items
                    }}
                  />
                </ListItem>
              </a>
            </Link>
          ))}
        </List>
      </Drawer>
    </header>
  );
};

export default Navbar;