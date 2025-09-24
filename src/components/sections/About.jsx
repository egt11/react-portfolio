import React from 'react'
import { aboutData, fadeInLeft, fadeInRight } from '../../site-content'
import { motion } from 'motion/react'
import Button from '../ui/Button'

const About = () => {
  return (
    <section className='relative py-12 bg-primary text-white' id='about'>
      <h2 className='section-heading'>{aboutData.title}</h2>
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row md:justify-around items-center gap-y-12">
        <motion.div className="w-full max-w-xs md:max-w-[350px] lg:max-w-md" variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true, amount:0.5 }} transition={{duration: 0.5}}>
          <motion.img
            src={aboutData.image}
            alt={aboutData.alt}
            whileHover={{scale: 1.05}}
            className="w-full aspect-square object-cover rounded-md"
          />
        </motion.div>

        <motion.div className='flex flex-col gap-4 items-center text-center md:items-start md:text-left md:w-1/2' variants={fadeInRight} initial="hidden" whileInView="visible" viewport={{ once: true, amount:1 }} transition={{duration: 0.5}}>
          <p className='text-base lg:text-lg font-light leading-relaxed'>{aboutData.description}</p>
          <a href="TanEddhan_Resume.pdf" target='_blank'>
            <Button text={aboutData.button} background={"primary"} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default About