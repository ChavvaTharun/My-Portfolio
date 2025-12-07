"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Sub_Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container mx-auto relative">
      <div className="chavva_logo_main">
        <div className="flex flex-wrap items-center justify-between p-4">
          
          {/* Logo */}
          <div className="w-1/2 lg:w-1/3">
            <Image
              src="/images/home-images/tharun-main.svg"
              alt="Logo"
              width={220}
              height={220}
            />
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex w-2/3 justify-end gap-6">
            <a href="#projects" className="nav-link text-white font-semibold">
              Projects
            </a>
            <a href="#contact" className="nav-link text-white font-semibold">
              Contact
            </a>
            {/* Only Desktop links here */}
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden">
            <button
              className="p-3 text-white responsive-text"
              onClick={() => setIsOpen(true)}
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Sidebar */}
          <div
            className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="p-4 flex justify-between items-center border-b">
              <h2 className="font-bold text-lg">Menu</h2>
              <button onClick={() => setIsOpen(false)}>✕</button>
            </div>
            <nav className="flex flex-col p-4 gap-4 nav-resp">

              {/* Mobile-only links */}
              <a
                href="#about"
                className="hover:text-blue-500 lg:hidden"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="#blog"
                className="hover:text-blue-500 lg:hidden"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </a>
              <a
                href="#services"
                className="hover:text-blue-500 lg:hidden"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>

                {/* Shared links */}

               <a
                href="#projects"
                className="hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </a>
              <a
                href="#contact"
                className="hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              
            </nav>
          </div>
        </>
      )}
    </div>
  );
}
