import React from "react";
function Skills() {
  const skills = ["React", "JavaScript", "Tailwind", "Node.js", "Git"]

  return (
    <section id="skills" className="py-24 px-6 border-t border-gray-800 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-12">Skills</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="px-6 py-3 sm:px-8 sm:py-4 bg-gray-900 border border-gray-700 rounded-xl hover:border-blue-500 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills