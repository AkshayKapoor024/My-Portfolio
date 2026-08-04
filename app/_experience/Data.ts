export interface ExperienceSchema {
  role: string;
  company: string;
  location: string;
  duration: string;
  type: string;
  current: boolean;
  bullets: string[];
}

export const experiences: ExperienceSchema[] = [
  {
    role: "Full Stack AI Engineer",
    company: "GrowthGear",
    location: "Gurugram, Haryana",
    duration: "Jul 2026 – Present",
    type: "Hybrid Internship",
    current: true,
    bullets: [
      "Building agentic generative AI workflows and full-stack scalable applications powered by LLMs and multi-agent architectures.",
    ],
  },
  {
    role: "Full Stack Web Developer",
    company: "G Tech Web Marketing Pvt. Ltd.",
    location: "Mayapuri, Delhi",
    duration: "Jul 2025 – Aug 2025",
    type: "Full Time Internship",
    current: false,
    bullets: [
      "Engineered and optimized RESTful APIs using Node.js & Express.js, improving client integration efficiency by 35%.",
      // "Developed and deployed end-to-end MERN applications for 3 client projects with secure authentication, supporting 2,000+ daily active users.",
      "Designed scalable backend services and database workflows, reducing deployment cycles by 25% and improving application reliability.",
    ],
  },
];
