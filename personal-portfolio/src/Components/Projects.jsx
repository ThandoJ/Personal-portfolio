import React from "react";
function Projects() {
  const projects = [
    { title: "Digital Clock Application", description: " It is a simple digital clock using HTML, CSS, and JavaScript that displays the current time and updates automatically every second." },
    { title: "Restaurant Website", description: "The goal of this project was to create a redesigned version of an existing business website using Bootstrap. " },
    { title: "Quiz Application", description: " It's a multi-topic quiz app where users can take quizzes, see their scores, and track their performance over time. " },
  ]

  return (
    <section id="projects" className="py-24 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:scale-105 transition"
          >
            <div className="h-40 bg-gray-300 rounded mb-4"></div>
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects