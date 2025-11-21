import React from "react";
import {
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { GrMysql } from "react-icons/gr";
import { FaHtml5, FaAws, FaGithub, FaReact  } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { BiLayout } from "react-icons/bi";


const frontend = [
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <RiNextjsLine /> },
  { name: "HTML/CSS", icon: <FaHtml5 /> },
  { name: "JavaScript", icon: <IoLogoJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
];

const backend = [
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "RESTful APIs", icon: <BiLayout /> },
];

const tools = [
  { name: "Git", icon: <FaGithub /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "MySQL", icon: <GrMysql /> },
];


const SkillSection = ({ title, skills }) => (
  <div className="mb-10 border border-gray-600 p-4 rounded-xl px-6">
    <h2 className="text-base sm:text-lg font-semibold text-[#8000FF] mb-4">
      {title}
    </h2>
    <div className="flex flex-wrap gap-2 sm:gap-3">
      {skills.map((tech) => (
        <div
          key={tech.name}
          className="
            flex items-center
            border border-gray-600 
            rounded-md px-2 sm:px-3 py-2 space-x-2
            text-sm font-medium text-white 
            bg-gradient-to-r from-[#8000FF] to-[#FF8660]  
          "
        >
          <div className="text-gray-300 text-sm sm:text-lg">{tech.icon}</div>
          <span>{tech.name}</span>
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section className="pt-8 px-6">
      <SkillSection title="Frontend" skills={frontend} />
      <SkillSection title="Backend" skills={backend} />
      <SkillSection title="Tools" skills={tools} />
    </section>
  );
};

export default Skills;
