import React from 'react'
import { icons } from '../site-content'
import { motion } from 'motion/react'
import { RiArrowUpLine } from '@remixicon/react'

const Footer = () => {
  const { socials } = icons
  const year = new Date().getFullYear();

  return (
    <footer className='py-12 bg-[#333]'>
      <div className="container mx-auto text-center flex flex-col items-center gap-12 px-4 text-white">
        <div className='flex flex-col gap-4'>
          <div className='flex items-center justify-center gap-8'>
            {socials.map(item => (
              <motion.a href={item.link} target='_blank' key={item.name} whileHover={{ y: -2 }} className='p-2 hover:text-primary'>
                <item.icon size={40} />
              </motion.a>
            ))}
          </div>
          <p className='text-gray-200 text-sm'>
            &copy; {year} | Developed by Eddhan Gabryell Tan
          </p>
        </div>
        <a href="#home">
          <motion.button whileHover={{ y: -5, scale: 1.1 }} className='cursor-pointer'>
            <RiArrowUpLine size={30} className='hover:text-primary' />
          </motion.button>
        </a>

      </div>
    </footer>
  )
}

export default Footer