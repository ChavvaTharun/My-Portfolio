"use client";
import { useState } from "react";
import { Home, User, Folder, Mail, Menu } from "lucide-react"; // lightweight icon pack

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="hed fixed top-0 left-0 z-50 side-header">
      {/* Sidebar */}
      <nav
        className={`nav-bar text-white h-screen flex flex-col justify-between items-start p-4 transition-all duration-500 ease-in-out shadow-lg ${
          isOpen ? "w-48" : "w-16"
        }`}
      >
        {/* Toggle button */}
        <button
          className="text-white mb-6"
          onClick={() => setIsOpen(!isOpen)}
          title="Menu"
        >
          <Menu size={28} />
        </button>

        {/* Navigation links */}
        <div className="flex flex-col gap-4 w-full">
          <a href="#hero" className="nav-link d-flex align-items-center gap-2">
            <Home size={22} />
            {isOpen && <span>Home</span>}
          </a>
          <a href="#about" className="nav-link d-flex align-items-center gap-2">
            <User size={22} />
            {isOpen && <span>About</span>}
          </a>
          <a href="#projects" className="nav-link d-flex align-items-center gap-2">
            <Folder size={22} />
            {isOpen && <span>Projects</span>}
          </a>
          <a href="#contact" className="nav-link d-flex align-items-center gap-2">
            <Mail size={22} />
            {isOpen && <span>Contact</span>}
          </a>
        </div>
        
      </nav>
    </header>
  );
}
