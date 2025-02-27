import CodeIcon from '@mui/icons-material/Code';
import React from "react";
import SkillsGrid from "./SkillsGrid";

const SkillSection: React.FC = () => {
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