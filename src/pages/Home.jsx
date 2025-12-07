import React from "react";
import photo from "../assets/photo.png";
import resume from "../assets/resume.pdf";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <div className="bg-black flex flex-col items-center justify-center mt-20 max-w-3xl mx-auto">
      <img
        src={photo}
        alt="avatar"
        className="h-[200px] w-[200px] mt-24 mb-6 rounded-full bg-gradient-to-br from-[#FF8660] to-[#8000FF]"
      />
      <p className="text-center font-extrabold text-3xl text-white mb-4">
        Hello, I'm{" "}
        <span className="bg-gradient-to-b from-[#FF8660] to-[#D5491D] bg-clip-text text-transparent">
          Bhavana
        </span>
      </p>
      <p className="text-center font-semibold text-3xl text-white">
        MERN Stack Developer
      </p>
      <div className="text-center text-gray-400 max-w-xl my-14 text-sm px-6">
        I am a full-stack developer with a strong foundation in building
        responsive, user-centric web applications. I specialize in creating
        clean interfaces supported by efficient backend logic and modern
        development practices. I focus on writing maintainable code, optimizing
        performance, and delivering seamless user experiences.
      </div>
      <div className="flex gap-4 mb-14">
        <a href="#contact">
          <button className="bg-white text-black px-6 py-3 rounded-full font-semibold shadow hover:scale-105 transition">
            Get In Touch
          </button>
        </a>

        <a href={resume} target="_blank">
          <button className="text-white border border-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
            Download CV
          </button>
        </a>
      </div>
      <div className="font-extrabold text-3xl bg-gradient-to-b from-[#FF8660] to-[#D5491D] bg-clip-text text-transparent text-center">
        SKILLS
      </div>
      <Skills />
    </div>
  );
};

export default Home;
