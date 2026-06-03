import React from "react";
import ecommerce from "../assets/e-commerce.png";
import lms from "../assets/lms.png";
import calendar from "../assets/calendar.png";
import healthgpt from "../assets/healthgpt.png"
import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";

const projects = [
  {
    title: "E-Commerce",
    image: ecommerce,
    description:
      "A full-stack shopping platform with product listings, cart management, user authentication, and secure checkout flow.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    code: "https://github.com/BhavanaHadagal/E-Commerce",
    demo: "https://e-commerce-frontend-six-kappa.vercel.app/",
  },
  {
    title: "LMS",
    image: lms,
    description:
      "A Learning Management System for course creation, student enrollment, progress tracking, and content delivery.",
    tech: ["React", "Node.js", "MongoDB", "JWT", "Express"],
    code: "https://github.com/BhavanaHadagal/LMS",
    demo: "https://lms-frontend-ten-gilt.vercel.app/",
  },
  {
    title: "HealthGPT",
    image: healthgpt,
    description:
      "An AI-powered multilingual healthcare assistant that provides symptom guidance, voice-based interaction, medicine reminders, and healthcare support in English, Hindi, and Kannada.",
    tech: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Gemini AI", "Tailwind CSS", "Web Speech API"],
    code: "https://github.com/BhavanaHadagal/HEALTHGPT",
    demo: "https://healthgpt-frontend.vercel.app/",
  },
  {
    title: "Calendar",
    image: calendar,
    description:
      "An interactive calendar app to create, manage, and track events with a clean monthly and weekly view.",
    tech: ["React", "JavaScript", "CSS"],
    code: "https://github.com/BhavanaHadagal/CALENDAR",
    demo: "https://calendar-liard.vercel.app/",
  },

];

const Projects = () => {
  return (
    <div className="mt-16 px-6 pb-16">
      {/* Section header */}
      <div className="text-center mb-12">
        <h2 className="font-extrabold text-3xl bg-gradient-to-b from-[#FF8660] to-[#D5491D] bg-clip-text text-transparent">
          PROJECTS
        </h2>
        <p className="text-gray-400 text-sm mt-2 tracking-wide">
          A selection of things I&apos;ve built
        </p>
        <div className="mx-auto mt-4 h-[2px] w-16 rounded-full bg-gradient-to-r from-[#FF8660] to-[#D5491D]" />
      </div>

      {/* Project grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="group relative flex flex-col rounded-2xl overflow-hidden border border-white/5 bg-[#141414] hover:border-[#FF8660]/40 hover:shadow-[0_0_30px_rgba(255,134,96,0.08)] transition-all duration-300"
          >
            {/* Image with overlay */}
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Hover overlay with description */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center px-5">
                <p className="text-gray-200 text-sm text-center leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Card body */}
            <div className="flex flex-col gap-4 p-5 flex-1">
              {/* Title */}
              <h3 className="text-white font-semibold text-base tracking-wide">
                {project.title}
              </h3>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action buttons — pushed to bottom */}
              <div className="flex gap-3 mt-auto pt-2">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-1.5 rounded-xl border border-white/20 text-sm text-gray-300 hover:border-[#FF8660]/60 hover:text-[#FF8660] transition-colors duration-200"
                >
                  <CiGlobe size={16} />
                  <span>Live Demo</span>
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-1.5 rounded-xl bg-white text-black text-sm font-medium hover:bg-gray-100 transition-colors duration-200"
                >
                  <FaGithub size={16} />
                  <span>Code</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
