import { useState } from "react"

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-5">
        <h1 className="text-xl font-bold tracking-wide">My Portfolio</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest">
          <a href="#hero" className="hover:text-blue-500 transition">Home</a> 
          <a href="#about" className="hover:text-blue-500 transition">About</a>
          <a href="#skills" className="hover:text-blue-500 transition">Skills</a>
          <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-500 transition">Contact</a>

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col items-center gap-6 py-6 bg-black border-t border-gray-800 text-sm uppercase">
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  )
}

export default Navbar