import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiCplusplus,
  SiCss,
  SiTailwindcss,
  SiJavascript,
  SiPython,
} from "react-icons/si";
import {
  SiHtml5,
  SiGit,
  SiGithub,
  SiPostman,
  SiFlask,
  SiMysql,
  SiTensorflow,
  SiScikitlearn,
  SiPandas,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import {
  Code2,
  Microscope,
  Terminal,
  BookOpen,
  Database,
  Server,
  Network,
  ShieldCheck,
  BrainCircuit,
  ChartNoAxesCombined,
} from "lucide-react";

// Technologies and practices documented in the supplied CV.
// General concepts use descriptive symbols because they have no official logo.
export const expertiseGroups = [
  {
    title: "Frontend Development",
    icon: Code2,
    description: "Interfaces built for real people.",
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "#e66b40" },
      { name: "CSS", icon: SiCss, color: "#638df6" },
      { name: "JavaScript", icon: SiJavascript, color: "#e6ce42" },
      { name: "React.js", icon: SiReact, color: "#61dafb" },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#38bdf8",
        note: "Basic",
      },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    description: "Reliable systems behind the experience.",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#75bb60" },
      { name: "Express.js", icon: SiExpress, color: "var(--text)" },
      { name: "Flask", icon: SiFlask, color: "var(--text)" },
      { name: "API Integration", icon: Network, color: "#8ba9ff" },
      { name: "Authentication", icon: ShieldCheck, color: "#70c8b2" },
    ],
  },
  {
    title: "Database Management",
    icon: Database,
    description: "Structured data. Dependable foundations.",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#60b95d" },
      { name: "MySQL", icon: SiMysql, color: "#62acd1" },
      { name: "MongoDB Atlas", icon: SiMongodb, color: "#60b95d" },
      { name: "Database Design", icon: Database, color: "#9aaaf8" },
    ],
  },
  {
    title: "Programming & Development Tools",
    icon: Terminal,
    description: "Tools that support the development process.",
    skills: [
      { name: "Git", icon: SiGit, color: "#f07359" },
      { name: "GitHub", icon: SiGithub, color: "var(--text)" },
      { name: "Postman", icon: SiPostman, color: "#ff8c60" },
      { name: "VS Code", icon: VscVscode, color: "#38a7ed" },
      { name: "Python", icon: SiPython, color: "#e5bd59" },
      { name: "C++", icon: SiCplusplus, color: "#659ad2" },
    ],
  },
  {
    title: "Research & Artificial Intelligence",
    icon: BrainCircuit,
    description: "From data and experiments to explainable solutions.",
    skills: [
      { name: "Machine Learning", icon: BrainCircuit, color: "#b9a0f7" },
      { name: "Deep Learning", icon: Network, color: "#ae9dfb" },
      { name: "TensorFlow", icon: SiTensorflow, color: "#ffab52" },
      { name: "Scikit-learn", icon: SiScikitlearn, color: "#eea359" },
      { name: "Pandas", icon: SiPandas, color: "#aa9df4" },
      { name: "Data Analysis", icon: ChartNoAxesCombined, color: "#70c8b2" },
      { name: "SHAP & LIME", icon: Microscope, color: "#91b4ff" },
      { name: "Research Methodology", icon: BookOpen, color: "#9bb1e3" },
    ],
  },
];
