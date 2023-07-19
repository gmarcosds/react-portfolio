import React from 'react';
import HeroImage from '../assets/heroImage.png';
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';
import {Link} from 'react-scroll';
const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='md:flex-row max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    I am Front End Developer
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                Enthusiast in the world of technology and programming, I seek
                opportunities for professional growth and acquire new knowledge.
                Experience of three as a consultant and architect on the ServiceNow
                platform, working with JavaScript and React JS with future prospects
                for growth and breadth in the front end development area
                </p>

                <div>
                    <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer '>
                        Portolio
                        <span className='group-hover:rotate-90 duration-300'>
                        <MdOutlineKeyboardArrowRight size={25} className='ml1
                        '/>
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={HeroImage} alt="my profile" className='rounded-2xl mx-auto md:w-full'/>
            </div>
        </div>
    </div>
  )
}

export default Home