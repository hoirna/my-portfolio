"use client";

import Link from "next/link";
import { useState } from "react";
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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { text: "HOME", path: "/" },
    { text: "ABOUT", path: "/About" },
    { text: "SKILLS", path: "/Skill" },
    { text: "PROJECTS", path: "/Projects" },
    { text: "CONTACT", path: "/Contact" },
  ];

  const name = "My Portfolio";
  return (
    <header
      className={`fixed w-full ${
        theme === "dark" ? "bg-green-950 text-green-200" : "bg-green-200 text-green-900"
      } shadow-md z-50`}
    >
      <Toolbar className="flex justify-between items-center w-full max-w-7xl mx-auto px-3 py-2">
        <Typography
          variant="h6"
          component="div"
          style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: "1.5rem",
            fontWeight: 500,
            color: theme === "dark" ? "#ffffff" : "#111827",
          }}
        >
          <Link href="/" legacyBehavior>
            <a className="inline-block">{name}</a>
          </Link>
        </Typography>

        {/* Desktop Navbar */}
        <div className="hidden md:flex gap-6 items-center text-sm font-medium space-x-4 p-2">
          {navItems.map((item) => (
            <Link href={item.path} key={item.text} legacyBehavior>
              <a className="group">
                <span
                  className={`relative inline-block px-1 py-2 transition-all duration-300 ease-in-out ${
                    theme === "dark"
                      ? "text-white hover:text-green-400"
                      : "text-gray-900 hover:text-green-600"
                  }`}
                  style={{ fontFamily: '"DM Sans", sans-serif' }}
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
          } font-sans text-lg font-bold`}
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
                      sx: { fontFamily: '"DM Sans", sans-serif' },
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
