import React from 'react'

const Hero = ({title, imageUrl}) => {
  return (
    <div className='hero container'>
      <div className="banner">
        <h1>{title}</h1>
        <p>Welcome to Paws-World, where every pet is treated like family. Our dedicated team of veterinarians and staff provide compassionate, top-quality care to keep your furry friends happy and healthy. From routine check-ups to advanced treatments, we`re here to support your pet's well-being every step of the way</p>
      </div>
      <div className="banner">

        <img src={imageUrl} alt="hero" className="animated-image" />
        <span>
          <img src="/Vector.png" alt="vector "/>
        </span>
      </div>
    </div>
  )
}

export default Hero