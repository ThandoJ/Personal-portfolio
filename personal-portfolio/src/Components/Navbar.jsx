function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="fixed w-full bg-white dark:bg-gray-800 shadow-md p-4 flex justify-between items-center z-50">
      <h1 className="font-bold text-xl">My Portfolio</h1>

      <div className="space-x-4 flex items-center">
        <a href="#hero">Hero</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  )
}

export default Navbar