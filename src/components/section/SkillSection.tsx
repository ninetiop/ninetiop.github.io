import { Card, CardBody, CardFooter, Image } from "@heroui/react";
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
import CodeIcon from '@mui/icons-material/Code';
import React from "react";
import SkillsGrid from "./SkillsGrid";

const SkillSection: React.FC = () => {
  const skillCategories = [
    {
      category: "Backend 🚀",
      skills: [
        { title: "Python", img: PythonIcon },
        { title: "FastAPI", img: FastApiIcon },
        { title: "Django", img: DjangoIcon },
        { title: ".NET", img: NETIcon },
        { title: "Flask", img: FlaskIcon },
        { title: "PHP", img: PHPIcon },
      ],
      gridColumns: "grid-cols-6",
    },
    {
      category: "Frontend 💻",
      skills: [
        { title: "React", img: ReactIcon },
        { title: "JavaScript", img: JavaScriptIcon },
        { title: "HTML5", img: HTMLIcon },
        { title: "Tailwind", img: TailwindIcon },
      ],
      gridColumns: "grid-cols-4",
    },
    {
      category: "Databases 🗄️",
      skills: [
        { title: "SQL", img: SQLIcon },
        { title: "PostgreSQL", img: PostgreSQLIcon },
        { title: "MongoDB", img: MongoDBIcon },
      ],
      gridColumns: "grid-cols-3",
    },
    {
      category: "DevOps & Cloud ☁️",
      skills: [
        { title: "Git", img: GitIcon },
        { title: "Docker", img: DockerIcon },
        { title: "Bash Scripting", img: BashIcon },
        { title: "Azure", img: AzureIcon },
      ],
      gridColumns: "grid-cols-4",
    },
  ];

  return (
    <section className="container mx-auto px-4 mt-20">
      <h1 className="font-mono text-3xl font-bold text-center mb-6 text-white">
        <CodeIcon /> Skills
      </h1>
      <SkillsGrid />  
    </section>
  );
};

export default SkillSection;