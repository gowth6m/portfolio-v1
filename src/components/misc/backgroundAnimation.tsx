"use client";

import { useState, useEffect, useRef } from "react";

const screenSizeLimit = 768;

export default function BackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [windowSize, setWindowSize] = useState({
    innerWidth: 0,
    innerHeight: 0,
  });

  // Function to handle window resize
  function handleResize() {
    setWindowSize({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
    });
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;

    const c = canvasRef.current.getContext("2d");
    if (!c) return;

    // Create boxes
    const makeBoxes = (count: number) => {
      const boxes = [];
      for (let i = 0; i < count; i++) {
        const box = {
          x: Math.random() * windowSize.innerWidth,
          y: Math.random() * windowSize.innerHeight,
          vy: -Math.random() * 0.5,
          size: Math.random() * 3,
        };
        boxes.push(box);
      }
      return boxes;
    };

    // Generate boxes based on screen size (mobile or desktop)
    const boxes = makeBoxes(windowSize.innerWidth > screenSizeLimit ? 100 : 20);

    // Draw boxes
    const draw = () => {
      c.clearRect(0, 0, windowSize.innerWidth, windowSize.innerHeight);

      for (const box of boxes) {
        c.fillStyle = "white";
        c.fillRect(box.x, box.y, box.size, box.size);

        box.y += box.vy;

        if (box.y < 0) {
          box.y = windowSize.innerHeight;
          box.vy = -Math.random() * 0.5;
          box.size = Math.random() * 3;
        }
      }

      // Loop
      requestAnimationFrame(draw);
    };

    draw();
  }, [windowSize]);

  return (
    <canvas
      id="homeCanvas"
      className="w-full h-full fixed top-0 left-0 z-[-1]"
      ref={canvasRef}
      width={windowSize.innerWidth}
      height={windowSize.innerHeight}
    ></canvas>
  );
}
