import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



  const Departments = () => {
    const departmentsArray = [
      {
        
        imageUrl: "/service/01.png",
      },
      {
       
        imageUrl: "/service/02.png",
      },
      {
       
        imageUrl: "/service/03.png",
      },
      {
       
        imageUrl: "/service/04.png",
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
      <h2 className='hello'>SPECIAL OFFERS :</h2>
      <p className='hello2'>"Schedule your appointment today to unlock our exclusive offers and unbeatable deals!" </p>

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