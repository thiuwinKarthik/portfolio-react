import React from 'react'
import AboutLogo from '../assets/aboutLogo.png'
const About = () => {
  return (
    <div name='about1' className='flex flex-col py-16 md:py-20 md:flex-row px-10  md:px-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))]
from-[#525252]
via-[#a3a3a3]
to-[#e5e5e5] w-full h-full md:h-screen  mx-auto'> 
          <div className='w-2/3 py-9 mx-5 md:w-2/5 '>
              <img src={AboutLogo} alt="about Logo"  className='object-cover '/>
          </div>
      <div className='  flex flex-col py-[-700px] md:my-20   w-3/3 md:w-2/5 md:h-screen h-fit '>
      <div className='flex  '>
         <h1 className='text-4xl md:text-5xl font-title  text-blue-900 font-bold border-b-4 pb-2 border-[#36393b] '>ABOUT</h1>
         </div>
         <p className='text-2xl  md:text-3xl my-10'>"Hi, I'm Thiruwin Karthik, a skilled frontend developer with a passion for building responsive, user-friendly interfaces. With expertise in HTML, CSS, JavaScript, and modern frameworks, I deliver high-quality solutions that exceed expectations. I'm driven by curiosity, creativity, and a love for staying up-to-date with industry trends. Let's collaborate and bring your vision to life!".</p>
      </div>
      
    </div>
  )
}

export default About
