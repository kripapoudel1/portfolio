"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useInView } from "framer-motion";
import { Github, Linkedin, Twitter, Facebook } from "lucide-react";
import Link from "next/link";
import Typewriter from "../typewriter";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-[calc(100vh-4rem)] flex items-center relative overflow-hidden gradient-bg py-20"
    >
      <div className="absolute top-20 left-10 opacity-30">
        <div className="text-primary text-[150px] font-bold">1</div>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border border-primary/50">
        <div className="absolute inset-0 animate-ping rounded-full bg-primary/30"></div>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div
          className={`order-2 lg:order-1 ${mounted ? "fade-in" : "opacity-0"}`}
          style={{ transitionDelay: "0.3s" }}
        >
          <h3 className="text-primary text-xl mb-2">Hello, I am</h3>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-primary">
            Kripa Poudel
          </h1>
          <div className="flex items-center mb-6">
            <h2 className="text-xl text-primary">
              A{" "}
              <Typewriter
                texts={["Laravel Developer", "PHP Developer", "Web Developer"]}
              />{" "}
              From Pokhara Nepal
            </h2>
          </div>
          <p className="text-gray-900 dark:text-gray-900 mb-8 max-w-lg">
            I am a Laravel developer based in Pokhara, Nepal, with 1 year of
            experience. I am very passionate and dedicated to my work,
            specializing in building robust web applications with clean,
            maintainable code.
          </p>

          <Button
            size="lg"
            className="rounded-full px-8 bg-primary hover:bg-primary/90 hover-lift"
          >
            <Link href="#about" className="text-white">
              About Me
            </Link>
          </Button>

          <div className="flex space-x-4 mt-8">
            <Link
              href="#"
              className="text-gray-600 hover:text-primary transition-colors hover-lift"
            >
              <Facebook size={20} />
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-primary transition-colors hover-lift"
            >
              <Twitter size={20} />
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-primary transition-colors hover-lift"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-primary transition-colors hover-lift"
            >
              <Github size={20} />
            </Link>
          </div>
        </div>

        <div
          className={`order-1 lg:order-2 relative ${
            mounted ? "bounce-in" : "opacity-0"
          }`}
        >
          <div className="relative w-full max-w-md mx-auto aspect-square">
            <Image
              src="/placeholder-user.png"
              alt="Profile"
              width={500}
              height={500}
              className="object-cover rounded-full hover-glow"
              priority
            />
            <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-full shadow-lg p-4 hover-lift">
              <div className="text-primary text-3xl font-bold">1+</div>
              <div className="text-xs">Years Experience</div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-full shadow-lg p-4 hover-lift">
              <div className="text-primary text-3xl font-bold">10+</div>
              <div className="text-xs">Projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
