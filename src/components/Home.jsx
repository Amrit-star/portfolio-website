import React from 'react';
import HeroImage from "../assets/heroImage.png";
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import {Link} from "react-scroll";

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-6 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white mt-40'>I'm a Software Developer</h2>
                <p className='text-gray-500 py-6 max-w-md'>I am fimiliar with many programming languages like C++, Python and JavaScript.
                I have built projects using many technologies like HTML, CSS, Bootstrap, JavaScript, Node.Js, MongoDB.
                </p>
                <div>
                    <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-red-500 to-red-200 cursor-pointer'>
                        Portfolio  
                        <span className='group-hover:rotate-90 duration-300'>
                        <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                        </span> 
                    </Link>
                </div>
            </div>

            <div>
                <img src={HeroImage} alt="my profile" className='mx-auto w-3/4 md:w-full md:mt-40'/>
            </div>
        </div>
    </div>
  )
}

export default Home