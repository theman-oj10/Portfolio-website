"use client";

import React, { useState } from 'react';
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { useTheme } from "@/context/theme-context";

const initialTestimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Software Engineer",
    message: "Working with them was an absolute pleasure. Their technical skills and attention to detail are outstanding.",
    date: "2024-01-15"
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Project Manager",
    message: "One of the most dedicated developers I've worked with. Always delivers high-quality work on time.",
    date: "2024-02-20"
  }
];

export default function Testimonials() {
  const { ref } = useSectionInView("Testimonials");
  const { theme } = useTheme();
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    role: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const testimonial = {
      id: testimonials.length + 1,
      ...newTestimonial,
      date: new Date().toISOString().split('T')[0]
    };
    setTestimonials([...testimonials, testimonial]);
    setNewTestimonial({ name: '', role: '', message: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTestimonial(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section
      ref={ref}
      id="testimonials"
      className="scroll-mt-28 mb-28 sm:mb-40 max-w-[45rem] mx-auto leading-8"
    >
      <SectionHeading>Testimonials</SectionHeading>
      
      <div className="flex flex-col gap-4">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`p-6 rounded-lg ${
              theme === "light" 
                ? "bg-gray-100" 
                : "bg-gray-800"
            }`}
          >
            <p className="italic text-gray-700 dark:text-white/70">
              "{testimonial.message}"
            </p>
            <div className="flex items-center justify-between mt-4">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">{testimonial.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonial.role}
                </p>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {testimonial.date}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="mt-12"
      >
        <h3 className="font-semibold text-lg mb-6">Share Your Experience</h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label htmlFor="name" className="block mb-2 text-gray-900 dark:text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={newTestimonial.name}
              onChange={handleChange}
              required
              className={`w-full p-3 rounded bg-transparent border ${
                theme === "light"
                  ? "border-gray-300"
                  : "border-gray-700"
              }`}
            />
          </div>
          <div>
            <label htmlFor="role" className="block mb-2 text-gray-900 dark:text-white">
              Role / Company
            </label>
            <input
              type="text"
              id="role"
              name="role"
              value={newTestimonial.role}
              onChange={handleChange}
              required
              className={`w-full p-3 rounded bg-transparent border ${
                theme === "light"
                  ? "border-gray-300"
                  : "border-gray-700"
              }`}
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-gray-900 dark:text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={newTestimonial.message}
              onChange={handleChange}
              required
              rows={4}
              className={`w-full p-3 rounded bg-transparent border ${
                theme === "light"
                  ? "border-gray-300"
                  : "border-gray-700"
              }`}
            />
          </div>
          <button
            type="submit"
            className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all hover:bg-gray-800 hover:scale-110 focus:scale-110 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65 mt-2"
          >
            Submit
          </button>
        </form>
      </motion.div>
    </section>
  );
}