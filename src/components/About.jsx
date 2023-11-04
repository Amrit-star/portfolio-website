import React from 'react'

const About = () => {
  return (
    <div
        name="about"
        className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'
    >
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-5'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            
        <p className='text-xl mt-10'>
            My name is Amrit Kumar. I am currently pursuing B.Tech from Indian Institute of Technology Patna. I did my schooling from Ramakrishna Mission Vidyapith Purulia. I love to play and watch cricket.
        </p>
        <br/>
        <p className='text-xl'>
            I am quite hardworking, rather confident and a positive thinker. I am passionate about coding. I love to code since it makes a difference in peoples' lives. I always enjoy solving real life problems.
        </p>
        </div>
    </div>
  )
}

export default About;