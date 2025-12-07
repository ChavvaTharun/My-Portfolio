"use client";
import { useEffect, useRef, useState } from "react";

type Car = {
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;
};

type Enemy = Car;

export default function GameTwo() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    if (!gameStarted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 400;
    canvas.height = 300;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    const car: Car = {
      x: canvasWidth / 2 - 20,
      y: canvasHeight - 80,
      width: 40,
      height: 70,
      speed: 5,
    };

    let enemies: Enemy[] = [];

    function spawnEnemy() {
      const lanes = [100, 160, 220, 280];
      enemies.push({
        x: lanes[Math.floor(Math.random() * lanes.length)],
        y: -80,
        width: 40,
        height: 70,
        speed: 3,
      });
    }

    const enemyInterval = setInterval(spawnEnemy, 1200);

    let roadOffset = 0;
    const keysRef: Record<string, boolean> = { ArrowLeft: false, ArrowRight: false };

    // ✅ Pass ctx as parameter to draw
    function draw(ctx: CanvasRenderingContext2D) {
      // Background
      ctx.fillStyle = "#444";
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      // Grass
      ctx.fillStyle = "#2E8B57";
      ctx.fillRect(0, 0, 80, canvasHeight);
      ctx.fillRect(canvasWidth - 80, 0, 80, canvasHeight);

      // Road
      ctx.fillStyle = "#2c2c2c";
      ctx.fillRect(80, 0, canvasWidth - 160, canvasHeight);

      // Road dashed lines
      ctx.fillStyle = "#fff";
      for (let i = -40; i < canvasHeight; i += 40) {
        ctx.fillRect(canvasWidth / 2 - 5, i + roadOffset, 10, 20);
      }

      // Player
      ctx.fillStyle = "red";
      ctx.fillRect(car.x, car.y, car.width, car.height);

      // Enemies
      enemies.forEach((e) => {
        ctx.fillStyle = "#00BFFF";
        ctx.fillRect(e.x, e.y, e.width, e.height);
      });
    }

    // ✅ Pass ctx as parameter to update
    function update(ctx: CanvasRenderingContext2D) {
      // Move player
      if (keysRef.ArrowLeft && car.x > 80) car.x -= car.speed;
      if (keysRef.ArrowRight && car.x + car.width < canvasWidth - 80) car.x += car.speed;

      // Move road
      roadOffset += 5;
      if (roadOffset > 40) roadOffset = 0;

      // Move enemies
      enemies.forEach((e) => (e.y += e.speed));

      // Collision
      for (const e of enemies) {
        if (
          e.x < car.x + car.width &&
          e.x + e.width > car.x &&
          e.y < car.y + car.height &&
          e.y + e.height > car.y
        ) {
          alert("Game Over!");
          window.location.reload();
        }
      }

      enemies = enemies.filter((e) => e.y < canvasHeight + 100);

      draw(ctx);
      requestAnimationFrame(() => update(ctx));
    }

    const keyDownHandler = (e: KeyboardEvent) => {
      if (e.key in keysRef) keysRef[e.key] = true;
    };
    const keyUpHandler = (e: KeyboardEvent) => {
      if (e.key in keysRef) keysRef[e.key] = false;
    };

    window.addEventListener("keydown", keyDownHandler);
    window.addEventListener("keyup", keyUpHandler);

    // ✅ Start game loop with ctx
    update(ctx);

    return () => {
      clearInterval(enemyInterval);
      window.removeEventListener("keydown", keyDownHandler);
      window.removeEventListener("keyup", keyUpHandler);
    };
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
      />

      <p className="mt-2 fw-bold text-light">Use ← → to move your car</p>
    </div>
  );
}
