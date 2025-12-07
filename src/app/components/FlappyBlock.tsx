"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function FlappyBlock() {
  const canvasRef = useRef(null);

  const [started, setStarted] = useState(false);
  const [playerY, setPlayerY] = useState(150);
  const [velocity, setVelocity] = useState(0);
  const [pipes, setPipes] = useState([]);
  const [score, setScore] = useState(0);

  const gravity = 0.6;

  // Reset values when game starts
  function startGame() {
    setStarted(true);
    setPlayerY(150);
    setVelocity(0);
    setPipes([]);
    setScore(0);
  }

  // Spawn pipes
  useEffect(() => {
    if (!started) return;

    const interval = setInterval(() => {
      const gap = 120;
      const topHeight = Math.random() * 150 + 20;
      const bottomY = topHeight + gap;

      setPipes((prev) => [
        ...prev,
        { x: 400, top: topHeight, bottom: bottomY }
      ]);
    }, 1800);

    return () => clearInterval(interval);
  }, [started]);

  // Game Loop
  useEffect(() => {
    if (!started) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function update() {
      setVelocity((v) => v + gravity);
      setPlayerY((y) => Math.max(y + velocity, 0));

      setPipes((prev) =>
        prev
          .map((p) => ({ ...p, x: p.x - 3 }))
          .filter((p) => p.x > -60)
      );

      // Score
      setPipes((prev) => {
        prev.forEach((p) => {
          if (p.x === 100) setScore((s) => s + 1);
        });
        return prev;
      });

      draw();
      checkCollision();
    }

    function checkCollision() {
      for (const p of pipes) {
        const hitLeft = p.x < 80 + 30;
        const hitRight = p.x + 60 > 80;

        if (hitLeft && hitRight) {
          if (playerY < p.top || playerY + 30 > p.bottom) {
            alert("Game Over! Score: " + score);
            startGame();
          }
        }
      }
    }

    function draw() {
      ctx.clearRect(0, 0, 400, 300);

      // Background
      const grd = ctx.createLinearGradient(0, 0, 0, 300);
      grd.addColorStop(0, "#4facfe");
      grd.addColorStop(1, "#00f2fe");
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, 400, 300);

      // Player
      ctx.fillStyle = "#ffeb3b";
      ctx.fillRect(80, playerY, 30, 30);

      // Pipes
      ctx.fillStyle = "#4caf50";
      pipes.forEach((p) => {
        ctx.fillRect(p.x, 0, 60, p.top);
        ctx.fillRect(p.x, p.bottom, 60, 300 - p.bottom);
      });

      // Score
      ctx.fillStyle = "#fff";
      ctx.font = "20px Arial";
      ctx.fillText("Score: " + score, 10, 25);
    }

    const loop = setInterval(update, 30);
    return () => clearInterval(loop);
  }, [playerY, velocity, pipes, score, started]);

  // Controls
  function jump() {
    if (started) setVelocity(-8);
  }

  useEffect(() => {
    function handleKey(e) {
      if (e.key === " ") {
        e.preventDefault();
        jump();
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [started]);

  return (
    <div className="flex flex-col items-center select-none">
      {!started ? (
        <div className="w-[400px] h-[300px] rounded-xl shadow-lg border flex flex-col items-center justify-center bg-blue-100">
          <h2 className="text-xl font-semibold mb-4">Flappy Block Game</h2>
          <button
            onClick={startGame}
            className="px-5 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
          >
            Start Game
          </button>
        </div>
      ) : (
        <canvas
          ref={canvasRef}
          width={400}
          height={300}
          className="rounded-xl shadow-lg border"
          onClick={jump}
        />
      )}
    </div>
  );
}
