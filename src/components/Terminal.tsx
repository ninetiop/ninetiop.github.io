import React from "react";

interface TerminalProps {
  children: React.ReactNode;
  width?: string; 
  height?: string; 
  className?: string;
}

const Terminal: React.FC<TerminalProps> = ({ children, width = "60%", height = "50%" }) => {
  return (
    <div
      className="bg-gray-900/60 rounded-lg border-2 border-gray-600 p-4 overflow-auto flex flex-col"
      style={{ width, height, minHeight:"500px" }}
    >
      <div className="flex items-center space-x-2 mb-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>

      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Terminal;
