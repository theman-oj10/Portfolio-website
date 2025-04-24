import React from "react";
import { LuBriefcase, LuGraduationCap, LuHammer, LuHome, LuSchool } from "react-icons/lu";
// import HangImg from "@/public/Hang-UI.png";
import RhAppImg from "@/public/rhapp-ui.png";
import CareerSyncImg from "@/public/careerSync-UI.png";
import RhWebsiteImg from "@/public/rhwebsite-ui.png";
import AlfredImg from "@/public/image.png";
import HoopifyImg from "@/public/hoopify.png";
import DescentImg from "@/public/descentAi.png";
import FlairImg from "@/public/FlairAI-UI.png";
import BlochangeImg from "@/public/Blochange-UI.png";
import HangImg from "@/public/hang-right-2.png";
import { FaEthereum, FaPython, FaJava, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDocker, FaAws, FaGithub, FaPizzaSlice, FaRobot } from "react-icons/fa";
import { SiFastapi, SiSupabase, SiTypescript, SiGithubactions, SiJunit5, SiTailwindcss, SiSelenium, SiRedux, SiFlask, SiExpress, SiPytorch, SiOpencv, SiTensorflow, SiNumpy, SiPandas, SiScikitlearn, SiRos, SiMongodb, SiPostgresql, SiFirebase, SiGooglecloud, SiOpensearch, SiNextdotjs, SiAmazondynamodb, SiC, SiSolidity } from "react-icons/si";
import {BsFiletypeJava, BsMeta} from "react-icons/bs";
import { TbSoup, TbBrandPython } from "react-icons/tb";
import { GoogleGeminiIcon } from "hugeicons-react";
import { LangchainIcon, OllamaIcon } from "@/components/custom-icons";
import FocusPalImg from "@/public/FocusPalUI.png";
// import { link } from "fs";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  // {
  //   name: "About",
  //   hash: "#about",
  // },
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
    title: "AI Engineer Intern",
    location: "Seekeasy (San Francisco, NOC Silicon Valley Program)",
    date: "Jan 2025 - Apr 2025",
    icon: React.createElement(FaPizzaSlice),
    description: [
      "• Developed user personalization for search infrastructure using KNN with OpenSearch.",
      "• Built an automated creator sourcing and classification pipeline leveraging web scraping frameworks and LLMs.",
      "• Automated several workflows using AWS CloudFormation and Lambda Functions.",
      "• Fine-tuned the custom embedding model, improving relevance and performance, and optimised it using a caching layer.",
      "• Applied K-means clustering for social media data embeddings for deeper content and user insights.",
      "• Built the personalization feature and other UI elements in the frontend using React Native and Tailwind CSS.",
      "• Integrated A/B Testing with Firebase",
    ],
  },
  {
    title: "Software Intern",
    location: "Kabam Robotics",
    date: "May 2024 - Aug 2024",
    icon: React.createElement(FaRobot),
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
      "• Specializing in AI and Database Systems",
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
    title: "Flair AI",
    subtitle: "AI for Good Hackathon San Francisco First Place",
    description: "Essay grading web-app, featuring rubric-based AI grading, live performance metrics, advanced grammar checks, historical error tracking and an AI voice agent that enables students to clarify grading decisions",
    tags: ["React.js", "TypeScript", "FastAPI", "Gemini"],
    imageUrl: FlairImg,
    githubUrl: "https://github.com/ryryry-3302/flare.ai",
    youtubeUrl: "https://www.youtube.com/watch?v=ia1Ee2U0DO8"
  },
  {
    title: "FocusPal",
    subtitle: "HackDavis 2025 Most Technically Challenging Hack",
    description: "A real-time web app that uses a MTCNN CV Model to track focus from webcam input, dynamically generating and adapting study content with LLMs based on user focus levels.",
    tags: ["Next.js", "WebSockets", "MTCNN", "TypeScript", "Flask", "Gemini"],
    imageUrl: FocusPalImg,
    githubUrl: "https://github.com/FocusPals",
    youtubeUrl: "https://www.youtube.com/watch?v=clUheneCxig"
  },
  {
    title: "Blochange",
    subtitle: "AIDF/Franklin Templeton Blockchain Pitchnight Finalist",
    description: "Blockchain-based platform that ensures transparency in charitable giving through immutable records and automates fund distribution based on a donor voting system",
    tags: ["Next.js", "Tailwind CSS", "Solidity", "MongoDB", "Ether.js"],
    imageUrl: BlochangeImg,
    githubUrl: "https://github.com/theman-oj10/Blochange-Repo",
    youtubeUrl: "https://www.youtube.com/watch?v=SCRSsmglxOM"
  },
  {
    title: "Hang",
    description:"Cross-platform mobile app with a recommendation engine that leverages Llama 3.1 Model, user profiles, and Yelp API data to curate activities and food options catered to user preferences",
    tags: ["Langchain", "Ollama", "Chroma DB", "LLama 3.1", "React Native", "Flask", "MongoDB"],
    imageUrl: HangImg,
    githubUrl: "https://github.com/theman-oj10/Hang-2.0/",
    youtubeUrl: "https://youtu.be/1UusvrWLx_U",
  },
  
{
  title: "Hoopify",
  description: "Cross-platform mobile app that analyzes user-uploaded basketball videos and provides in-depth analytics",
  tags: ["React Native", "OpenCV", "Flask", "Firebase", "Google Cloud"],
  imageUrl: HoopifyImg,
  githubUrl: "https://github.com/theman-oj10/Hoopify",
  youtubeUrl: "https://youtu.be/0AsMlBGDdNY"
},
{
  title: "Descent AI",
  description: [
      "Web-Platform to practice AI and machine learning technical interview questions, it provides tools to visualize various AI/ML concepts and algorithms"],
  tags: ["React.js", "Tailwind CSS","Node.js", "Express.js", "Docker"],
  imageUrl: DescentImg, 
  githubUrl: "https://github.com/domoberzin/descent_frontend", 
  link: "https://descent.lol/"
  // youtubeUrl: "https://youtu.be/your-video-id"  // Replace with the actual YouTube URL
},
  {
    title: "Raffles Hall App",
    description:
      "Web app for Raffles Hall residents to access hall events, facilities and services",
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
  "C",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Redux",
  "React Native",
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
  "MongoDB",
  "PostgreSQL",
  "DynamoDB",
  "Supabase",
  "Firebase",
  "Docker",
  "AWS",
  "Google Cloud",
  "OpenSearch",
  "Langchain",
] as const;

export const skillsIcons = {
  Python: FaPython,
  Java: FaJava,
  C: SiC,
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  JavaScript: FaJs,
  TypeScript: SiTypescript,
  "React.js": FaReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
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
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  "DynamoDB": SiAmazondynamodb,
  Docker: FaDocker,
  Firebase: SiFirebase,
  AWS: FaAws,
  "Github Actions": SiGithubactions,
  "Google Cloud": SiGooglecloud,
  "JavaFx": BsFiletypeJava,
  "JUnit": SiJunit5,
  "OpenSearch": SiOpensearch,
  "Supabase": SiSupabase,
  "Solidity": SiSolidity,
  "Ether.js": FaEthereum,
  "Gemini": GoogleGeminiIcon,
  "FastAPI": SiFastapi,
  "Langchain": LangchainIcon,
  "Ollama": OllamaIcon,
  "LLama 3.1": BsMeta,
};