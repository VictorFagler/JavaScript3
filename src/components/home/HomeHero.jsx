import React from 'react'
import { Link } from 'react-router-dom'
import HeroImage from '../../assets/home-hero-image.jpg'
import HeroImage2 from '../../assets/home-hero-image-2.jpg'






const HomeHero = () => {
  
  return (
    <div className='home-hero-container'>
      <div className='home-hero-left'>
        <p>CMS ECOMMERCE</p>
        <h1>Exclusive mens wear <br/>Admin page</h1>
      </div>
      <div className='home-hero-right'>
        <div className='image-container'>
          <img src={HeroImage2} alt={HeroImage2} />
        </div>
      </div>
    </div>
  )
}

export default HomeHero