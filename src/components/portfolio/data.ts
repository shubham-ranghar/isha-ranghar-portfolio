import type { IconType } from "react-icons";

export const profile = {
  name: "Isha Ranghar",
  title: "MCA Student",
  location: "Jakhan, Dehradun, Uttarakhand",
  email: "isharanghar12@gmail.com",
  phone: "+91 7906004235",
  github: "https://github.com/isha-ranghar",
  linkedin: "https://www.linkedin.com/in/isha-ranghar-562583235/",
  tagline:
    "Motivated and detail-oriented MCA student with foundational knowledge in programming, data structures, and software development. Quick learner with strong problem-solving abilities and a keen interest in Artificial Intelligence.",
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "activities", label: "Activities" },
  { id: "personal", label: "Personal" },
  { id: "contact", label: "Contact" },
];
export const experience = [
  {
    role: "Fraud Analyst",
    company: "Walmart",
    period: "Internship",
    mode: "",
    points: [
      "Worked on seller risk operations, monitoring seller accounts to detect and prevent fraudulent activity (e.g., empty-box scams and other deceptive practices), helping maintain a secure marketplace and positive customer experience.",
      "Promoted to Mentor in recognition of performance.",
    ],
  },
];

export const projects = [
  {
    name: "Game Store Management System",
    subtitle: "Team Size: 4",
    tech: [
      "PHP",
      "MySQL",
      "HTML",
      "CSS",
      "PDO",
      "XAMPP",
    ],
    points: [
      "Developed a web-based Game Store Management System to automate and manage online game store operations, allowing users to browse games, register/log in, purchase games via wallet or other payment methods, and view purchase history.",
      "Built the frontend interface and collaborated on backend integration, connecting APIs to ensure smooth data flow between client and server.",
      "Implemented an admin panel for approving/rejecting developer game upload requests, and designed normalized relational database tables for games, developers, users, purchases, and inventory.",
    ],
    store: "",
    repo: "",
  },
  {
    name: "Traffic Light Simulation",
    subtitle: "Object-Oriented Programming",
    tech: [
      "Java",
    ],
    points: [
      "Developed a traffic signal simulation program demonstrating timing and state changes using object-oriented programming and conditional logic.",
    ],
    store: "",
    repo: "",
  },
  {
    name: "Salary Prediction Based on Experience",
    subtitle: "Machine Learning",
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
    ],
    points: [
      "Built a machine learning model using Linear Regression to predict employee salary based on years of experience.",
      "Performed data preprocessing, visualization, and model training; evaluated model accuracy and visualized results with Matplotlib, demonstrating practical understanding of regression algorithms and predictive analytics.",
    ],
    store: "",
    repo: "",
  },
];

export type Skill = { name: string };

export const skillGroups: { category: string; skills: Skill[] }[] = [
  {
    category: "Technical",
    skills: [
      { name: "Java" },
      { name: "C" },
      { name: "Python" },
      { name: "HTML" },
      { name: "MySQL" },
      { name: "PHP" },
      { name: "MS Word" },
      { name: "MS Excel" },
      { name: "MS PowerPoint" },
    ],
  },
  {
    category: "Interpersonal",
    skills: [
      { name: "Adaptability" },
      { name: "Communication" },
      { name: "Critical Thinking" },
      { name: "Problem Solving" },
      { name: "Continuous Learning Mindset" },
      { name: "Self-Motivation" },
    ],
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "DIT University, Dehradun",
    period: "2025 – 2027",
  },
  {
    degree: "Bachelor of Science (B.Sc.)",
    school: "HNB Garhwal University (HNBGU), Srinagar",
    period: "2021 – 2024",
    details: "CGPA: 6.0",
  },
  {
    degree: "Intermediate",
    school: "Uttarakhand Board, JPUKSBVM, Rishikesh",
    period: "2020 – 2021",
    details: "89%",
  },
  {
    degree: "High School",
    school: "Uttarakhand Board, THDCHS, Rishikesh",
    period: "2018 – 2019",
    details: "84.2%",
  },
];

export const extracurricular = [
  "Participated in debate, essay-writing, poetry, and art competitions.",
  "Hosted and managed various fests at school and college.",
];

export const personalDetails = {
  interests: "Art & Craft, Esports Gaming, Music, Reading",
  dateOfBirth: "12 May 2003",
  knownLanguages: "English, Hindi",
  maritalStatus: "Unmarried",
};
