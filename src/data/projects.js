import {
  GraduationCap,
  HeartPulse,
  Building2,
  ShoppingBag,
} from "lucide-react";
export const projects = [
  {
    slug: "jmds",
    title: "JMDS Training Management System",
    category: "Full-Stack",
    filters: ["Full-Stack", "Backend"],
    kind: "Educational portal",
    icon: GraduationCap,
    color: "#648eff",
    description:
      "A MERN-based educational portal for Jahanabad Military Driving School, with interactive features and a user-friendly design.",
    responsibilities: [
      "Developed a MERN-based web portal.",
      "Built interactive features and a user-friendly interface.",
    ],
    features: ["Educational web portal", "Interactive user experience"],
    stack: ["MongoDB", "Express.js", "React", "Node.js"],
    live: "https://jmdschool.com/",
  },
  {
    slug: "blast",
    title: "BLAST Helpdesk System",
    category: "Full-Stack",
    filters: ["Full-Stack", "Backend"],
    kind: "CRM application",
    icon: HeartPulse,
    color: "#58bfa9",
    description:
      "A full-stack MERN CRM application for the BLAST Legal Helpdesk, built with a scalable and maintainable architecture.",
    responsibilities: [
      "Contributed to the full-stack MERN CRM application.",
      "Implemented authentication, API integration, and performance optimization.",
      "Collaborated with the development team to design, develop, and deploy production-ready software.",
    ],
    features: [
      "Authentication",
      "API integration",
      "Performance optimization",
      "Scalable CRM architecture",
    ],
    stack: ["MongoDB", "Express.js", "React", "Node.js"],
    live: "https://helpdesk.blast.org.bd/",
  },
  {
    slug: "nexogs",
    title: "Nexogs Systems Website",
    category: "Full-Stack",
    filters: ["Full-Stack", "Backend"],
    kind: "Company website",
    icon: Building2,
    color: "#a08af1",
    description:
      "The official Nexogs Systems Ltd. website, with contributions to full-stack MERN applications and production-level software solutions.",
    responsibilities: [
      "Built and contributed to MERN-based web applications with scalable architecture.",
      "Implemented authentication, API integration, and performance optimization.",
      "Collaborated with the team to design and deploy production-level solutions.",
    ],
    features: [
      "Scalable MERN architecture",
      "Authentication",
      "API integration",
    ],
    stack: ["MongoDB", "Express.js", "React", "Node.js"],
    live: "https://nexogs.com/",
  },
  {
    slug: "nutriai",
    title: "NutriAI",
    category: "Machine Learning",
    filters: ["Machine Learning", "Full-Stack", "Backend"],
    kind: "Nutrition prediction & management",
    icon: HeartPulse,
    color: "#e4b36b",
    description:
      "A machine learning-based web application for personalized nutrition prediction and recommendations, built with Python and Flask.",
    responsibilities: [
      "Built a full-stack web application using Python Flask, HTML, CSS, and JavaScript.",
      "Developed an ML-based system for personalized nutrition prediction and recommendations.",
    ],
    features: [
      "Personalized nutrition prediction",
      "Nutrition recommendations",
      "Full-stack web application",
    ],
    stack: ["Python", "Flask", "HTML", "CSS", "JavaScript", "Machine Learning"],
    live: "https://nutriai-xco6.onrender.com/",
    methodology:
      "Machine learning is used for personalized nutrition prediction and recommendations. The CV does not specify the algorithm, training dataset, or evaluation procedure.",
    performance: "Evaluation metrics are not provided in the CV.",
    research: "No project-specific research paper link is provided in the CV.",
  },
  {
    slug: "devils-den",
    title: "Devil’s Den",
    category: "Frontend",
    filters: ["Frontend"],
    kind: "E-commerce interface",
    icon: ShoppingBag,
    color: "#ef8a9b",
    description:
      "A frontend-only e-commerce project showcasing public-facing pages and user interface design.",
    responsibilities: [
      "Created the public-facing frontend pages.",
      "Showcased e-commerce interface design.",
    ],
    features: ["Public-facing e-commerce pages", "Frontend user interface"],
    stack: ["Frontend", "MERN project"],
    live: "https://devil12.netlify.app/",
  },
];
