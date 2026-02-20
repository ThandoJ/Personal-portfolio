import React from "react";
function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>

      <form className="max-w-xl mx-auto flex flex-col gap-4 bg-white dark:bg-gray-700 p-8 rounded-xl shadow">
        <input className="p-3 rounded border" placeholder="Your Name" />
        <input className="p-3 rounded border" placeholder="Your Email" />
        <textarea className="p-3 rounded border" placeholder="Message" />

        <button className="bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition">
          Send Message
        </button>
      </form>
    </section>
  )
}

export default Contact