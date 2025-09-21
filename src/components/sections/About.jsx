import React from 'react'
import { aboutData } from '../../site-content'
import Button from '../ui/Button'

const About = () => {
  return (
    <section className='relative py-12 bg-primary text-white' id='about'>
      <h2 className='uppercase text-center font-bold text-3xl tracking-wide lg:text-4xl mb-12'>{aboutData.title}</h2>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="w-full max-w-xs md:max-w-sm lg:max-w-md mx-auto">
          <img
            src="/images/about_image.jpg"
            alt="self portrait"
            className="w-full aspect-square object-cover rounded-md"
          />
        </div>


        <div className='flex flex-col gap-8 items-center text-center lg:items-start lg:text-left md:w-1/2'>
          <p className='text-lg lg:text-xl'>{aboutData.description}</p>
          <Button text={"View Resume"} href={"/TanEddhan_Resume.pdf"} background={"primary"} />
        </div>
      </div>
    </section>
  )
}

export default About