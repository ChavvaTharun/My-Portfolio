"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

export default function Banner() {
  const texts = useRef(["THARUN", "CHAVVA"]); // stable reference → no ESLint warning
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");

  // Typing Effect
  useEffect(() => {
    const current = texts.current[index];
    let i = 0;

    const interval = setInterval(() => {
      i++;
      setDisplayed(current.slice(0, i));
      if (i >= current.length) clearInterval(interval);
    }, 120);

    return () => clearInterval(interval);
  }, [index]);

  // Switch Name After Typing
  useEffect(() => {
    if (!displayed) return;

    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % texts.current.length);
      setDisplayed("");
    }, 2500);

    return () => clearTimeout(timeout);
  }, [displayed]);

  return (
    <section className="container" id="hero">
      <div className="w-full py-20 px-5 md:px-12 relative overflow-hidden about-section">
        
        {/* Background gradient */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-600/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/20 blur-[150px] rounded-full" />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-[260px] h-[260px] mx-auto perspective-1000 group">

              <div
                className="relative w-full h-full rounded-full transform-style-3d 
                transition-all duration-500 
                group-hover:rotate-x-3 group-hover:rotate-y-3 group-hover:scale-[1.04]"
              >

                <div className="absolute inset-0 rounded-full shadow-[0_10px_35px_rgba(0,0,0,0.25)] -z-10 translate-z-[-20px]" />

                <div className="absolute inset-0 rounded-full border-[4px] border-gray-300/60 backdrop-blur-md translate-z-[20px]" />

                <div className="absolute inset-0 rounded-full bg-white/10 blur-xl translate-z-[-10px]" />

                <Image
                  src="/images/home-images/MY-IMAGE.png"
                  alt="Profile"
                  width={260}
                  height={260}
                  className="rounded-full object-cover shadow-lg translate-z-[50px] 
                  animate-[subtleFloat_5s_ease-in-out_infinite]"
                />
              </div>

            </div>
          </div>

          {/* TEXT SECTION */}
          <div className="banner-left">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide text-white drop-shadow-lg mb-4">
              {displayed}
              <span className="text-cyan-300">|</span>
            </h1>

            <p className="text-lg text-blue-100 leading-relaxed max-w-xl">
              A passionate{" "}
              <span className="text-yellow-300 font-semibold">Full Stack Developer</span>{" "}
              crafting immersive digital experiences using{" "}
              <span className="text-cyan-400 font-semibold">React</span>,{" "}
              <span className="text-blue-300 font-semibold">Next.js</span> & modern
              web technologies.
            </p>

            <div className="flex gap-4 mt-8">
              <button
                className="px-6 py-3 bg-yellow-300 text-black font-semibold rounded-xl shadow-md hover:shadow-yellow-400/40 hover:-translate-y-1 transition"
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Projects
              </button>

              <button
                className="px-6 py-3 border border-cyan-400 text-cyan-300 font-semibold rounded-xl hover:bg-cyan-500/20 hover:-translate-y-1 transition shadow-sm"
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Contact Me
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
