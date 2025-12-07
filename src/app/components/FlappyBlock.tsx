"use client";
import { useEffect, useRef, useState, useCallback } from "react";

type Pipe = {
  x: number;
  top: number;
  bottom: number;
  scored?: boolean;
};

export default function GameApp() {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {!selectedGame ? (
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-2xl font-bold">Select a Game</h1>

          <button
            onClick={() => setSelectedGame("flappy")}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
          >
            Flappy Block
          </button>
        </div>
      ) : (
        selectedGame === "flappy" && (
          <FlappyBlock onBack={() => setSelectedGame(null)} />
        )
      )}
    </div>
  );
}

function FlappyBlock({ onBack }: { onBack: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [started, setStarted] = useState(false);
  const [score, setScore] = useState(0);

  const playerSize = 30;
  const playerX = 80;
  const pipeWidth = 60;
  const canvasWidth = 400;
  const canvasHeight = 300;
  const gravity = 0.6;

  // Mutable refs (game loop state)
  const playerYRef = useRef(150);
  const velocityRef = useRef(0);
  const pipesRef = useRef<Pipe[]>([]);
  const scoreRef = useRef(0);

  // Start game
  const startGame = useCallback(() => {
    setStarted(true);
    setScore(0);
    scoreRef.current = 0;
    playerYRef.current = 150;
    velocityRef.current = 0;
    pipesRef.current = [];
  }, []);

  // Jump (space or click)
  const jump = useCallback(() => {
    if (started) velocityRef.current = -8;
  }, [started]);

  // Keyboard space
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === " ") {
        e.preventDefault();
        jump();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [jump]);

  // Game loop
  useEffect(() => {
    if (!started) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame = 0;
    let animationId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      // Background
      const grd = ctx.createLinearGradient(0, 0, 0, canvasHeight);
      grd.addColorStop(0, "#4facfe");
      grd.addColorStop(1, "#00f2fe");
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      // Player
      ctx.fillStyle = "#ffeb3b";
      ctx.fillRect(playerX, playerYRef.current, playerSize, playerSize);

      // Pipes
      ctx.fillStyle = "#4caf50";
      pipesRef.current.forEach((p) => {
        ctx.fillRect(p.x, 0, pipeWidth, p.top);
        ctx.fillRect(p.x, p.bottom, pipeWidth, canvasHeight - p.bottom);
      });

      // Score
      ctx.fillStyle = "#fff";
      ctx.font = "20px Arial";
      ctx.fillText("Score: " + scoreRef.current, 10, 25);
    };

    const loop = () => {
      frame++;

      // Gravity + position
      velocityRef.current += gravity;
      playerYRef.current = Math.max(playerYRef.current + velocityRef.current, 0);

      // Spawn pipes every ~1 sec
      if (frame % 60 === 0) {
        const gap = 120;
        const topHeight = Math.random() * 150 + 20;
        const bottomY = topHeight + gap;

        pipesRef.current.push({
          x: canvasWidth,
          top: topHeight,
          bottom: bottomY,
          scored: false
        });
      }

      // Move pipes + remove offscreen
      pipesRef.current = pipesRef.current
        .map((p) => ({ ...p, x: p.x - 3 }))
        .filter((p) => p.x > -pipeWidth);

      // Collision detection + scoring
      for (const p of pipesRef.current) {
        const hitHorizontal =
          p.x < playerX + playerSize && p.x + pipeWidth > playerX;

        if (hitHorizontal) {
          const hitVertical =
            playerYRef.current < p.top ||
            playerYRef.current + playerSize > p.bottom;

          if (hitVertical) {
            setStarted(false);
            alert("Game Over! Score: " + scoreRef.current);
            return;
          }
        }

        // Score when passed
        if (!p.scored && p.x + pipeWidth < playerX) {
          p.scored = true;
          scoreRef.current += 1;
          setScore(scoreRef.current);
        }
      }

      draw();
      animationId = requestAnimationFrame(loop);
    };

    animationId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationId);
  }, [started]);

  return (
    <div className="flex flex-col items-center select-none">
      {!started ? (
        <div className="w-[400px] h-[300px] rounded-xl shadow-lg border flex flex-col items-center justify-center bg-blue-100">
          <h2 className="text-xl font-semibold mb-4">Flappy Block Game</h2>

          <div className="flex gap-3">
            <button
              onClick={startGame}
              className="px-5 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
            >
              Start Game
            </button>

            <button
              onClick={onBack}
              className="px-5 py-2 bg-gray-500 text-white rounded-lg shadow hover:bg-gray-600"
            >
              Back
            </button>
          </div>
        </div>
      ) : (
        <canvas
          ref={canvasRef}
          width={canvasWidth}
          height={canvasHeight}
          className="rounded-xl shadow-lg border cursor-pointer"
          onClick={jump}
        />
      )}
    </div>
  );
}
