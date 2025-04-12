"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { Code, Database, Layout } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Building robust web applications with Laravel, focusing on clean code, security, and performance optimization.",
    icon: <Layout className="h-8 w-8 text-blue-600" />,
    bgClass: "service-icon-bg-1",
  },
  {
    id: 2,
    title: "Database Design",
    description:
      "Creating efficient database structures with proper relationships, indexes, and query optimization for scalable applications.",
    icon: <Database className="h-8 w-8 text-indigo-600" />,
    bgClass: "service-icon-bg-2",
  },
  {
    id: 3,
    title: "API Development",
    description:
      "Developing RESTful APIs with Laravel that are well-documented, secure, and follow best practices for integration.",
    icon: <Code className="h-8 w-8 text-orange-600" />,
    bgClass: "service-icon-bg-3",
  },
];

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="services" ref={ref} className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 ${mounted ? "slide-up" : "opacity-0"}`}
        >
          <h3 className="text-3xl md:text-4xl font-extrabold text-[#FF2D20] dark:text-[#FF2D20] mb-4 tracking-tight">
            What I Do !?
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold">
            Services I Offer As A
            <br />
            Laravel Developer
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`text-center p-8 bg-white/70 dark:bg-gray-800/70 rounded-xl shadow-sm hover-lift ${
                mounted && isInView ? "fade-in" : "opacity-0"
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div
                className={`${service.bgClass} w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
