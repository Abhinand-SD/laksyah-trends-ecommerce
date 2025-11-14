import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt='' />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat necessitatibus maxime sapiente libero. Id odit molestiae mollitia explicabo laboriosam perferendis dolorem consequuntur quidem assumenda, nemo delectus tempore repellat consectetur pariatur molestias distinctio minus</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus itaque veniam placeat vel distinctio libero, non in nulla id sed facilis, a dolorem ab. Illum provident nihil iure perferendis.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur tenetur, nisi eos deleniti cum, nobis possimus laboriosam illum, fuga dolorum fugiat nihil. Totam possimus optio non quibusdam! Iure, sed necessitatibus!</p>
        </div>
      </div>

      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea natus atque distinctio laboriosam consequuntur debitis iure minus praesentium nemo, commodi qui mollitia minima aut alias a inventore odit illo asperiores?</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae necessitatibus ipsum totam, illo porro laboriosam sit placeat sunt eos voluptatibus magni culpa quibusdam nisi autem quis explicabo quo. Dolores, quasi.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae necessitatibus ipsum totam, illo porro laboriosam sit placeat sunt eos voluptatibus magni culpa quibusdam nisi autem quis explicabo quo. Dolores, quasi.</p>
        </div>

      </div>

      <NewsletterBox />
    </div>
  )
}

export default About
