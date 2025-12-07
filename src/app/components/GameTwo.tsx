"use client";
import { useEffect, useRef, useState } from "react";

export default function GameTwo() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    if (!gameStarted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;
    canvas.width = 400;
    canvas.height = 300;

    // Player Car
    const car = {
      x: canvas.width / 2 - 20,
      y: canvas.height - 80,
      width: 40,
      height: 70,
      speed: 5,
    };

    // Opponent cars
    let enemies: any[] = [];

    function spawnEnemy() {
      const laneX = [100, 160, 220, 280]; // Fixed lanes
      enemies.push({
        x: laneX[Math.floor(Math.random() * laneX.length)],
        y: -80,
        width: 40,
        height: 70,
        speed: 3,
      });
    }

    setInterval(spawnEnemy, 1200);

    // Road animation
    let roadOffset = 0;
    let keys: Record<string, boolean> = {};

    function update() {
      // Car movement
      if (keys["ArrowLeft"] && car.x > 80) car.x -= car.speed;
      if (keys["ArrowRight"] && car.x + car.width < canvas.width - 80)
        car.x += car.speed;

      // Move road
      roadOffset += 5;
      if (roadOffset > 40) roadOffset = 0;

      // Move enemies
      enemies.forEach((e) => (e.y += e.speed));

      // Collision detection
      enemies.forEach((e) => {
        if (
          e.x < car.x + car.width &&
          e.x + e.width > car.x &&
          e.y < car.y + car.height &&
          e.y + e.height > car.y
        ) {
          alert("Game Over!");
          window.location.reload();
        }
      });

      // Remove enemies outside
      enemies = enemies.filter((e) => e.y < canvas.height + 100);

      draw();
      requestAnimationFrame(update);
    }

    function draw() {
      // Background
      ctx.fillStyle = "#444";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Left grass
      ctx.fillStyle = "#2E8B57";
      ctx.fillRect(0, 0, 80, canvas.height);

      // Right grass
      ctx.fillStyle = "#2E8B57";
      ctx.fillRect(canvas.width - 80, 0, 80, canvas.height);

      // Road
      ctx.fillStyle = "#2c2c2c";
      ctx.fillRect(80, 0, canvas.width - 160, canvas.height);

      // Road dashed lines
      ctx.fillStyle = "white";
      for (let i = -40; i < canvas.height; i += 40) {
        ctx.fillRect(canvas.width / 2 - 5, i + roadOffset, 10, 20);
      }

      // Draw player's F1 car
      ctx.fillStyle = "red";
      ctx.fillRect(car.x, car.y, car.width, car.height);

      // Draw enemies
      enemies.forEach((e) => {
        ctx.fillStyle = "#00BFFF";
        ctx.fillRect(e.x, e.y, e.width, e.height);
      });
    }

    // Keyboard listeners
    window.addEventListener("keydown", (e) => (keys[e.key] = true));
    window.addEventListener("keyup", (e) => (keys[e.key] = false));

    update();
  }, [gameStarted]);

  return (
    <div className="d-flex flex-column align-items-center">

      {!gameStarted && (
        <button
          onClick={() => setGameStarted(true)}
          className="btn btn-primary mb-2 px-4 py-2 fw-bold"
        >
          Start Race
        </button>
      )}

      <canvas
        ref={canvasRef}
        style={{
          borderRadius: "12px",
          border: "3px solid #fff",
          background: "#000",
          boxShadow: "0px 5px 20px rgba(0,0,0,0.3)",
        }}
      ></canvas>

      <p className="mt-2 fw-bold text-light">Use ← → to move your car</p>
    </div>
  );
}
