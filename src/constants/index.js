import motorola from "../assets/companies/motorola.svg";

export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Projects",
    href: "#projects",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Marketing Director at GreenLeaf",
    img: "assets/review1.png",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  },
  {
    id: 2,
    name: "Mark Rogers",
    position: "Founder of TechGear Shop",
    img: "assets/review2.png",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: "John Dohsas",
    position: "Project Manager at UrbanTech ",
    img: "assets/review3.png",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  {
    id: 4,
    name: "Ether Smith",
    position: "CEO of BrightStar Enterprises",
    img: "assets/review4.png",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
  },
];

export const myProjects = [
  {
    title: "2025 Motorola Innovation Hackathon - ContextConnect",

    desc: "ContextConnect is a powerful internal knowledge platform designed to make company information instantly accessible and actionable. It continuously crawls and consolidates data from Confluence and Batchat, transforming scattered knowledge into a structured, searchable repository. With seamless integration via a custom MCP (Model-Context Protocol) server, it empowers both developers and internal AI tools to retrieve context-rich information on demand.",
    subdesc:
      "Built using React, Cobalt, Python, Playwright, and ElasticSearch, ContextConnect blends intuitive UI with robust backend infrastructure. It features both scheduled and on-demand data crawling, AI middleware for security threat detection, and programmatic access for tools and editors. Deployed using Docker on Google Cloud, the platform ensures scalability, security, and real-time access to dynamic internal knowledge.",

    href: "https://youtu.be/LAE6Pw244jA",
    texture: "/textures/project/project7.mov",
    logo: "/assets/logo/contextconnect.png",
    logoStyle: {
      backgroundColor: "#F0F0F0",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "assets/python.svg",
      },

      {
        id: 2,
        name: "Docker",
        path: "/assets/nodejs-icon.svg",
      },
      {
        id: 3,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 4,
        name: "Playwright",
        path: "/assets/companies/playwright.svg",
      },
      {
        id: 5,
        name: "ElasticSearch",
        path: "/assets/companies/elasticsearch.png",
      },
    ],
  },
  {
    title: "ConfluenceFormatter - Smart Confluence Page Enhancer",
    desc: "ConfluenceFormatter is a specialized tool that streamlines and enhances the formatting of Confluence pages using AI-driven automation. It allows users to request formatting improvements through a simple interface, leveraging Motorola’s internal Gen AI for layout and style optimization, while ensuring prompt safety with integrated Palo Alto Networks AI security checks.",
    subdesc:
      "Built with Python, ConfluenceFormatter interacts with the Confluence API to retrieve and parse page content. It then prompts Motorola's internal Gen AI to generate polished XHTML output. To ensure secure and compliant usage, each prompt is also validated through Palo Alto's AI Security Check API. Designed for internal efficiency and safe collaboration, ConfluenceFormatter brings smart automation to enterprise documentation.",
    href: "https://www.youtube.com/watch?v=dttIVY8RGUs",
    texture: "/textures/project/project7.mov",
    logo: "Confluence",
    logoStyle: {
      backgroundColor: "#dbf8ff",
      border: "0.2px solid #dbf8ff",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/python.svg",
      },
    ],
  },
  {
    title: "ClearWrite - AI writing improvement platform",
    desc: "ClearWrite is an innovative platform that empowers users to improve their writing skills with AI-driven tools. It provides personalized feedback through advanced grammar checks, readability analysis, AI detection, and detailed suggestions, all without rewriting or altering original ideas.",
    subdesc:
      "Developed as a web application using React, Node.js, Bootstrap, Jest, and the Sapling and TextGears APIs, ClearWrite is built for efficiency, reliability, and user-focused writing improvement. Deployed on Netlify and Render, it ensures seamless performance and accessibility.",
    href: "https://www.youtube.com/watch?v=dttIVY8RGUs",
    texture: "/textures/project/project1.mov",
    logo: "/assets/project-logo-1.png",
    logoStyle: {
      backgroundColor: "#F0F0F0",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },

      {
        id: 2,
        name: "Node.js",
        path: "/assets/nodejs-icon.svg",
      },
      {
        id: 3,
        name: "Bootstrap",
        path: "assets/Bootstrap_logo.svg",
      },
      {
        id: 4,
        name: "Jest",
        path: "/assets/Jest.svg",
      },
    ],
  },
  {
    title: "Faster Than Light Yagami - A Speed Typing Adventure",
    desc: "Inspired by the iconic anime series Death Note, Faster Than Light Yagami is a thrilling speed typing game that tests your reflexes and typing skills. As the timer shortens and the words become more challenging, players race against time to secure their place on the leaderboard while enjoying engaging audio and video elements.",
    subdesc:
      "This project won first place during the Fall Hacks 2024 competition. Using Godot, this project was born from a shared passion for creative game design and problem-solving. Overcoming GitHub challenges and mastering Godot’s scripting, we created a game that celebrates teamwork and innovation. Future plans include integrating OCR APIs for letter-drawing mechanics to enhance gameplay.",
    href: "https://github.com/Andy-J-B/FallHacks2024?tab=readme-ov-file",
    texture: "/textures/project/project2.mov",
    logo: "/assets/godot.svg",
    logoStyle: {
      backgroundColor: "#f5ffdb",
      border: "0.2px solid #f5ffdb",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "Godot",
        path: "/assets/godot.svg",
      },
    ],
  },
  {
    title: "Hydrowave - Android E-commerce Application",
    desc: "Hydrowave is a React Native-based mobile application designed to introduce the company and showcase its product line while seamlessly embedding the Shopify store for e-commerce functionality. The app provides users with an intuitive and responsive shopping experience.",
    subdesc:
      "Developed as a freelance project in September 2024, Hydrowave was built using React Native, Expo, and WebView. Through close collaboration with the client, the app was taken through the prototyping life cycle, ensuring all requirements were met and resulting in a polished product deployed on the Google Play Store.",
    href: "https://github.com/Andy-J-B/hydrowave",
    texture: "/textures/project/project3.mov",
    logo: "/assets/project-logo-3.png",
    logoStyle: {
      backgroundColor: "#dbf8ff",
      border: "0.2px solid #dbf8ff",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "Expo",
        path: "assets/expo/snack.svg",
      },
    ],
  },
  {
    title: "Bank Management System - A C++ Banking Application",
    desc: "The Bank Management System is a C++-based application integrated with SQLite, designed for efficient management of user accounts, transactions, and balances. It features a transaction tracking system and a unique undo function for enhanced user control.",
    subdesc:
      "Developed as a personal project in June 2024, this system utilizes a stack data structure to enable transaction reversal and ensures a seamless user experience through its intuitive interface.",
    href: "https://github.com/Andy-J-B/BankManagementSystem",
    texture: "/textures/project/project4.mov",
    logo: "/assets/c++.svg",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "C++",
        path: "/assets/c++.svg",
      },
    ],
  },
  {
    title: "Net Worth Calculator - A PERN Stack Web App",
    desc: "The Net Worth Calculator is a web application that allows users to calculate and track their net worth while analyzing historical trends for better financial insights. Built with the PERN stack (PostgreSQL, Express.js, React, and Node.js), it ensures robust performance and smooth CRUD operations.",
    subdesc:
      "Completed in February 2024 as a personal project, the application features RESTful APIs for seamless backend communication, a dynamic frontend for user interaction, and a visually engaging interface built with HTML and CSS.",
    href: "https://github.com/Andy-J-B/PERN_NetworthCalculator",
    texture: "/textures/project/project5.mov",
    logo: "/assets/react.svg",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "PostgreSQL",
        path: "assets/postgresql.svg",
      },
      {
        id: 2,
        name: "Express.js",
        path: "/assets/express.svg",
      },
      {
        id: 3,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 4,
        name: "Node.js",
        path: "/assets/nodejs-icon.svg",
      },
    ],
  },
  {
    title:
      "Quant Regression Trading Algorithm - Data-Driven Financial Decisions",
    desc: "This project focuses on developing a Python-based trading algorithm that leverages regression analysis to signal buy, sell, and hold decisions. It emphasizes precision and data-driven strategies for financial market operations.",
    subdesc:
      "Created as a group project from June 2023 to May 2024, it involved collaborative development using GitHub workflows, enhancing skills in Python software structuring, testing, and teamwork within a financial technology context.",
    href: "https://github.com/Andy-J-B/AIST",
    texture: "/textures/project/project6.mov",
    logo: "/assets/python.svg",
    logoStyle: {
      backgroundColor: "#ffffff",
      border: "0.2px solid #ffffff",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/python.svg",
      },
    ],
  },
];

export const experiences = [
  {
    title: "Test Developer",
    company_name: "Motorola Solutions",
    icon: motorola,
    iconBg: "#ffffff",
    date: "May 2025 - December 2025",
    points: [
      "Supporting Avigilon's transition from the legacy Tricorder benchmarking system to Benchmark 2.0, modernizing the automation framework for performance testing.",
      "Designing and implementing a high-level C#/.NET client for Dell Switch OS10, enabling automated switch control for the new Benchmark 2.0 system.",
      "Managing and executing test suites through TestRail, ensuring consistency and reliability of performance regression testing.",
      "Collaborating with systems and embedded developers to evolve automation strategies and improve test coverage for upcoming hardware releases.",
      "Developing and maintaining automated test scripts in Python to validate software and hardware performance.",
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
        ? [5, -5, 0]
        : isTablet
          ? [5, -5, 0]
          : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
        ? [5, 4, 0]
        : isTablet
          ? [5, 4, 0]
          : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
        ? [-10, 10, 0]
        : isTablet
          ? [-12, 10, 0]
          : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
        ? [-9, -10, -10]
        : isTablet
          ? [-11, -7, -10]
          : [-13, -13, -10],
  };
};
