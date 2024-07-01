import React from "react";
import { LuBriefcase, LuGraduationCap, LuHammer, LuHome } from "react-icons/lu";
import HangImg from "@/public/Hang-UI.png";
import RhAppImg from "@/public/rhapp-ui.png";
import CareerSyncImg from "@/public/careersync-ui.png";
import RhWebsiteImg from "@/public/rhwebsite-ui.png";
import AlfredImg from "@/public/alfred-ui.png";
import HoopifyImg from "@/public/hoopify4.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Intern",
    location: "Kabam Robotics",
    date: "May 2024 - Aug 2024",
    icon: React.createElement(LuHammer),
    description: [
      "• Designed and implemented Ask-AI feature to automate the facility management feature of Robots",
      "• Fixed crucial bugs in the Video-Analytics engine",
    ],
  },
  {
    title: "Backend Developer Intern",
    location: "Spot Future Technologies",
    icon: React.createElement(LuBriefcase),
    date: "May 2023 - August 2023",
    description: [
      "• Acquired experience in Java Backend Development such as Servlets and SpringBoot.",
      "• Developed REST APIs using NodeJS and MongoDB for DijoMatrix, their flagship low-code platform for building business applications",
      "• Worked on transition from outdated SQL Database to NoSQL database using MongoDB improving scalability",
      "• Gained experience in working in a lean and efficient start-up team"
    ],
  },
  {
    title: "Backend Lead",
    location: "Raffles Hall Developers",
    icon: React.createElement(LuHome),
    date: "August 2022 - April 2024",
    description: [
      "• Started my journey as Junior Frontend Developer on the Raffles Hall App, excelling in bug fixing to enhance project stability and performance within large teams",
      "• Led the development of an Automatic Internship Application software, showcasing leadership in innovative project management and execution.",
      "• Organized a Programming Workshop and Inter-Hall Hackathon, fostering collaborative learning and innovation",
    ],
  },
] as const;

export const projectsData = [
  {
    title: "Hoopify",
    description: "Cross-platform mobile app that analyzes user-uploaded basketball videos and provides in-depth analytics",
    tags: ["React Native", "OpenCV", "Flask", "Firebase", "Google Cloud"],
    imageUrl: HoopifyImg,
  },
  {
    title: "Hang",
    description:
      "Web app with a custom recommendation engine that leverages user profiles to curate activities and food options.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    imageUrl: HangImg,
  },
  {
    title: "Raffles Hall App",
    description:
      "Web app for Raffles Hall residents to access hall events, facilities and services.",
    tags: ["React.js", "TypeScript", "Redux", "Flask", "MongoDB"],
    imageUrl: RhAppImg,
  },
  {
    title: "CareerSync",
    description:
      "Desktop application for Internship Management catered to users who prefer a CLI",
    tags: ["Java", "JavaFx", "JUnit", "Github Actions"],
    imageUrl: CareerSyncImg,
  },
  {
    title: "Raffles Hall Website",
    description:
      "Web app for outsiders to find out about Raffles Hall and it's events",
    tags: ["Flask", "MongoDB", "React.js", "Redux"],
    imageUrl: RhWebsiteImg,
  },
  {
    title: "Alfred",
    description:
      "Desktop Application for managing tasks and reminders",
    tags: ["Java", "JavaFx", "JUnit"],
    imageUrl: AlfredImg,
  },
] as const;

export const skillsData = [
  "Python",
  "Java",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Redux",
  "React Native",
  "C",
  "Flask",
  "Node.js",
  "Express.js",
  "Pytorch",
  "OpenCV",
  "Tensorflow",
  "NumPy",
  "Pandas",
  "ROS",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "Firebase",
  "AWS",
  "Google Cloud",
] as const;
