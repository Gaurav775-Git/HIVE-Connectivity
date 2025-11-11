import { Play, ArrowRight } from "lucide-react";
import WorkflowMockup from "./WorkflowMockup";
import BlurText from "./BlurText"; 
import LetterGlitch from "./LetterGlitch";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const trustLogos = ["GitHub", "GitLab", "Docker", "AWS", "Slack"];
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="animate-fade-in">
          <div className="text-center mt-20">
      <BlurText
        text="The Hive: where code collaborates and automates itself."
        delay={150}
        className="text-5xl font-extrabold"
      />
    </div>
          <p className="hero-subtitle">
            Compute without limits.
          </p>
          
          <div className="hero-actions ">
            <button 
            onClick={() => navigate("/rent")}
            className="btn-primary flex items-center gap-2 rounded-full">
              Activate Node
              <ArrowRight size={18} />
            </button>

            <button 
              onClick={() => navigate("/dashboard")}
              className="btn-secondary flex items-center gap-2 rounded-full">
              <Play size={18} />
             Connect Your GPU
            </button>
          </div>

          <div className="mt-12">
            <p className="text-sm text-gray-600 mb-4">Trusted by developers at</p>
            <div className="flex flex-wrap items-center gap-6">
              {trustLogos.map((logo) => (
                <span key={logo} className="text-gray-400 font-medium text-sm">
                  {logo}
                </span>
              ))}
            </div>
          </div>  
        </div>

        <div className="relative w-full h-[400px]">
      <LetterGlitch
        glitchColors={["#61b3dc", "#61dca3", "#2b4539"]}
        glitchSpeed={80}
        smooth={true}
        outerVignette={true}
        centerVignette={false}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold"></h1>
      </div>
    </div>
      </div>
    </section>
  );
};

export default Hero;
