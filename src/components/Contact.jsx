import React from 'react'

const Contact = () => {
  return (
    <div name='contact1' className='bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))]
from-[#525252]
via-[#a3a3a3]
to-[#e5e5e5] w-full h-full '>
      <div>
        <div className='pt-20 '>
          <span className='flex'>
          <h1 className='text-4xl md:text-5xl font-title  text-blue-900 font-bold border-b-4 pb-2 border-[#36393b] '>Contact</h1></span>
          <p className='text-2xl  md:text-3xl my-10'>Fill And Submit the form to get in Touch with me</p>
        </div>
        <div className='flex flex-col p-10 justify-center items-center w-full'>
          <form action="https://getform.io/f/agddoreb" method='POST' className='flex flex-col bg-[conic-gradient(at_left,_var(--tw-gradient-stops))]
from-[#27272a]
via-[#52525b]
to-[#a1a1aa] p-14 rounded-md w-full sm:1/2'>
            <input name='name' type="text" placeholder='Enter Your Name'  className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-5' /> 
            <input name='email' type="text" placeholder='Enter Your Email'  className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-5' />
            <textarea  placeholder='Enter your Message' name="message" rows='10' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-5'></textarea>
            <span name='ext' className='flex my-12 justify-center'><button type='submit' class="group relative border-hidden overflow-hidden rounded bg-gray-600 px-8 py-4 text-white transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-gray-600 hover:to-gray-400 hover:ring-2 hover:ring-gray-600 hover:ring-offset-2 flex items-center">
    <span name='ex2' class="ease absolute right-0 -mt-12 h-32 w-8! translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-700 group-hover:-translate-x-40 "></span>Submit</button></span>
          </form>
          
        </div>
      </div>
      
    </div>
  )
}

export default Contact
