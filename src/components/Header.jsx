import React from 'react'
import Hero from '../assets/profileLogo.jpg'
import { Link } from 'react-scroll'
const Header = () => {
  return (
    <div name='home1' className='flex flex-col md:flex-row justify-around items-center bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))]
from-[#525252]
via-[#a3a3a3]
to-[#e5e5e5] w-full h-full md:h-screen py-20 mx-auto'>
      <div className='flex flex-col top-0  mx-auto w-2/3 md:w-2/5'>
          <h1 className='text-5xl font-logo text-gray-900 my-3 leading-tight mx-[-30px] sm:text-7xl font-bold '>I'm  a  <br/><span className='text-blue-900'>Front-end</span> Developer</h1>
          <p className='text-gray-800 py-3 text-3xl sm:5xl '>Hi, I’m Thiruwin Karthik, a passionate frontend developer with 1+ years of experience building modern, responsive, and user-friendly web applications.</p>
          <div className='py-3 md:py-10'>
          <Link to='contact1' smooth={true} duration={500}>
          <button  class="group relative border-hidden overflow-hidden rounded bg-gray-600 px-8 py-4 text-white transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-gray-600 hover:to-gray-400 hover:ring-2 hover:ring-gray-600 hover:ring-offset-2">
    <span class="ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-700 group-hover:-translate-x-40"></span>
    <span class="relative">Contact Me</span>
</button></Link>
          </div>
      </div>
      <div className='w-2/3 py-9 mx-5 md:w-2/5'>
          <img className='object-cover  rounded-full'src={Hero} alt='profile'/>
      </div>

    </div>
  )
}

export default Header
