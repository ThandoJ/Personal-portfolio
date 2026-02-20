import React from "react";
function Footer() {
  return (
    <footer className="bg-black text-white text-center p-6">
      <p>© {new Date().getFullYear()} Thando Jasop</p>
      <p className="text-sm text-gray-400">Built with React & Tailwind</p>
    </footer>
  )
}

export default Footer