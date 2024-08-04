import React from 'react'

const Hero = ({title, imageUrl}) => {
  return (
    <div className='hero container'>
      <div className="banner">
        <p className='fonts3'>{title}</p>
        <h3 className="fonts1">Welcome To Paws & Claws Animal Santuary</h3>
        <p className="fonts2">"Discover a world where every tail wags with joy and every purr brings comfort. At paws & Claws"</p>
      </div>
      <div className="banner">

        <img src={imageUrl} alt="hero" className="animated-image" />
        <span>
          <img src="/vector2.png" alt="vector"/>
        </span>
      </div>
    </div>
  )
}

export default Hero