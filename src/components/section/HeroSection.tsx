import React, { useState } from "react";
import { ReactTyped } from "react-typed";
import Terminal from "../Terminal";

const HeroSection: React.FC = () => {
  const [completed, setCompleted] = useState(false);
  const heroText = `Hello world 👋🏻!<br /><br/>
    I’m a Software Engineer 💻 with a solid foundation in Computer Science 📚 
    specializing in Full Stack Development 🔧 and focusing strongly on Backend Engineering ⚙️<br /><br/>
    I leverage my analytical skills 🧠 to solve complex problems 🔍 and build scalable, high-performance applications 🚀<br/>
    <br /><br/>
    Welcome and enjoy your visit! 🌟`;

  return (
    <section className="flex justify-center items-center min-h-[600px]">
      <div className="flex flex-col justify-center items-center w-full">
        <Terminal width="50%" height="50%" className="mx-auto">
          <div className="items-center">
            <h1 className="font-mono text-sm sm:text-base font-bold text-left text-[#00FF80]">
              <span className="text-[#00FF80]">root@terminal:</span>{" "}
              <span className="text-[#3399FF]">~/portfolio$</span>{" "}
              <ReactTyped
                strings={["whoami"]}
                typeSpeed={100}
                backSpeed={30}
                startDelay={1500}
                showCursor={true}
                className="text-white typing-effect"
                onComplete={() => setCompleted(true)}
              />
            </h1>
            {completed && (
              <h1
                className="font-mono font-semibold text-white mt-4 text-sm sm:text-base md:text-lg"
                dangerouslySetInnerHTML={{ __html: heroText }}
              />
            )}
          </div>
        </Terminal>
      </div>
    </section>
  );
};

export default HeroSection;
