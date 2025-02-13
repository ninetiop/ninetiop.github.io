import React from "react";
import { IconButton } from "@mui/material";
import { GitHub, LinkedIn, Mail } from "@mui/icons-material";
import MailIcon from '@mui/icons-material/Mail';

const Contact: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto text-center">
        <h4 className="font-mono text-2xl font-bold mb-4"><MailIcon></MailIcon> Contact</h4>
        <p className="font-mono text-gray-400 max-w-lg mx-auto mb-6 text-xm">
          I’m open to new opportunities to apply my expertise to challenging projects.  
          Feel free to reach out!
        </p>
        <div className="flex justify-center gap-12 mb-6">
          <div className="flex flex-col items-center">
            <IconButton
              component="a"
              href="https://github.com/ninetiop"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub fontSize="large" className="font-mono text-white" />
            </IconButton>
            <a
              href="https://github.com/ninetiop"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 font-mono text-sm hover:text-white transition"
            >
              GitHub
            </a>
          </div>
          <div className="flex flex-col items-center">
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/lpoitevin1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn fontSize="large" className="text-blue-600" />
            </IconButton>
            <a
              href="https://www.linkedin.com/in/lpoitevin1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 font-mono text-sm hover:text-white transition"
            >
              LinkedIn
            </a>
          </div>
          <div className="flex flex-col items-center">
            <IconButton component="a" href="mailto:poitevin.louis@proton.me">
              <Mail fontSize="large" className="text-red-500" />
            </IconButton>
            <a
              href="mailto:poitevin.louis@proton.me"
              className="text-gray-400 font-mono text-sm hover:text-white transition"
            >
              poitevin.louis@proton.me
            </a>
          </div>
        </div>
        <p className="font-mono text-gray-500 text-sm">
          Coded with ❤️ by <span className="font-semibold text-white">Poitevin Louis</span> using React.  
        </p>
        <p className="font-mono text-gray-500 text-sm">
          Project code is <a href="https://github.com/ninetiop" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
            open-source
          </a>. Feel free to fork and make your own version.
        </p>
      </div>
    </footer>
  );
};

export default Contact;
