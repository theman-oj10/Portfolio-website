"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView, useIsClient } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.2);
  const { theme } = useTheme();
  const isClient = useIsClient();

  const elementVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 w-full"
    >
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline
        lineColor={theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)"}
      >
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            {isClient ? (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                variants={elementVariants}
              >
                <VerticalTimelineElement
                  visible={true}
                  position={index % 2 === 0 ? "left" : "right"}
                  contentStyle={{
                    background:
                      theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                    boxShadow: "none",
                    border: "1px solid rgba(0, 0, 0, 0.05)",
                    textAlign: "left",
                    padding: "1.3rem 2rem",
                  }}
                  contentArrowStyle={{
                    borderRight:
                      theme === "light"
                        ? "0.4rem solid #9ca3af"
                        : "0.4rem solid rgba(255, 255, 255, 0.5)",
                  }}
                  date={item.date}
                  icon={item.icon}
                  iconStyle={{
                    background:
                      theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                    fontSize: "1.5rem",
                  }}
                >
                  <h3 className="font-semibold capitalize">{item.title}</h3>
                  <p className="font-normal !mt-0">{item.location}</p>
                  {item.description.map((info, id) => (
                    <React.Fragment key={id}>
                      <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                        {info}
                      </p>
                    </React.Fragment>
                  ))}
                </VerticalTimelineElement>
              </motion.div>
            ) : (
              <VerticalTimelineElement
                visible={true}
                position={index % 2 === 0 ? "left" : "right"}
                contentStyle={{
                  background:
                    theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight:
                    theme === "light"
                      ? "0.4rem solid #9ca3af"
                      : "0.4rem solid rgba(255, 255, 255, 0.5)",
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background:
                    theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                  fontSize: "1.5rem",
                }}
              >
                <h3 className="font-semibold capitalize">{item.title}</h3>
                <p className="font-normal !mt-0">{item.location}</p>
                {item.description.map((info, id) => (
                  <React.Fragment key={id}>
                    <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                      {info}
                    </p>
                  </React.Fragment>
                ))}
              </VerticalTimelineElement>
            )}
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
