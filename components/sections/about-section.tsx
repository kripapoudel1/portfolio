"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { useInView } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="about" ref={ref} className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 ${mounted ? "slide-up" : "opacity-0"}`}
        >
          <h3 className="text-3xl md:text-4xl font-extrabold text-[#FF2D20] dark:text-[#FF2D20] mb-4 tracking-tight">
            About Me
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold">
            I Build Web Applications
            <br />
            That Deliver Results
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={mounted && isInView ? "slide-in-left" : "opacity-0"}
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="relative w-full max-w-md mx-auto aspect-[4/5]">
              <Image
                src="/kripaAboutme.jpg"
                alt="About Me"
                width={480}
                height={600}
                className="object-cover rounded-lg shadow-xl hover-glow"
                priority
              />
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-xs hover-lift">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-primary text-4xl font-bold">1</div>
                  <div className="text-sm">
                    Year of
                    <br />
                    Experience
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-primary text-4xl font-bold">10+</div>
                  <div className="text-sm">
                    Projects
                    <br />
                    Completed
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={mounted && isInView ? "slide-in-right" : "opacity-0"}
            style={{ transitionDelay: "0.4s" }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              Laravel Developer with a Passion for Clean Code
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Hello there! I'm Kripa Poudel, a Laravel developer based in
              Pokhara, Nepal, specializing in building robust, scalable web
              applications. With a strong foundation in PHP and modern web
              development practices, I create solutions that are not only
              functional but also maintainable and secure.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              My journey in web development started a year ago, and I've been
              working with Laravel framework ever since. I'm passionate about
              writing clean, efficient code and implementing best practices in
              all my projects. Whether it's building a complex e-commerce
              platform or a simple API, I approach each project with the same
              level of dedication and attention to detail.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-medium mb-2">Name</h4>
                <p className="text-gray-600 dark:text-gray-300">Kripa Poudel</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Email</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  kripapoudel46@gmail.com
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Phone</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  (+977) 9816692832
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Location</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Pokhara, Nepal
                </p>
              </div>
            </div>

            <Button
              size="lg"
              className="rounded-full px-8 bg-primary hover:bg-primary/90 hover-lift"
            >
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
