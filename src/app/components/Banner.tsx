"use client";

import React, { useEffect, useState } from "react";

const texts = ["THARUN", "CHAVVA"]; // ✅ move outside

export default function Banner() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");

  // Typing Effect
  useEffect(() => {
    const current = texts[index];
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(current.slice(0, i + 1));
      i++;
      if (i === current.length) clearInterval(interval);
    }, 120);
    return () => clearInterval(interval);
  }, [index]); // ✅ texts is now stable, no warning

  // Switch Name After Typing
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % texts.length);
      setDisplayed("");
    }, 2500);
    return () => clearTimeout(timeout);
  }, [displayed]); // ✅ texts.length is stable
  

  return (
    <section id="hero" className="container py-20">
      <h1 className="text-5xl font-bold text-white">
        {displayed}
        <span className="text-cyan-300">|</span>
      </h1>
      <p className="text-lg text-blue-100 mt-4">
        A passionate Front End Developer crafting immersive digital experiences.
      </p>
    </section>
  );
}
