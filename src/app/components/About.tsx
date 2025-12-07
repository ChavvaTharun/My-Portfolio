"use client";
import { useState } from "react";
import FlappyBlock from "./FlappyBlock";
import GameTwo from "./GameTwo";

export default function AboutPage() {
  const [selectedGame, setSelectedGame] = useState<"flappy" | "f1" | "comingSoon" | null>(null);

  return (
    <section className="container py-5">
      <div className="p-2" id="about">
        <div className="row about-section">

          {/* LEFT SIDE — GAMES */}
          <div className="col-12 col-lg-6">
            <h2 className="fw-bold mb-3">Mini Games</h2>

            {/* GAME SLIDER */}
            <div className="d-flex gap-3 overflow-auto pb-3">

              {/* GAME 1 CARD */}
              <div
                onClick={() => setSelectedGame("flappy")}
                className="card shadow-sm"
                style={{ width: "180px", height: "120px", cursor: "pointer" }}
              >
                <div className="card-body d-flex align-items-center justify-content-center">
                  <p className="fw-semibold">Flappy Block</p>
                </div>
              </div>

              {/* GAME 2 CARD */}
              <div
                onClick={() => setSelectedGame("f1")}
                className="card shadow-sm"
                style={{ width: "180px", height: "120px", cursor: "pointer" }}
              >
                <div className="card-body d-flex align-items-center justify-content-center">
                  <p className="fw-semibold">F1 Race</p>
                </div>
              </div>

              {/* GAME 3 CARD */}
              <div
                onClick={() => setSelectedGame("comingSoon")}
                className="card shadow-sm"
                style={{ width: "180px", height: "120px", cursor: "pointer" }}
              >
                <div className="card-body d-flex align-items-center justify-content-center">
                  <p className="fw-semibold">Coming Soon</p>
                </div>
              </div>

            </div>

            {/* GAME WINDOW */}
            <div className="d-flex justify-content-center mt-3">
              {selectedGame === "flappy" ? (
                <FlappyBlock />
              ) : selectedGame === "f1" ? (
                <GameTwo />
              ) : selectedGame === "comingSoon" ? (
                <div
                  className="d-flex align-items-center justify-content-center bg-light border rounded shadow-sm"
                  style={{ width: "400px", height: "300px" }}
                >
                  <p className="text-muted">Coming Soon</p>
                </div>
              ) : (
                <div
                  className="d-flex align-items-center justify-content-center bg-white border rounded shadow-sm"
                  style={{ width: "400px", height: "300px" }}
                >
                  <p className="text-muted">Select a game from above</p>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT SIDE — ABOUT SECTION */}
          <div className="col-12 col-lg-6 right-side-about-section">
            <h2 className="fw-bold mb-3">About Me</h2>

            <p>
              Hello! I&apos;m <strong>Tharun Chavva</strong>, a passionate frontend developer
              skilled in React.js, Next.js, JavaScript, and UI/UX design. I love building
              clean, interactive user interfaces.
            </p>

            <p>
              This section includes some mini games built using JavaScript &amp; canvas,
              showcasing creativity and event handling.
            </p>

            <ul>
              <li>2+ years of professional experience in frontend development, building scalable and maintainable web applications</li>
              <li>Specialist in React.js & Next.js with a strong understanding of component architecture and state management</li>
              <li>Enthusiast of animations, creative UI effects, and micro-interactions to enhance user engagement</li>
              <li>Exploring the intersection of AI, Data Science, and frontend development to build smarter web experiences</li>
              <li>Adept at collaborating with cross-functional teams, translating design mockups into pixel-perfect implementations</li>
              <li>Passionate about learning emerging web technologies and implementing best practices for performance, accessibility, and SEO</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
