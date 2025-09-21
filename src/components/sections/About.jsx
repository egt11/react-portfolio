import React from 'react'
import { aboutData } from '../../site-content'

const About = () => {
  return (
    <section className='relative py-12 bg-primary text-white'>
        <h2 className='uppercase text-center font-bold text-3xl tracking-wide lg:text-4xl mb-12'>{aboutData.title}</h2>
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
            <div className='w-1/2'>
                <img src="/about_image.jpg" alt="self portrait" className='aspect-square object-cover rounded'/>
            </div>

            <div className='md:w-1/2'>
                <p className='text-center lg:text-left text-lg lg:text-xl'>{aboutData.description}</p>
            </div>
        </div>
    </section>
  )
}

export default About