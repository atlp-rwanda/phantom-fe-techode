import React from 'react'
import introPhoto from '../../assets/images/introPhoto.jpeg'

const Intro = () => {
  return (
    <div className='flex flex-col flex-wrap pt-10 justify-center items-center'>
        <div className='items-center justify-center mx-auto'>
            <h1 className="text-4xl font-bold text-primary-600 font-sans ">Introduction</h1>
        </div>

        <div className='flex flex-col md:flex md:flex-row md:mx-20 mx-auto'>
        <div className='w-60 md:w-80 lg:w-1/2 md:top-0 md:pt-10  mt-10 mx-auto'>
            <img src={introPhoto} />
        </div>
        <div className='w-60 ms:w-96 md:w-1/2 items-center mx-10'>
            <h1 className="w-30 text-2xl font-bold text-primary-600 pt-10 font-sans pb-10 mx-auto">Travel With Us</h1>
            <p className='font-sans text-xl'>when an unknown printer took a galley of type and scrambled it to make a type specimen bookwhen an unknown printer took a galley of type and scrambled it to make a type specimen book when an unknown printer took a galley of type and scrambled it to make a type specimen bookwhen an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
        </div>
        </div>
   
    </div>
  )
}

export default Intro