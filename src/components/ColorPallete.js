import React, { useEffect, useState } from "react";
import "./ColorPallete.css";

function ColorPallete() {
  const [id] = useState(window.performance.now());
  const rgba = () => {
    const o = Math.round,
      r = Math.random,
      s = 255;
    return (
      "rgba(" +
      o(r() * s) +
      "," +
      o(r() * s) +
      "," +
      o(r() * s) +
      "," +
      r().toFixed(1) +
      ")"
    );
  };

  const draw = () => {
    let ctx = document.getElementById(id).getContext("2d");
    for (let i = 0; i < 256; i++) {
      for (let j = 0; j < 128; j++) {
        ctx.fillStyle = rgba();
        ctx.fillRect(i + 1, j + 1, 1, 1);
      }
    }
  };

  useEffect(() => draw());

  return (
    <div className="color-pallete">
      <canvas id={id} width="256" height="128"></canvas>
    </div>
  );
}

export default ColorPallete;
