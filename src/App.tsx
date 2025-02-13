import { useState } from "react";
import "./App.css";
import HeroSection from "./components/section/HeroSection";
import NavBar from "./components/Navbar";
import BackgroundVideo from "./components/BackgroundVideo";
import SkillSection from "./components/section/SkillSection";
import ExperienceList from "./components/section/ExperienceSectio";
import Contact from "./components/section/Contact";
import ArrowScroll from "./components/ArrowScroll"; // Flèche dynamique

function App() {
  return (
    <div className="flex w-screen flex-col">
      <div className=""></div>
      <NavBar />
      <div className="flex-1 bg-black/80">
        <BackgroundVideo />

        <section id="whoami" className="my-50 mt-50 relative">
          <HeroSection />
        </section>

        <section id="skills" className="my-50 mt-20 relative">
          <SkillSection />
        </section>

        <section id="experiences" className="my-50 relative">
          <ExperienceList />
        </section>

        <section id="contact" className="pt-20 relative">
          <Contact />
        </section>
      </div>

      <ArrowScroll /> {/* Unique flèche dynamique */}
    </div>
  );
}

export default App;
