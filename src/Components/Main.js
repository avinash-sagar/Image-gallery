import React from 'react'
import photo from '../photo2.jpg'
import photo1 from '../photo1.jpg'
import photo3 from '../photo3.jpg'
export default function Main() {
  return (
    <div className='bg-purple-100 '>
      <div className="container mt-40 ">
     <h1 className='text-2xl text-green-700 font-bold text-center'>Card Blogs</h1>
    <hr class="w-1/5 mx-auto"/>
    <div class="grid justify-items-center md:px-1 w-fill grid-cols-1 lg:grid-cols-3 lg:gap-3 lg:justify-items-center">
      <div class="py-10">
       
        <div class="rounded overflow-hidden shadow-2xl max-w-sm cursor-pointer hover:translate-y-1">
          <img src={photo} alt="laptop" class="w-full" />
          <h2 class="pt-4 text-center font-bold text-lg">Office</h2>
          <p class="mb-4 text-gray-500 pl-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, cum! feeka nosa ua !</p>
          <div class="grid grid-flow-col gap-5 pb-2 px-4">
            <span class="bg-gray-300 text-center rounded-xl">#Photography</span>
            <span class="bg-gray-300 text-center rounded-xl">#Travell</span>
            <span class="bg-gray-300 text-center rounded-xl">#Blogs</span>
          </div>

        </div>
      </div>

      <div class="py-10">
        
        <div class="rounded overflow-hidden shadow-2xl max-w-sm cursor-pointer hover:translate-y-1">
          <img src={photo1} alt="laptop" class="w-full" />
          <h2 class="pt-4 text-center font-bold text-lg">Mountains</h2>
          <p class="mb-4 pl-3 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, cum! feeka nosa ua !</p>
          <div class="grid grid-flow-col gap-5 pb-2 px-4">
            <span class="bg-gray-300 text-center rounded-xl">#Photography</span>
            <span class="bg-gray-300 text-center rounded-xl">#Travell</span>
            <span class="bg-gray-300 text-center rounded-xl">#Blogs</span>
          </div>

        </div>
      </div>

      <div class="py-10">
        
        <div class="rounded overflow-hidden shadow-2xl max-w-sm cursor-pointer hover:translate-y-1">
          <img src={photo3} alt="laptop" class="w-full" />
          <h2 class="pt-4 text-center font-bold text-lg">Animation</h2>
          <p class="mb-4 text-gray-500 pl-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, cum! feeka nosa ua !</p>
          <div class="grid grid-flow-col gap-5 pb-2 px-4">
            <span class="bg-gray-300 text-center rounded-xl">#Photography</span>
            <span class="bg-gray-300 text-center rounded-xl">#Travell</span>
            <span class="bg-gray-300 text-center rounded-xl">#Blogs</span>
          </div>

        </div>
      </div>
    </div>
    

      </div>
    </div>
  )
}
