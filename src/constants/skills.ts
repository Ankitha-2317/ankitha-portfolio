import type { SkillCategory } from "@/types";

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    span: "md:col-span-2",
    skills: [
      { name: "Java", icon: "java" },
      { name: "Python", icon: "python" },
      { name: "JavaScript", icon: "javascript" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    span: "md:col-span-2 md:row-span-2",
    skills: [
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
      { name: "React", icon: "react" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    span: "",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Flask", icon: "flask" },
    ],
  },
  {
    id: "database",
    title: "Database",
    span: "",
    skills: [
      { name: "MongoDB", icon: "mongodb" },
      { name: "MySQL", icon: "mysql" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    span: "md:col-span-2",
    skills: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "VS Code", icon: "vscode" },
    ],
  },
];
