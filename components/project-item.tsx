"use client";

import { useRef } from "react";
import { projectsData, skillsIcons } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub, FaYoutube, FaLink } from "react-icons/fa";


type ProjectProps = (typeof projectsData)[number] & {
  githubUrl?: string;
  youtubeUrl?: string;
  externalUrl?: string;
  link?: string;
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  githubUrl,
  youtubeUrl,
  link,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <div className="flex items-center gap-2 mt-2 sm:mt-0">
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 flex items-center justify-center dark:text-white/60 cursor-pointer focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition"
                  style={{
                    width: '2.5rem',
                    height: '2.5rem',
                  }}
                >
                  <FaLink size={20} />
                </a>
              )}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 flex items-center justify-center dark:text-white/60 cursor-pointer focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition"
                  style={{
                    width: '2.5rem',
                    height: '2.5rem',
                  }}
                >
                  <FaGithub size={24} />
                </a>
              )}
              {youtubeUrl && (
                <a
                  href={youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 flex items-center justify-center dark:text-white/60 cursor-pointer focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition"
                  style={{
                    width: '2.5rem',
                    height: '2.5rem',
                  }}
                >
                  <FaYoutube size={24} />
                </a>
              )}
            </div>
          </div>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-6 gap-2 sm:mt-auto">
            {tags.map((tag, index) => {
              const IconComponent = skillsIcons[tag as keyof typeof skillsIcons];
              return (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-black/[0.7] px-2 py-1 text-[0.6rem] uppercase tracking-wider text-white rounded-full dark:text-white/70 flex items-center gap-1"
                >
                  {IconComponent && <IconComponent size={10} />}
                  <span>{tag}</span>
                </motion.li>
              );
            })}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
}