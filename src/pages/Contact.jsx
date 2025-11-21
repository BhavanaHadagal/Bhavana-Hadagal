import React from 'react'
import {FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { RiTwitterXFill } from "react-icons/ri";


const Contact = () => {
  return (
    <div className="w-full bg-customDark py-16 px-6 flex justify-center">
      <div className="max-w-3xl w-full text-gray-300 ">
        <h2 className="text-lg font-semibold text-white mb-4">Contact</h2>

        <p className="text-sm leading-relaxed mb-6">
          Full Stack Developer who loves building clean, responsive apps and working across both front-end and back-end technologies. Enjoys solving problems, learning new tools, and creating smooth, user-friendly experiences.
        </p>

        <div className="flex flex-col gap-3 text-white text-sm mb-6">
          <div className='flex gap-3'>
            <MdEmail size={20} />
          <a href="mailto:bhavanahadagal@gmail.com" target='_blank' className="hover:underline">
            bhavanahadagal@gmail.com
          </a>
          </div>
          <div className='flex gap-3'>
            <IoCallOutline size={20}/> 
            <p>8792076718</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <a href="https://github.com/BhavanaHadagal" target='_blank' >
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/bhavana-hadagal-999010399/" target='_blank' >
            <FaLinkedin size={22} />
          </a>
          <a href="https://x.com/bhavana3421" target='_blank' >
            <RiTwitterXFill size={22} />
          </a>
        </div>

      </div>
    </div>
  )
}

export default Contact