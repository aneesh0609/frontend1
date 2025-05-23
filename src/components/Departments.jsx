import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



  const Departments = () => {
    const departmentsArray = [
      {
        
        imageUrl: "/DOGS/adopt.jpg",
      },
      {
       
        imageUrl: "/DOGS/jerman.jpg",
      },
      {
       
        imageUrl: "/DOGS/shihtzu.jpg",
      },
      {
       
        imageUrl: "/DOGS/lebra2.jpg",
      },
      {
      
        imageUrl: "/DOGS/pitbull.jpg",
      },
      {
        
        imageUrl: "/DOGS/golden.jpg",
      },
      {
       
        imageUrl: "/DOGS/beagle.jpeg",
      },
      {
        
        imageUrl: "/DOGS/chow-chow.jpg",
      },
      {
       
        imageUrl: "/DOGS/doberman.jpg",
      },
    ];
    

    
  const responsive = {
    extraLarge: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    large: {
      breakpoint: { max: 1324, min: 1005 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    medium: {
      breakpoint: { max: 1005, min: 700 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    small: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };


  return (
    <>
    <div className='container departments'>
      <h2 className='hello'>ADOPTION :</h2>
      <p className='hello2'> " Find your new best friend—explore our lovable pets waiting for a forever home "</p>

      <Carousel responsive={responsive} removeArrowOnDeviceType={["medium","small"]}>
        {
 departmentsArray.map((depart, index)=>{
  return (
    <div className="card" key={index}>
      <img src={depart.imageUrl}  />
    </div>
  );
 })}
</Carousel>
    </div>

    </>
  );
};
  
export default Departments