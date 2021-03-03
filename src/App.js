import React from "react";
import "./App.css";
import ColorPallete from "./components/ColorPallete";

function App() {
  return (
    <div className="App">
      <h3 className="title">Color Pallete</h3>
      <div className="color-pallete-container">
        {[...Array(10).keys()].map((i, index) => (
          <ColorPallete key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
