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
      className="group mb-3 sm:mb-6 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[38rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-3 pb-5 px-4 sm:pl-8 sm:pr-2 sm:pt-8 sm:max-w-[60%] flex flex-col h-full sm:group-even:ml-[14rem]">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1">
            <h3 className="text-xl font-semibold">{title}</h3>
            <div className="flex items-center gap-2 mt-1 sm:mt-0">
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 flex items-center justify-center dark:text-white/60 cursor-pointer focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition"
                  style={{
                    width: '2rem',
                    height: '2rem',
                  }}
                >
                  <FaLink size={16} />
                </a>
              )}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 flex items-center justify-center dark:text-white/60 cursor-pointer focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition"
                  style={{
                    width: '2rem',
                    height: '2rem',
                  }}
                >
                  <FaGithub size={18} />
                </a>
              )}
              {youtubeUrl && (
                <a
                  href={youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 flex items-center justify-center dark:text-white/60 cursor-pointer focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition"
                  style={{
                    width: '2rem',
                    height: '2rem',
                  }}
                >
                  <FaYoutube size={18} />
                </a>
              )}
            </div>
          </div>
          <p className="mt-1 leading-relaxed text-sm text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-1 sm:mt-auto">
            {tags.map((tag, index) => {
              const IconComponent = skillsIcons[tag as keyof typeof skillsIcons];
              return (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-black/[0.7] px-1.5 py-0.5 text-[0.55rem] uppercase tracking-wider text-white rounded-full dark:text-white/70 flex items-center gap-1"
                >
                  {IconComponent && <IconComponent size={8} />}
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
          className="absolute hidden sm:block top-8 -right-32 w-[20rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-32"
        />
      </section>
    </motion.div>
  );
}