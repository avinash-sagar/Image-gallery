import React from 'react'

export default function Navbar() {
  return (
    <div className='shadow-xl w-full fixed top-0 left-0 '>
      <div className='md:flex items-center justify-between bg-black text-white font-sans  shadow-2xl '>
       <div className='text-2xl py-4 md:px10 font-bold px-7 cursor-pointer'>
                Travell-Blogs
       </div>
        
            <ul className='md:flex md:items-center mr-40 text-xl '>
                <li className='mx-7 hover:underline hover:text-blue-500  hover:font-bold hover:-translate-y-0.5 text-center '><a href="/">Home</a></li>
                <li className='mx-7 hover:underline hover:text-blue-500 hover:font-bold hover:-translate-y-0.5 text-center'><a href="/">Flights</a></li>
                <li className='mx-7 hover:underline hover:text-blue-500 hover:font-bold hover:-translate-y-0.5 text-center'><a href="/">Bus</a></li>
                <li className='mx-7 hover:underline hover:text-blue-500 hover:font-bold hover:-translate-y-0.5 text-center'><a href="/">About Us</a></li>
            </ul>
           
        
        
      </div>
     
    </div>
  )
}
