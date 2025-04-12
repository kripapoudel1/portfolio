"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured online store built with Laravel and Livewire.",
    image: "/Ecommerce.png",
    category: "web-development",
    date: "April 30",
    tags: ["Laravel", "Livewire", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "https://github.com/kripapoudel1",
  },
  {
    id: 2,
    title: "TourMate",
    description:
      " TourMate is a Laravel CRM for travel agencies with role-based access and booking management.",

    image: "/tourmate.jpg",
    category: "web-application",
    date: "August 31",
    tags: ["Laravel", "Html", "Bootstrap", "MySQL"],
    liveUrl: "#",
    githubUrl: "https://github.com/kripapoudel1",
  },
  {
    id: 3,
    title: "Blog Platform",
    description:
      "Content management system with markdown support and SEO features.",
    image: "/blog.png",
    category: "content-management",
    date: "May 10",
    tags: ["Laravel", "Html", "Bootstrap", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "https://github.com/kripapoudel1",
  },
];

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="portfolio"
      ref={ref}
      className="py-20 section-bg relative overflow-hidden"
    >
      <div className="blob-shape top-0 left-0 w-64 h-64">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#FFD6E8"
            d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90.2,-16.3,88.1,-1.2C86,13.9,79,27.8,70.8,41.2C62.5,54.5,53,67.3,40.1,73.4C27.2,79.5,10.9,78.9,-3.5,74.4C-17.9,69.9,-30.3,61.4,-43.9,53.3C-57.5,45.1,-72.2,37.3,-79.1,25.1C-86,12.9,-85,-3.7,-81.3,-20.1C-77.6,-36.5,-71.2,-52.7,-59.9,-61.4C-48.6,-70.1,-32.4,-71.3,-17.8,-73.9C-3.2,-76.5,10.8,-80.5,24.8,-79.8C38.8,-79.1,52.8,-73.7,44.7,-76.4Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="blob-shape bottom-0 right-0 w-64 h-64">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#D6E8FF"
            d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90.2,-16.3,88.1,-1.2C86,13.9,79,27.8,70.8,41.2C62.5,54.5,53,67.3,40.1,73.4C27.2,79.5,10.9,78.9,-3.5,74.4C-17.9,69.9,-30.3,61.4,-43.9,53.3C-57.5,45.1,-72.2,37.3,-79.1,25.1C-86,12.9,-85,-3.7,-81.3,-20.1C-77.6,-36.5,-71.2,-52.7,-59.9,-61.4C-48.6,-70.1,-32.4,-71.3,-17.8,-73.9C-3.2,-76.5,10.8,-80.5,24.8,-79.8C38.8,-79.1,52.8,-73.7,44.7,-76.4Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 ${mounted ? "slide-up" : "opacity-0"}`}
        >
          <h3 className="text-3xl md:text-4xl font-extrabold text-[#FF2D20] dark:text-[#FF2D20] mb-4 tracking-tight">
            My Works{" "}
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold">
            Recent Projects &
            <br />
            Laravel Applications
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className={`overflow-hidden border border-gray-200 dark:border-gray-800 h-full flex flex-col bg-white/70 dark:bg-gray-800/70 rounded-xl shadow-sm hover-lift ${
                mounted && isInView ? "fade-in" : "opacity-0"
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="project-date">{project.date}</div>
              </div>

              <CardContent className="flex-1 p-6">
                <div className="text-sm text-primary mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="rounded-full"
                  >
                    <Link
                      href={project.githubUrl}
                      className="flex items-center gap-1"
                    >
                      <Github size={16} />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild className="rounded-full">
                    <Link
                      href={project.liveUrl}
                      className="flex items-center gap-1"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
