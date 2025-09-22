import React from 'react'
import Button from './Button'

const ProjectInfo = (props) => {
    const {title, description, button, href, imgSrc, alt} = props;

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1368px]'>
            <div className='flex flex-col gap-4 items-start'>
                <h3 className='font-bold text-gray-800 text-xl sm:text-2xl lg:text-3xl capitalize'>{title}</h3>
                <p className='text-base lg:text-lg font-light'>{description}</p>
                <Button text={button} href={href} background={"white"} />
            </div>
            <div className='w-full'>
                <img src={imgSrc} alt={alt} className='object-cover w-full rounded-md' />
            </div>
        </div>

    )
}

export default ProjectInfo