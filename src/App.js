import React from "react";
import "./App.css";
import ColorPallete from "./components/ColorPallete";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h3 className="title">Color Pallete</h3>
        <div className="color-pallete-container">
            <ColorPallete />
        </div>
      </div>
    );
  }
}

export default App;
