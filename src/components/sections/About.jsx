import React from 'react'
import { aboutData } from '../../site-content'
import Button from '../ui/Button'

const About = () => {
  return (
    <section className='relative py-12 bg-primary text-white' id='about'>
      <h2 className='section-heading'>{aboutData.title}</h2>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-6">
        <div className="w-full max-w-xs md:max-w-sm lg:max-w-md mx-auto">
          <img
            src={aboutData.image}
            alt={aboutData.alt}
            className="w-full aspect-square object-cover rounded-md"
          />
        </div>

        <div className='flex flex-col gap-8 items-center text-center md:items-start md:text-left md:w-1/2'>
          <p className='text-base lg:text-lg font-light leading-relaxed'>{aboutData.description}</p>
          <a href="/TanEddhan_Resume.pdf" target='_blank'>
            <Button text={aboutData.button} background={"primary"} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default About