import React from "react";
import ecommerce from "../assets/e-commerce.png";
import lms from "../assets/lms.png";
import calendar from "../assets/calendar.png";
import portfolio from "../assets/portfolio.png"
import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";

const projects = [
  {
    title: "E-COMMERCE",
    image: ecommerce,
    code: "https://github.com/BhavanaHadagal/E-Commerce",
    demo: "https://e-commerce-frontend-six-kappa.vercel.app/",
  },
  {
    title: "LMS",
    image: lms,
    code: "https://github.com/BhavanaHadagal/LMS",
    demo: "https://lms-frontend-ten-gilt.vercel.app/",
  },
  {
    title: "CALENDAR",
    image: calendar,
    code: "https://github.com/BhavanaHadagal/CALENDAR",
    demo: "https://calendar-liard.vercel.app/",
  },
  {
    title: "PORTFOLIO",
    image: portfolio,
    code: "#",
    demo: "https://github.com/BhavanaHadagal/New-Portfolio",
  },
];

const Projects = () => {
  return (
    <div className="mt-16 px-6">
      <h2 className="font-extrabold text-3xl bg-gradient-to-b from-[#FF8660] to-[#D5491D] bg-clip-text text-transparent text-center">
        PROJECTS
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-3xl mx-auto mt-10">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="rounded-xl overflow-hidden hover:scale-[1.02] transition duration-300 shadow-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-5 flex justify-between items-center bg-[#2A2A2A] text-gray-300">
              <h3 className="text-base font-semibold">{project.title}</h3>

              <div className="flex gap-3">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1 rounded-xl border border-gray-200 text-sm font-normal text-gray-200 hover:bg-white/10 transition"
                >
                  <CiGlobe size={18} />
                  <span>Visit</span>
                </a>

                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1 rounded-xl bg-white text-black text-sm font-normal hover:bg-gray-200 transition"
                >
                  <FaGithub size={18} />
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
