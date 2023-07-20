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
                Three years of experience in Front End development using several languages ​​and tools, such as JavaScript, React JS, also using platforms such as ServiceNow and Pipefy
                </p>
                <br></br>
            </div>
        </div>
    </div>
  )
}

export default About