"use client";
import React, { useState, useEffect } from "react";
import {
  ExternalLink,
  Github,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";
import Image from "next/image";

const PortfolioSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description:
        "A comprehensive dashboard for managing online store operations with real-time analytics.",
      image: "/images/prohr.png",
      year: "2024",
      tags: ["Next.js", "React", "Tailwind"],
      isFeatured: true,
    },
    {
      id: 2,
      title: "Social Media Analytics",
      description:
        "Platform for tracking and analyzing social media performance across multiple platforms.",
      image: "/images/prohr.png",
      year: "2024",
      tags: ["React", "Redux", "Node.js"],
      isFeatured: false,
    },
    {
      id: 3,
      title: "AI Content Generator",
      description:
        "An AI-powered tool that helps create engaging content for blogs and marketing.",
      image: "/images/prohr.png",
      year: "2023",
      tags: ["Python", "React", "OpenAI"],
      isFeatured: true,
    },
    {
      id: 4,
      title: "Task Management App",
      description:
        "Collaborative task management solution with real-time updates and team features.",
      image: "/images/prohr.png",
      year: "2023",
      tags: ["Next.js", "Firebase"],
      isFeatured: true,
    },
    {
      id: 5,
      title: "Weather Forecast App",
      description:
        "Real-time weather forecasting with interactive maps and alerts.",
      image: "/images/prohr.png",
      year: "2024",
      tags: ["React", "APIs", "Maps"],
      isFeatured: true,
    },
    {
      id: 6,
      title: "Fitness Tracker",
      description:
        "Personal fitness tracking app with workout plans and progress monitoring.",
      image: "/images/prohr.png",
      year: "2023",
      tags: ["React Native", "Firebase"],
      isFeatured: true,
    },
    {
      id: 7,
      title: "Recipe Finder",
      description:
        "Discover and save recipes with ingredient-based search and meal planning.",
      image: "/images/prohr.png",
      year: "2024",
      tags: ["Vue.js", "Node.js"],
      isFeatured: true,
    },
    {
      id: 8,
      title: "Budget Planner",
      description:
        "Personal finance management with expense tracking and budget forecasting.",
      image: "/images/prohr.png",
      year: "2023",
      tags: ["React", "MongoDB"],
      isFeatured: true,
    },
  ];

  const cardsPerView = 2;
  const totalSlides = projects.length - cardsPerView + 1;

  const PortfolioCard = ({ project }) => (
    <div
      className={`w-[600px] flex-shrink-0 rounded-xl overflow-hidden border shadow-lg hover:shadow-xl transition-all duration-300`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-[40vh] w-full overflow-hidden">
        <Image
          width={600}
          height={400}
          src={project.image}
          alt={`${project.title} thumbnail`}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
        {project.isFeatured && (
          <div className="absolute top-2 right-2">
            <span className="px-2 py-1 text-xs font-medium bg-primary text-background rounded-full shadow-lg">
              Featured
            </span>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg mb-2 hover:text-primary transition-colors line-clamp-1">
          {project.title}
        </h3>

        <div className="flex flex-wrap gap-1 mb-3">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-0.5 text-xs font-medium bg-primary/20 backdrop-blur-sm text-primary rounded-full border border-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-foreground/50 text-xs mb-3 line-clamp-2">
          {project.description}
        </p>

        {/* <div className="flex justify-between items-center pt-3 border-t ">
          <div className="flex items-center gap-1 text-xs text-foreground/50">
            <Calendar className="w-3 h-3" />
            <span>{project.year}</span>
          </div>
          <div className="flex gap-2">
            <a
              href="#"
              className="text-primary hover:text-primary/50"
              title="Live Demo"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="text-foreground hover:text-foreground/50"
              title="Source Code"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );

  return (
    <div className="relative mx-auto px-8 h-[70vh]">
      <div className="">
        <div
          className="flex items-start h-full transition-transform duration-500 ease-out gap-4"
          style={{ transform: `translateX(-${currentIndex * 550}px)` }}
        >
          {projects.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center items-start gap-3 mt-6">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "bg-primary w-6"
                : "bg-primary/20 hover:bg-primary"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioSlider;
