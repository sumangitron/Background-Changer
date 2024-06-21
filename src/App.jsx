import { useState } from "react";
import "./App.css";

const colorArr = [
  "Green",
  "Maroon",
  "Blue",
  "Red",
  "Pink",
  "Purple",
  "Olive",
  "Black",
];

function App() {
  const [color, setColor] = useState("white");

  return (
    <div className="container" style={{ backgroundColor: color }}>
      <div className="color-box">
        {colorArr.map((color, index) => (
          <button
            key={index}
            className="color-btn"
            style={{ backgroundColor: color }}
            onClick={(e) => setColor(e.target.innerText)}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
