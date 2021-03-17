import React, { useEffect, useRef } from "react";
import "./ColorPallete.css";

function ColorPallete() {
  const canvasRef = useRef(null);

  function generateRGB() {
    const colors = [];
    for (let i = 0; i < 256; i += 8) {
      for (let j = 0; j < 256; j += 8) {
        for (let k = 0; k < 256; k += 8) {
          colors.push("rgba(" + i + "," + j + "," + k + "," + 1 + ")");
        }
      }
    }
    return colors;
  }

  function draw(colors) {
    const canvas = canvasRef.current;
    let ctx = canvas.getContext("2d");
    let count = 0;
    for (let i = 0; i < 256; i++) {
      for (let j = 0; j < 128; j++) {
        ctx.fillStyle = colors[count++];
        ctx.fillRect(i + 1, j + 1, 1, 1);
      }
    }
  }

  useEffect(() => {
    let colors = generateRGB();
    draw(colors);
  });

  return <canvas ref={canvasRef} width="256" height="128"></canvas>;
}

export default ColorPallete;
