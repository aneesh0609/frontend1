import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



  const Departments1 = () => {
    const departmentsArray1 = [
      {
       
        imageUrl: "/DOGS/20.jpg",
      },
      {
      
        imageUrl: "/DOGS/30.jpg",
      },
      {
        
        imageUrl: "/DOGS/CAT30.jpg",
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
      <h2>DEALS AND DISCOUNTS</h2>
      <p className='hello2'>" Save 15% on all vet services this month—because your pet deserves the best care! "</p>
      <Carousel responsive={responsive} removeArrowOnDeviceType={["medium","small"]}>
        {
 departmentsArray1.map((depart, index)=>{
  return (
    <div className="card" key={index}>
      <img src={depart.imageUrl} />
    </div>
  );
 })}
</Carousel>
    </div>

    </>
  );
};
  
export default Departments1