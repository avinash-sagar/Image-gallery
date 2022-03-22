import React from 'react'

const ImageCard = ({ image }) => {

  const tags = image.tags.split(',')

  return (
    <>
      <div className='max-w-sm rounded overflow-hidden hover:-translate-y-0.5 shadow-xl duration-200'>
        <img className='w-full cursor-pointer ' src={image.webformatURL} alt="" />
        <div className='px-4 py-6'>
          <div className='font-bold text-purple-800 text-xl'>Photo by {image.user}</div>
          <ul >
            <li className='font-bold text-lg'>Views-{image.views}</li>
            <li className='font-bold text-lg'>Downloads-{image.downloads}</li>
            <li className='font-bold text-lg'>Likes-{image.likes}</li>
          </ul>
          <div className=' mt-1'>
            {tags.map((tag,index) => (
              <span key={index} className='font-semibold mx-2 cursor-pointer bg-purple-300 rounded-full px-2 py-1 '>#{tag}</span>
            ))}

          </div>
        </div>
      </div>
    </>
  )
}

export default ImageCard;