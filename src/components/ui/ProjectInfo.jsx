import React from 'react'
import Button from './Button'
import { motion } from 'motion/react';
import { fadeInLeft, fadeInRight } from '../../site-content';

const ProjectInfo = (props) => {
    const { title, description, button, href, imgSrc, alt } = props;

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1368px]'>
            <motion.div className='flex flex-col gap-4 items-start' variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }}>
                <h3 className='font-bold text-xl sm:text-2xl xl:text-3xl capitalize'>{title}</h3>
                <p className='text-base lg:text-lg font-light leading-relaxed'>{description}</p>
                <a href={href} target='_blank'>
                    <Button text={button} background={"white"} />
                </a>
            </motion.div>
            <motion.div className='w-full' variants={fadeInRight} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 'all' }} transition={{ duration: 0.5 }}>
                <motion.img src={imgSrc} alt={alt} whileHover={{scale: 1.025}} className='object-cover w-full rounded-md' />
            </motion.div>
        </div>

    )
}

export default ProjectInfo