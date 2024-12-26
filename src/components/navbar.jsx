import  {useState}  from "react";
import { FaBars, FaTimes} from "react-icons/fa";
import { Link } from "react-scroll"


const Navbar = () => {
    const[nav,setNav]=useState(false)
    const links=[
        { 
            id:1,
            title:"home1",
            name:"home",
        },
        { 
            id:2,
            title:"about1",
            name:"about"
        },
        { 
            id:3,
            title:"experience1",
            name:"experience"
        },
        { 
           id:4,
           title:"contact1",
           name:"contact"
          
        }
        
    ]
    
   
    
  return (
    
    <div className='flex z-20 justify-between items-center px-10 text-white w-full h-20 bg-[conic-gradient(at_left,_var(--tw-gradient-stops))]

from-[#27272a]
via-[#52525b]
to-[#a1a1aa]  fixed'>
      <div>
        <h1 className='font-logo text-5xl tracking-wider'>THIRU</h1>
      </div>
      <div >
         <ul className='hidden md:flex  items-center  '>
            {links.map(({ id, title,name })=>(
              <Link to={title} smooth={true} duration={500}> <li key={id} className=' text-lg mx-10 capitalize text-white cursor-pointer hover:scale-105 hover:text-gray-400 hover:border-b-[1px] hover:border-white'>{name}</li></Link>
            )
            )}
         </ul>
      </div>
      <div onClick={()=>setNav(!nav)} className="flex cursor-pointer md:hidden" >
     {nav?<FaTimes size={30}/>:<FaBars size={30}/>}
      </div>
      
      <ul className={` flex flex-col justify-center items-center absolute top-20  ${nav?'right-0':'right-[-800px]'}  duration-500    w-full h-screen bg-[conic-gradient(at_left,_var(--tw-gradient-stops))]

from-[#27272a]
via-[#52525b]
to-[#a1a1aa] md:hidden `}> 
      {links.map(({ id, title,name })=>(
        <Link to={title} smooth={true} duration={500} >
               <li onClick={()=>setNav(!nav)}key={id} className=' text-3xl mx-10 capitalize text-white cursor-pointer hover:scale-105 hover:text-gray-400 hover:border-b-[1px] hover:border-white my-10'>
                {name}
                </li></Link>
            )
            )}
      </ul>
    </div>
    
        
        
    
    
    
    
  )
}

export default Navbar
