import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>

    <div className='text-center text-2xl pt-10 border-t'>
      <Title text1={'CONTACT'} text2={'US'}/>
    </div>

    <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
      <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt=''/>

      <div className='flex flex-col justify-center items-start gap-6'>
        <p className='font-semibold text-xl text-gray-600'>Our store</p>
        <p className='text-gray-500'>Abhinand <br/> suite 390, whashingtome</p>
        <p className='text-gray-500'>Tel :34987897432 <br/> Email: asdsad@gmail.com</p>
        <p className='font-semibold text-xl text-gray-600'>Lalshaya store</p>
        <p className='text-gray-500'>Abhinand <br/> suite 390, whashingtome</p>
        <p></p>
      </div>
    </div>
      
    </div>
  )
}

export default Contact
