import React from 'react'
import step1 from '../../assets/svgs/step1.svg'
import step2 from '../../assets/images/step2.jpeg'
import step3 from '../../assets/images/step3.jpeg'
import CardToStart from '../Cards/CardToStart'



const HowToStart = () => {
  return (
    <div className='flex flex-col flex-wrap pt-10 justify-center items-center'>
    <div className='p-2.5 items-center'>
        <h1 className="text-2xl md:text-4xl font-bold text-primary-600 font-sans ">How to Get Started</h1>
    </div>

    <div className='flex flex-row flex-wrap justify-between items-center  md:mx-20 md:p-10 pt-10'>

    <CardToStart title="Step I: Login into your account" stepImage={step1} subTitle='when an unknown printer took a galley of type and scrambled it to make a type specimen bookwhen an unknown printer took a galley of type and scrambled '/>
    <CardToStart title="Step II: choose your location" stepImage={step2} subTitle='when an unknown printer took a galley of type and scrambled it to make a type specimen bookwhen an unknown printer took a galley of type and scrambled'/>
    <CardToStart title="Step III Check details of nearest bus" stepImage={step3} subTitle='when an unknown printer took a galley of type and scrambled it to make a type specimen bookwhen an unknown printer took a galley of type and scrambled'/>
    <CardToStart title="Step IV: Enjoy your Journey" stepImage={step2} subTitle='when an unknown printer took a galley of type and scrambled it to make a type specimen bookwhen an unknown printer took a galley of type and scrambled'/>
    

    </div>

</div>
  )
}

export default HowToStart