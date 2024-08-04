import React, { useState } from "react";
import "./App.css"; // Assuming you have a CSS file for styling

function App() {
  const msg = ["Page1", "Page2", "Page3"];

  const [pg, setpg] = useState(1);

  function incre() {
    setpg(pg + 1);
  }
  function decre() {
    setpg(pg - 1);
  }
  return (
    <div className="App">
      <div className="numbers">
        <div className="number">1</div>
        <div className="number">2</div>
        <div className="number">3</div>
      </div>
      <div className="content">
        <div className="message">
          <p>{msg[pg - 1]}</p>
        </div>
        <div className="buttons">
          <button onClick={decre}>Pre</button>
          <button onClick={incre}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default App;
