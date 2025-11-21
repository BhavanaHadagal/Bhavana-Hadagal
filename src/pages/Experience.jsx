import React from 'react'
import kodnest from '../assets/kodnest.png'

const Experience = () => {
  return (
    <div className='mt-24 mb-20 px-6'>
      <p className='font-extrabold text-3xl bg-gradient-to-b from-[#5BADFF] to-[#1373D1] bg-clip-text text-transparent text-center mb-10'>EXPERIENCE</p>
      <div className="max-w-3xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-4">
          <div className="flex items-center gap-3">
            <img src={kodnest} alt="" className='h-14 w-14' />
            <h2 className="text-xl md:text-2xl text-white font-semibold">
              Software Development Intern at Kodnest
            </h2>
          </div>
          <p className="text-white/70 text-sm sm:text-base mt-2 sm:mt-0">
            June 2025 – Present
          </p>
        </div>
        <p className="text-white/70 leading-relaxed text-sm">
          Intern at KodNest, where I gained hands-on experience in Java, MySQL, and Frontend technologies while contributing to real-world development tasks.
Built user-friendly interfaces, integrated backend logic, and improved application performance using clean and efficient coding practices.
This internship strengthened my technical skills, problem-solving abilities, and overall understanding of full-stack development workflows.
        </p>
      </div>
    </div>
  )
}

export default Experience