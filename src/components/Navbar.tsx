import React, { useState } from "react";
import { Link } from "react-scroll"; 
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import BuildIcon from '@mui/icons-material/Build';
import MailIcon from '@mui/icons-material/Mail';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';


export const AcmeLogo: React.FC = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

interface MenuItem {
  name: string;
  icon: React.ReactNode;
  to: string;
}

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems: MenuItem[] = [
    { name: "Whoami", icon: <HomeIcon />, to: "whoami" },
    { name: "Skills", icon: <CodeIcon />, to: "skills" },
    { name: "Experiences", icon: <WorkHistoryIcon />, to: "experiences" },
    //{ name: "Projects", icon: <BuildIcon />, to: "projects" },
    { name: "Contact", icon: <MailIcon />, to: "contact" },
  ];

  return (
    <div className="w-full bg-gray-900 text-white fixed top-0 left-0 z-10">
      <div className="flex justify-between items-center p-4 max-w-screen-xl mx-auto">
        <div className="flex items-center gap-2">
          <AcmeLogo />
          <p className="font-bold font-mono text-inherit">My Portfolio</p>
        </div>
        <div className="lg:hidden flex items-center">
          <button
            className="text-white text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
        <div className="hidden lg:flex gap-6 justify-center w-full">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              smooth={true}
              duration={500} 
              spy={true} 
              offset={-100} 
              className="font-mono flex items-center gap-2 p-4 text-white text-xl hover:bg-gray-700 rounded cursor-pointer"
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden flex flex-col items-center p-4 bg-gray-800 absolute top-16 left-0 right-0">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              smooth={true}
              duration={500}
              spy={true}
              offset={-50}
              className="font-mono flex items-center gap-2 p-4 text-white text-xl hover:bg-gray-700 rounded cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavBar;
