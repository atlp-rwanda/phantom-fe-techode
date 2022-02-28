import React from 'react'
import './CardToStart.css'

const CardToStart = ({title, stepImage, subTitle}) => {
  return (
    <div className='w-60 md:w-80 lg:w-3/6 xl:w-4/12 px-2.5 mb-5 sm:p-8 p-4 max-w-sm items-center mx-auto'>
    <h1 className="text-xl md:text-2xl font-bold text-primary-600 font-sans ">{title}</h1>
        <img src={stepImage} className='w-40 h-40'/>
        <p className='content'>{subTitle}</p>
    </div>
  )
}

export default CardToStart