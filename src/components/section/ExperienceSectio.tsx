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
    description: "Prysmian Group is a global leader in the energy and telecom cables and systems industry, specializing in advanced fiber-optic monitoring solutions for industrial and infrastructure applications.",
    responsibilities: [
      "Python, Bash Linux, JavaScript: Integrated network interface aggregation in the monitoring system to enable load balancing across network interfaces, boosting network performance, fault tolerance, and high availability.",
      "Python FastAPI, Numpy: Designed and implemented software modules for an embedded system monitoring infrastructure using fiber-optic cables, enhancing data accuracy and optimizing workflows.",
      "PostgreSQL, SQL: Administered schema updates and data migration scripts for a relational database, ensuring smooth transitions across software releases.",
      "GitHub Actions, Unittest: Enhanced CI/CD processes for production environments with integration testing, system image builds, and Debian package creation, improving deployment resilience.",
      "L2/L3 Support: Assisted customers with configuration issues on embedded systems, provided software support to field engineers, and helped production teams with embedded Linux software installation.",
      "Delphi: Designed and developed a Windows GUI solution for remotely configuring sensor/measurement sets, enabling seamless configuration management within the embedded fiber-optic monitoring system.",
      
    ]
  },
  {
    id: 2,
    title: "Internship AI Engineer",
    company: "ST37",
    duration: "April 2021 - October 2021, Pau, France",
    description: "ST37 is a company specializing in AI-based solutions for the sports industry, offering real-time video motion analysis for performance tracking and improvement.",
    responsibilities: [
      "Python, Django, FastAPI: Developed a microservices architecture for real-time AI video analysis, generating reports and statistics for users within football clubs",
      "Microsoft Azure: Contributed to the deployment of solutions in the cloud environment, ensuring scalability and performance of the AI-driven video analysis platform",
      "C++, Bash Linux: Integrated AI player tracking algorithms into robotic camera systems under Linux, generating real-time data for further processing"
    ]
  },
  {
    id: 3,
    title: "Internship Full Stack Developer",
    company: "Glabs",
    duration: "May 2018 - August 2018, Brignais, France",
    description: "Glabs is a digital marketing agency that specializes in web development and e-commerce solutions.",
    responsibilities: [
      "PHP: Developed automation applications for online quote generation, optimizing product management and sales processes for various businesses.",
      "PostgreSQL, SQL: Administered relational databases for storing and managing e-commerce product information, ensuring data integrity and efficient retrieval for product listings.",
      "JavaScript, HTML5, TailwindCSS: Developed tailored web applications to enhance the visibility and business presence of regional stakeholders."
    ]
  }
];

const highlightTechnologies = (text: string) => {
  const techs = [
    "Python", "L2/L3 Support", "FastAPI", "React", "C++", "Bash Linux", "PostgreSQL", "SQL", 
    "Delphi", "GitHub Actions", "Unittest", "Django", "Microsoft Azure", "Numpy", "Pandas", 
    "Matplotlib", "PHP", "JavaScript", "HTML5", "TailwindCSS"
  ];
  
  // Function to escape special characters in the technology names for regex
  const escapeRegExp = (str: string) => {
    return str.replace(/[.*+?^=!:${}()|\[\]\/\\]/g, '\\$&'); // Escape special characters
  };

  let updatedText = text;
  
  techs.forEach((tech) => {
    const escapedTech = escapeRegExp(tech); // Escape the technology name
    const regex = new RegExp(`(${escapedTech})`, "g"); // Create a global regex
    updatedText = updatedText.replace(regex, "<strong>$1</strong>"); // Replace the match with highlighted text
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
