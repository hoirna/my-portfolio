"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import {
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useMediaQuery,
} from "@mui/material";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { text: "Home", path: "/" },
    { text: "About", path: "/About" },
    { text: "Skills", path: "/Skill" },
    { text: "Projects", path: "/Projects" },
    { text: "Contact", path: "/Contact" },
  ];

  const name = "SENG HOIRNA";

  return (
    <header
      className={`fixed w-full ${
        theme === "dark" ? "text-gray-100" : "text-gray-900"
      }  z-50 transition-all duration-500 ${
        isScrolled ? "backdrop-blur-md" : ""
      } bg-[size:100px_100px] bg-[linear-gradient(to_right,rgba(16,185,129,0)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0)_1px,transparent_1px)]`}
    >
      <Toolbar className="flex justify-between items-center w-full max-w-7xl mx-auto px-4">
        <Typography
          variant="h5"
          component="div"
          className={isMobile ? "fade-in" : ""}
          sx={{
            fontFamily: '"Inter", sans-serif',
            fontSize: { xs: "1.2rem", sm: "1.35rem", md: "1.5rem" },
            fontWeight: 600,
            letterSpacing: "0.125em",
            color: theme === "dark" ? "#ffffff" : "#111827",
          }}
        >
          <Link href="/" legacyBehavior>
            <a className="hover:no-underline flex items-center">
              <Image
                src="/images/icon.png"
                alt="Logo"
                width={isMobile ? 24 : 28}
                height={isMobile ? 24 : 28}
                className="mr-2 transition-all duration-300"
              />
              <span className="relative">
                {name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </span>
            </a>
          </Link>
        </Typography>

        <Box className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link href={item.path} key={item.text} legacyBehavior>
              <a
                className="nav-link relative"
                onMouseEnter={() => setHoveredItem(item.text)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Box
                  sx={{
                    px: 2,
                    py: 1.5,
                    borderRadius: 1,
                    transition: "all 0.3s ease",
                    color:
                      hoveredItem === item.text
                        ? theme === "dark"
                          ? "#ffffff"
                          : "#111827"
                        : theme === "dark"
                        ? "#9CA3AF"
                        : "#6B7280",
                    "&:hover": {
                      color: theme === "dark" ? "#ffffff" : "#111827",
                      backgroundColor:
                        theme === "dark"
                          ? "rgba(255, 255, 255, 0.05)"
                          : "rgba(0, 0, 0, 0.03)",
                    },
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: '"Inter", sans-serif',
                      fontWeight: 500,
                      fontSize: "0.95rem",
                      letterSpacing: "0.025em",
                      position: "relative",
                    }}
                  >
                    {item.text}
                    {hoveredItem === item.text && (
                      <Box
                        className="underline"
                        sx={{
                          position: "absolute",
                          bottom: -4,
                          left: 0,
                          width: "100%",
                          height: "2px",
                          backgroundColor:
                            theme === "dark" ? "#4ADE80" : "#10B981",
                          borderRadius: "2px",
                        }}
                      />
                    )}
                  </Typography>
                </Box>
              </a>
            </Link>
          ))}

          <IconButton
            onClick={toggleTheme}
            aria-label="toggle-theme"
            className="icon-button"
            sx={{
              ml: 1,
              color: theme === "dark" ? "#E5E7EB" : "#374151",
              backgroundColor:
                theme === "dark"
                  ? "rgba(74, 222, 128, 0.1)"
                  : "rgba(16, 185, 129, 0.1)",
              border:
                theme === "dark"
                  ? "1px solid rgba(74, 222, 128, 0.3)"
                  : "1px solid rgba(16, 185, 129, 0.3)",
              width: 40,
              height: 40,
            }}
          >
            {theme === "light" ? (
              <FiMoon size={20} />
            ) : (
              <FiSun size={20} color="#4ADE80" />
            )}
          </IconButton>
        </Box>

        <Box className="md:hidden flex items-center gap-2">
          <IconButton
            onClick={toggleTheme}
            aria-label="toggle-theme"
            className="icon-button"
            sx={{
              color: theme === "dark" ? "#E5E7EB" : "#374151",
              backgroundColor:
                theme === "dark"
                  ? "rgba(74, 222, 128, 0.1)"
                  : "rgba(16, 185, 129, 0.1)",
              border:
                theme === "dark"
                  ? "1px solid rgba(74, 222, 128, 0.3)"
                  : "1px solid rgba(16, 185, 129, 0.3)",
              width: 40,
              height: 40,
            }}
          >
            {theme === "light" ? (
              <FiMoon size={20} />
            ) : (
              <FiSun size={20} color="#4ADE80" />
            )}
          </IconButton>

          <IconButton
            edge="end"
            aria-label="menu"
            onClick={() => setIsOpen(!isOpen)}
            className="icon-button"
            sx={{
              color: theme === "dark" ? "#E5E7EB" : "#374151",
              backgroundColor:
                theme === "dark"
                  ? "rgba(74, 222, 128, 0.1)"
                  : "rgba(16, 185, 129, 0.1)",
              border:
                theme === "dark"
                  ? "1px solid rgba(74, 222, 128, 0.3)"
                  : "1px solid rgba(16, 185, 129, 0.3)",
              width: 40,
              height: 40,
            }}
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </IconButton>
        </Box>
      </Toolbar>

      <Drawer
        anchor="right"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: {
            width: isMobile ? "100%" : "320px",
            backgroundColor: theme === "dark" ? "#111827" : "#ffffff",
            transition: "transform 0.4s ease-in-out, opacity 0.4s ease-in-out",
          },
          className: isOpen ? "fade-in" : "",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            p: 2,
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
            <IconButton
              onClick={() => setIsOpen(false)}
              className="icon-button fade-in"
              sx={{
                color: theme === "dark" ? "#E5E7EB" : "#374151",
                backgroundColor:
                  theme === "dark"
                    ? "rgba(74, 222, 128, 0.1)"
                    : "rgba(16, 185, 129, 0.1)",
                border:
                  theme === "dark"
                    ? "1px solid rgba(74, 222, 128, 0.3)"
                    : "1px solid rgba(16, 185, 129, 0.3)",
                width: 40,
                height: 40,
              }}
            >
              <FiX size={20} />
            </IconButton>
          </Box>

          <List sx={{ flexGrow: 1 }}>
            {navItems.map((item) => (
              <Link href={item.path} key={item.text} legacyBehavior>
                <a onClick={() => setIsOpen(false)}>
                  <ListItem
                    className="nav-item"
                    sx={{
                      py: 1.5,
                      px: 2,
                      borderRadius: 1,
                      "&:hover": {
                        backgroundColor:
                          theme === "dark"
                            ? "rgba(74, 222, 128, 0.1)"
                            : "rgba(16, 185, 129, 0.1)",
                      },
                    }}
                  >
                    <ListItemText
                      primary={item.text}
                      primaryTypographyProps={{
                        sx: {
                          fontFamily: '"Inter", sans-serif',
                          fontWeight: 500,
                          fontSize: "1.1rem",
                          color: theme === "dark" ? "#E5E7EB" : "#374151",
                        },
                      }}
                    />
                  </ListItem>
                </a>
              </Link>
            ))}
          </List>
        </Box>
      </Drawer>
    </header>
  );
};

export default Navbar;
