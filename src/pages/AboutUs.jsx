import React from "react";
import Hero from "../components/Hero";
import AboutNew from "../components/AboutNew";


const AboutUs = () => {
  return (
    <>
      <Hero
        title={"Learn More About Us "}
        imageUrl={"/anish.jpg"}
      />
       <AboutNew />
      
    </>
  );
};

export default AboutUs;