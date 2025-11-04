import React from "react";

export default function Card() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-12">

      {/* Heading Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
          Welcome to Paws-World
        </h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Where compassion meets modern veterinary excellence, ensuring your pets live a healthy & joyful life.
        </p>
      </div>

      {/* Hero Image */}
      <div className="rounded-3xl overflow-hidden shadow-xl">
        <img
          src="https://w0.peakpx.com/wallpaper/463/467/HD-wallpaper-pets-pet-kittten-caine-cat-pisici-animal-dog-puppy.jpg"
          alt="Pets care"
          className="w-full h-[350px] sm:h-[450px] object-cover"
        />
      </div>

      {/* Mission Section */}
      <div className="bg-white rounded-3xl shadow-lg border border-amber-100 p-6 sm:p-10 space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>

        <p className="text-gray-700 leading-relaxed">
          At Paws-World, our mission is to provide top-notch care for your pets with a
          personalized touch that truly makes a difference.
        </p>
        <p className="text-gray-700 leading-relaxed">
          We deliver exceptional veterinary services with integrity, empathy, and dedication
          to each pet’s well-being.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Guided by compassion, excellence, and respect, we foster a nurturing space where both pets and families feel valued.
        </p>
      </div>

      {/* Free Stray Care Section */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-6 sm:p-10 space-y-6 border border-amber-200 shadow-xl">
        <h2 className="text-3xl font-bold text-gray-900">Caring for Strays</h2>

        <p className="text-gray-700 leading-relaxed">
          We believe every stray deserves a second chance. Paws-World proudly offers FREE
          medical care to stray animals.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Our team works tirelessly to heal, protect, and uplift strays, helping build a more
          caring & compassionate community.
        </p>

        {/* Stray care Image */}
        <div className="rounded-3xl overflow-hidden shadow-xl">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/772/373/311/dog-animals-photography-wallpaper-preview.jpg"
            alt="Stray dog care"
            className="w-full h-[300px] sm:h-[400px] object-cover"
          />
        </div>
      </div>

    </div>
  );
}
