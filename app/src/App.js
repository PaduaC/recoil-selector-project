import React, { useState, useEffect } from "react";
import "./App.css";
import ColorSelector from "./ColorSelector";

// import SelectBox from "./SelectBox";

function App() {
  const [input, setInput] = useState("#fff");

  const handleInput = (e) => {
    setInput(e.target.value);
  };
  return <ColorSelector value={input} onChange={handleInput} />;
}

export default App;
