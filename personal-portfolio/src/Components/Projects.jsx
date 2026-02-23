import React from "react";
import digitalClock from "../assets/digital-clock.png"
import restaurant from "../assets/restaurant.png"
import expenseTracker from "../assets/expense-tracker.png"
import quizApplication from "../assets/quiz-application.png"

function Projects() {
  const projects = [
    {
      title: "Digital Clock Application",
      description: "It is a simple digital clock using HTML, CSS, and JavaScript that displays the current time and updates automatically every second.",
      image: digitalClock,
      github: "https://github.com/ThandoJ/Digital-clock.git",
      live: "https://digital-clock-9xpdx0yxs-thando-jasops-projects.vercel.app/"
    },
    {
      title: "Restaurant Website",
      description: "The goal of this project was to create a redesigned version of an existing business website using Bootstrap.",
      image: restaurant,
      github: "https://github.com/ThandoJ/website-recreation-projectt.git",
      live: "https://pizza-cafe-redesign-website-oorg.vercel.app/"
    },

    {
      title: "Quiz App",
      description: "It's a multi-topic quiz app where users can take quizzes, see their scores, and track their performance over time.",
      image: quizApplication,
      github: "https://github.com/ThandoJ/Quiz.git",
      live: "https://quiz-eight-tan-97.vercel.app/"
    },

    {
      title: "Financial tracker",
      description: "A simple financial tracker application that allows users to manage their income and expenses.",
      image: expenseTracker,
      github: "https://github.com/ThandoJ/Expense-tracker.git",
      live: "https://expense-tracker-fd5mzt5sd-thando-jasops-projects.vercel.app"
    }
  ]

  return (
    <section id="projects" className="py-24 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center">Projects</h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500 transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 sm:h-64 md:h-72 object-cover"
              />

              <div className="p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-400 mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2 border border-gray-600 rounded hover:border-blue-500 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects


   