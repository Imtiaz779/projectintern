import React from 'react'
import { HiArrowRight } from 'react-icons/hi';
import { Link } from "react-router";
import video from "../assets/banner-video.mp4";
import bannerleft from "../assets/banner-left.avif"
import bannerright from "../assets/banner-right.png"

const Hero = () => {
  return (
    <div className='pt-24 bg-black text-white md:pt-32'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 relative'>
            {/* subtitle */}
            <div className='mb-6'>
                <span className='text-[#999999] uppercase tracking-[0.2em] text-sm font-medium'>More than a website builder</span>
            </div>

            {/* main heading */}
            <h1 className='text-4xl sm:text-5x lg:text-8xl font-bold mb-8 md:mb-16 leading-[1.1] tracking-[0.2em]'>Your Site Sould Do <br className='md:block hidden' /> More Than Look Good</h1>


            {/* paragraph and button  */}

            <div className='flex md:flex-row items-center flex-col justify-between gap-8 mb-5'>
                <p className='text-[#999999] md:w-3/5 md:text-xl mb-8 md:mb-0 leading-relaxed'> As the first-ever website experience platform , Codetutor lets marketers, designers and developers come together to build ,manage and optimize web experiences that get result.</p>

                <div className='flex sm:flex-row flex-wrap gap-8 shrink-0 '>
                <Link to="/start-building" className=" bg-[#4353FF] hover:bg-blue-600 text-white px-8 py-4 rounded text-lg font-medium transition-colors duration-200">Start Building</Link>
             <Link to="/contact" className="flex  gap-4 items-center group hover:text-white/50 text-white px-8 py-4 rounded text-lg font-medium transition-colors duration-200">Contact sales <HiArrowRight classname="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200 "/> 
                </Link>
                </div>
            </div>


            {/* video */}
            <div classname="w-full h-full mt-16 mx-auto relative">
                <video src = {video} autoplay muted loop classname="w-full h-full object-cover"/>
              <div className='absolute top-1/2 xl:left-10 md:left-20 z-20 xl:block hidden'>
                <img src={bannerleft} alt="" className='lg:h-32 md:h-24 h-20 w-fit object-cover' /></div>
                <div className='absolute bottom-1/5 xl:-right-0  z-20 xl:block hidden'>
                <img src={bannerright} alt="" className='lg:h-44 md:h-32 h-28 w-full object-cover' />
                </div> 
              
            </div>

            {/* overlay */}

            <div className='absolute bottom-0 left-0 right-0 h-1/2 z-10 bg-gradient-to-t from-black to-transparent hidden md:block'>

            </div>

        </div>
    </div>
  )
}

export default Hero