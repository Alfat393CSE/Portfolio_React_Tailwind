import { BriefcaseBusiness, Microscope } from "lucide-react";

export const roles = [
  {
    title: 'Software Developer', company: 'Nexogs Systems Ltd.', url: 'https://nexogs.com/',
    start: '2026-04', startLabel: 'Apr 2026', endLabel: 'Present', current: true,
    type: 'Professional experience', icon: BriefcaseBusiness,
    overview: 'Developing and deploying full-stack MERN applications with a focus on scalable architecture, reliable functionality, and user experience.',
    responsibilities: [
      'Develop and deploy full-stack MERN applications, improving system performance and user experience.',
      'Optimize application performance, debug complex issues, and implement scalable software solutions.',
      'Design and maintain databases, integrating third-party and internal APIs to ensure reliable system functionality.',
    ],
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'API Integration'],
    contributions: [
      { name: 'Nexogs Systems Website', href: '#/projects/nexogs' },
      { name: 'BLAST Helpdesk CRM', href: '#/projects/blast' },
    ],
    contributionLabel: 'Related development work',
  },
  {
    title: 'Software Developer Intern', company: 'Nexogs Systems Ltd.', url: 'https://nexogs.com/',
    start: '2025-12', startLabel: 'Dec 2025', end: '2026-03', endLabel: 'Mar 2026',
    type: 'Internship', icon: BriefcaseBusiness,
    overview: 'Supported full-stack application development and deployment while collaborating with senior developers on performance and reliability.',
    responsibilities: [
      'Assisted in the development and deployment of full-stack MERN applications.',
      'Collaborated with senior developers to optimize application performance and resolve technical issues.',
      'Participated in database design, API integration, and software testing to ensure application reliability.',
    ],
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Software Testing'],
  },
  {
    title: 'Part-time Research Assistant', company: 'Stamford University Bangladesh',
    url: 'https://www.stamforduniversity.edu.bd/', start: '2025-01', startLabel: 'Jan 2025', endLabel: 'Present', current: true,
    type: 'Research experience', icon: Microscope,
    overview: 'Supporting machine learning and deep learning research under the supervision of faculty member Anika Rahman, connecting research experiments with working prototypes.',
    responsibilities: [
      'Assist in preparing journal and conference publications using machine learning and deep learning models.',
      'Develop prototypes and interactive web demos using Python and Flask.',
      'Perform data preprocessing, model training, and evaluation to support research projects.',
      'Collaborate with the supervising faculty member to implement solutions and support timely publication.',
    ],
    technologies: ['Python', 'Flask', 'Machine Learning', 'Deep Learning', 'Data Preprocessing', 'Model Evaluation'],
    contributionLabel: 'Research contributions listed in the CV',
    contributions: [
      { name: 'DELSFBS student dataset', href: 'https://doi.org/10.1109/IEEEDATA.2026.3658067', external: true },
      { name: 'Mental health risk assessment', href: 'https://doi.org/10.1109/COMPAS67506.2025.11381719', external: true },
      { name: 'Explainable personality prediction', href: 'https://doi.org/10.1109/QPAIN69676.2026.11546412', external: true },
    ],
  },
];
