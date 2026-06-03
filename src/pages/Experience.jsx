import React from "react";
import kodnest from "../assets/kodnest.png";

const Experience = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center px-6 py-16">
      {/* Section header */}
      <div className="text-center mb-12">
        <h2 className="font-extrabold text-3xl bg-gradient-to-b from-[#FF8660] to-[#D5491D] bg-clip-text text-transparent">
          EXPERIENCE
        </h2>
        <p className="text-gray-400 text-sm mt-2 tracking-wide">
          Where I&apos;ve worked and what I&apos;ve built
        </p>
        <div className="mx-auto mt-4 h-[2px] w-16 rounded-full bg-gradient-to-r from-[#FF8660] to-[#D5491D]" />
      </div>

      {/* Experience card */}
      <div className="max-w-3xl mx-auto w-full">
        <div className="rounded-2xl border border-white/5 bg-[#141414] p-6 hover:border-[#FF8660]/30 transition-all duration-300">
          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
            <div className="flex items-center gap-4">
              <img
                src={kodnest}
                alt="Kodnest"
                className="h-12 w-12 rounded-lg object-contain bg-white/5 p-1"
              />
              <div>
                <h3 className="text-white font-semibold text-base">
                  Software Development Intern
                </h3>
                <p className="text-[#FF8660] text-sm font-medium">Kodnest</p>
              </div>
            </div>
            <span className="text-xs text-gray-500 bg-white/5 border border-white/10 px-3 py-1 rounded-full self-start sm:self-auto">
              June 2025 – Present
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed">
            Gained hands-on experience in Java, MySQL, and frontend technologies
            while contributing to real-world development tasks. Built
            user-friendly interfaces, integrated backend logic, and improved
            application performance using clean and efficient coding practices.
            Strengthened technical skills, problem-solving abilities, and
            full-stack development workflows.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-5">
            {["Java", "MySQL", "React", "Node.js", "Full-Stack"].map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;