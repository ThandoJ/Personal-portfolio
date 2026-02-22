import React from "react";


function Footer() {
  return (
    <footer className="py-8 border-t border-gray-800 text-center text-gray-500 text-sm">
      © {new Date().getFullYear()} Thando Jasop. All rights reserved.
    </footer>
  )
}

export default Footer