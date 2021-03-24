import React from "react";
import "./ColorPallete.css";

class ColorPallete extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef(null);
  }

  generateRGB() {
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

  draw(colors) {
    const canvas = this.canvasRef.current;
    let ctx = canvas.getContext("2d");
    let count = 0;
    for (let i = 0; i < 256; i++) {
      for (let j = 0; j < 128; j++) {
        ctx.fillStyle = colors[count++];
        ctx.fillRect(i + 1, j + 1, 1, 1);
      }
    }
  }

  componentDidMount() {
    let colors = this.generateRGB();
    this.draw(colors);
  }

  render() {
    return <canvas id="canvas" ref={this.canvasRef} width="256" height="128"></canvas>;
  }
}

export default ColorPallete;
