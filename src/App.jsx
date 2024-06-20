import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
          <Title subTitle='Our PROGRAM' title='What we offer'/>
          <Programs/>
          <About/>
          <Contact/>
      </div>
      
      
    </div>
  )
}

export default App
