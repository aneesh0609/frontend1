import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Departments = () => {
  const departmentsArray = [
    { imageUrl: "/DOGS/adopt.jpg" },
    { imageUrl: "/DOGS/jerman.jpg" },
    { imageUrl: "/DOGS/shihtzu.jpg" },
    { imageUrl: "/DOGS/lebra2.jpg" },
    { imageUrl: "/DOGS/pitbull.jpg" },
    { imageUrl: "/DOGS/golden.jpg" },
    { imageUrl: "/DOGS/beagle.jpeg" },
    { imageUrl: "/DOGS/chow-chow.jpg" },
    { imageUrl: "/DOGS/doberman.jpg" },
  ];

  const responsive = {
    extraLarge: { breakpoint: { max: 3000, min: 1324 }, items: 4 },
    large: { breakpoint: { max: 1324, min: 1005 }, items: 3 },
    medium: { breakpoint: { max: 1005, min: 700 }, items: 2 },
    small: { breakpoint: { max: 700, min: 0 }, items: 1 },
  };

  return (
    <div id="adoption" className="max-w-7xl mx-auto px-6 py-14 ">
      
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-orange-500 to-rose-500 text-transparent bg-clip-text">
          Adopt a Best Friend 🐶❤️
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mt-2">
          Give a loving home to a furry companion 🌼
        </p>
      </div>

      {/* Carousel */}
      <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={["medium", "small"]}
        containerClass="pb-10"
      >
        {departmentsArray.map((pet, index) => (
          <div key={index} className="p-3">
            
            <div className="rounded-3xl overflow-hidden bg-white border border-amber-100 shadow-xl 
              transition-transform duration-500 hover:scale-[1.03]">

              {/* Image */}
              <div className="relative h-72 sm:h-80">
                <img
                  src={pet.imageUrl}
                  alt="Pet"
                  className="w-full h-full object-cover"
                />

                {/* Small Paw Badge */}
                <div className="absolute bottom-3 left-3 text-white text-3xl drop-shadow-lg">
                  🐾
                </div>

                {/* Adopt Tag */}
                <span className="absolute top-4 right-4 text-[10px] sm:text-xs bg-white px-3 py-1 rounded-full font-semibold shadow border border-amber-200 text-amber-700">
                  🏡 Ready For Adoption
                </span>
              </div>

              {/* Text */}
              <div className="bg-gradient-to-r from-rose-50 to-orange-50 py-4 text-center">
                <p className="font-semibold text-gray-800 text-sm sm:text-base">
                  Loving • Loyal • Family Ready
                </p>
                <p className="text-amber-600 text-xs sm:text-sm">
                  Forever homes, forever happiness 🤍
                </p>
              </div>
            </div>

          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Departments;
