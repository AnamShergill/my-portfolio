import React from 'react';
import { IoArrowForward } from 'react-icons/io5';
import Image from 'next/image';
import "../style/about.css"

const About = () => {
  return (
    <div id='About' className='about-container'>
      
      <div className='about-content'>
      <h2 className='about-heading'>About Me</h2>
      <Image 
         src="/image.coding1.png" 
         alt="Description" 
         width={450} 
         height={300} 
          layout="intrinsic"
         />
        
        <ul className='about-list'>
          <div className='about-item'>
            <IoArrowForward size={30} className='icon' />
            <div className='about-text'>
              <h1 className='about-title'>My Journey</h1>
              <p className='about-paragraph'>
                I&apos;m a student deeply engaged in the world of software development. My journey began with a curiosity about how websites are built, and over time, I&apos;ve expanded my skill set to include a variety of tools and technologies to bring ideas to life. 
                I&apos;m always eager to tackle new challenges and improve my craft..
              </p>
            </div>
          </div>

          <div className='about-item'>
            <IoArrowForward size={30} className='icon' />
            <div className='about-text'>
              <h1 className='about-title'>My Goal</h1>
              <p className='about-paragraph'>
                My ultimate goal is to become a versatile software developer with expertise in both front-end and back-end development. I&apos;m excited about creating innovative web and mobile applications that make a difference, whether it's a tool to simplify everyday tasks or a creative project to inspire others.
              </p>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default About;