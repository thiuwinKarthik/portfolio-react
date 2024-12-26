import React from 'react'
import html1 from '../assets/html.png'
import css2 from '../assets/css.png'
import script3 from '../assets/script.png'
import tcss4 from '../assets/tcss.png'
import reactJS5 from '../assets/reactJs.png'

const Experience = () => {
  const skills=[
    {
      id:1,
      src: html1,
      title:'HTML',
      shadow:'shadow-orange-500',
    },
    {
      id:2,
      src: css2,
      title:'CSS',
      shadow:'shadow-blue-500',
    },
    {
      id:3,
      src: script3,
      title:'JAVA SCRIPT',
      shadow:'shadow-yellow-500',
    },
    {
      id:4,
      src: tcss4,
      title:'TAILWIND',
      shadow:'shadow-sky-400',
    },
    {
      id:5,
      src: reactJS5,
      title:'REACT',
      shadow:'shadow-blue-600',
    },
  ]
  return (
    <div name='experience1'className='bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))]
from-[#525252]
via-[#a3a3a3]
to-[#e5e5e5] w-full h-full '>
      <div className=' max-w-screen-lg  flex flex-col justify-center mr-20   py-10 w-full h-full p-10 pt-10 '>
        <div className='flex flex-col justify-center pt-24 '>
          
          <span className='flex'><h1 className='text-4xl md:text-5xl font-title  text-blue-900 font-bold border-b-4 pb-2 border-[#36393b] '>SKILLS</h1></span>
          <p className='text-2xl  md:text-3xl py-3'>These are the technologies I've worked :</p>
          </div>
          
        
      
      <div className='sm:mx-20 sm:my-10 grid grid-cols-1 sm:pr-20 md:grid-cols-3 md:pr-20 sm:grid-cols-2 gap-20 text-center h-full w-full  px-12 sm:px-0 '>
        {skills.map(({id, src, title, shadow  })=>(

        <div key={id} className={` bg-[conic-gradient(at_left,_var(--tw-gradient-stops))]

from-[#27272a]
via-[#52525b]
to-[#a1a1aa] text-white h-full shadow-lg hover:scale-105 duration-500  py-2 rounded-lg ${shadow}`} >

           <img src={src} alt="skills" className=' object-cover p-10  mx-auto'/>
          <p className='mb-4 '>{title}</p>

        </div>))}
        </div>

      </div>
      
    </div>
  )
}

export default Experience
