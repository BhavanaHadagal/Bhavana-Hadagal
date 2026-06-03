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
  <div className="mb-5 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 hover:border-[#FF8660]/25 transition-colors duration-300">
    <h2 className="text-xs font-semibold uppercase tracking-widest text-[#FF8660] mb-4">
      {title}
    </h2>
    <div className="flex flex-wrap gap-2 sm:gap-3">
      {skills.map((tech) => (
        <div
          key={tech.name}
          className="flex items-center gap-2 border border-white/10 rounded-lg px-3 py-2 text-sm font-medium text-gray-300 bg-white/5 hover:border-[#FF8660]/40 hover:text-white transition-all duration-200"
        >
          <span className="text-base text-[#FF8660]">{tech.icon}</span>
          <span>{tech.name}</span>
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section className="pt-8 px-6 pb-4">
      <SkillSection title="Frontend" skills={frontend} />
      <SkillSection title="Backend" skills={backend} />
      <SkillSection title="Tools & Databases" skills={tools} />
    </section>
  );
};

export default Skills;
