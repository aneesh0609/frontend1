import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Departments1 = () => {
  const departmentsArray1 = [
    { imageUrl: "/DOGS/20.jpg" },
    { imageUrl: "/DOGS/30.jpg" },
    { imageUrl: "/DOGS/CAT30.jpg" },
  ];

  const responsive = {
    extraLarge: { breakpoint: { max: 3000, min: 1324 }, items: 3 },
    large: { breakpoint: { max: 1324, min: 1024 }, items: 3 },
    medium: { breakpoint: { max: 1024, min: 600 }, items: 2 },
    small: { breakpoint: { max: 600, min: 0 }, items: 1 },
  };

  return (
    <div className="w-full py-16 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 tracking-tight">
            Deals & Discounts
          </h2>
          <p className="text-gray-600 mt-2 text-lg">
            Save 15% on pet services & care packages this season 🐾✨
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          responsive={responsive}
          removeArrowOnDeviceType={["medium", "small"]}
          itemClass="px-3"
        >
          {departmentsArray1.map((deal, index) => (
            <div
              key={index}
              className="relative rounded-[28px] shadow-xl bg-white border border-amber-200 overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="h-[350px] sm:h-[420px] md:h-[480px] w-full">
                <img
                  src={deal.imageUrl}
                  alt="discount deal"
                  className="w-full h-full object-cover rounded-[28px]"
                />
              </div>

              {/* Gradient overlay like PetCareLanding */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-[28px]"></div>

              {/* Discount Badge */}
              <span className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-rose-500 text-white px-4 py-1 text-sm rounded-full font-bold shadow-lg">
                15% OFF 🏷️
              </span>

              {/* Premium label */}
              <span className="absolute bottom-4 right-4 bg-white/90 px-3 py-1 rounded-full text-xs font-semibold border border-amber-200 shadow-md text-amber-600">
                ⭐ Exclusive Deal
              </span>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Departments1;
