import React from "react";
import PythonIcon from "../../assets/technology-icon/Python.png";
import FastApiIcon from "../../assets/technology-icon/FastAPI.png";
import DjangoIcon from "../../assets/technology-icon/Django.png";
import FlaskIcon from "../../assets/technology-icon/Flask.png";
import NETIcon from "../../assets/technology-icon/NET.png";
import PHPIcon from "../../assets/technology-icon/PHP.png";
import ReactIcon from "../../assets/technology-icon/React.png";
import JavaScriptIcon from "../../assets/technology-icon/JavaScript.png";
import HTMLIcon from "../../assets/technology-icon/HTML5.png";
import TailwindIcon from "../../assets/technology-icon/Tailwind.png";
import MongoDBIcon from "../../assets/technology-icon/MongoDB.png";
import SQLIcon from "../../assets/technology-icon/SQL.png";
import PostgreSQLIcon from "../../assets/technology-icon/PostgresSQL.png";
import GitIcon from "../../assets/technology-icon/Git.png";
import DockerIcon from "../../assets/technology-icon/Docker.png";
import BashIcon from "../../assets/technology-icon/Bash.png";
import AzureIcon from "../../assets/technology-icon/Azure.png";

// Interface pour définir les informations de chaque technologie
interface SkillIcon {
  techIcon: string;
  title: string;
}

interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  techIcon: SkillIcon[];
}

const skillCategories: SkillCategory[] = [
  {
    icon: "⚙️",
    title: "Backend Development",
    description:
      "I design and build scalable backend architectures using microservices and API-driven solutions. I focus on optimizing performance through asynchronous processing, concurrency management, and data processing. I implement robust monitoring systems to track logs and detect anomalies. My experience extends to AI-powered automation to streamline operations and enhance system reliability, ensuring high performance across applications.",
    techIcon: [
      { techIcon: PythonIcon, title: 'Python' },
      { techIcon: FastApiIcon, title: 'FastAPI' },
      { techIcon: DjangoIcon, title: 'Django' },
      { techIcon: NETIcon, title: '.NET' },
      { techIcon: FlaskIcon, title: 'Flask' },
      { techIcon: PHPIcon, title: 'PHP' }
    ],
  },
  {
    icon: "🎨",
    title: "Frontend Integration",
    description:
      "I integrate and enhance frontend features to ensure seamless interaction with backend systems. I focus on optimizing data flow, ensuring smooth performance, and prioritizing a user-friendly experience. My goal is to create responsive, intuitive designs that adapt to different devices. I ensure all components are scalable and efficient, delivering a polished final product.",
    techIcon: [
      { techIcon: ReactIcon, title: 'React' },
      { techIcon: JavaScriptIcon, title: 'JavaScript' },
      { techIcon: HTMLIcon, title: 'HTML' },
      { techIcon: TailwindIcon, title: 'Tailwind' }
    ]
  },
  {
    icon: "🗄️",
    title: "Database Management",
    description:
      "I design and optimize databases to ensure optimal performance, scalability, and data integrity. My work includes managing schema migrations, ensuring consistency, and writing high-performance queries. I focus on efficient data management strategies and ensure seamless data backup and recovery systems. I also work on complex data models and database structures that align with business needs.",
    techIcon: [
      { techIcon: SQLIcon, title: 'SQL' },
      { techIcon: PostgreSQLIcon, title: 'PostgreSQL' },
      { techIcon: MongoDBIcon, title: 'MongoDB' }
    ]
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps",
    description:
      "I design and implement CI/CD pipelines to automate testing, integration, and deployment, ensuring fast and reliable delivery in both cloud environments and on-site infrastructures. I automate workflows, manage version control, and focus on reducing manual tasks to ensure consistent and efficient environments. My approach ensures smooth deployments and operational continuity across various environments, optimizing cloud and on-site operations.",
    techIcon: [
      { techIcon: GitIcon, title: 'Git' },
      { techIcon: DockerIcon, title: 'Docker' },
      { techIcon: BashIcon, title: 'Bash' },
      { techIcon: AzureIcon, title: 'Azure' }
    ]
  },
];


const SkillCard: React.FC<SkillCategory> = ({ icon, title, description, techIcon }) => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-xl shadow-md border border-gray-700 transition-transform transform flex flex-col justify-between min-h-[300px]">
      <h3 className="text-xl font-semibold flex items-center justify-center">
        <span className="font-mono text-2xl mr-3">{icon}</span> {title}
      </h3>
      <p className="font-mono text-sm text-white mt-4">{description}</p>
      <div className="flex flex-wrap justify-center gap-8 mt-4">
        {techIcon.map((tech, index) => (
          <div key={index} className="flex flex-col items-center justify-center">
            <img src={tech.techIcon} alt={tech.title} className="w-15 h-15 mb-2" />
            <span className="font-mono text-white">{tech.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};



const SkillsGrid: React.FC = () => {
  return (
    <div className="font-mono text-white grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 bg-gray-900 min-h-screen">
      {skillCategories.map((skill, index) => (
        <SkillCard key={index} {...skill} />
      ))}
    </div>
  );
};

export default SkillsGrid;
