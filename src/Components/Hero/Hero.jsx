import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container' id='hero'> 
        <div className='hero-text'>
            <h1>Better education for a better world</h1>
            <p>We provide a better educational experience preparing you for the dynamic future through 
                skills, knowledge and experience to excel in academic and professional world
            </p>
            <button className='btn'>Explore more<img src={dark_arrow} alt=''/></button>
        
        </div>
      
    </div>
  )
}

export default Hero
