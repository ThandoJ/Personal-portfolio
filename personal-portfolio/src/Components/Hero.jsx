import React from "react";
import personal from "../assets/personal.png"

function Hero() {
  return (
     <section id="hero" className="min-h-screen flex items-center pt-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Text */}
        <div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            Hi, I'm <span className="text-blue-500">Thando Jasop</span>
          </h2>

          <p className="text-gray-400 text-base sm:text-lg mb-8">
            I build modern, responsive, and high-performance web applications
            using React and Tailwind CSS. I'm passionate about creating seamless user experiences and writing clean, efficient code. I'm an individual who is not afraid to get out of my comfort zone and eager to learn new things.
          </p>

          <a
            href="#projects"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-md font-semibold"
          >
            View My Work
          </a>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={personal}
            alt="Personal"
            className="w-64 sm:w-72 md:w-80 h-auto rounded-2xl shadow-2xl border border-gray-800"
          />
        </div>

      </div>
    </section>
  )
}

export default Hero