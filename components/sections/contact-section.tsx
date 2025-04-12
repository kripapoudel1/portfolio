"use client";

import type React from "react";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone } from "lucide-react";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [mounted, setMounted] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Reset form
      setFormState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setSubmitSuccess(true);

      // Hide success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 section-bg relative overflow-hidden"
    >
      <div className="blob-shape top-0 right-0 w-64 h-64">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#FFD6E8"
            d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90.2,-16.3,88.1,-1.2C86,13.9,79,27.8,70.8,41.2C62.5,54.5,53,67.3,40.1,73.4C27.2,79.5,10.9,78.9,-3.5,74.4C-17.9,69.9,-30.3,61.4,-43.9,53.3C-57.5,45.1,-72.2,37.3,-79.1,25.1C-86,12.9,-85,-3.7,-81.3,-20.1C-77.6,-36.5,-71.2,-52.7,-59.9,-61.4C-48.6,-70.1,-32.4,-71.3,-17.8,-73.9C-3.2,-76.5,10.8,-80.5,24.8,-79.8C38.8,-79.1,52.8,-73.7,44.7,-76.4Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="blob-shape bottom-0 left-0 w-64 h-64">
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
          className={`text-center mb-6 ${mounted ? "slide-up" : "opacity-0"}`}
        >
          <h3 className="text-3xl md:text-4xl font-extrabold text-[#FF2D20] dark:text-[#FF2D20] mb-4 tracking-tight">
            Contact Me
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            I Want To Hear From You
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Please fill out the form on this section to contact with me. Or call
            between 9:00 a.m. and 8:00 p.m. NPT, Monday through Friday
          </p>
        </div>

        <div
          className={`grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16 ${
            mounted && isInView ? "fade-in" : "opacity-0"
          }`}
          style={{ transitionDelay: "0.2s" }}
        >
          <div className="lg:col-span-1 space-y-8">
            <div className="flex items-start gap-6">
              <div className="contact-icon-bg-1 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 hover-lift">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Address</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Pokhara, Nepal
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="contact-icon-bg-2 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 hover-lift">
                <Mail className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Email</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  kripapoudel46@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="contact-icon-bg-3 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 hover-lift">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Phone</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  (+977) 9816692832
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-white/70 dark:bg-gray-800/70 p-8 rounded-xl shadow-sm hover-glow"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="bg-gray-50 dark:bg-gray-700 border-0"
                    required
                  />
                </div>

                <div>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="bg-gray-50 dark:bg-gray-700 border-0"
                    required
                  />
                </div>

                <div>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder="Your Phone"
                    className="bg-gray-50 dark:bg-gray-700 border-0"
                  />
                </div>

                <div>
                  <Input
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="bg-gray-50 dark:bg-gray-700 border-0"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Write your message here"
                  rows={5}
                  className="bg-gray-50 dark:bg-gray-700 border-0 resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white rounded-full py-3 hover-lift"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Submit Now"}
              </Button>

              {submitSuccess && (
                <p className="text-green-600 dark:text-green-400 text-center mt-4 slide-up">
                  Your message has been sent successfully!
                </p>
              )}

              {submitError && (
                <p className="text-red-600 dark:text-red-400 text-center mt-4 slide-up">
                  {submitError}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
