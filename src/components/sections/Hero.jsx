import React from 'react'
import { heroData, fadeIn } from '../../site-content'
import Button from '../ui/Button'
import { motion } from 'motion/react'

const Hero = () => {

    return (
        <motion.section className='relative' variants={fadeIn} initial="hidden" whileInView="visible" transition={{duration: 0.5}} viewport={{once: true}}>
            <div className="container mx-auto px-4 flex flex-col items-center justify-center min-h-[90vh] text-center gap-4 md:gap-8 lg:text-left lg:items-start">
                <h1 className='text-gray-800 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight'>Hi, my name is <span className='text-primary'>{heroData.name}</span> <br />An aspiring full-stack Developer</h1>
                <a href="#about">
                    <Button text={heroData.button} background={"white"} />
                </a>
            </div>
        </motion.section>
    )
}

export default Hero