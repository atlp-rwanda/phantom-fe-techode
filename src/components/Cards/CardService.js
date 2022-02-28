import React from 'react'
import "./CardService.css"

const CardService = ({image, serviceTitle, serviceContent}) => {
  return (
    <div className="ph-card-service w-60 h-60  mx-auto md:w-60 md:h-80 px-2.5 md:mx-2.5 mb-5 sm:p-8 p-4 max-w-sm items-center justify-center bg-white rounded-lg border shadow-md dark:bg-gray-800 dark:border-gray-700">
    <div className="w-10 h-10 md:w-16 md:h-16 items-center justify-center rounded-full mx-auto bg-transparent">
      <img src={image} className='w-full h-full p-0.5' />
    </div>
    <h1 className="text-xl flex justify-center md:text-2xl font-bold text-primary-600 font-sans ">
      {serviceTitle}
    </h1>

    <p className='content'>
      {serviceContent}
    </p>
  </div>
  )
}

export default CardService