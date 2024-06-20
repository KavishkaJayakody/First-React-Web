import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about' id='about'>
        <div className='about-left'>
            <img src={about_img} alt='' className='about-img'/>
            <img src={play_icon} alt='' className='play-icon'/>
        </div>
        <div className='about-right'>
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Discover a world of knowledge and endless possibilities at our esteemed university.
                 We are a leading institution dedicated to providing exceptional higher education and 
                 groundbreaking research opportunities. </p>
            <p>At our university, you will learn from renowned faculty members who are experts in their 
                fields, guiding you on a transformative educational journey. Our state-of-the-art facilities, 
                including libraries, laboratories, and research centers, provide an enriching environment for 
                exploration and discovery. </p>
            <p>Join us at our university and embark on a transformative educational journey that will shape your future. 
                Unleash your potential, pursue your passions, and become a part of our global community of learners and 
                scholars. Experience the power of knowledge, innovation, and personal growth at our distinguished institution. 
                Your journey begins here.</p>
        </div>
      
    </div>
  )
}

export default About
