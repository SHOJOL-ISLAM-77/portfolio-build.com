import React from "react";
import Button from "../../../components/Button";
import PortfolioCard from "./PortfolioCard";

const OurTemplates = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-10 ">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-white mb-10">Featured Portfolios</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-between items-center gap-6">
          {portfolios.map((portfolio, index) => (
            <PortfolioCard key={index} portfolio={portfolio} />
          ))}
        </div>
        <div className="flex justify-center items-center mt-15">
          <Button className={"text-primary bg-white"} shadowColor="#d8c4b6" title="All Templates" />
        </div>
      </div>
    </div>
  );
};

export default OurTemplates;

const portfolios = [
  {
    name: "John Doe",
    description: "A passionate web developer with expertise in React and Node.js.",
    imageUrl:
      "https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=200&q=80",
    skills: ["React", "Tailwind CSS", "Node.js", "JavaScript"],
    link: "#",
  },
  {
    name: "Jane Smith",
    description: "UI/UX designer specializing in modern and minimalist designs.",
    imageUrl:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=200&q=80",
    skills: ["Figma", "Sketch", "Adobe XD", "UI/UX"],
    link: "#",
  },
  {
    name: "Alex Johnson",
    description: "Full-stack developer with a focus on scalable backend systems.",
    imageUrl: "",
    skills: ["Python", "Django", "PostgreSQL", "AWS"],
    link: "#",
  },
  {
    name: "Emily Davis",
    description: "Frontend developer passionate about creating responsive and accessible web applications.",
    imageUrl:
      "https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=200&q=80",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    link: "#",
  },
  {
    name: "Michael Brown",
    description: "Mobile app developer with expertise in Flutter and React Native.",
    imageUrl:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=200&q=80",
    skills: ["Flutter", "React Native", "Dart", "Firebase"],
    link: "#",
  },
  {
    name: "Sarah Wilson",
    description: "Data scientist with a strong background in machine learning and data visualization.",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=200&q=80",
    skills: ["Python", "TensorFlow", "Pandas", "Tableau"],
    link: "#",
  },
  {
    name: "David Martinez",
    description: "DevOps engineer specializing in CI/CD pipelines and cloud infrastructure.",
    imageUrl:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=200&q=80",
    skills: ["Docker", "Kubernetes", "Jenkins", "Azure"],
    link: "#",
  },
  {
    name: "Laura Garcia",
    description: "Backend developer with expertise in microservices architecture.",
    imageUrl:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=200&q=80",
    skills: ["Java", "Spring Boot", "Kafka", "MongoDB"],
    link: "#",
  },
  {
    name: "Chris Evans",
    description: "Software engineer with a passion for open-source contributions.",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=200&q=80",
    skills: ["C++", "Git", "Linux", "Open Source"],
    link: "#",
  },
];
