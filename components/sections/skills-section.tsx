"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

const technicalSkills = [
  { name: "Laravel", percentage: 90, color: "progress-laravel" },
  { name: "PHP", percentage: 85, color: "progress-php" },
  { name: "Git & GitHub", percentage: 80, color: "progress-git" },
  {
    name: "Tailwind CSS & Bootstrap",
    percentage: 85,
    color: "progress-tailwind",
  },
  { name: "HTML & CSS", percentage: 90, color: "progress-html" },
  { name: "JavaScript", percentage: 75, color: "progress-js" },
];

const softSkills = [
  {
    name: "Problem-solving",
    description: "Analytical thinking and creative solutions",
  },
  {
    name: "Communication",
    description: "Clear and effective verbal and written communication",
  },
  {
    name: "Time Management",
    description: "Efficient prioritization and deadline adherence",
  },
  {
    name: "Teamwork & Adaptability",
    description: "Collaborative spirit and flexibility",
  },
];

export default function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [animated, setAnimated] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isInView && !animated) {
      setAnimated(true);
    }
  }, [isInView, animated]);

  return (
    <section id="skills" ref={ref} className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 ${mounted ? "slide-up" : "opacity-0"}`}
        >
          <h3 className="text-3xl md:text-4xl font-extrabold text-[#FF2D20] dark:text-[#FF2D20] mb-4 tracking-tight">
            My Skills
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold">
            I Develop Skills Regularly
            <br />
            to Keep Me Updated
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div
            className={mounted && isInView ? "slide-in-left" : "opacity-0"}
            style={{ transitionDelay: "0.2s" }}
          >
            <h3 className="text-2xl font-semibold mb-8">Technical Skills</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Modern web development requires expertise in various technologies.
              Here are the key skills I've mastered to build robust Laravel
              applications.
            </p>

            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className={`skill-progress ${skill.color}`}
                      style={{
                        width: animated ? `${skill.percentage}%` : "0%",
                        transition: `width 1s cubic-bezier(0.17, 0.55, 0.55, 1) ${
                          index * 0.2
                        }s`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={mounted && isInView ? "slide-in-right" : "opacity-0"}
            style={{ transitionDelay: "0.4s" }}
          >
            <h3 className="text-2xl font-semibold mb-8">Soft Skills</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Technical expertise alone isn't enough. These interpersonal skills
              help me collaborate effectively and deliver successful projects.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white/70 dark:bg-gray-800/70 p-6 rounded-lg shadow-sm hover-lift"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <h4 className="text-lg font-medium mb-2">{skill.name}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-white/70 dark:bg-gray-800/70 p-6 rounded-lg shadow-sm hover-lift">
              <h4 className="text-lg font-medium mb-4">
                My Development Approach
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                  <span>
                    Clean, maintainable code following SOLID principles
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                  <span>Test-driven development for reliable applications</span>
                </li>
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                  <span>
                    Performance optimization and security best practices
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                  <span>Responsive design and accessibility standards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
