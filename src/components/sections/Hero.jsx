import React from 'react'
import { heroData } from '../../site-content'
import Button from '../ui/Button'

const Hero = () => {
    return (
        <section className='relative'>
            <div className="container mx-auto px-4 flex flex-col items-center justify-center min-h-screen text-center gap-8 lg:text-left lg:items-start">
                <h1 className='text-gray-800 font-bold text-4xl md:text-5xl lg:text-6xl leading-tight'>Hi, my name is <span className='text-primary'>{heroData.name}</span> <br />An aspiring full-stack Developer</h1>
                <Button text={"Know More"} href={"#about"} background={"white"}/>
            </div>
        </section>
    )
}

export default Hero