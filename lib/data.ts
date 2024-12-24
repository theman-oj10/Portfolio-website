import React from "react";
import { LuBriefcase, LuGraduationCap, LuHammer, LuHome, LuSchool } from "react-icons/lu";
import HangImg from "@/public/Hang-UI.png";
import RhAppImg from "@/public/rhapp-ui.png";
import CareerSyncImg from "@/public/careersync-ui.png";
import RhWebsiteImg from "@/public/rhwebsite-ui.png";
import AlfredImg from "@/public/alfred-ui.png";
import HoopifyImg from "@/public/hoopify4.png";
import DescentImg from "@/public/descentAi.png";
import { FaPython, FaJava, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDocker, FaAws, FaGithub } from "react-icons/fa";
import { SiTypescript, SiGithubactions, SiJunit5, SiTailwindcss, SiSelenium, SiRedux, SiFlask, SiExpress, SiPytorch, SiOpencv, SiTensorflow, SiNumpy, SiPandas, SiScikitlearn, SiRos, SiMongodb, SiPostgresql, SiFirebase, SiGooglecloud } from "react-icons/si";
import {BsFiletypeJava} from "react-icons/bs";
import { TbSoup, TbBrandPython } from "react-icons/tb";
// import { link } from "fs";

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
  {
    name: "Testimonials",
    hash: "#testimonials",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Intern",
    location: "Kabam Robotics",
    date: "May 2024 - Aug 2024",
    icon: React.createElement(LuHammer),
    description: [
      "• Designed and implemented Ask-AI feature to automate the facility management feature.",
      "• Collected and processed large amounts of video and photo data from Robots.",
      "• Evaluated models like GPT-4o, Grounding DINO, and YOLO World on said data with automated scripts, providing metrics and visualizations.",
      "• Fixed critical bugs in the Video Analytics Engine, improving the accuracy of overcrowding detection",
      "• Created comprehensive documentation and conducted extensive testing on robots to ensure feature reliability and performance.",
      "• Followed agile methodologies for efficient project management, working closely with cross-functional teams to meet project goals and deadlines."
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
  {
    title: "Bachelor of Computing, Computer Science (Hons)",
    location: "National University of Singapore",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2026",
    description: [
        "• Second Major in Quantitative Finance",
        "• Raffles Hall: Basketball, Football, Block Committee, Sports Management Committee, Alumni Affairs Exchange Committee, Culture Committee, Bash Committee, Voices",
    ]
},
  {
    title: "IB Diploma",
    location: "Global Indian International School, Punggol",
    icon: React.createElement(LuSchool),
    date: "2018 - 2020",
    description: [
        "• Scored 43/45",
        "• Global Citizen Scholarship Recipient (2018-20)",
        "• Subject Proficiency Awards in 5 out of 7 subjects and Academic Proficiency Award",
        "• Higher Level: Biology (7), Chemistry (7), Mathematics (6)",
        "• Standard Level: Economics (7), English Language and Literature (6), Tamil (7), Theory of Knowledge (A) and Extended Essay (A)",
        "• Activities and societies: Movie Makers' Club, Nuclear Nation Band"
    ]
},
{
    title: "IGCSE",
    location: "Global Indian International School, East Coast",
    icon: React.createElement(LuSchool),
    date: "2016 - 2018",
    description: [
        "• Subject Proficiency Awards in 7 out of 9 subjects and Academic Proficiency Award",
        "• Gold Medals in SOF National Science Olympiad, National Cyber Olympiad, Silverzone International Olympiad of Math, and International Informatics Olympiad (2018)",
        "• Subjects: Additional Mathematics (A*), Extended Mathematics (A*), ICT (A*), Physics (A*), Chemistry (A*), Biology (A*), English Language (A), English Literature (A), Tamil (A*)",
    ]
}

] as const;

export const projectsData = [
  {
    title: "Hoopify",
    description: "Cross-platform mobile app that analyzes user-uploaded basketball videos and provides in-depth analytics",
    tags: ["React Native", "OpenCV", "Flask", "Firebase", "Google Cloud"],
    imageUrl: HoopifyImg,
    githubUrl: "https://github.com/theman-oj10/Hoopify",
    youtubeUrl: "https://youtu.be/0AsMlBGDdNY",
    
  },
  {
    title: "Descent AI",
    description: [
        "Web-Platform to practice AI and machine learning technical interview questions, it provides tools to visualize various AI/ML concepts and algorithms."],
    tags: ["React.js", "Tailwind CSS","Node.js", "Docker"],
    imageUrl: DescentImg, 
    githubUrl: "https://github.com/domoberzin/descent_frontend", 
    link: "https://descent.lol/"
    // youtubeUrl: "https://youtu.be/your-video-id"  // Replace with the actual YouTube URL
},
  {
    title: "Hang",
    description:
      "Web app with a custom recommendation engine that leverages user profiles to curate activities and food options.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    imageUrl: HangImg,
    githubUrl: "https://github.com/theman-oj10/Hang-Repo",
    youtubeUrl: "https://youtu.be/KrhPOl-6h4Y",
  },
  {
    title: "Raffles Hall App",
    description:
      "Web app for Raffles Hall residents to access hall events, facilities and services.",
    tags: ["React.js", "TypeScript", "Redux", "Flask", "MongoDB"],
    imageUrl: RhAppImg,
    githubUrl: "https://github.com/rhdevs/rhapp",
    link: "https://www.rhapp.lol/"
  },
  {
    title: "CareerSync",
    description:
      "Desktop application for Internship Management catered to users who prefer a CLI",
    tags: ["Java", "JavaFx", "JUnit", "Github Actions"],
    imageUrl: CareerSyncImg,
    githubUrl: "https://github.com/theman-oj10/CareerSync",
    link: "https://ay2324s2-cs2103t-w11-1.github.io/tp/"
  },
  {
    title: "Raffles Hall Website",
    description:
      "Web app for outsiders to find out about Raffles Hall and it's events",
    tags: ["Flask", "MongoDB", "React.js", "Redux"],
    imageUrl: RhWebsiteImg,
    githubUrl: "https://github.com/theman-oj10/Hoopify",
    link: "https://super.rhapp.lol/"
  },
  {
    title: "Alfred",
    description:
      "Desktop Application for managing tasks and reminders",
    tags: ["Java", "JavaFx", "JUnit"],
    imageUrl: AlfredImg,
    githubUrl: "https://github.com/theman-oj10/Alfred",
    link: "https://github.com/theman-oj10/Alfred/releases/tag/A-Release"
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
  "Matplotlib",
  "Seaborn",
  "Scikit-learn",
  "Selenium",
  "BeautifulSoup",
  "ROS",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "Firebase",
  "AWS",
  "Google Cloud",
] as const;
export const skillsIcons = {
  Python: FaPython,
  Java: FaJava,
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  JavaScript: FaJs,
  TypeScript: SiTypescript,
  "React.js": FaReact,
  Redux: SiRedux,
  "React Native": FaReact,
  Flask: SiFlask,
  "Node.js": FaNodeJs,
  "Express.js": SiExpress,
  Pytorch: SiPytorch,
  OpenCV: SiOpencv,
  Tensorflow: SiTensorflow,
  NumPy: SiNumpy,
  Pandas: SiPandas,
  "Scikit-learn": SiScikitlearn,
  Matplotlib: TbBrandPython,
  Seaborn: TbBrandPython,
  Selenium: SiSelenium,
  BeautifulSoup: TbSoup,
  ROS: SiRos,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  Docker: FaDocker,
  Firebase: SiFirebase,
  AWS: FaAws,
  "Github Actions": SiGithubactions,
  "Google Cloud": SiGooglecloud,
  "JavaFx": BsFiletypeJava,
  "JUnit": SiJunit5,
  "Tailwind CSS": SiTailwindcss,
};