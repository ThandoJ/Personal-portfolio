import React from "react"


function Contact() {
  return (
    <section id="contact" className="bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            Have a project in mind? I’d love to hear about it.
            Send a message and let’s build something amazing.
          </p>
        </div>

        {/* Layout */}
        <div className="grid md:grid-cols-2 gap-16">

          {/* LEFT SIDE information */}
          <div className="bg-zinc-900 p-10 rounded-xl shadow-lg border border-zinc-800">
            <form className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-black border border-zinc-700 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-white text-white"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-black border border-zinc-700 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-white text-white"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full bg-black border border-zinc-700 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-white text-white"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-white text-black py-4 rounded-md font-semibold hover:bg-gray-200 transition"
              >
                Send Message
              </button>

            </form>
          </div>

          {/* RIGHT SIDE information */}
          <div className="flex flex-col justify-center space-y-8">

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Connect With Me
              </h3>

              <div className="space-y-4 text-gray-400">
                <p>📧 jasopthando0@gmail.com</p>
                <p>🔗 https://www.linkedin.com/in/thando-jasop-9105a02b5/</p>
                <p>💻 https://github.com/ThandoJ</p>
              </div>
            </div>

            <hr className="border-zinc-700" />

            <p className="text-gray-400">
              I'm currently available for freelance work and open to
              discussing new projects, creative ideas, or opportunities
              to be part of your vision.
            </p>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact
