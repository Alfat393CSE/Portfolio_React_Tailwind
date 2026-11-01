import {
  BrainCircuit,
  Network,
  Code2,
  Microscope,
  HeartPulse,
  Database,
} from "lucide-react";

export const publications = [
  {
    id: "delsfbs",
    title:
      "Descriptor: A Dataset on Educational, Lifestyle, and Socioeconomic Factors of Bangladeshi Students (DELSFBS)",
    venue: "IEEE journal article",
    year: "2026",
    type: "Dataset paper",
    doi: "10.1109/IEEEDATA.2026.3658067",
    abstract:
      "A curated dataset capturing educational, lifestyle, and socioeconomic attributes of Bangladeshi students. The work supports analysis of relationships between academic performance and behavioral factors, enabling data-driven research in education and the social sciences.",
    keywords: [
      "Educational data",
      "Student performance",
      "Socioeconomic factors",
      "Dataset",
    ],
  },
  {
    id: "mental-health",
    title:
      "Mental Health Risk Assessment in University Students: Integrating IoT Environmental Data with Hybrid Machine Learning",
    venue:
      "IEEE 2nd International Conference on Computing, Applications and Systems (COMPAS 2025)",
    year: "2025",
    type: "Conference paper",
    doi: "10.1109/COMPAS67506.2025.11381719",
    abstract:
      "A hybrid machine learning framework predicts mental health risk levels among university students using IoT environmental data. An ensemble of Random Forest and an RBF-kernel Support Vector Machine achieved 98% classification accuracy across Low, Medium, and High risk categories, as reported in the CV.",
    keywords: [
      "Mental health",
      "IoT",
      "Random Forest",
      "Support Vector Machine",
    ],
  },
  {
    id: "personality",
    title:
      "From Data to Deployment: A Personality Prediction Pipeline with SHAP-Based Feature Insights and Flask Implementation",
    venue:
      "IEEE 2nd International Conference on Quantum Photonics, Artificial Intelligence, and Networking (QPAIN 2026)",
    year: "2026",
    type: "Conference paper",
    doi: "10.1109/QPAIN69676.2026.11546412",
    abstract:
      "An end-to-end personality prediction pipeline connects data preprocessing, machine learning modeling, and Flask deployment. SHAP-based interpretability reveals feature contributions, improving model transparency and supporting practical deployment of explainable AI systems.",
    keywords: ["Personality prediction", "Explainable AI", "SHAP", "Flask"],
  },
];
export const interests = [
  {
    name: "Machine Learning",
    icon: BrainCircuit,
    detail: "Predictive models & evaluation",
  },
  {
    name: "Deep Learning",
    icon: Network,
    detail: "Neural networks, CNNs & RNNs",
  },
  {
    name: "Explainable AI",
    icon: Microscope,
    detail: "SHAP & LIME interpretability",
  },
  {
    name: "Software Engineering",
    icon: Code2,
    detail: "Practical, scalable applications",
  },
  {
    name: "Intelligent Healthcare",
    icon: HeartPulse,
    detail: "Mental health risk prediction",
  },
  {
    name: "Educational Data Analysis",
    icon: Database,
    detail: "Student data & academic outcomes",
  },
];
