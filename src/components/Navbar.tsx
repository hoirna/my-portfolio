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
  Box,
  useMediaQuery,
} from "@mui/material";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";
import { FaCode } from "react-icons/fa6";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

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
        theme === "dark"
          ? "bg-gray-900/50 text-gray-100 border-b border-gray-700"
          : "bg-white/50 text-gray-900 border-b border-gray-200"
      } shadow-sm z-50 transition-all duration-500 backdrop-blur-md`}
    >
      <style jsx>{`
        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        .fade-in {
          opacity: 0;
          transform: translateY(-10px);
          animation: fadeIn 0.5s ease-out forwards;
        }
        .nav-item {
          opacity: 0;
          transform: translateX(20px);
          animation: fadeIn 0.4s ease-out forwards;
        }
        .nav-item:nth-child(1) {
          animation-delay: 0.1s;
        }
        .nav-item:nth-child(2) {
          animation-delay: 0.2s;
        }
        .nav-item:nth-child(3) {
          animation-delay: 0.3s;
        }
        .nav-item:nth-child(4) {
          animation-delay: 0.4s;
        }
        .nav-item:nth-child(5) {
          animation-delay: 0.5s;
        }
        .footer {
          opacity: 0;
          transform: translateX(20px);
          animation: fadeIn 0.4s ease-out 0.6s forwards;
        }
        .nav-link:hover .underline {
          transform: scaleX(1);
        }
        .underline {
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .icon-button {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .icon-button:hover {
          background-color: ${theme === "dark"
            ? "rgba(74, 222, 128, 0.2)"
            : "rgba(16, 185, 129, 0.2)"};
          transform: scale(1.1);
        }
        .menu-item {
          position: relative;
          overflow: hidden;
        }
        .menu-item::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: ${theme === "dark" ? "#4ADE80" : "#10B981"};
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.3s ease;
        }
        .menu-item:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }
      `}</style>
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[size:100px_100px] bg-[linear-gradient(to_right,rgba(16,185,129,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.15)_1px,transparent_1px)] animate-gridPulse" />
        <div
          className={`absolute inset-0 bg-gradient-to-b from-transparent ${
            theme === "dark" ? "to-gray-950/30" : "to-gray-100/30"
          }`}
        ></div>
      </div>
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
            <a className="logo-container hover:no-underline flex items-center">
              <FaCode
                size={isMobile ? 24 : 28}
                className="code-icon text-green-500 mr-2 transition-all duration-300"
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                }}
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

          <Box sx={{ p: 2, textAlign: "center" }} className="footer">
            <Typography
              variant="body2"
              sx={{
                color: theme === "dark" ? "#9CA3AF" : "#6B7280",
                fontFamily: '"Inter", sans-serif',
              }}
            >
              © {new Date().getFullYear()} {name}
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </header>
  );
};

export default Navbar;
