import React from "react";
function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-center px-6
      bg-gradient-to-br from-blue-500 to-purple-600 text-white"
    >
      <h2 className="text-5xl font-bold mb-4">Hi, I'm Thando Jasop</h2>
      <p className="text-xl mb-6">Frontend Developer | React Enthusiast</p>

      <a
        href="#projects"
        className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
      >
        View My Work
      </a>
    </section>
  )
}

export default Home