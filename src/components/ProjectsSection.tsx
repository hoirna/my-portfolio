"use client";

import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";
import { FiArrowRight, FiEye, FiGithub } from "react-icons/fi";

type ShowcaseItem = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string[];
  views?: number;
  tags: string[];
  link?: string;
  githubLink?: string;
  status?: string;
  type?: "blog" | "project" | "service" | "portfolio";
};

type ShowcaseSectionProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  tagLabel?: string;
  items?: ShowcaseItem[];
  categories?: string[];
  showFilters?: boolean;
  showViewAll?: boolean;
  viewAllLink?: string;
  viewAllText?: string;
  sectionType?: "blog" | "projects" | "services" | "portfolio" | "gallery";
  gridCols?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
};

const ShowcaseSection = ({
  description = "Explore my latest projects, articles, and creative work",
  tagLabel = "Featured",
  items = [],
  categories = ["All"],
  showFilters = true,
  gridCols = { mobile: 1, tablet: 2, desktop: 3 },
}: ShowcaseSectionProps) => {
  const { theme } = useTheme();
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredItems, setFilteredItems] = useState<ShowcaseItem[]>([]);

  const defaultItems: ShowcaseItem[] = useMemo(
    () => [
      {
        id: 1,
        title: "AI FARM ROBOTICS",
        excerpt:
          "A full-stack solution built with Next.js, TypeScript, and Stripe integration for seamless company experience.",
        image: "/images/Image02.jpg",
        category: ["Full Stack","UI/UX Design"],
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Directus"],
        link: "http://139.59.230.143:3000/",
        status: "Completed",
        type: "project",
      },
      {
        id: 2,
        title: "Next.js Portfolio",
        excerpt: "Modern and intuitive portfolio website",
        image: "/images/Image03.jpg",
        category: ["Front-end"],
        tags: ["Next.js", "Tailwind CSS", "Creative"],
        link: "https://seng-hoirna-portfolio.vercel.app/",
        githubLink: "https://github.com/hoirna/my-portfolio",
        status: "In Progress",
        type: "project",
      },
      {
        id: 3,
        title: "HTML Portfolio",
        excerpt:
          "A comprehensive platform for AI-driven agricultural solutions, featuring a user-friendly interface and robust backend.",
        image: "/images/Image01.jpg",
        category: ["Front-end"],
        tags: ["HTML", "CSS", "JavaScript"],
        githubLink: "https://github.com/hoirna",
        status: "Completed",
        type: "project",
      },
    ],
    []
  );

  const displayItems = items.length > 0 ? items : defaultItems;
  const displayCategories =
    categories.length > 1
      ? categories
      : ["All", "Full Stack", "Front-end", "Back-end", "UI/UX Design"];

  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredItems(displayItems);
    } else {
      setFilteredItems(
        displayItems.filter((item) => item.category.includes(activeFilter))
      );
    }
  }, [activeFilter, displayItems]);

  const formatViews = (views: number) => {
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}k`;
    }
    return views.toString();
  };

  const getGridClasses = () => {
    const { mobile = 1, tablet = 2, desktop = 3 } = gridCols;
    return `grid-cols-${mobile} md:grid-cols-${tablet} lg:grid-cols-${desktop}`;
  };

  const renderCard = (item: ShowcaseItem, index: number) => {
    return (
      <article
        key={item.id}
        className={`relative group bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-lg hover:border-emerald-500/30 dark:hover:border-emerald-400/30 ${
          theme === "dark" ? "dark:bg-gray-900" : "bg-white"}`}
        style={{
          animationDelay: `${index * 0.1}s`,
          animationFillMode: "both",
        }}
      >
        <div className="flex flex-col h-full">
          <div className="relative h-48 overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
            <div className="absolute top-4 left-4 flex gap-2">
            </div>
          </div>
          <div className="flex-1 p-6 flex flex-col">
            <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-3">
              {item.views && (
                <span className="flex items-center gap-1">
                  <FiEye className="w-3 h-3" />
                  {formatViews(item.views)}
                </span>
              )}
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              {item.link ? (
                <Link href={item.link}>
                  {item.title}
                </Link>
              ) : (
                item.title
              )}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
              {item.excerpt}
            </p>
            {item.tags.length > 0 && (
              <div className="mt-auto mb-4 flex flex-wrap gap-2">
                {item.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2.5 py-1 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
              <div className="flex gap-2">
                {item.status && (
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      item.status === "Completed"
                        ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                        : item.status === "In Progress"
                        ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                        : item.status === "Beta"
                        ? "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400"
                        : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
                    }`}
                  >
                    {item.status}
                  </span>
                )}
              </div>
              <div className="flex gap-2">
                {item.githubLink && (
                  <a
                    href={item.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    title="View code"
                  >
                    <FiGithub className="w-4 h-4" />
                  </a>
                )}
                {item.link && (
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-1"
                    title="Learn more"
                  >
                    <FiArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  };

  return (
  <section className="py-16 sm:py-20 lg:py-16 relative overflow-hidden">
    <div className="fixed inset-0 pointer-events-none z-0">
      <div
        className="absolute inset-0 bg-[size:100px_100px] bg-[linear-gradient(to_right,rgba(16,185,129,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.3)_1px,transparent_1px)]"
        style={{
          backgroundColor:
            theme === "dark" ? "rgba(0, 0, 0, 0.9)" : "rgba(245, 245, 245, 0.9)",
        }}
      />
      <div
        className={`absolute inset-0 bg-gradient-to-b from-transparent ${
          theme === "dark" ? "to-gray-950/10" : "to-gray-50/10"
        }`}
      ></div>
    </div>
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/20 dark:bg-emerald-900/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-200/20 dark:bg-green-900/10 rounded-full blur-3xl" />
    </div>
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
          <span>{tagLabel}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          <span className={theme === "dark" ? "text-gray-100" : "text-gray-900"}>
            My
          </span>{" "}
          <span
            className={theme === "dark" ? "text-emerald-400" : "text-emerald-600"}
          >
            Journey
          </span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          {description}
        </p>
      </div>
      {showFilters && (
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {displayCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                activeFilter === category
                  ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/20"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}
      {filteredItems.length === 0 ? (
        <div className="text-center p-24 mb-12 ">
          <p className="text-lg font-medium text-gray-600 dark:text-gray-400">
            No Project in this Category
          </p>
        </div>
      ) : (
        <div className={`grid ${getGridClasses()} gap-6`}>
          {filteredItems.map((item, index) => renderCard(item, index))}
        </div>
      )}
    </div>
  </section>
);
};

export default ShowcaseSection;