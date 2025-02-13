import React from "react";
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';

interface Experience {
  id: number;
  title: string;
  company: string;
  duration: string;
  description: string;
  responsibilities: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Prysmian Group (formerly Omnisens)",
    duration: "May 2022 - July 2024, Morges, Switzerland",
    description: "Prysmian Group is a global leader in the energy and telecom cables and systems industry, specializing in advanced fiber-optic monitoring solutions for industrial and infrastructure applications",
    responsibilities: [
      "Developed and maintained microservices for an embedded fiber-optic cable monitoring platform, improving data precision and optimizing workflows (Python FastAPI, Numpy)",
      "Implemented NIC teaming in the frontend and automated system setup in the backend to boost network performance, fault tolerance, and high availability (React, Bash  Linux)",
      "Administered schema updates and data migration scripts for a relational database, ensuring smooth transitions across software releases (PostgreSQL, SQL)",
      "Developed and enhanced a Windows solution for remotely configuring sensor/measurement sets, enabling seamless configuration management in the embedded fiber-optic monitoring system (.NET)",
      "Enhanced CI/CD processes for production environments with integration testing, system image builds, and Debian package creation, improving deployment resilience (GitHub Actions, Unittest)",
      "Performed maintenance and debugging for embedded systems, assisting customers with issue resolution and ensuring system reliability",
    ],
  },
  {
    id: 2,
    title: "AI Engineer",
    company: "ST37",
    duration: "April 2021 - October 2021, Pau, France",
    description: "ST37 is a company specializing in AI-based solutions for the sports industry, offering real-time video motion analysis for performance tracking and improvement",
    responsibilities: [
      "Designed and implemented a microservices architecture to deliver AI-powered real-time video motion analysis for the soccer industry (Django)",
      "Trained CNN model for player identification on images in real-time video streams (TensorFlow, Keras)",
      "Developed a data processing workflow to collect and analyze performance metrics, visualizing player performance through spatial analysis and graphical plots (Numpy, Pandas, Matplotlib)",
    ],
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "Glabs",
    duration: "April 2018 - August 2018, Brignais, France",
    description: "Glabs is a digital marketing agency that specializes in web development and e-commerce solutions",
    responsibilities: [
      "Implemented a secure online payment system for an e-commerce platform, including product management inventory and sales processes (PHP)",
      "Administered relational databases for storing and managing e-commerce product information, ensuring data integrity and efficient retrieval for product listings (PostgreSQL/SQL)",
      "Developed tailored web applications to enhance the visibility and business presence of regional stakeholders (JavaScript, HTML5, CSS)",
    ],
  },
];


const highlightTechnologies = (text: string) => {
  const techs = ["Python", "FastAPI", "React", "Bash", "Linux", "PostgreSQL", "SQL", ".NET", "GitHub Actions", "Unittest", "Django", "TensorFlow", "Keras", "Numpy", "Pandas", "Matplotlib", "PHP", "JavaScript", "HTML5", "CSS"];
  let updatedText = text;
  
  techs.forEach((tech) => {
    const regex = new RegExp(`(${tech})`, "g");
    updatedText = updatedText.replace(regex, "<strong>$1</strong>");
  });

  return updatedText;
};

const ExperienceList: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-3xl w-full p-6">
        <h1 className="font-mono text-3xl font-bold text-center text-gray-200 mb-8"><WorkHistoryIcon></WorkHistoryIcon> Experiences</h1>

        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="relative border-l-4 border-blue-500 bg-gray-900 text-gray-200 rounded-lg p-6 mb-6 shadow-lg"
          >
            
            <h2 className="font-mono text-xl font-semibold">{exp.title}</h2>
            <h3 className="font-mono text-blue-400 font-medium">{exp.company}</h3>
            <p className="font-mono text-gray-400 text-sm">{exp.duration}</p>
            <p className="font-mono mt-2">{exp.description}</p>
            <div className="border-t border-gray-700 my-3"></div>
            <ul className="list-disc list-inside space-y-1">
              {exp.responsibilities.map((item, idx) => (
                <li key={idx} className="text-gray-300 font-mono" dangerouslySetInnerHTML={{ __html: highlightTechnologies(item) }} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceList;
