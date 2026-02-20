import React from "react";
function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React"]

  return (
    <section id="skills" className="py-24 bg-gray-100 dark:bg-gray-800 text-center">
      <h2 className="text-4xl font-bold mb-10">Skills</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="px-6 py-3 bg-white dark:bg-gray-700 rounded-xl shadow hover:scale-110 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills