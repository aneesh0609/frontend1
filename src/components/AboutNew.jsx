import React, { useState } from "react";

const diseaseCards = [
  {
    id: 1,
    title: "Tick Fever",
    desc: "Tick-borne infection causing fever, weakness, and blood cell damage — needs urgent veterinary attention.",
    img: "/tickfever.jpg",
  },
  {
    id: 2,
    title: "Parvo",
    desc: "Highly contagious viral disease causing vomiting, diarrhea & weakness — requires emergency treatment.",
    img: "/parvo.jpeg",
  },
  {
    id: 3,
    title: "Dermatitis",
    desc: "Skin inflammation leading to itching, redness, and irritation — common but treatable with care.",
    img: "/itching.avif",
  },
  {
    id: 4,
    title: "Rabies",
    desc: "Fatal viral disease affecting the nervous system — prevention through timely vaccination.",
    img: "/injured.jpg",
  },
];

export default function AboutNew() {
  const [active, setActive] = useState(1);

  return (
    <div className="min-h-[80vh] bg-gradient-to-br from-orange-50 via-amber-50 to-rose-50 py-14 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-gray-800 mb-10 tracking-wide">
          Common Pet Diseases & Awareness
        </h2>
        
        <div className="flex flex-col md:flex-row gap-5 md:gap-6 justify-center">
          {diseaseCards.map((d) => (
            <div
              key={d.id}
              onClick={() => setActive(d.id)}
              className={`relative rounded-3xl cursor-pointer transition-all duration-500 shadow-xl overflow-hidden border border-amber-200
                ${active === d.id 
                  ? "md:w-[55%] w-full h-[330px] scale-[1.03]" 
                  : "md:w-[15%] w-full h-[220px] opacity-80 hover:opacity-100"
                }
              `}
              style={{
                backgroundImage: `url(${d.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className={`absolute inset-0 transition-all ${active === d.id ? "bg-black/55" : "bg-black/30"}`}></div>

              <div className="absolute bottom-5 left-5 right-5 text-white">
                <h3 className="text-lg md:text-xl font-bold tracking-wide">
                  {d.title}
                </h3>

                {active === d.id && (
                  <p className="mt-2 text-sm leading-relaxed text-amber-100">
                    {d.desc}
                  </p>
                )}

                <span className="mt-2 inline-block text-xs bg-amber-500 px-3 py-1 rounded-full font-semibold shadow-md">
                  #{d.id}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-gray-600 text-sm md:text-base">
          🐾 Protect your pets with regular health check-ups & vaccinations.
        </p>
      </div>
    </div>
  );
}
