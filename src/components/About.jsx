import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
                <p className='text-xl mt-20'>
                Enthusiast in the world of technology and programming, I seek
                opportunities for professional growth and acquire new knowledge.
                Experience of three as a consultant and architect on the ServiceNow
                platform, working with JavaScript and React JS with future prospects
                for growth and breadth in the front end development area
                </p>
                <br></br>
            </div>
        </div>
    </div>
  )
}

export default About