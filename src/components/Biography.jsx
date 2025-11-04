import React from "react";

const services = [
  {
    title: "Puppy Care",
    items: ["Vaccination Shot", "Deworming", "Cleaning"],
    price: "₹ 12,000",
  },
  {
    title: "Kitten Care",
    items: ["Vaccination Shot", "Deworming", "Unlimited Nail Trims"],
    price: "₹ 10,000",
  },
  {
    title: "Pet Care",
    items: ["Grooming Sessions", "Body Clippings", "Hydrotherapy Sessions"],
    price: "₹ 13,000",
  },
  {
    title: "Special Set",
    items: ["Grooming Sessions", "Body Massage", "Hydrotherapy Sessions"],
    price: "₹ 15,000",
  },
];

export default function Biography() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 ">

      <h2 className="text-center text-4xl font-extrabold mb-10 bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">
        Paws-World Care Packages
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative p-6 rounded-3xl bg-white border border-amber-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Top Tag */}
            <div className="absolute -top-4 right-4 bg-gradient-to-r from-orange-400 to-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
              PAWS WORLD
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>

            <ul className="space-y-1 text-gray-700 text-sm mb-4">
              {service.items.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  🐾 <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Price */}
            <div className="mt-4 font-bold text-lg bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              {service.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
