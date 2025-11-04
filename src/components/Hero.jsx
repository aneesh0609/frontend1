import React, { useState } from 'react';
import { Heart, Shield, Clock, Award, Star, ChevronRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PetCareLanding() {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const features = [
    { icon: Heart, title: "Premium Care", description: "Luxurious treatment for your beloved companions" },
    { icon: Shield, title: "Safe & Secure", description: "24/7 monitoring and veterinary support" },
    { icon: Clock, title: "Always Available", description: "Round-the-clock service at your convenience" },
    { icon: Award, title: "Award Winning", description: "Recognized excellence in pet care services" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 relative overflow-hidden">

      {/* Background Soft Circles */}
      <div className="absolute top-10 right-10 w-40 h-40 sm:w-64 sm:h-64 bg-amber-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-56 h-56 sm:w-96 sm:h-96 bg-rose-200 rounded-full opacity-20 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-14 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT — TEXT */}
          <div className="space-y-8 text-center lg:text-left">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full text-white text-sm font-medium shadow-lg">
              <Sparkles className="w-4 h-4" />
              <span>Royal Pet Care Experience</span>
            </div>

            {/* Heading */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 bg-clip-text text-transparent">
                  Premium Care
                </span>
                <br />
                <span className="text-gray-900">For Your Royal</span>
                <br />
                <span className="text-gray-900">Companions</span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0">
                Luxury pet care, medical support & love — we treat every pet like royalty.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Link 
                          to="/appointment" 
                        >
                          <button className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 text-sm sm:text-base">
                Book Appointment
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
                        </Link>
             

              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-800 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-amber-200 text-sm sm:text-base">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6">
              {[
                { value: '98%', text: 'Satisfaction' },
                { value: '24/7', text: 'Support' },
                 { value: '100%', text: 'Care' }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-xs sm:text-sm mt-1">{stat.text}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — IMAGE + CARDS */}
          <div className="relative flex flex-col items-center">

            {/* Main Pet Image */}
            <div className="relative w-64 sm:w-80 md:w-96 rounded-[2rem] overflow-hidden shadow-2xl bg-white p-3">
              <img
                src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&h=900&fit=crop"
                className="w-full h-[350px] sm:h-[430px] md:h-[500px] rounded-[1.8rem] object-cover"
                alt="Pet"
              />

              {/* Crown Badge */}
              <div className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-xl">
                <Award className="w-6 h-6 text-amber-500" />
              </div>
            </div>

        

       

            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-10 sm:mt-12 w-full max-w-xs sm:max-w-md">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div
                    key={i}
                    onMouseEnter={() => setHoveredFeature(i)}
                    onMouseLeave={() => setHoveredFeature(null)}
                    className={`bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-lg hover:shadow-xl transition-all duration-300 border cursor-pointer ${
                      hoveredFeature === i ? 'border-amber-400 scale-105' : 'border-transparent'
                    }`}
                  >
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-2 sm:mb-3 ${
                      hoveredFeature === i ? 'bg-gradient-to-br from-amber-400 to-orange-500' : 'bg-amber-100'
                    }`}>
                      <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${hoveredFeature === i ? 'text-white' : 'text-amber-600'}`} />
                    </div>
                    <h3 className="font-bold text-gray-800 text-sm sm:text-base mb-0.5">{f.title}</h3>
                    <p className="text-[11px] sm:text-xs text-gray-600">{f.description}</p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
